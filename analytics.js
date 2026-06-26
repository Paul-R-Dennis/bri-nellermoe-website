// Lightweight GA4 event tracking. Consent is handled upstream by Google Consent
// Mode v2 (see the inline gtag snippet + consent.js): when analytics is denied,
// gtag sends anonymized cookieless pings; full analytics only after Accept.
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  // Buy links (e.g., Amazon) — purchase intent
  document.querySelectorAll('.buy-link').forEach(function (el) {
    el.addEventListener('click', function () {
      track('buy_link_click', {
        retailer: (el.textContent || '').trim(),
        link_url: el.href
      });
    });
  });

  // Social links in the nav, footer, and on the Connect page
  document.querySelectorAll('.nav-social a, .footer-social a, .social-link').forEach(function (el) {
    el.addEventListener('click', function () {
      var hint = (el.getAttribute('aria-label') || '') + ' ' + (el.href || '');
      var platform = /tiktok/i.test(hint) ? 'TikTok'
                   : /instagram/i.test(hint) ? 'Instagram'
                   : 'Other';
      var location = el.closest('.nav-social') ? 'nav'
                   : el.closest('.footer-social') ? 'footer'
                   : 'social_links';
      track('social_click', { platform: platform, location: location });
    });
  });

  // Forms
  var hero = document.querySelector('.hero-email-form');
  if (hero) hero.addEventListener('submit', function () {
    track('newsletter_signup', { form: 'hero_email' });
  });

  var contact = document.getElementById('contact-form');
  if (contact) contact.addEventListener('submit', function () {
    track('contact_form_submit', { form: 'contact' });
  });

  var kit = document.querySelector('.seva-form, .formkit-form');
  if (kit) kit.addEventListener('submit', function () {
    track('newsletter_signup', { form: 'kit_embed' });
  });
})();
