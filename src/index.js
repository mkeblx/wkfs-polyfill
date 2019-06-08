(function() {

var d = document;

var f = 'fullscreen';
var fs = 'Fullscreen';
var change = 'change';
var enabled = 'Enabled';
var element = 'Element';
var error = 'error';
var exit = 'exit';

var s = [
  exit+fs,
  'request'+fs,
  f+element,
  f+enabled];

var p = 'webkit';
var w = [
  p+'Exit'+fs,
  p+'Request'+fs,
  p+fs+element,
  p+fs+enabled
];

function handleEvent(eventType, event) {
  d[s[3]] = d[w[3]] || false;
  d[s[2]] = d[w[2]] || null;
  d.dispatchEvent(new Event(eventType), event.target);
}

// polyfill
if (d[s[0]] === undefined && d[w[0]] !== undefined) {
  // fullscreenEnabled
  console.log('polyfill Document.fullscreenEnabled');
  d[s[3]] = d[w[3]];

  // requestFullscreen
  console.log('polyfill Element.requestFullscreen');
  Element.prototype[s[1]] = Element.prototype[w[1]];

  // exitFullscreen
  console.log('polyfill Document.exitFullscreen');
  d[s[0]] = d[w[0]];

  // fullscreenElement
  console.log('polyfill Document.fullscreenElement');
  d[s[2]] = d[w[2]];

  // onfullscreenchange
  console.log('polyfill Document fullscreenchange event');
  d.addEventListener(w+f+change, handleEvent.bind(d, f+change), false);

  // onfullscreenerror
  console.log('polyfill Document fullscreenerror event');
  d.addEventListener(w+f+error, handleEvent.bind(d, f+error), false);
}

})();
