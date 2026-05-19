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
    sortHint: 'Ziehe Karten hoch/runter oder gib direkt die Zielposition ein.',
    noFiles: 'Noch keine Dateien ausgewählt. Ziehe Dateien oben hinein.',
    count: n => `${n} Datei${n === 1 ? '' : 'en'}`,
    chooseFirst: 'Bitte zuerst Dateien auswählen.',
    creating: 'PDF wird erstellt ...',
    done: 'Fertig! PDF wurde heruntergeladen.',
    error: 'Fehler beim Erstellen des PDFs.',
    remove: 'Entfernen',
    up: 'Hoch',
    down: 'Runter',
    position: 'Position',
    previewLoading: 'Vorschau lädt',
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
    ready: 'Ready.',
    create: 'Create PDF',
    files: 'Order & Preview',
    sortHint: 'Drag cards up/down or enter the target position directly.',
    noFiles: 'No files selected yet. Drop files above.',
    count: n => `${n} file${n === 1 ? '' : 's'}`,
    chooseFirst: 'Please select files first.',
    creating: 'Creating PDF ...',
    done: 'Done! PDF was downloaded.',
    error: 'Error while creating the PDF.',
    remove: 'Remove',
    up: 'Up',
    down: 'Down',
    position: 'Position',
    previewLoading: 'Preview loading',
    pdfPreview: 'PDF page 1',
    imagePreview: 'Image preview',
    docPreview: 'Document preview'
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
    sortHint: 'Glissez les cartes ou entrez directement la position souhaitée.',
    noFiles: 'Aucun fichier sélectionné. Déposez des fichiers ci-dessus.',
    count: n => `${n} fichier${n === 1 ? '' : 's'}`,
    chooseFirst: 'Veuillez d’abord sélectionner des fichiers.',
    creating: 'Création du PDF ...',
    done: 'Terminé ! Le PDF a été téléchargé.',
    error: 'Erreur lors de la création du PDF.',
    remove: 'Supprimer',
    up: 'Monter',
    down: 'Descendre',
    position: 'Position',
    previewLoading: 'Aperçu en cours',
    pdfPreview: 'PDF page 1',
    imagePreview: 'Aperçu image',
    docPreview: 'Aperçu document'
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
    sortHint: 'Trascina le schede o inserisci direttamente la posizione.',
    noFiles: 'Nessun file selezionato. Trascina i file sopra.',
    count: n => `${n} file`,
    chooseFirst: 'Seleziona prima dei file.',
    creating: 'Creazione PDF ...',
    done: 'Fatto! Il PDF è stato scaricato.',
    error: 'Errore durante la creazione del PDF.',
    remove: 'Rimuovi',
    up: 'Su',
    down: 'Giù',
    position: 'Posizione',
    previewLoading: 'Anteprima in caricamento',
    pdfPreview: 'PDF pagina 1',
    imagePreview: 'Anteprima immagine',
    docPreview: 'Anteprima documento'
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
    sortHint: 'Arrastra tarjetas o escribe directamente la posición deseada.',
    noFiles: 'Todavía no hay archivos seleccionados. Suelta archivos arriba.',
    count: n => `${n} archivo${n === 1 ? '' : 's'}`,
    chooseFirst: 'Selecciona archivos primero.',
    creating: 'Creando PDF ...',
    done: '¡Listo! El PDF se ha descargado.',
    error: 'Error al crear el PDF.',
    remove: 'Eliminar',
    up: 'Subir',
    down: 'Bajar',
    position: 'Posición',
    previewLoading: 'Cargando vista',
    pdfPreview: 'PDF página 1',
    imagePreview: 'Vista de imagen',
    docPreview: 'Vista de documento'
  }
};

let selectedItems = [];
let currentLang = getSystemLanguage();
let draggedIndex = null;
let touchDrag = null;
let activeMoveIndex = null;

const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const statusBox = document.getElementById('status');
const dropZone = document.getElementById('dropZone');
const createBtn = document.getElementById('createBtn');
let nextBtn = null;
let shareBtn = null;
let finalActions = null;
let lastPdfFile = null;
const clearBtn = document.getElementById('clearBtn');
const languageSelect = document.getElementById('languageSelect');
const fileCount = document.getElementById('fileCount');

