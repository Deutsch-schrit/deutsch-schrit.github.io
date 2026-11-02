/*
  Cookie consent + Google Analytics 4.
  Google Analytics is only loaded after the visitor clicks "Accept", and only on the live site.
  Every page of this single-page site (hash routes) is sent as its own page view.
*/
(function () {
  var GA_ID = 'G-TP6R5MGYHP';
  var LIVE_HOST = 'deutsch-schrit.github.io';
  var KEY = 'dsfs-consent';
  /* Contact shown on the privacy page. Fill in an email address to show it. */
  var CONTACT_NAME = '';
  var CONTACT_EMAIL = '';

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function virtualPath() {
    var h = location.hash.replace(/^#\/?/, '').split('?')[0];
    return '/' + h;
  }
  function sendPageView() {
    if (!loaded || !window.gtag) return;
    setTimeout(function () {
      window.gtag('event', 'page_view', {
        page_location: location.origin + virtualPath(),
        page_path: virtualPath(),
        page_title: document.title
      });
    }, 60);
  }
  function loadGA() {
    if (loaded || location.hostname !== LIVE_HOST) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { send_page_view: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    sendPageView();
  }
  function deleteGaCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga/.test(name)) {
        ['', '; domain=' + location.hostname, '; domain=.' + location.hostname].forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  function banner() {
    var old = document.getElementById('cookie-banner');
    if (old) old.remove();
    var el = document.createElement('div');
    el.id = 'cookie-banner';
    el.className = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookie settings');
    el.innerHTML = '<p><strong>May we count your visit?</strong> With your consent we use Google Analytics to see how many people use this site and which pages they open. This sets cookies and sends data to Google. You can change your choice at any time under "Cookie settings" at the bottom of the page. <a href="#/datenschutz">Privacy policy</a></p>' +
      '<div class="cookie-btns"><button class="btn" data-c="denied">Decline</button><button class="btn" data-c="granted">Accept</button></div>';
    document.body.appendChild(el);
    el.querySelectorAll('[data-c]').forEach(function (b) {
      b.addEventListener('click', function () { choose(b.dataset.c); });
    });
  }
  function choose(v) {
    var before = get();
    set(v);
    var el = document.getElementById('cookie-banner');
    if (el) el.remove();
    if (v === 'granted') loadGA();
    else {
      deleteGaCookies();
      if (before === 'granted' && loaded) location.reload();
    }
  }

  function privacyPage() {
    var main = document.getElementById('main') || (window.DS && window.DS.main);
    if (window.DS) window.DS.setNav('');
    document.title = 'Privacy policy | Deutsch Schritt für Schritt';
    var who = (CONTACT_NAME || CONTACT_EMAIL)
      ? (CONTACT_NAME ? CONTACT_NAME + '<br>' : '') + (CONTACT_EMAIL ? '<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>' : '')
      : 'The operator of this website. Contact via the GitHub organisation <a href="https://github.com/Deutsch-schrit" rel="noopener">Deutsch-schrit</a>.';
    var state = get() === 'granted' ? 'You have <strong>accepted</strong> Google Analytics.' : get() === 'denied' ? 'You have <strong>declined</strong> Google Analytics.' : 'You have not made a choice yet.';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>Privacy policy</h1><p class="sub">Datenschutzerklärung: what this website does with your data.</p></div>' +
      '<article class="prose privacy">' +
      '<h2>Who is responsible</h2><p>' + who + '</p>' +
      '<h2>Hosting</h2><p>This website is hosted on <strong>GitHub Pages</strong> (GitHub Inc., USA). When you open the site, GitHub processes technical data such as your IP address, browser and time of access in order to deliver the pages and keep the service secure. Legal basis: legitimate interest in providing the website (Art. 6(1)(f) GDPR). See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>.</p>' +
      '<h2>Data stored in your browser</h2><p>Your flashcard progress, quiz results, exam drafts and settings are saved in your own browser (localStorage). They are never sent to anyone and you can delete them by clearing your browser data. This is technically necessary for these features (§ 25(2) TDDDG).</p>' +
      '<h2>Google Analytics (only with your consent)</h2><p>If you click <strong>Accept</strong>, this site uses <strong>Google Analytics 4</strong>, a web analytics service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google Analytics sets cookies and collects information such as the pages you visit, how long you stay, your approximate location (country/city), device and browser, and the website you came from. IP addresses are not stored by Google Analytics 4. The data may be transferred to Google LLC in the USA; Google is certified under the EU-US Data Privacy Framework.</p>' +
      '<p>Purpose: to understand how many people use the site and which content is useful, so it can be improved. Legal basis: your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG). Google retains the data for 14 months. If you decline, Google Analytics is not loaded and no analytics cookies are set.</p>' +
      '<p>' + state + ' <button class="btn" id="privacy-change">Change cookie settings</button></p>' +
      '<p>More information: <a href="https://policies.google.com/privacy" rel="noopener">Google Privacy Policy</a>.</p>' +
      '<h2>Your rights</h2><p>You have the right to access, correct and delete your data, to restrict or object to its processing, to data portability, and to withdraw your consent at any time with effect for the future. You also have the right to complain to a data protection supervisory authority.</p>' +
      '</article>';
    document.getElementById('privacy-change').addEventListener('click', banner);
  }

  function init() {
    var foot = document.querySelector('footer.foot');
    if (foot && !document.getElementById('foot-links')) {
      var p = document.createElement('p');
      p.id = 'foot-links';
      p.className = 'foot-links';
      p.innerHTML = '<a href="#/datenschutz">Privacy policy</a> · <a href="#" id="cookie-settings">Cookie settings</a>';
      foot.appendChild(p);
      document.getElementById('cookie-settings').addEventListener('click', function (e) { e.preventDefault(); banner(); });
    }
    var c = get();
    if (c === 'granted') loadGA();
    else if (!c) banner();
    window.addEventListener('hashchange', sendPageView);
  }

  window.Consent = { privacyPage: privacyPage, banner: banner };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
