import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs';

const { PDFDocument } = PDFLib;

const translations = {
  de: {
    appName: 'PDF Studio',
    topline: 'Lokal im Browser · keine Uploads',
    title: 'Ein großes PDF aus allem.',
    subtitle: 'Ziehe Bilder und PDFs hinein, sieh die Vorschau, sortiere sie frei und lade alles als eine saubere PDF-Datei herunter.',
    clear: 'Leeren',
    uploadTitle: 'Dateien hier hineinziehen',
    uploadText: 'Oder klicken zum Auswählen. PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG und WebP werden unterstützt.',
    pdfNameLabel: 'PDF Name',
    pdfNamePlaceholder: 'Hier Namen eingeben z.B. Meine-Datei',
    ready: 'Bereit.',
    create: 'PDF herunterladen',
    files: 'Reihenfolge & Vorschau',
    sortHint: 'Zahl oben rechts ziehen oder unten eine Position eingeben. X löscht eine Datei.',
    noFiles: 'Noch keine Dateien ausgewählt. Ziehe Dateien oben hinein.',
    count: n => `${n} Datei${n === 1 ? '' : 'en'}`,
    chooseFirst: 'Bitte zuerst Dateien auswählen.',
    creating: 'PDF wird erstellt ...',
    done: 'Fertig! PDF wurde heruntergeladen.',
    error: 'Fehler beim Erstellen des PDFs.',
    remove: 'Entfernen',
    next: 'Weiter',
    share: 'PDF teilen',
    shareUnsupported: 'Teilen wird von diesem Browser nicht unterstützt.',
    pdfPreview: 'PDF-Seite 1',
    imagePreview: 'Bildvorschau',
    docPreview: 'Dokument-Vorschau'
  },
  en: {
    appName: 'PDF Studio',
    topline: 'Local in your browser · no uploads',
    title: 'One big PDF from everything.',
    subtitle: 'Drop images and PDFs, see previews, arrange freely, and download one clean PDF file.',
    clear: 'Clear',
    uploadTitle: 'Drop files here',
    uploadText: 'Or click to select. PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG and WebP are supported.',
    pdfNameLabel: 'PDF name',
    pdfNamePlaceholder: 'Enter name here e.g. My-File',
    ready: 'Ready.',
    create: 'Download PDF',
    files: 'Order & Preview',
    sortHint: 'Drag the number in the top-right corner or enter a position below. X removes a file.',
    noFiles: 'No files selected yet. Drop files above.',
    count: n => `${n} file${n === 1 ? '' : 's'}`,
    chooseFirst: 'Please select files first.',
    creating: 'Creating PDF ...',
    done: 'Done! PDF was downloaded.',
    error: 'Error while creating the PDF.',
    remove: 'Remove',
    next: 'Next',
    share: 'Share PDF',
    shareUnsupported: 'Sharing is not supported by this browser.',
    pdfPreview: 'PDF page 1',
    imagePreview: 'Image preview',
    docPreview: 'Document preview'
  }
};

let selectedItems = [];
let currentLang = getSystemLanguage();
let dragState = null;
let lastPdfFile = null;

const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const statusBox = document.getElementById('status');
const dropZone = document.getElementById('dropZone');
const createBtn = document.getElementById('createBtn');
const clearBtn = document.getElementById('clearBtn');
const languageSelect = document.getElementById('languageSelect');
const fileCount = document.getElementById('fileCount');
const pdfNameInput = document.getElementById('pdfName');
const shareBtn = document.getElementById('shareBtn');

languageSelect.value = 'auto';
applyLanguage(currentLang);
injectCleanStyles();
hideShareButton();
renderFileList();

fileInput.addEventListener('change', event => {
  addFiles(event.target.files);
  fileInput.value = '';
});

createBtn.addEventListener('click', () => createPdf(false));
if (shareBtn) shareBtn.addEventListener('click', shareLastPdf);

clearBtn.addEventListener('click', () => {
  clearAllItems();
  setStatus(t('ready'));
  renderFileList();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value === 'auto' ? getSystemLanguage() : languageSelect.value;
  applyLanguage(currentLang);
  setStatus(t('ready'));
  renderFileList();
});