languageSelect.value = 'auto';
applyLanguage(currentLang);
injectFixedGalleryStyles();
renderFileList();
setupActionButtons();

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
  if (nextBtn) nextBtn.textContent = currentLang === 'de' ? 'Weiter' : 'Next';
  if (shareBtn) shareBtn.textContent = currentLang === 'de' ? 'PDF teilen' : 'Share PDF';
  renderFileList();
  setStatus(t('ready'));
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
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const index = Number(button.dataset.index);
  if (button.dataset.action === 'move') {
    activeMoveIndex = activeMoveIndex === index ? null : index;
    setStatus(activeMoveIndex === null
      ? t('ready')
      : currentLang === 'de'
        ? 'Tippe jetzt auf die Zielposition.'
        : 'Now tap the target position.');
    renderFileList();
  }
  if (button.dataset.action === 'up') moveFile(index, -1);
  if (button.dataset.action === 'down') moveFile(index, 1);
  if (button.dataset.action === 'remove') removeFile(index);
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
    previewType: file.type === 'application/pdf' ? 'pdf' : isDocumentFile(file) ? 'doc' : 'image',
    deleted: false
  }));

  selectedItems = [...selectedItems, ...newItems];
  renderFileList();

  for (const item of newItems) {
    const currentId = item.id;
    await createPreview(item, currentId);

    const stillExists = selectedItems.some(activeItem =>
      activeItem.id === currentId && !activeItem.deleted
    );

    if (!stillExists) {
      revokePreview(item);
    }
  }

  renderFileList();
}

async function createPreview(item, requestId = item.id) {
  try {
    if (item.file.type.startsWith('image/')) {
      if (item.deleted || item.id !== requestId) return;
      item.previewUrl = URL.createObjectURL(item.file);
      renderFileList();
      return;
    }

    if (item.file.type === 'application/pdf') {
      item.previewUrl = await createPdfPreview(item.file);
      if (item.deleted || item.id !== requestId) return;
      renderFileList();
      return;
    }

    if (isDocumentFile(item.file)) {
      const preview = await createDocumentPreview(item.file);
      if (item.deleted || item.id !== requestId) return;
      item.previewUrl = preview;
      renderFileList();
    }
  } catch (error) {
    console.error('Preview error:', error);
    item.previewUrl = '';
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
  const targetWidth = 420;
  const scale = targetWidth / baseViewport.width;
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: context, viewport }).promise;
  const imageUrl = canvas.toDataURL('image/png');

  if (pdf.destroy) await pdf.destroy();
  return imageUrl;
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
    const card = document.createElement('div');
    card.className = 'file-card';
    card.draggable = !window.matchMedia('(pointer: coarse)').matches;
    card.dataset.index = index;

    const badge = item.previewType === 'pdf' ? 'PDF' : item.previewType === 'doc' ? getDocumentBadge(item.file) : 'IMG';
    const previewLabel = item.previewType === 'pdf' ? t('pdfPreview') : item.previewType === 'doc' ? t('docPreview') : t('imagePreview');

    card.innerHTML = `
      <div class="order-badge">${index + 1}</div>
      <div class="preview" title="${previewLabel}">
        ${item.previewUrl ? `<img src="${item.previewUrl}" alt="${previewLabel}">` : `<div class="preview-placeholder">${item.previewFailed ? badge : '…'}</div>`}
        <div class="preview-badge">${badge}</div>
      </div>
      <div class="file-info">
        <div class="file-title" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</div>
        <div class="file-meta">${file.type || 'File'} · ${formatBytes(file.size)}</div>
        <div class="file-help">${item.previewUrl ? previewLabel : t('previewLoading')}</div>
      </div>
      <div class="file-tools">
        <label class="position-row">
          <span>${t('position')}</span>
          <input class="position-input" type="number" min="1" max="${selectedItems.length}" value="${index + 1}" data-index="${index}">
        </label>
        <div class="file-buttons">
          <button class="btn btn-move" data-action="move" data-index="${index}" title="Move">↕</button>
          <button class="btn btn-soft" data-action="up" data-index="${index}">${t('up')}</button>
          <button class="btn btn-soft" data-action="down" data-index="${index}">${t('down')}</button>
          <button class="btn btn-danger" data-action="remove" data-index="${index}">${t('remove')}</button>
        </div>
      </div>
    `;

    card.addEventListener('dragstart', () => {
      draggedIndex = index;
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      draggedIndex = null;
      card.classList.remove('dragging');
      document.querySelectorAll('.file-card').forEach(el => el.classList.remove('drag-over'));
    });

    card.addEventListener('dragover', event => {
      event.preventDefault();
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));

    card.addEventListener('drop', event => {
      event.preventDefault();
      event.stopPropagation();
      card.classList.remove('drag-over');
      reorderFiles(draggedIndex, Number(card.dataset.index));
    });

    card.addEventListener('click', event => {
      if (event.target.closest('button, input')) return;
      if (activeMoveIndex === null) return;
      const targetIndex = Number(card.dataset.index);
      reorderFiles(activeMoveIndex, targetIndex);
      activeMoveIndex = null;
      setStatus(t('ready'));
    });

    if (activeMoveIndex === index) card.classList.add('move-selected');

    fileList.appendChild(card);
  });
}

