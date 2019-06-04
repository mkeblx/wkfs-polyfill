var _logEl = document.getElementById('_log');
var l = function() {
  console.log.apply(null, arguments);
  var text = Array.prototype.join.call(arguments, ' ');
  _logEl.innerHTML += '<div>'+text+'</div>';
}
l('wkfs-polyfill');
var doc = document ? document : (document = {});

l(doc);

// check native
var fullscreenEnabled = document.fullscreenEnabled !== undefined;
l('fullscreenEnabled:', fullscreenEnabled);

var requestFullscreen = document.documentElement.requestFullscreen !== undefined;
l('requestFullscreen:', requestFullscreen);

var exitFullscreen = document.exitFullscreen !== undefined;
l('exitFullscreen:', exitFullscreen);

// check webkit prefix
var webkitFullscreenEnabled = document.webkitFullscreenEnabled !== undefined;
l('webkitFullscreenEnabled:', webkitFullscreenEnabled);

var webkitRequestFullscreen = document.documentElement.webkitRequestFullscreen !== undefined;
l('webkitRequestFullscreen:', webkitRequestFullscreen);

var webkitExitFullscreen = document.webkitExitFullscreen !== undefined;
l('webkitExitFullscreen:', exitFullscreen);