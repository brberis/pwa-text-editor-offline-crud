import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import 'code-mirror-themes/lib/codemirror.css';
import 'code-mirror-themes/lib/codemirror.js';
import 'code-mirror-themes/lib/javascript/javascript.js';
import 'code-mirror-themes/themes/monokai.css';




const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').then(function(reg) {
      console.log('Successfully registered service worker', reg);
  }).catch(function(err) {
      console.warn('Error whilst registering service worker', err);
  });
}