function setupLongPressDrag(card, index) {
  return;
}

function startTouchDrag(card, index, x, y) {
  if (touchDrag) cancelTouchDrag();

  const rect = card.getBoundingClientRect();
  const ghost = card.cloneNode(true);
  ghost.classList.add('touch-drag-ghost');
  ghost.style.width = `${rect.width}px`;
  ghost.style.left = `${x - rect.width / 2}px`;
  ghost.style.top = `${y - 40}px`;

  const placeholder = document.createElement('div');
  placeholder.className = 'drop-placeholder';
  placeholder.style.width = `${rect.width}px`;
  placeholder.style.height = `${rect.height}px`;

  card.classList.add('touch-drag-source');
  document.body.appendChild(ghost);
  fileList.insertBefore(placeholder, card.nextSibling);

  touchDrag = {
    fromIndex: index,
    targetIndex: index,
    ghost,
    placeholder,
    sourceCard: card
  };

  if (navigator.vibrate) navigator.vibrate(25);
}

function moveTouchDrag(x, y) {
  if (!touchDrag) return;

  touchDrag.ghost.style.left = `${x - touchDrag.ghost.offsetWidth / 2}px`;
  touchDrag.ghost.style.top = `${y - 55}px`;

  const cards = [...fileList.querySelectorAll('.file-card:not(.touch-drag-source)')];
  let targetCard = null;
  let targetIndex = selectedItems.length - 1;

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const middleY = rect.top + rect.height / 2;
    const middleX = rect.left + rect.width / 2;

    if (y < middleY || (Math.abs(y - middleY) < rect.height / 2 && x < middleX)) {
      targetCard = card;
      targetIndex = Number(card.dataset.index);
      break;
    }
  }

  if (targetCard) {
    fileList.insertBefore(touchDrag.placeholder, targetCard);
  } else {
    fileList.appendChild(touchDrag.placeholder);
    targetIndex = selectedItems.length - 1;
  }

  const placeholderIndex = [...fileList.children].indexOf(touchDrag.placeholder);
  touchDrag.targetIndex = Math.max(0, Math.min(selectedItems.length - 1, placeholderIndex));
}

function finishTouchDrag() {
  if (!touchDrag) return;

  const { fromIndex, targetIndex } = touchDrag;
  cleanupTouchDrag();
  reorderFiles(fromIndex, targetIndex);
}

function cancelTouchDrag() {
  cleanupTouchDrag();
}

function cleanupTouchDrag() {
  if (!touchDrag) return;

  touchDrag.ghost.remove();
  touchDrag.placeholder.remove();
  touchDrag.sourceCard.classList.remove('touch-drag-source');
  touchDrag = null;
}

function updateCount() {
  fileCount.textContent = t('count', selectedItems.length);
}

