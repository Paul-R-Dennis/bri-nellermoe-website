(function () {
  var THEMES = [
    { id: 'default',   label: 'Midnight Navy',     bg: '#0D1B2A', accent: '#C9A84C' },
    { id: 'ember',     label: 'Ember & Ash',        bg: '#160C08', accent: '#D4802A' },
    { id: 'obsidian',  label: 'Obsidian Court',     bg: '#080810', accent: '#B0A8D8' },
    { id: 'forest',    label: 'The Forest Between', bg: '#081408', accent: '#C4A030' },
    { id: 'parchment', label: 'Faded Parchment',    bg: '#F5EDD8', accent: '#7A5A18' },
    { id: 'celestial', label: 'Celestial Ink',      bg: '#0A0818', accent: '#C0B8E0' },
    { id: 'gilded',    label: 'Gilded Opulence',    bg: '#0A0800', accent: '#E8B830' },
    { id: 'crimson',   label: 'Crimson Court',      bg: '#1A0408', accent: '#D4AA40' },
    { id: 'rose',      label: 'Rose & Thorn',       bg: '#100810', accent: '#D4A860' },
    { id: 'silver',    label: 'Silver Smoke',       bg: '#141820', accent: '#A0B0C0' },
  ];

  var KEY = 'bri-theme';

  function apply(id) {
    if (id === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
    localStorage.setItem(KEY, id);
    document.querySelectorAll('.theme-swatch').forEach(function (el) {
      el.classList.toggle('active', el.dataset.id === id);
    });
  }

  // Build switcher — with defer, DOM is fully parsed when this runs
  var current = localStorage.getItem(KEY) || 'default';

  var panel = document.createElement('div');
  panel.className = 'theme-switcher';
  panel.setAttribute('aria-label', 'Theme switcher');

  var label = document.createElement('span');
  label.className = 'theme-switcher-label';
  label.textContent = 'Theme';
  panel.appendChild(label);

  THEMES.forEach(function (t) {
    var btn = document.createElement('button');
    btn.className = 'theme-swatch';
    btn.dataset.id = t.id;
    btn.title = t.label;
    btn.setAttribute('aria-label', t.label);
    btn.style.background = 'linear-gradient(135deg, ' + t.bg + ' 50%, ' + t.accent + ' 50%)';
    if (t.id === current) btn.classList.add('active');
    btn.addEventListener('click', function () { apply(t.id); });
    panel.appendChild(btn);
  });

  document.body.appendChild(panel);
})();
