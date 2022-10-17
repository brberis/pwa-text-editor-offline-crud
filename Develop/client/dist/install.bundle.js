/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  butInstall.addEventListener('click', function () {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
// });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', function (event) {
  console.log('appinstalled', event);
});
/******/ })()
;