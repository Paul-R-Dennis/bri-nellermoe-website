(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Ember hues matched to The Forest Between gold accents
  var HUES = ['#C4A030', '#E0BC45'];

  function seededRandom(seed) {
    var x = Math.sin(seed) * 43758.5453;
    return x - Math.floor(x);
  }

  function makeEmbers(host, count, seed) {
    var layer = document.createElement('div');
    layer.className = 'embers';
    layer.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < count; i++) {
      var r1 = seededRandom(seed + i * 12.9898);
      var r2 = seededRandom(seed + i * 12.9898 + 78.233);
      var r3 = seededRandom(seed + i * 12.9898 + 156.466);
      var r4 = seededRandom(seed + i * 12.9898 + 234.699);
      var r5 = seededRandom(seed + i * 12.9898 + 312.932);
      var r6 = seededRandom(seed + i * 12.9898 + 391.165);

      var size = 2 + r1 * 4;
      var left = r2 * 100;
      var dur = 7 + r3 * 9;
      var delay = -(r4 * 16);
      var dx = r5 * 60 - 30;
      var hue = r6 > 0.5 ? HUES[0] : HUES[1];

      var dot = document.createElement('span');
      dot.style.left = left + '%';
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      dot.style.setProperty('--ember-hue', hue);
      dot.style.setProperty('--ember-dur', dur.toFixed(2) + 's');
      dot.style.setProperty('--ember-delay', delay.toFixed(2) + 's');
      dot.style.setProperty('--ember-dx', dx.toFixed(1) + 'px');
      layer.appendChild(dot);
    }
    host.insertBefore(layer, host.firstChild);
  }

  document.querySelectorAll('[data-embers]').forEach(function (host, i) {
    var count = parseInt(host.getAttribute('data-embers'), 10) || 24;
    makeEmbers(host, count, 3.7 + i * 5.4);
  });
})();
