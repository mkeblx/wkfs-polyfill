(function() {

var d = document;

function handleEvent(eventType, event) {
  d.fullscreenEnabled = d.webkitFullscreenEnabled || false;
  d.fullscreenElement = d.webkitFullscreenElement || null;
  d.dispatchEvent(new Event(eventType), event.target);
}

// polyfill
if (d.exitFullscreen === undefined) {
  // fullscreenEnabled
  console.log('polyfill Document.fullscreenEnabled');
  d.fullscreenEnabled = d.webkitFullscreenEnabled || false;

  // requestFullscreen
  console.log('polyfill Element.requestFullscreen');
  Element.prototype.requestFullscreen = Element.prototype.webkitRequestFullscreen || function(){};

  // exitFullscreen
  console.log('polyfill Document.exitFullscreen');
  d.exitFullscreen = d.webkitExitFullscreen || function(){};

  // fullscreenElement
  console.log('polyfill Document.fullscreenElement');
  d.fullscreenElement = d.webkitFullscreenElement;

  // onfullscreenchange
  console.log('polyfill Document fullscreenchange event');
  d.addEventListener('webkitfullscreenchange', handleEvent.bind(d, 'fullscreenchange'), false);

  // onfullscreenerror
  console.log('polyfill Document fullscreenerror event');
  d.addEventListener('webkitfullscreenerror', handleEvent.bind(d, 'fullscreenerror'), false);
}

})();