document.addEventListener('dragover', event => event.preventDefault());
document.addEventListener('drop', event => event.preventDefault());

['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, event => {
    event.preventDefault();
    dropZone.classList.add('dragover');
  });
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, event => {
    event.preventDefault();
    dropZone.classList.remove('dragover');
  });
});

dropZone.addEventListener('drop', event => addFiles(event.dataTransfer.files));

fileList.addEventListener('click', event => {
  const removeButton = event.target.closest('[data-action="remove"]');
  if (!removeButton) return;
  removeFile(Number(removeButton.dataset.index));
});

fileList.addEventListener('change', event => {
  const input = event.target.closest('.position-input');
  if (!input) return;

  const fromIndex = Number(input.dataset.index);
  let toPosition = Number(input.value);

  if (!Number.isFinite(toPosition)) {
    renderFileList();
    return;
  }

  toPosition = Math.max(1, Math.min(selectedItems.length, Math.round(toPosition)));
  reorderFiles(fromIndex, toPosition - 1);
});

function getSystemLanguage() {
  const lang = (navigator.language || 'de').slice(0, 2).toLowerCase();
  return translations[lang] ? lang : 'en';
}

function t(key, value) {
  const source = translations[currentLang] || translations.en;
  const item = source[key] || translations.en[key] || key;
  return typeof item === 'function' ? item(value) : item;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  updateCount();
}

async function addFiles(files) {
  const allowed = Array.from(files).filter(file =>
    file.type === 'application/pdf' || file.type.startsWith('image/') || isDocumentFile(file)
  );

  const newItems = allowed.map(file => ({
    id: crypto.randomUUID(),
    file,
    previewUrl: '',
    previewFailed: false,
    previewType: file.type === 'application/pdf' ? 'pdf' : isDocumentFile(file) ? 'doc' : 'image',
    deleted: false
  }));

  selectedItems = [...selectedItems, ...newItems];
  lastPdfFile = null;
  hideShareButton();
  renderFileList();

  for (const item of newItems) {
    await createPreview(item, item.id);
  }
}

async function createPreview(item, requestId) {
  try {
    if (!isItemActive(requestId)) return;

    if (item.file.type.startsWith('image/')) {
      item.previewUrl = URL.createObjectURL(item.file);
      renderFileList();
      return;
    }

    if (item.file.type === 'application/pdf') {
      item.previewUrl = await createPdfPreview(item.file);
      if (!isItemActive(requestId)) return;
      renderFileList();
      return;
    }

    if (isDocumentFile(item.file)) {
      item.previewUrl = await createDocumentPreview(item.file);
      if (!isItemActive(requestId)) return;
      renderFileList();
    }
  } catch (error) {
    console.error('Preview error:', error);
    item.previewFailed = true;
    renderFileList();
  }
}

async function createPdfPreview(file) {
  const bytes = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  const page = await pdf.getPage(1);
  const baseViewport = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: 420 / baseViewport.width });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: context, viewport }).promise;
  const url = canvas.toDataURL('image/png');
  if (pdf.destroy) await pdf.destroy();
  return url;
}

function renderFileList() {
  selectedItems = selectedItems.filter(item => item && !item.deleted && item.file);
  fileList.innerHTML = '';
  updateCount();

  if (selectedItems.length === 0) {
    fileList.innerHTML = `<div class="empty">${t('noFiles')}</div>`;
    return;
  }

  selectedItems.forEach((item, index) => {
    const file = item.file;
    const badge = item.previewType === 'pdf' ? 'PDF' : item.previewType === 'doc' ? getDocumentBadge(file) : 'IMG';
    const previewLabel = item.previewType === 'pdf' ? t('pdfPreview') : item.previewType === 'doc' ? t('docPreview') : t('imagePreview');

    const card = document.createElement('article');
    card.className = 'file-card';
    card.dataset.index = index;

    card.innerHTML = `
      <button class="remove-chip" type="button" data-action="remove" data-index="${index}" aria-label="${t('remove')}">×</button>
      <button class="order-chip" type="button" data-index="${index}" aria-label="Move file">${index + 1}</button>
      <div class="preview" title="${previewLabel}">
        ${item.previewUrl
          ? `<img src="${item.previewUrl}" alt="${previewLabel}">`
          : `<div class="preview-placeholder">${item.previewFailed ? badge : '…'}</div>`}
        <div class="preview-badge">${badge}</div>
      </div>
      <div class="file-title" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</div>
      <label class="position-jump">
        <span>Pos</span>
        <input class="position-input" type="number" min="1" max="${selectedItems.length}" value="${index + 1}" data-index="${index}">
      </label>
    `;

    setupOrderDrag(card.querySelector('.order-chip'), card, index);
    fileList.appendChild(card);
  });
}

