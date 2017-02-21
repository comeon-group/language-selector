import languageSelector from './components/language-selector.html';

const importEl = document.createElement('link');
importEl.rel = 'import'
importEl.href = languageSelector

document.body.appendChild(importEl);
