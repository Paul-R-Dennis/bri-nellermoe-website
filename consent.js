(function () {
  var KEY = 'bri-consent'; // 'granted' | 'denied'

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function update(choice) {
    gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: choice === 'granted' ? 'granted' : 'denied'
    });
  }

  function record(choice, bar) {
    localStorage.setItem(KEY, choice);
    update(choice);
    if (bar) {
      bar.classList.remove('open');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 300);
    }
  }

  function show() {
    if (document.querySelector('.cookie-consent')) return;
    var bar = document.createElement('div');
    bar.className = 'cookie-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML =
      '<p class="cookie-consent-text">This site uses analytics cookies to understand how visitors use it. ' +
      'Accept to help improve the site, or reject to opt out. See the ' +
      '<a href="/privacy.html">Privacy Policy</a>.</p>' +
      '<div class="cookie-consent-actions">' +
        '<button type="button" class="cookie-btn cookie-btn-reject">Reject</button>' +
        '<button type="button" class="cookie-btn cookie-btn-accept">Accept</button>' +
      '</div>';
    document.body.appendChild(bar);
    bar.querySelector('.cookie-btn-accept').addEventListener('click', function () { record('granted', bar); });
    bar.querySelector('.cookie-btn-reject').addEventListener('click', function () { record('denied', bar); });
    requestAnimationFrame(function () { bar.classList.add('open'); });
  }

  var stored = localStorage.getItem(KEY);
  if (stored === 'granted') {
    update('granted'); // re-affirm consent on each load
  } else if (!stored) {
    show(); // first visit — no choice yet
  }

  // A "Cookie settings" link (data-cookie-settings) reopens the banner so consent can be changed
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-cookie-settings]');
    if (t) { e.preventDefault(); show(); }
  });
})();