function setupOrderDrag(chip, card, index) {
  chip.addEventListener('pointerdown', event => {
    event.preventDefault();
    event.stopPropagation();
    chip.setPointerCapture(event.pointerId);
    beginDrag(card, index, event.clientX, event.clientY);
  });

  chip.addEventListener('pointermove', event => {
    if (!dragState) return;
    event.preventDefault();
    moveDrag(event.clientX, event.clientY);
  });

  chip.addEventListener('pointerup', event => {
    if (!dragState) return;
    event.preventDefault();
    finishDrag();
  });

  chip.addEventListener('pointercancel', cancelDrag);
}

function beginDrag(card, index, x, y) {
  cancelDrag();

  const rect = card.getBoundingClientRect();
  const ghost = card.cloneNode(true);
  ghost.classList.add('drag-ghost');
  ghost.style.width = `${rect.width}px`;
  ghost.style.left = `${x - rect.width / 2}px`;
  ghost.style.top = `${y - 44}px`;

  const placeholder = document.createElement('div');
  placeholder.className = 'drop-placeholder';
  placeholder.style.width = `${rect.width}px`;
  placeholder.style.height = `${rect.height}px`;

  card.classList.add('drag-source');
  document.body.appendChild(ghost);
  fileList.insertBefore(placeholder, card.nextSibling);

  dragState = { fromIndex: index, targetIndex: index, ghost, placeholder, source: card };
  if (navigator.vibrate) navigator.vibrate(20);
}

function moveDrag(x, y) {
  if (!dragState) return;

  dragState.ghost.style.left = `${x - dragState.ghost.offsetWidth / 2}px`;
  dragState.ghost.style.top = `${y - 50}px`;

  const cards = [...fileList.querySelectorAll('.file-card:not(.drag-source)')];
  let inserted = false;

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const before = y < rect.top + rect.height / 2 || (y < rect.bottom && x < rect.left + rect.width / 2);
    if (before) {
      fileList.insertBefore(dragState.placeholder, card);
      inserted = true;
      break;
    }
  }

  if (!inserted) fileList.appendChild(dragState.placeholder);

  const children = [...fileList.children].filter(el => !el.classList.contains('drag-source'));
  dragState.targetIndex = Math.max(0, Math.min(selectedItems.length - 1, children.indexOf(dragState.placeholder)));
}

function finishDrag() {
  if (!dragState) return;
  const fromIndex = dragState.fromIndex;
  const toIndex = dragState.targetIndex;
  cleanupDrag();
  reorderFiles(fromIndex, toIndex);
}

function cancelDrag() {
  cleanupDrag();
}

function cleanupDrag() {
  if (!dragState) return;
  dragState.ghost.remove();
  dragState.placeholder.remove();
  dragState.source.classList.remove('drag-source');
  dragState = null;
}

function reorderFiles(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return;
  const currentItems = selectedItems.filter(item => item && !item.deleted);
  const [item] = currentItems.splice(fromIndex, 1);
  if (!item) return;
  currentItems.splice(toIndex, 0, item);
  selectedItems = currentItems;
  lastPdfFile = null;
  hideShareButton();
  renderFileList();
}

