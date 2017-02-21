import languageSelector from './components/language-selector.html';

const importEl = document.createElement('link');
importEl.rel = 'import'
importEl.href = htmlHrefPath

document.body.appendChild(importEl);