function moveFile(index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= selectedItems.length) return;
  reorderFiles(index, newIndex);
}

function reorderFiles(fromIndex, toIndex) {
  if (fromIndex === null || fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return;

  const currentItems = selectedItems.filter(item => item && !item.deleted);
  const [item] = currentItems.splice(fromIndex, 1);
  if (!item) return;

  currentItems.splice(toIndex, 0, item);
  selectedItems = [...currentItems];
  renderFileList();
}

function removeFile(index) {
  const item = selectedItems[index];
  if (!item) return;

  item.deleted = true;
  revokePreview(item);
  selectedItems = selectedItems.filter((_, itemIndex) => itemIndex !== index);
  selectedItems = [...selectedItems];
  draggedIndex = null;
  renderFileList();
}

function clearAllItems() {
  selectedItems.forEach(item => {
    item.deleted = true;
    revokePreview(item);
  });
  selectedItems = [...[]];
  draggedIndex = null;
}

function revokePreview(item) {
  if (item?.previewUrl && item.previewUrl.startsWith('blob:')) {
    URL.revokeObjectURL(item.previewUrl);
  }
  if (item) item.previewUrl = '';
}

function setStatus(message) {
  statusBox.textContent = message;
}

function setupActionButtons() {
  nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-soft';
  nextBtn.id = 'nextBtn';
  nextBtn.type = 'button';
  nextBtn.textContent = currentLang === 'de' ? 'Weiter' : 'Next';
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
  shareBtn.textContent = currentLang === 'de' ? 'PDF teilen' : 'Share PDF';
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
    setStatus(currentLang === 'de' ? 'Teilen wird von diesem Browser nicht unterstützt.' : 'Sharing is not supported by this browser.');
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
      if (!selectedItems.some(activeItem => activeItem.id === item.id)) continue;
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
    if (finalActions && shareBtn && navigator.canShare && navigator.canShare({ files: [lastPdfFile] })) {
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
  const ext = file.name.split('.').pop()?.toUpperCase();
  return ext || 'DOC';
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

    page.drawImage(image, {
      x: (pageWidth - width) / 2,
      y: pageHeight - height,
      width,
      height
    });
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

  if (file.type === 'image/png') {
    image = await pdf.embedPng(bytes);
  } else {
    image = await pdf.embedJpg(await convertImageToJpgBytes(file));
  }

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

function injectFixedGalleryStyles() {
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

    .file-card,
    .preview,
    .preview img {
      touch-action: pan-y !important;
      -webkit-user-drag: none !important;
      user-select: none !important;
    }

    .touch-drag-source {
      opacity: 0.25 !important;
    }

    .touch-drag-ghost {
      position: fixed !important;
      z-index: 9999 !important;
      pointer-events: none !important;
      opacity: 0.72 !important;
      transform: scale(1.04) rotate(1deg) !important;
      box-shadow: 0 24px 60px rgba(16, 24, 40, 0.28) !important;
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
      display: grid !important;
      gap: 10px !important;
      background: white !important;
      border: 1px solid var(--border) !important;
      border-radius: 22px !important;
      padding: 10px !important;
      width: 170px !important;
      min-width: 170px !important;
      max-width: 170px !important;
      box-sizing: border-box !important;
    }

    .preview {
      overflow: hidden !important;
      border-radius: 16px !important;
      border: 1px solid var(--border) !important;
      display: grid !important;
      place-items: center !important;
      width: 150px !important;
      height: 210px !important;
      max-width: 150px !important;
      max-height: 210px !important;
      aspect-ratio: auto !important;
    }

    .preview img,
    .preview canvas {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      background: #f8fafc !important;
    }

    @media (max-width: 820px) {
      #fileList {
        grid-template-columns: repeat(auto-fill, 130px) !important;
        gap: 10px !important;
      }

      .file-card {
        width: 130px !important;
        min-width: 130px !important;
        max-width: 130px !important;
      }

      .preview {
        width: 112px !important;
        height: 156px !important;
        max-width: 112px !important;
        max-height: 156px !important;
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
