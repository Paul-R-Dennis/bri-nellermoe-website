// Lightweight GA4 event tracking. Consent is handled upstream by Google Consent
// Mode v2 (see the inline gtag snippet + consent.js): when analytics is denied,
// gtag sends anonymized cookieless pings; full analytics only after Accept.
//
// Links are matched by URL rather than CSS class, so any new buy or social link
// is tracked automatically no matter how it's styled.
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  function match(href, table) {
    for (var i = 0; i < table.length; i++) {
      if (table[i][0].test(href)) return table[i][1];
    }
    return null;
  }

  function linkText(el) {
    return (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
  }

  var RETAILERS = [
    [/amazon\./i, 'Amazon'],
    [/barnesandnoble\.com/i, 'Barnes & Noble'],
    [/books2read\.com/i, 'Books2Read']
  ];

  var SOCIAL = [
    [/tiktok\.com/i, 'TikTok'],
    [/instagram\.com/i, 'Instagram'],
    [/goodreads\.com/i, 'Goodreads']
  ];

  // Where on the page a social link sits
  function socialLocation(el) {
    return el.closest('.nav-social') ? 'nav'
         : el.closest('.nav-drawer-social') ? 'nav_drawer'
         : el.closest('.footer-social') ? 'footer'
         : el.closest('.links-social') ? 'links_page'
         : el.closest('.social-links') ? 'social_links'
         : el.closest('.review-pullquote') ? 'review'
         : 'inline';
  }

  document.querySelectorAll('a[href]').forEach(function (el) {
    var href = el.href || '';

    // Buy links (Amazon, B&N, Books2Read) — purchase intent
    var retailer = match(href, RETAILERS);
    if (retailer) {
      el.addEventListener('click', function () {
        track('buy_link_click', {
          retailer: retailer,
          link_text: linkText(el),
          link_url: href
        });
      });
      return;
    }

    // Social links (nav, mobile drawer, footer, Connect page, links page, inline)
    var platform = match(href, SOCIAL);
    if (platform) {
      el.addEventListener('click', function () {
        track('social_click', { platform: platform, location: socialLocation(el) });
      });
    }
  });

  // Newsletter forms: the homepage has two (hero + bottom CTA band)
  document.querySelectorAll('.hero-email-form').forEach(function (form) {
    form.addEventListener('submit', function () {
      track('newsletter_signup', { form: form.closest('.cta-band') ? 'cta_band_email' : 'hero_email' });
    });
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
