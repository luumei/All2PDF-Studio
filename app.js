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
    ready: 'Bereit.',
    create: 'PDF erstellen',
    files: 'Reihenfolge & Vorschau',
    sortHint: 'Zahl oben rechts ziehen, um die Reihenfolge zu ändern. X löscht eine Datei.',
    noFiles: 'Noch keine Dateien ausgewählt. Ziehe Dateien oben hinein.',
    count: n => `${n} Datei${n === 1 ? '' : 'en'}`,
    chooseFirst: 'Bitte zuerst Dateien auswählen.',
    creating: 'PDF wird erstellt ...',
    done: 'Fertig! PDF wurde heruntergeladen.',
    error: 'Fehler beim Erstellen des PDFs.',
    remove: 'Entfernen',
    previewLoading: 'Vorschau lädt',
    pdfPreview: 'PDF-Seite 1',
    imagePreview: 'Bildvorschau',
    docPreview: 'Dokument-Vorschau',
    next: 'Weiter',
    share: 'PDF teilen',
    shareUnsupported: 'Teilen wird von diesem Browser nicht unterstützt.'
  },
  en: {
    appName: 'PDF Studio',
    topline: 'Local in your browser · no uploads',
    title: 'One big PDF from everything.',
    subtitle: 'Drop images and PDFs, see previews, arrange freely, and download one clean PDF file.',
    clear: 'Clear',
    uploadTitle: 'Drop files here',
    uploadText: 'Or click to select. PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG and WebP are supported.',
    ready: 'Ready.',
    create: 'Create PDF',
    files: 'Order & Preview',
    sortHint: 'Drag the number in the top-right corner to reorder. X removes a file.',
    noFiles: 'No files selected yet. Drop files above.',
    count: n => `${n} file${n === 1 ? '' : 's'}`,
    chooseFirst: 'Please select files first.',
    creating: 'Creating PDF ...',
    done: 'Done! PDF was downloaded.',
    error: 'Error while creating the PDF.',
    remove: 'Remove',
    previewLoading: 'Preview loading',
    pdfPreview: 'PDF page 1',
    imagePreview: 'Image preview',
    docPreview: 'Document preview',
    next: 'Next',
    share: 'Share PDF',
    shareUnsupported: 'Sharing is not supported by this browser.'
  },
  fr: {
    appName: 'PDF Studio',
    topline: 'Local dans le navigateur · aucun envoi',
    title: 'Un grand PDF avec tout.',
    subtitle: 'Déposez images et PDF, voyez les aperçus, organisez librement et téléchargez un seul fichier propre.',
    clear: 'Vider',
    uploadTitle: 'Déposez les fichiers ici',
    uploadText: 'Ou cliquez pour sélectionner. PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG et WebP sont pris en charge.',
    ready: 'Prêt.',
    create: 'Créer le PDF',
    files: 'Ordre & aperçu',
    sortHint: 'Faites glisser le numéro en haut à droite pour changer l’ordre. X supprime un fichier.',
    noFiles: 'Aucun fichier sélectionné. Déposez des fichiers ci-dessus.',
    count: n => `${n} fichier${n === 1 ? '' : 's'}`,
    chooseFirst: 'Veuillez d’abord sélectionner des fichiers.',
    creating: 'Création du PDF ...',
    done: 'Terminé ! Le PDF a été téléchargé.',
    error: 'Erreur lors de la création du PDF.',
    remove: 'Supprimer',
    previewLoading: 'Aperçu en cours',
    pdfPreview: 'PDF page 1',
    imagePreview: 'Aperçu image',
    docPreview: 'Aperçu document',
    next: 'Suivant',
    share: 'Partager le PDF',
    shareUnsupported: 'Le partage n’est pas pris en charge par ce navigateur.'
  },
  it: {
    appName: 'PDF Studio',
    topline: 'Locale nel browser · nessun upload',
    title: 'Un grande PDF da tutto.',
    subtitle: 'Trascina immagini e PDF, vedi le anteprime, ordinali liberamente e scarica un unico file pulito.',
    clear: 'Svuota',
    uploadTitle: 'Trascina i file qui',
    uploadText: 'Oppure clicca per selezionare. PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG e WebP sono supportati.',
    ready: 'Pronto.',
    create: 'Crea PDF',
    files: 'Ordine e anteprima',
    sortHint: 'Trascina il numero in alto a destra per riordinare. X rimuove un file.',
    noFiles: 'Nessun file selezionato. Trascina i file sopra.',
    count: n => `${n} file`,
    chooseFirst: 'Seleziona prima dei file.',
    creating: 'Creazione PDF ...',
    done: 'Fatto! Il PDF è stato scaricato.',
    error: 'Errore durante la creazione del PDF.',
    remove: 'Rimuovi',
    previewLoading: 'Anteprima in caricamento',
    pdfPreview: 'PDF pagina 1',
    imagePreview: 'Anteprima immagine',
    docPreview: 'Anteprima documento',
    next: 'Avanti',
    share: 'Condividi PDF',
    shareUnsupported: 'La condivisione non è supportata da questo browser.'
  },
  es: {
    appName: 'PDF Studio',
    topline: 'Local en el navegador · sin subidas',
    title: 'Un gran PDF con todo.',
    subtitle: 'Suelta imágenes y PDFs, mira las vistas previas, ordénalos libremente y descarga un solo archivo limpio.',
    clear: 'Vaciar',
    uploadTitle: 'Suelta archivos aquí',
    uploadText: 'O haz clic para seleccionar. Se admiten PDF, DOC, DOCX, TXT, RTF, ODT, PPTX, XLSX, PNG, JPG, JPEG y WebP.',
    ready: 'Listo.',
    create: 'Crear PDF',
    files: 'Orden y vista previa',
    sortHint: 'Arrastra el número arriba a la derecha para ordenar. X elimina un archivo.',
    noFiles: 'Todavía no hay archivos seleccionados. Suelta archivos arriba.',
    count: n => `${n} archivo${n === 1 ? '' : 's'}`,
    chooseFirst: 'Selecciona archivos primero.',
    creating: 'Creando PDF ...',
    done: '¡Listo! El PDF se ha descargado.',
    error: 'Error al crear el PDF.',
    remove: 'Eliminar',
    previewLoading: 'Cargando vista',
    pdfPreview: 'PDF página 1',
    imagePreview: 'Vista de imagen',
    docPreview: 'Vista de documento',
    next: 'Siguiente',
    share: 'Compartir PDF',
    shareUnsupported: 'Este navegador no admite compartir.'
  }
};

