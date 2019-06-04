(function() {

// polyfill
if (document.exitFullscreen === undefined) {
  // fullscreenEnabled
  console.log('polyfill Document.fullscreenEnabled');
  document.fullscreenEnabled = document.webkitFullscreenEnabled || false;

  // requestFullscreen
  console.log('polyfill Element.requestFullscreen');
  Element.prototype.requestFullscreen = Element.prototype.webkitRequestFullscreen || function(){};

  // exitFullscreen
  console.log('polyfill Document.exitFullscreen');
  document.exitFullscreen = document.webkitExitFullscreen || function(){};
}

})();