function removeFile(index) {
  const item = selectedItems[index];
  if (!item) return;
  item.deleted = true;
  revokePreview(item);
  selectedItems = selectedItems.filter((_, itemIndex) => itemIndex !== index);
  lastPdfFile = null;
  hideShareButton();
  renderFileList();
}

function clearAllItems() {
  selectedItems.forEach(item => {
    item.deleted = true;
    revokePreview(item);
  });
  selectedItems = [];
  lastPdfFile = null;
  hideShareButton();
}

function revokePreview(item) {
  if (item?.previewUrl?.startsWith('blob:')) URL.revokeObjectURL(item.previewUrl);
  if (item) item.previewUrl = '';
}

function isItemActive(id) {
  return selectedItems.some(item => item.id === id && !item.deleted);
}

function updateCount() {
  fileCount.textContent = t('count', selectedItems.length);
}

function setStatus(message) {
  statusBox.textContent = message;
}

function showShareButton() {
  if (!shareBtn) return;
  shareBtn.classList.add('is-visible');
  shareBtn.disabled = false;
  shareBtn.removeAttribute('disabled');
}

function hideShareButton() {
  // Der Teilen-Button soll von Anfang an sichtbar und klickbar bleiben.
  showShareButton();
}

async function shareLastPdf() {
  if (lastPdfFile) {
    await shareFile(lastPdfFile);
    return;
  }

  await createPdf(true);
}

async function shareFile(file) {
  if (!file) return;

  if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
    await navigator.share({
      title: file.name,
      text: 'PDF created with PDF Studio',
      files: [file]
    });
    setStatus(t('done'));
  } else {
    setStatus(t('shareUnsupported'));
  }
}

async function createPdf(shareAfterCreate = false) {
  const itemsToMerge = selectedItems.filter(item => item && !item.deleted && item.file);
  if (itemsToMerge.length === 0) {
    setStatus(t('chooseFirst'));
    return;
  }

  setStatus(t('creating'));
  createBtn.disabled = true;

  try {
    const outputPdf = await PDFDocument.create();

    for (const item of itemsToMerge) {
      if (!isItemActive(item.id)) continue;
      const file = item.file;
      const bytes = await file.arrayBuffer();

      if (file.type === 'application/pdf') {
        const inputPdf = await PDFDocument.load(bytes);
        const pages = await outputPdf.copyPages(inputPdf, inputPdf.getPageIndices());
        pages.forEach(page => outputPdf.addPage(page));
      } else if (file.type.startsWith('image/')) {
        await addImagePage(outputPdf, file, bytes);
      } else if (isDocumentFile(file)) {
        await addDocumentPages(outputPdf, file);
      }
    }

    const pdfBytes = await outputPdf.save();
    const finalFileName = getFinalPdfFileName();
    lastPdfFile = new File([pdfBytes], finalFileName, { type: 'application/pdf' });

    showShareButton();

    if (shareAfterCreate) {
      await shareFile(lastPdfFile);
    } else {
      downloadPdf(pdfBytes, finalFileName);
      setStatus(t('done'));
    }
  } catch (error) {
    console.error(error);
    setStatus(t('error'));
  } finally {
    createBtn.disabled = false;
    showShareButton();
  }
}

function getFinalPdfFileName() {
  const rawName = pdfNameInput?.value?.trim() || 'merged-pdf';
  const safeName = rawName
    .replace(/\.pdf$/i, '')
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

  return `${safeName || 'merged-pdf'}.pdf`;
}

function isDocumentFile(file) {
  const name = file.name.toLowerCase();
  return ['.doc', '.docx', '.txt', '.rtf', '.odt', '.pptx', '.xlsx'].some(ext => name.endsWith(ext));
}

function getDocumentBadge(file) {
  return file.name.split('.').pop()?.toUpperCase() || 'DOC';
}

async function createDocumentPreview(file) {
  const html = await documentToHtml(file);
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:-10000px;top:0;width:794px;min-height:1123px;background:white;color:#111;padding:56px;font-family:Arial,sans-serif;font-size:18px;line-height:1.5;';
  box.innerHTML = html;
  document.body.appendChild(box);
  const canvas = await html2canvas(box, { scale: 0.35, backgroundColor: '#ffffff' });
  document.body.removeChild(box);
  return canvas.toDataURL('image/png');
}

