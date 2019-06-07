(function() {

function handleEvent(eventType, event) {
  document.fullscreenEnabled = document.webkitFullscreenEnabled || false;
  document.fullscreenElement = document.webkitFullscreenElement || null;
  document.dispatchEvent(new Event(eventType), event.target);
}

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

  // fullscreenElement
  console.log('polyfill Document.fullscreenElement');
  document.fullscreenElement = document.webkitFullscreenElement;

  // onfullscreenchange
  console.log('polyfill Document.onfullscreenchange');
  document.addEventListener('webkitfullscreenchange', handleEvent.bind(document, 'fullscreenchange'), false);

  // onfullscreenerror
  console.log('polyfill Document.onfullscreenerror');
  document.addEventListener('webkitfullscreenerror', handleEvent.bind(document, 'fullscreenerror'), false);
}

})();
