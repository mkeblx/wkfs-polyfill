var _logEl = document.getElementById('_log');
var l = function() {
  console.log.apply(null, arguments);
  var text = Array.prototype.join.call(arguments, ' ');
  _logEl.innerHTML += '<div>'+text+'</div>';
}
l('wkfs-polyfill');
var doc = document ? document : (document = {});

l(doc);
l('&nbsp;');

// check native
var fullscreenEnabled = document.fullscreenEnabled !== undefined;
l('fullscreenEnabled:', fullscreenEnabled);

var requestFullscreen = document.documentElement.requestFullscreen !== undefined;
l('requestFullscreen:', requestFullscreen);

var exitFullscreen = document.exitFullscreen !== undefined;
l('exitFullscreen:', exitFullscreen);

var fullscreenElement = document.fullscreenElement !== undefined;
l('fullscreenElement:', fullscreenElement);

var onfullscreenchange = document.onfullscreenchange !== undefined;
l('onfullscreenchange:', onfullscreenchange);

var onfullscreenerror = document.onfullscreenerror !== undefined;
l('onfullscreenerror:', onfullscreenerror);

l('&nbsp;');

// check webkit prefix
var webkitFullscreenEnabled = document.webkitFullscreenEnabled !== undefined;
l('webkitFullscreenEnabled:', webkitFullscreenEnabled);

var webkitRequestFullscreen = document.documentElement.webkitRequestFullscreen !== undefined;
l('webkitRequestFullscreen:', webkitRequestFullscreen);

var webkitExitFullscreen = document.webkitExitFullscreen !== undefined;
l('webkitExitFullscreen:', exitFullscreen);

var webkitFullscreenElement = document.webkitFullscreenElement !== undefined;
l('webkitFullscreenElement:', webkitFullscreenElement);

var onwebkitfullscreenchange = document.onwebkitfullscreenchange !== undefined;
l('onwebkitfullscreenchange:', onwebkitfullscreenchange);

var onwebkitfullscreenerror = document.onwebkitfullscreenerror !== undefined;
l('onwebkitfullscreenerror:', onwebkitfullscreenerror);