async function addDocumentPages(pdf, file) {
  const html = await documentToHtml(file);
  const pageWidth = 595.28;
  const pageHeight = 841.89;

  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:-10000px;top:0;width:794px;background:white;color:#111;padding:56px;font-family:Arial,sans-serif;font-size:18px;line-height:1.5;';
  box.innerHTML = html;
  document.body.appendChild(box);

  const fullCanvas = await html2canvas(box, { scale: 2, backgroundColor: '#ffffff' });
  document.body.removeChild(box);

  const sliceHeight = Math.floor(fullCanvas.width * (pageHeight / pageWidth));

  for (let y = 0; y < fullCanvas.height; y += sliceHeight) {
    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = fullCanvas.width;
    sliceCanvas.height = Math.min(sliceHeight, fullCanvas.height - y);

    const ctx = sliceCanvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
    ctx.drawImage(fullCanvas, 0, y, sliceCanvas.width, sliceCanvas.height, 0, 0, sliceCanvas.width, sliceCanvas.height);

    const imageBytes = await dataUrlToArrayBuffer(sliceCanvas.toDataURL('image/jpeg', 0.95));
    const image = await pdf.embedJpg(imageBytes);
    const page = pdf.addPage([pageWidth, pageHeight]);
    const scale = Math.min(pageWidth / image.width, pageHeight / image.height);
    const width = image.width * scale;
    const height = image.height * scale;
    page.drawImage(image, { x: (pageWidth - width) / 2, y: pageHeight - height, width, height });
  }
}

async function documentToHtml(file) {
  const name = file.name.toLowerCase();

  if (name.endsWith('.txt')) {
    const text = await file.text();
    return `<pre style="white-space:pre-wrap;font-family:Arial,sans-serif;">${escapeHtml(text)}</pre>`;
  }

  if (name.endsWith('.docx')) {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    return result.value || '<p>DOCX</p>';
  }

  return `<h1>${escapeHtml(file.name)}</h1><p>Dokument wurde importiert.</p>`;
}

async function addImagePage(pdf, file, bytes) {
  let image;
  if (file.type === 'image/png') image = await pdf.embedPng(bytes);
  else image = await pdf.embedJpg(await convertImageToJpgBytes(file));

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 28;
  const page = pdf.addPage([pageWidth, pageHeight]);
  const scale = Math.min((pageWidth - margin * 2) / image.width, (pageHeight - margin * 2) / image.height);
  const finalWidth = image.width * scale;
  const finalHeight = image.height * scale;

  page.drawImage(image, {
    x: (pageWidth - finalWidth) / 2,
    y: (pageHeight - finalHeight) / 2,
    width: finalWidth,
    height: finalHeight
  });
}

function convertImageToJpgBytes(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (!blob) reject(new Error('Image conversion failed'));
          else blob.arrayBuffer().then(resolve);
        }, 'image/jpeg', 0.95);
      };
      img.onerror = reject;
      img.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function dataUrlToArrayBuffer(dataUrl) {
  const res = await fetch(dataUrl);
  return await res.arrayBuffer();
}