let selectedItems = [];
let currentLang = getSystemLanguage();
let dragState = null;
let lastPdfFile = null;
let nextBtn = null;
let shareBtn = null;
let finalActions = null;

const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const statusBox = document.getElementById('status');
const dropZone = document.getElementById('dropZone');
const createBtn = document.getElementById('createBtn');
const clearBtn = document.getElementById('clearBtn');
const languageSelect = document.getElementById('languageSelect');
const fileCount = document.getElementById('fileCount');

languageSelect.value = 'auto';
applyLanguage(currentLang);
injectCleanGalleryStyles();
setupActionButtons();
renderFileList();

fileInput.addEventListener('change', event => {
  addFiles(event.target.files);
  fileInput.value = '';
});

createBtn.addEventListener('click', createPdf);

clearBtn.addEventListener('click', () => {
  clearAllItems();
  setStatus(t('ready'));
  renderFileList();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value === 'auto' ? getSystemLanguage() : languageSelect.value;
  applyLanguage(currentLang);
  if (nextBtn) nextBtn.textContent = t('next');
  if (shareBtn) shareBtn.textContent = t('share');
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
  const item = translations[currentLang][key] || translations.en[key];
  return typeof item === 'function' ? item(value) : item;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
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
  renderFileList();

  for (const item of newItems) {
    await createPreview(item, item.id);
  }
}

async function createPreview(item, requestId = item.id) {
  try {
    if (!isItemActive(requestId)) return;

    if (item.file.type.startsWith('image/')) {
      item.previewUrl = URL.createObjectURL(item.file);
      renderFileList();
      return;
    }

    if (item.file.type === 'application/pdf') {
      const preview = await createPdfPreview(item.file);
      if (!isItemActive(requestId)) return;
      item.previewUrl = preview;
      renderFileList();
      return;
    }

    if (isDocumentFile(item.file)) {
      const preview = await createDocumentPreview(item.file);
      if (!isItemActive(requestId)) return;
      item.previewUrl = preview;
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
  const loadingTask = pdfjsLib.getDocument({ data: bytes });
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);

  const baseViewport = page.getViewport({ scale: 1 });
  const scale = 420 / baseViewport.width;
  const viewport = page.getViewport({ scale });

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
    card.dataset.id = item.id;

    card.innerHTML = `
      <button class="remove-chip" data-action="remove" data-index="${index}" aria-label="${t('remove')}">×</button>
      <button class="order-chip" data-index="${index}" aria-label="Move file">${index + 1}</button>
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

    setupOrderChipDrag(card.querySelector('.order-chip'), card, index);
    fileList.appendChild(card);
  });
}

function setupOrderChipDrag(chip, card, index) {
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
  ghost.style.top = `${y - 42}px`;

  const placeholder = document.createElement('div');
  placeholder.className = 'drop-placeholder';
  placeholder.style.width = `${rect.width}px`;
  placeholder.style.height = `${rect.height}px`;

  card.classList.add('drag-source');
  document.body.appendChild(ghost);
  fileList.insertBefore(placeholder, card.nextSibling);

  dragState = {
    fromIndex: index,
    targetIndex: index,
    ghost,
    placeholder,
    source: card
  };

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
  renderFileList();
}

function removeFile(index) {
  const item = selectedItems[index];
  if (!item) return;
  item.deleted = true;
  revokePreview(item);
  selectedItems = selectedItems.filter((_, itemIndex) => itemIndex !== index);
  renderFileList();
}

function clearAllItems() {
  selectedItems.forEach(item => {
    item.deleted = true;
    revokePreview(item);
  });
  selectedItems = [];
  lastPdfFile = null;
  if (finalActions) finalActions.style.display = 'none';
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

function setupActionButtons() {
  nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-soft';
  nextBtn.id = 'nextBtn';
  nextBtn.type = 'button';
  nextBtn.textContent = t('next');
  nextBtn.addEventListener('click', () => {
    document.querySelector('.list-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  createBtn.insertAdjacentElement('beforebegin', nextBtn);

  finalActions = document.createElement('div');
  finalActions.id = 'finalActions';
  finalActions.style.display = 'none';

  shareBtn = document.createElement('button');
  shareBtn.className = 'btn btn-primary';
  shareBtn.id = 'shareBtn';
  shareBtn.type = 'button';
  shareBtn.textContent = t('share');
  shareBtn.addEventListener('click', shareLastPdf);

  finalActions.appendChild(shareBtn);
  fileList.insertAdjacentElement('afterend', finalActions);
}

async function shareLastPdf() {
  if (!lastPdfFile) return;

  if (navigator.canShare && navigator.canShare({ files: [lastPdfFile] }) && navigator.share) {
    await navigator.share({
      title: 'All2PDF Studio',
      text: 'PDF created with All2PDF Studio',
      files: [lastPdfFile]
    });
  } else {
    setStatus(t('shareUnsupported'));
  }
}

async function createPdf() {
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
    lastPdfFile = new File([pdfBytes], 'merged-pdf.pdf', { type: 'application/pdf' });

    if (finalActions && navigator.canShare && navigator.canShare({ files: [lastPdfFile] })) {
      finalActions.style.display = 'flex';
    }

    downloadPdf(pdfBytes, 'merged-pdf.pdf');
    setStatus(t('done'));
  } catch (error) {
    console.error(error);
    setStatus(t('error'));
  } finally {
    createBtn.disabled = false;
  }
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
  const previewBox = document.createElement('div');
  previewBox.style.cssText = 'position:fixed;left:-10000px;top:0;width:794px;min-height:1123px;background:white;color:#111;padding:56px;font-family:Arial,sans-serif;font-size:18px;line-height:1.5;';
  previewBox.innerHTML = html;
  document.body.appendChild(previewBox);
  const canvas = await html2canvas(previewBox, { scale: 0.35, backgroundColor: '#ffffff' });
  document.body.removeChild(previewBox);
  return canvas.toDataURL('image/png');
}

async function addDocumentPages(pdf, file) {
  const html = await documentToHtml(file);
  const pageWidth = 595.28;
  const pageHeight = 841.89;

  const pageElement = document.createElement('div');
  pageElement.style.cssText = 'position:fixed;left:-10000px;top:0;width:794px;background:white;color:#111;padding:56px;font-family:Arial,sans-serif;font-size:18px;line-height:1.5;';
  pageElement.innerHTML = html;
  document.body.appendChild(pageElement);

  const fullCanvas = await html2canvas(pageElement, { scale: 2, backgroundColor: '#ffffff' });
  document.body.removeChild(pageElement);

  const a4Ratio = pageHeight / pageWidth;
  const sliceHeight = Math.floor(fullCanvas.width * a4Ratio);

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

  if (name.endsWith('.doc')) {
    return `<h1>DOC Dokument</h1><p>${escapeHtml(file.name)}</p><p>Alte DOC-Dateien haben eingeschränkte Browser-Unterstützung.</p>`;
  }

  if (name.endsWith('.rtf')) {
    const text = await file.text();
    return `<h1>RTF Dokument</h1><pre style="white-space:pre-wrap;">${escapeHtml(text.slice(0, 50000))}</pre>`;
  }

  if (name.endsWith('.odt')) {
    return `<h1>ODT Dokument</h1><p>${escapeHtml(file.name)}</p><p>ODT wird als einfache Vorschau dargestellt.</p>`;
  }

  if (name.endsWith('.pptx')) {
    return `<h1>PPTX Präsentation</h1><p>${escapeHtml(file.name)}</p><p>Präsentation wurde importiert.</p>`;
  }

  if (name.endsWith('.xlsx')) {
    return `<h1>XLSX Tabelle</h1><p>${escapeHtml(file.name)}</p><p>Tabelle wurde importiert.</p>`;
  }

  return `<h1>Dokument</h1><p>${escapeHtml(file.name)}</p>`;
}

async function addImagePage(pdf, file, bytes) {
  let image;
  if (file.type === 'image/png') image = await pdf.embedPng(bytes);
  else image = await pdf.embedJpg(await convertImageToJpgBytes(file));

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 28;
  const page = pdf.addPage([pageWidth, pageHeight]);

  const scale = Math.min(
    (pageWidth - margin * 2) / image.width,
    (pageHeight - margin * 2) / image.height
  );

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

function injectCleanGalleryStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #nextBtn {
      align-items: center;
      justify-content: center;
    }

    #finalActions {
      margin-top: 16px;
      display: none;
      justify-content: flex-end;
    }

    #shareBtn {
      align-items: center;
      justify-content: center;
    }

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
      max-width: 150px !important;
      max-height: 210px !important;
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
      -webkit-user-drag: none !important;
      user-select: none !important;
      pointer-events: none !important;
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
      cursor: grab !important;
      user-select: none !important;
      touch-action: none !important;
      display: grid !important;
      place-items: center !important;
      box-shadow: 0 10px 20px rgba(16,24,40,0.18) !important;
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
    }

    .remove-chip {
      left: 8px !important;
      top: 8px !important;
      width: 28px !important;
      height: 28px !important;
      border-radius: 999px !important;
      background: rgba(239, 68, 68, 0.96) !important;
      color: white !important;
      font-size: 20px !important;
      line-height: 1 !important;
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

    .position-jump .position-input {
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

    .position-jump .position-input:focus {
      box-shadow: 0 0 0 3px rgba(99,91,255,0.16) !important;
    }

    .file-tools,
    .file-buttons,
    .position-row,
    .btn-move,
    .btn-soft[data-action="up"],
    .btn-soft[data-action="down"],
    .btn-danger[data-action="remove"] {
      display: none !important;
    }

    .drag-source {
      opacity: 0.22 !important;
    }

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
      background: rgba(99, 91, 255, 0.10) !important;
      box-shadow: inset 0 0 0 4px rgba(99, 91, 255, 0.08) !important;
    }

    @media (max-width: 820px) {
      #nextBtn,
      #shareBtn {
        width: 100%;
      }

      #finalActions {
        justify-content: stretch;
      }

      .actions {
        gap: 8px !important;
      }

      #fileList {
        grid-template-columns: repeat(auto-fill, 145px) !important;
        gap: 12px !important;
      }

      .file-card {
        width: 145px !important;
        min-width: 145px !important;
        max-width: 145px !important;
        border-radius: 20px !important;
        padding: 9px !important;
      }

      .preview {
        width: 127px !important;
        height: 178px !important;
        max-width: 127px !important;
        max-height: 178px !important;
      }

      .order-chip {
        width: 36px !important;
        height: 36px !important;
        font-size: 17px !important;
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