function downloadPdf(bytes, filename) {
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function injectCleanStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #nextBtn { align-items: center; justify-content: center; }
    #finalActions { margin-top: 16px; display: none; justify-content: flex-end; }
    #shareBtn { align-items: center; justify-content: center; display: block !important; }

    #fileList {
      display: grid !important;
      grid-template-columns: repeat(auto-fill, 170px) !important;
      gap: 16px !important;
      align-items: start !important;
      justify-content: start !important;
      min-height: 180px !important;
    }

    .file-card {
      position: relative !important;
      display: grid !important;
      gap: 9px !important;
      width: 170px !important;
      min-width: 170px !important;
      max-width: 170px !important;
      padding: 10px !important;
      border-radius: 22px !important;
      background: white !important;
      border: 1px solid var(--border) !important;
      box-shadow: 0 10px 24px rgba(16, 24, 40, 0.06) !important;
      box-sizing: border-box !important;
      overflow: visible !important;
    }

    .preview {
      width: 150px !important;
      height: 210px !important;
      border-radius: 17px !important;
      overflow: hidden !important;
      border: 1px solid var(--border) !important;
      background: #f8fafc !important;
      display: grid !important;
      place-items: center !important;
    }

    .preview img,
    .preview canvas {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      background: #f8fafc !important;
      pointer-events: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
    }

    .preview-placeholder {
      display: grid !important;
      place-items: center !important;
      width: 100% !important;
      height: 100% !important;
      color: #64748b !important;
      font-weight: 900 !important;
      font-size: 26px !important;
    }

    .preview-badge {
      position: absolute !important;
      left: 8px !important;
      top: 8px !important;
      padding: 5px 8px !important;
      border-radius: 999px !important;
      background: rgba(17,24,39,0.78) !important;
      color: white !important;
      font-size: 11px !important;
      font-weight: 900 !important;
      z-index: 3 !important;
    }

    .order-chip,
    .remove-chip {
      position: absolute !important;
      z-index: 6 !important;
      border: none !important;
      display: grid !important;
      place-items: center !important;
      box-shadow: 0 10px 20px rgba(16,24,40,0.18) !important;
      user-select: none !important;
    }

    .order-chip {
      right: 8px !important;
      top: 8px !important;
      width: 38px !important;
      height: 38px !important;
      border-radius: 999px !important;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
      color: white !important;
      font-weight: 950 !important;
      font-size: 18px !important;
      cursor: grab !important;
      touch-action: none !important;
    }

    .remove-chip {
      left: 8px !important;
      top: 8px !important;
      width: 28px !important;
      height: 28px !important;
      border-radius: 999px !important;
      background: rgba(239,68,68,0.96) !important;
      color: white !important;
      font-size: 20px !important;
      cursor: pointer !important;
    }

    .file-title {
      font-weight: 850 !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      text-overflow: ellipsis !important;
      font-size: 14px !important;
      padding: 0 3px !important;
      color: var(--text) !important;
    }

    .position-jump {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 8px !important;
      padding: 6px 8px !important;
      border-radius: 12px !important;
      background: #f8fafc !important;
      border: 1px solid var(--border) !important;
      color: var(--muted) !important;
      font-size: 12px !important;
      font-weight: 800 !important;
    }

    .position-input {
      display: block !important;
      width: 48px !important;
      border: none !important;
      outline: none !important;
      background: white !important;
      border-radius: 9px !important;
      padding: 5px 4px !important;
      text-align: center !important;
      font-weight: 900 !important;
      color: var(--text) !important;
    }

    .position-input:focus { box-shadow: 0 0 0 3px rgba(99,91,255,0.16) !important; }

    .file-tools,
    .file-buttons,
    .btn-move,
    .btn-soft[data-action="up"],
    .btn-soft[data-action="down"],
    .btn-danger[data-action="remove"] { display: none !important; }

    .drag-source { opacity: 0.22 !important; }
    .drag-ghost {
      position: fixed !important;
      z-index: 9999 !important;
      pointer-events: none !important;
      opacity: 0.74 !important;
      transform: scale(1.04) rotate(1deg) !important;
      box-shadow: 0 26px 70px rgba(16,24,40,0.30) !important;
    }

    .drop-placeholder {
      border: 2px dashed var(--primary) !important;
      border-radius: 22px !important;
      background: rgba(99,91,255,0.10) !important;
      box-shadow: inset 0 0 0 4px rgba(99,91,255,0.08) !important;
    }

    @media (max-width: 820px) {
      #nextBtn, #shareBtn { width: 100%; }
      #finalActions { justify-content: stretch; }
      .actions { gap: 8px !important; }

      #fileList {
        grid-template-columns: repeat(auto-fill, 145px) !important;
        gap: 12px !important;
      }

      .file-card {
        width: 145px !important;
        min-width: 145px !important;
        max-width: 145px !important;
        padding: 9px !important;
      }

      .preview {
        width: 127px !important;
        height: 178px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[char]));
}
