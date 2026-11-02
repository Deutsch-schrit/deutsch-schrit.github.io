(function () {
  'use strict';

  var LEVELS = [
    { code: 'A1', name: 'Beginner', en: 'Anfänger', desc: 'Introduce yourself, ask simple questions, talk about everyday things.' },
    { code: 'A2', name: 'Elementary', en: 'Grundlagen', desc: 'Talk about the past, give reasons, describe people and places.' },
    { code: 'B1', name: 'Intermediate', en: 'Mittelstufe', desc: 'Tell stories, explain opinions, handle most situations at work and on the road.' },
    { code: 'B2', name: 'Upper intermediate', en: 'Gute Mittelstufe', desc: 'Argue clearly, understand complex texts, write formally.' },
    { code: 'C1', name: 'Advanced', en: 'Fortgeschritten', desc: 'Academic and professional German: nominal style, nuance, precision.' },
    { code: 'C2', name: 'Proficient', en: 'Exzellent', desc: 'Style, register and idiom close to a native speaker.' }
  ];
  var TYPE_NAMES = { N: 'Noun', V: 'Verb', A: 'Adjective', D: 'Adverb' };
  var ADV_KIND = { time: 'adverb of time (Temporaladverb)', place: 'adverb of place (Lokaladverb)', manner: 'adverb of manner (Modaladverb)', frequency: 'adverb of frequency (Häufigkeitsadverb)', degree: 'adverb of degree (Gradadverb)', reason: 'adverb of reason (Kausaladverb)', comment: 'comment adverb (Kommentaradverb)', connector: 'connecting adverb (Konjunktionaladverb)' };
  var INTERVAL_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
  var DAY = 86400000;
  var main = document.getElementById('main');

  /* ---------- storage (fails quietly in private mode) ---------- */
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* ignore */ } }
  var progress = load('dsfs-progress', {});

  /* ---------- vocabulary ---------- */
  var VOCAB = [];
  Object.keys(window.VOCAB_RAW || {}).forEach(function (lvl) {
    window.VOCAB_RAW[lvl].trim().split('\n').forEach(function (line) {
      line = line.trim();
      if (!line || line.charAt(0) === '#') return;
      var p = line.split('|').map(function (x) { return x.trim(); });
      var e;
      if (p[0] === 'N') e = { type: 'N', art: p[1], word: p[2], f1: p[3], en: p[4] };
      else if (p[0] === 'V') e = { type: 'V', word: p[1], f1: p[2], f2: p[3], en: p[4] };
      else if (p[0] === 'D') e = { type: 'D', word: p[1], cat: p[2], ex: p[3], en: p[4] };
      else e = { type: 'A', word: p[1], f1: p[2], f2: p[3], en: p[4] };
      e.level = lvl;
      e.id = lvl + '|' + e.type + '|' + (e.art || '') + e.word;
      VOCAB.push(e);
    });
  });

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function artHtml(a) {
    if (a === 'pl') return '<span class="art art-pl">die</span>';
    return '<span class="art art-' + a + '">' + a + '</span>';
  }
  function wordHtml(e) {
    if (e.type === 'N') return artHtml(e.art) + ' ' + esc(e.word) + (e.art === 'pl' ? ' <small class="art-pl">(Pl.)</small>' : '');
    return esc(e.word);
  }
  function formsText(e) {
    if (e.type === 'N') return e.art === 'pl' ? 'plural only' : (e.f1 === '—' ? 'no plural' : 'die ' + e.f1);
    if (e.type === 'V') return e.f1 + ', ' + e.f2;
    if (e.type === 'D') return (ADV_KIND[e.cat] || e.cat) + ': ' + e.ex;
    return e.f1 === '—' ? '—' : e.f1 + ', ' + e.f2;
  }
  function formsHtml(e) {
    function lab(name, val) { return '<span class="fl"><span class="flab">' + name + '</span> ' + esc(val) + '</span>'; }
    if (e.type === 'N') return lab('Plural', formsText(e));
    if (e.type === 'V') return lab('Präteritum', e.f1) + lab('Perfekt', e.f2);
    if (e.type === 'D') return '<span class="fl fkind">' + esc(ADV_KIND[e.cat] || e.cat) + '</span>' + lab('Example', e.ex).replace('class="fl"', 'class="fl fwrap"');
    if (e.f1 === '—') return '<span class="fl"><span class="flab">not compared</span></span>';
    return lab('Komparativ', e.f1) + lab('Superlativ', e.f2);
  }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss'); }

  /* ---------- answer checking for the typing mode ---------- */
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  /* German: case-insensitive, ä = ae, ß = ss, ignores punctuation and bracketed hints */
  function gnorm(x) {
    return String(x).toLowerCase().replace(/\(.*?\)/g, '').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss').replace(/[.!?,;:"„“]/g, '').replace(/\s+/g, ' ').trim();
  }
  function closeEnough(a, b) { return b.length >= 4 && lev(a, b) <= (b.length >= 9 ? 2 : 1); }
  /* returns 'ok', 'almost' (small typo) or 'bad' */
  function checkDe(input, variants) {
    var g = gnorm(input);
    if (!g) return 'bad';
    var vs = variants.map(gnorm);
    if (vs.indexOf(g) > -1) return 'ok';
    return vs.some(function (v) { return closeEnough(g, v); }) ? 'almost' : 'bad';
  }
  function enClean(x) {
    return String(x).toLowerCase().replace(/\(.*?\)/g, '').replace(/[.!?"]/g, '').replace(/^\s*(to|the|a|an)\s+/, '').replace(/\s+/g, ' ').trim();
  }
  function checkEn(input, en) {
    var g = enClean(input);
    if (!g) return 'bad';
    var opts = en.replace(/\(.*?\)/g, '').split(/[;,\/]/).map(enClean).filter(Boolean);
    opts.push(enClean(en));
    if (opts.indexOf(g) > -1) return 'ok';
    return opts.some(function (v) { return closeEnough(g, v); }) ? 'almost' : 'bad';
  }

  /* ---------- routing ---------- */
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var q = {};
    var qi = h.indexOf('?');
    if (qi > -1) {
      h.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); q[p[0]] = decodeURIComponent(p[1] || ''); });
      h = h.slice(0, qi);
    }
    return { parts: h.split('/').filter(Boolean), q: q };
  }
  function setNav(section) {
    document.querySelectorAll('.mainnav a').forEach(function (a) {
      if (a.getAttribute('data-nav') === section) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function render() {
    stopKeys();
    if (window.ExamUI) window.ExamUI.stop();
    var r = parseHash();
    var p = r.parts;
    if (!p.length) { setNav(''); home(); document.title = 'Deutsch Schritt für Schritt'; }
    else if (p[0] === 'grammatik') { setNav('grammatik'); grammarOverview(p[1]); }
    else if (p[0] === 'thema') { setNav('grammatik'); topicPage(p[1]); }
    else if (p[0] === 'wortschatz') { setNav('wortschatz'); vocabPage(r.q); }
    else if (p[0] === 'karteikarten') { setNav('karteikarten'); flashPage(r.q); }
    else if (p[0] === 'konjugation' && window.ConjUI) window.ConjUI.page(p[1], r.q);
    else if (p[0] === 'datenschutz' && window.Consent) window.Consent.privacyPage();
    else if (p[0] === 'pruefungen' && window.ExamUI) window.ExamUI.list(p[1]);
    else if (p[0] === 'pruefung' && window.ExamUI) window.ExamUI.exam(p[1], p[2]);
    else { setNav(''); main.innerHTML = '<div class="page-head"><h1>Page not found</h1><p class="sub">This page does not exist. <a href="#/">Go to the start page</a>.</p></div>'; }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);

  var keyHandler = null;
  function stopKeys() { if (keyHandler) document.removeEventListener('keydown', keyHandler); keyHandler = null; }
  function listenKeys(fn) { stopKeys(); keyHandler = fn; document.addEventListener('keydown', fn); }

  function topicsFor(code) { return window.GRAMMAR.filter(function (t) { return t.level === code; }); }
  function vocabFor(code) { return VOCAB.filter(function (e) { return e.level === code; }); }
  function learnedShare(list) {
    if (!list.length) return 0;
    var n = list.filter(function (e) { return progress[e.id] && progress[e.id].box >= 3; }).length;
    return Math.round(n / list.length * 100);
  }

  /* ---------- home ---------- */
  function home() {
    var steps = LEVELS.map(function (l) {
      var v = vocabFor(l.code), share = learnedShare(v);
      return '<a class="step" href="#/grammatik/' + l.code.toLowerCase() + '"><span class="code">' + l.code + '</span>' +
        '<span class="name">' + l.name + '</span><span class="count">' + topicsFor(l.code).length + ' topics, ' + v.length + ' words</span>' +
        '<span class="bar" title="' + share + '% of words learned"><i style="width:' + share + '%"></i></span></a>';
    }).join('');
    main.innerHTML =
      '<section class="hero"><div><h1><span class="art-der">der</span><span class="art-die">die</span><span class="art-das">das</span></h1>' +
      '<p class="lede">German grammar explained in English, from your first sentence at A1 to confident, polished German at C2. With word lists and flashcards for every level.</p>' +
      '<div class="hero-actions"><a class="btn primary" href="#/grammatik">Learn grammar</a><a class="btn" href="#/karteikarten">Practise flashcards</a></div></div>' +
      '<div class="gender-game" aria-live="polite"><h2>Der, die or das? Choose the article.</h2><p class="gg-word" id="gg-word"></p><p class="gg-en" id="gg-en"></p>' +
      '<div class="gg-choices"><button class="c-der" data-a="der">der</button><button class="c-die" data-a="die">die</button><button class="c-das" data-a="das">das</button></div>' +
      '<p class="gg-feedback" id="gg-fb"></p><p class="gg-score" id="gg-score"></p></div></section>' +
      '<section><div class="section-head"><h2>Your path from A1 to C2</h2><p>Each step opens the grammar topics for that level.</p></div><div class="ladder">' + steps + '</div></section>' +
      '<section class="tools"><div><h3>Grammar</h3><p>Every topic has a short explanation, tables, example sentences with translations, typical mistakes and an exercise with answers.</p><a class="more" href="#/grammatik">All topics</a></div>' +
      '<div><h3>Vocabulary</h3><p>Nouns with article and plural, verbs with Präteritum and Perfekt, adjectives with Komparativ and Superlativ, adverbs with example sentences. Search in German or English.</p><a class="more" href="#/wortschatz">Open the word list</a></div>' +
      '<div><h3>Flashcards</h3><p>Flip cards or type your answers and get them checked. Hard words come back more often, easy ones less often. Your progress stays in this browser.</p><a class="more" href="#/karteikarten">Start practising</a></div>' +
      '<div><h3>Conjugation</h3><p>Every verb in the vocabulary conjugated in all persons and tenses, from Präsens to Konjunktiv II and the imperative, with a self-test.</p><a class="more" href="#/konjugation">Look up a verb</a></div>' +
      '<div><h3>Exam simulation</h3><p>Full model tests in the Goethe and telc formats from A1 to C2, with timers, listening texts read aloud, automatic marking and graded writing.</p><a class="more" href="#/pruefungen">Choose an exam</a></div></section>';
    genderGame();
  }

  function genderGame() {
    var pool = VOCAB.filter(function (e) { return e.type === 'N' && /^(der|die|das)$/.test(e.art) && /^(A1|A2|B1)$/.test(e.level); });
    var score = 0, total = 0, current = null, locked = false;
    var w = document.getElementById('gg-word'), en = document.getElementById('gg-en'), fb = document.getElementById('gg-fb'), sc = document.getElementById('gg-score');
    var btns = main.querySelectorAll('.gg-choices button');
    function next() {
      current = pool[Math.floor(Math.random() * pool.length)];
      w.textContent = current.word; en.textContent = current.en; fb.textContent = ''; locked = false;
      btns.forEach(function (b) { b.className = 'c-' + b.dataset.a; });
    }
    function choose(a) {
      if (locked || !current) return;
      locked = true; total++;
      var ok = a === current.art;
      if (ok) score++;
      btns.forEach(function (b) { if (b.dataset.a === current.art) b.classList.add('right'); else b.classList.add('wrong'); });
      w.innerHTML = artHtml(current.art) + ' ' + esc(current.word);
      fb.textContent = ok ? 'Correct!' : 'Not quite. It is ' + current.art + ' ' + current.word + '.';
      sc.textContent = score + ' of ' + total + ' correct';
      setTimeout(next, ok ? 900 : 1800);
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { choose(b.dataset.a); }); });
    if (pool.length) next();
  }

  /* ---------- grammar ---------- */
  function grammarOverview(levelSlug) {
    var only = levelSlug ? levelSlug.toUpperCase() : null;
    var list = only ? LEVELS.filter(function (l) { return l.code === only; }) : LEVELS;
    var blocks = list.map(function (l) {
      var items = topicsFor(l.code).map(function (t) {
        var b = quizBest[t.id];
        return '<li><a href="#/thema/' + t.id + '"><span class="t">' + t.title + '<small>' + t.de + (b !== undefined ? ' <span class="qbadge' + (b >= 8 ? ' good' : '') + '">Quiz ' + b + '/10</span>' : '') + '</small></span><span class="s">' + t.summary + '</span></a></li>';
      }).join('');
      return '<section class="level-block" id="lvl-' + l.code + '"><h2><span class="level-tag">' + l.code + '</span>' + l.name + ' <small style="font-weight:400;color:var(--muted);font-size:17px;margin-left:8px">' + l.en + '</small></h2>' +
        '<p class="desc">' + l.desc + '</p><ul class="topic-list">' + (items || '<li class="empty">Topics for this level are coming soon.</li>') + '</ul>' +
        '<div class="level-links"><a class="btn" href="#/wortschatz?level=' + l.code + '">Vocabulary ' + l.code + '</a><a class="btn" href="#/karteikarten?level=' + l.code + '">Flashcards ' + l.code + '</a></div></section>';
    }).join('');
    var levelNav = LEVELS.map(function (l) {
      return '<a class="chip" aria-pressed="' + (only === l.code) + '" href="#/grammatik/' + l.code.toLowerCase() + '" style="text-decoration:none">' + l.code + '</a>';
    }).join('');
    document.title = (only ? 'Grammar ' + only : 'Grammar') + ' | Deutsch Schritt für Schritt';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>' + (only ? 'Grammar ' + only : 'Grammar from A1 to C2') + '</h1>' +
      '<p class="sub">Choose a topic. Each one explains the rule in English, shows it in German sentences and ends with an exercise.</p></div>' +
      '<div class="chips" style="margin-bottom:28px"><a class="chip" aria-pressed="' + (!only) + '" href="#/grammatik" style="text-decoration:none">All levels</a>' + levelNav + '</div>' + blocks;
  }

  function basicsHTML(id) {
    var b = window.BASICS && window.BASICS[id];
    if (!b) return '';
    var h = '<section class="basics"><h2>What is it?</h2>' + b.what;
    if (b.terms && b.terms.length) {
      h += '<dl class="terms">' + b.terms.map(function (x) {
        return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>';
      }).join('') + '</dl>';
    }
    if (b.when && b.when.length) {
      h += '<h2>When do you use it?</h2><ul class="when">' + b.when.map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul>';
    }
    if (b.english) h += '<div class="note vs-en"><strong>Compared with English</strong><br>' + b.english + '</div>';
    h += '<h2>How it works</h2></section>';
    return h;
  }

  function topicPage(id) {
    var all = window.GRAMMAR, i = all.findIndex(function (t) { return t.id === id; });
    if (i < 0) { main.innerHTML = '<div class="page-head"><h1>Topic not found</h1><p class="sub"><a href="#/grammatik">Back to all topics</a></p></div>'; return; }
    var t = all[i], prev = all[i - 1], next = all[i + 1];
    document.title = t.title + ' (' + t.level + ') | Deutsch Schritt für Schritt';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/grammatik">Grammar</a> / <a href="#/grammatik/' + t.level.toLowerCase() + '">' + t.level + '</a></p>' +
      '<h1><span class="level-tag">' + t.level + '</span>' + t.title + '</h1><p class="sub"><strong style="font-family:var(--sans);font-weight:500;color:var(--ink)">' + t.de + '</strong><br>' + t.summary + '</p></div>' +
      '<div class="topic-layout"><article class="prose" id="prose">' + basicsHTML(t.id) + t.body + '</article><aside class="toc" id="toc"></aside></div>' +
      '<nav class="pager" aria-label="More topics">' +
      (prev ? '<a href="#/thema/' + prev.id + '"><small>Previous topic</small>' + prev.level + ': ' + prev.title + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="#/thema/' + next.id + '"><small>Next topic</small>' + next.level + ': ' + next.title + '</a>' : '') + '</nav>';
    if (window.QUIZ && window.QUIZ[t.id]) buildQuiz(t);
    var hs = main.querySelectorAll('#prose h2');
    var toc = '<h2>On this page</h2><ol>';
    hs.forEach(function (h, k) {
      if (!h.id) h.id = 'abschnitt-' + k;
      toc += '<li><a href="#" data-target="' + h.id + '">' + h.textContent + '</a></li>';
    });
    toc += '</ol><a class="btn" href="#/karteikarten?level=' + t.level + '">Flashcards ' + t.level + '</a>';
    var tocEl = document.getElementById('toc');
    tocEl.innerHTML = toc;
    tocEl.addEventListener('click', function (ev) {
      var a = ev.target.closest('a[data-target]');
      if (!a) return;
      ev.preventDefault();
      document.getElementById(a.dataset.target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ---------- grammar quiz ---------- */
  var quizBest = load('dsfs-quiz', {});
  function parseQuiz(raw) {
    var intro = '', qs = [];
    raw.trim().split('\n').forEach(function (line) {
      line = line.trim();
      if (!line) return;
      if (line.charAt(0) === '@') { intro = line.slice(1).trim(); return; }
      var p = line.split(' ## ');
      qs.push({
        prompt: p[0].trim(),
        answers: p[1].split(' || ').map(function (a) { return a.trim(); }),
        options: p[2] ? p[2].split(' | ').map(function (o) { return o.trim(); }) : null
      });
    });
    return { intro: intro, questions: qs };
  }
  /* lenient for spelling conventions, strict for grammar: case, punctuation, "bitte" and ae/ä do not matter */
  function qnorm(x) {
    return String(x).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[.,!?;:"„“”'’…→]/g, ' ').replace(/\bbitte\b/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function markAnswer(input, answers) {
    var g = qnorm(input);
    if (!g) return 'bad';
    var ns = answers.map(qnorm);
    if (ns.indexOf(g) > -1) return 'ok';
    /* a small typo is tolerated only in long answers, where it cannot be the grammar point itself */
    return ns.some(function (a) { return a.length >= 15 && lev(g, a) <= 2; }) ? 'almost' : 'bad';
  }
  function promptHtml(p) { return esc(p).replace(/_{3,}/g, '<span class="blank" aria-label="gap"></span>'); }

  function buildQuiz(t) {
    var data = parseQuiz(window.QUIZ[t.id]), n = data.questions.length, state = [];
    var prose = document.getElementById('prose');
    var items = data.questions.map(function (q, i) {
      var control = q.options
        ? '<div class="qopts" role="group" aria-label="Answer options">' + q.options.map(function (o) {
            return '<button type="button" class="qopt" data-o="' + esc(o) + '">' + esc(o) + '</button>'; }).join('') + '</div>'
        : '<div class="qrow"><input class="qin" id="q' + i + '" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer to question ' + (i + 1) + '"><button type="button" class="btn qcheck">Check</button></div>';
      return '<li class="qitem" data-i="' + i + '"><p class="qprompt">' + promptHtml(q.prompt) + '</p>' + control + '<p class="qfb" aria-live="polite"></p></li>';
    }).join('');
    var sec = document.createElement('section');
    sec.className = 'quiz';
    sec.innerHTML = '<h2 id="quiz">Quiz</h2><p class="qintro">' + esc(data.intro) + ' Press Enter to check a typed answer. You can type ae, oe, ue and ss instead of ä, ö, ü and ß.</p>' +
      '<div class="umlauts qkeys" aria-label="Insert special characters">' + ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(function (c) { return '<button type="button" class="ukey" data-ch="' + c + '">' + c + '</button>'; }).join('') + '</div>' +
      '<ol class="qlist">' + items + '</ol>' +
      '<div class="qbar"><p class="qscore" id="qscore" role="status"></p><div class="qbtns"><button type="button" class="btn primary" id="qall">Check all answers</button><button type="button" class="btn" id="qreset">Start again</button></div></div>';
    prose.appendChild(sec);
    var lastInput = null;

    function setFeedback(li, q, res) {
      li.classList.remove('r-ok', 'r-almost', 'r-bad');
      li.classList.add('r-' + res);
      var fb = li.querySelector('.qfb');
      fb.textContent = res === 'ok' ? 'Correct.' : res === 'almost' ? 'Almost, check the spelling: ' + q.answers[0] : 'Answer: ' + q.answers[0];
    }
    function score() {
      var done = state.filter(Boolean).length, right = state.filter(function (r) { return r === 'ok' || r === 'almost'; }).length;
      var el = document.getElementById('qscore');
      if (!done) { el.textContent = n + ' questions' + (quizBest[t.id] !== undefined ? '. Your best score: ' + quizBest[t.id] + ' / ' + n + '.' : '.'); return; }
      el.textContent = 'Score: ' + right + ' / ' + done + ' answered' + (done === n ? '' : ', ' + (n - done) + ' to go') + '.';
      if (done === n) {
        var msg = right === n ? ' Perfect!' : right >= n * 0.8 ? ' Very good.' : right >= n * 0.5 ? ' Good start. Read the explanation again and retry the red ones.' : ' Read the explanation above again, then press Start again.';
        el.textContent = 'Score: ' + right + ' / ' + n + '.' + msg;
        if (quizBest[t.id] === undefined || right > quizBest[t.id]) { quizBest[t.id] = right; save('dsfs-quiz', quizBest); }
      }
    }
    function checkTyped(li) {
      var i = +li.dataset.i, inp = li.querySelector('.qin');
      if (state[i] || !inp.value.trim()) return false;
      state[i] = markAnswer(inp.value, data.questions[i].answers);
      inp.readOnly = true;
      li.querySelector('.qcheck').disabled = true;
      setFeedback(li, data.questions[i], state[i]);
      score();
      return true;
    }
    sec.querySelectorAll('.qitem').forEach(function (li) {
      var i = +li.dataset.i, q = data.questions[i];
      var inp = li.querySelector('.qin');
      if (inp) {
        inp.addEventListener('focus', function () { lastInput = inp; });
        inp.addEventListener('keydown', function (ev) {
          if (ev.key !== 'Enter') return;
          ev.preventDefault();
          checkTyped(li);
          var next = sec.querySelector('.qin:not([readonly])');
          if (next) next.focus();
        });
        li.querySelector('.qcheck').addEventListener('click', function () { checkTyped(li); });
      } else {
        li.querySelectorAll('.qopt').forEach(function (b) {
          b.addEventListener('click', function () {
            if (state[i]) return;
            state[i] = q.answers.indexOf(b.dataset.o) > -1 ? 'ok' : 'bad';
            li.querySelectorAll('.qopt').forEach(function (x) {
              x.disabled = true;
              if (q.answers.indexOf(x.dataset.o) > -1) x.classList.add('is-right');
              else if (x === b) x.classList.add('is-wrong');
            });
            setFeedback(li, q, state[i]);
            score();
          });
        });
      }
    });
    sec.querySelectorAll('.ukey').forEach(function (b) {
      b.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
      b.addEventListener('click', function () {
        var inp = lastInput;
        if (!inp || inp.readOnly) return;
        var a = inp.selectionStart, z = inp.selectionEnd;
        inp.value = inp.value.slice(0, a) + b.dataset.ch + inp.value.slice(z);
        inp.focus(); inp.setSelectionRange(a + 1, a + 1);
      });
    });
    document.getElementById('qall').addEventListener('click', function () {
      sec.querySelectorAll('.qitem').forEach(function (li) {
        var i = +li.dataset.i;
        if (state[i]) return;
        if (li.querySelector('.qin')) {
          if (!checkTyped(li)) { state[i] = 'bad'; li.querySelector('.qin').readOnly = true; li.querySelector('.qcheck').disabled = true; setFeedback(li, data.questions[i], 'bad'); }
        } else {
          state[i] = 'bad';
          li.querySelectorAll('.qopt').forEach(function (x) { x.disabled = true; if (data.questions[i].answers.indexOf(x.dataset.o) > -1) x.classList.add('is-right'); });
          setFeedback(li, data.questions[i], 'bad');
        }
      });
      score();
    });
    document.getElementById('qreset').addEventListener('click', function () {
      state = [];
      sec.querySelectorAll('.qitem').forEach(function (li) {
        li.classList.remove('r-ok', 'r-almost', 'r-bad');
        li.querySelector('.qfb').textContent = '';
        var inp = li.querySelector('.qin');
        if (inp) { inp.value = ''; inp.readOnly = false; li.querySelector('.qcheck').disabled = false; }
        li.querySelectorAll('.qopt').forEach(function (x) { x.disabled = false; x.classList.remove('is-right', 'is-wrong'); });
      });
      score();
      var first = sec.querySelector('.qin, .qopt');
      if (first) first.focus();
    });
    score();
  }

  /* ---------- vocabulary page ---------- */
  function chipRow(name, options, active) {
    return '<div class="chips" role="group" aria-label="' + name + '">' + options.map(function (o) {
      return '<button class="chip" data-group="' + name + '" data-val="' + o[0] + '" aria-pressed="' + (active === o[0]) + '">' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  var WORD_DEFS = {
    N: { name: 'Nouns', de: 'Nomen', what: 'A noun names a person, animal, place, thing or idea: <span class="de">die Frau, der Hund, die Stadt, das Glück</span>. In German every noun starts with a capital letter and has a gender: masculine (<span class="art art-der">der</span>), feminine (<span class="art art-die">die</span>) or neuter (<span class="art art-das">das</span>).', forms: 'Shown here: the article and the plural. Learn every noun with both.' },
    V: { name: 'Verbs', de: 'Verben', what: 'A verb describes an action, an event or a state: <span class="de">gehen, essen, regnen, sein</span>. It changes its ending for the person (ich gehe, du gehst) and its form for the tense.', forms: 'Shown here: the Präteritum (simple past) and the Perfekt (present perfect), both in the er/sie/es form.' },
    A: { name: 'Adjectives', de: 'Adjektive', what: 'An adjective describes a noun: what someone or something is like: <span class="de">ein großes Haus, die Suppe ist heiß</span>. Before a noun it takes an ending; after <span class="de">sein</span> or <span class="de">werden</span> it does not.', forms: 'Shown here: the Komparativ (bigger, more …) and the Superlativ (am größten, the most …).' },
    D: { name: 'Adverbs', de: 'Adverbien', what: 'An adverb gives extra information about when, where, how, how often or why something happens: <span class="de">heute, dort, gern, oft, deshalb</span>. Adverbs never change their form.', forms: 'Shown here: the kind of adverb (time, place, manner …) and an example sentence.' }
  };
  function defHtml(type) {
    if (type !== 'all' && WORD_DEFS[type]) {
      var d = WORD_DEFS[type];
      return '<div class="wdef one"><h2>' + d.name + ' <small>' + d.de + '</small></h2><p>' + d.what + '</p><p class="wforms">' + d.forms + '</p></div>';
    }
    return '<div class="wdef all">' + ['N', 'V', 'A', 'D'].map(function (k) {
      var d = WORD_DEFS[k];
      return '<div><h2>' + d.name + ' <small>' + d.de + '</small></h2><p>' + d.what + '</p></div>';
    }).join('') + '</div>';
  }
  function vocabPage(q) {
    var state = { level: q.level || 'all', type: q.type || 'all', text: '' };
    document.title = 'Vocabulary | Deutsch Schritt für Schritt';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>Vocabulary</h1><p class="sub">' + VOCAB.length +
      ' words from A1 to C2. Nouns show their article in colour: <span class="art art-der">der</span>, <span class="art art-die">die</span>, <span class="art art-das">das</span>.</p></div>' +
      '<div class="filters"><div class="fgroup"><span>Level</span>' + chipRow('level', [['all', 'All']].concat(LEVELS.map(function (l) { return [l.code, l.code]; })), state.level) + '</div>' +
      '<div class="fgroup"><span>Word type</span>' + chipRow('type', [['all', 'All'], ['N', 'Nouns'], ['V', 'Verbs'], ['A', 'Adjectives'], ['D', 'Adverbs']], state.type) + '</div>' +
      '<div class="fgroup"><label for="vsearch"><span style="font-size:14px;color:var(--muted)">Search</span></label><input id="vsearch" class="search" type="search" placeholder="German or English" autocomplete="off"></div></div>' +
      '<div id="vdef"></div><p class="vcount" id="vcount"></p><div style="overflow-x:auto"><table class="vtable"><thead><tr><th>Word</th><th>Forms &amp; details</th><th>English</th><th class="hide-s">Level</th></tr></thead><tbody id="vbody"></tbody></table></div>';
    var body = document.getElementById('vbody'), count = document.getElementById('vcount');
    function draw() {
      var t = norm(state.text);
      var rows = VOCAB.filter(function (e) {
        if (state.level !== 'all' && e.level !== state.level) return false;
        if (state.type !== 'all' && e.type !== state.type) return false;
        if (t && norm(e.word).indexOf(t) < 0 && norm(e.en).indexOf(t) < 0) return false;
        return true;
      });
      document.getElementById('vdef').innerHTML = defHtml(state.type);
      count.textContent = rows.length + (rows.length === 1 ? ' word' : ' words');
      body.innerHTML = rows.length ? rows.map(function (e) {
        return '<tr><td class="w">' + (e.type === 'V' && window.ConjUI ? '<a class="vconj" href="' + window.ConjUI.link(e.word) + '" title="Show conjugation">' + wordHtml(e) + '</a>' : wordHtml(e)) + '</td><td class="f">' + formsHtml(e) + '</td><td class="e">' + esc(e.en) + '</td><td class="l hide-s">' + e.level + '</td></tr>';
      }).join('') : '<tr><td colspan="4" class="empty">No words match. Try another spelling or choose "All".</td></tr>';
    }
    main.querySelectorAll('.chip[data-group]').forEach(function (b) {
      b.addEventListener('click', function () {
        state[b.dataset.group] = b.dataset.val;
        main.querySelectorAll('.chip[data-group="' + b.dataset.group + '"]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        draw();
      });
    });
    document.getElementById('vsearch').addEventListener('input', function (ev) { state.text = ev.target.value; draw(); });
    draw();
  }

  /* ---------- flashcards ---------- */
  function flashPage(q) {
    var saved = load('dsfs-settings', { levels: ['A1'], types: ['N', 'V', 'A', 'D'], dir: 'de', perSession: 20 });
    if (q.level) saved.levels = [q.level];
    if (!saved.mode) saved.mode = 'flip';
    if (saved.forms === undefined) saved.forms = true;
    if (!saved.advSeen) { if (saved.types.indexOf('D') < 0) saved.types.push('D'); saved.advSeen = true; save('dsfs-settings', saved); }
    var s = saved;
    document.title = 'Flashcards | Deutsch Schritt für Schritt';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>Flashcards</h1><p class="sub">Turn the cards over and rate yourself, or type your answers and let the site check them. Words you miss come back sooner; words you know wait longer.</p></div>' +
      '<div class="fc-wrap"><aside class="fc-setup" id="setup"></aside><section class="fc-stage" id="stage" aria-live="polite"></section></div>';
    var setup = document.getElementById('setup'), stage = document.getElementById('stage');

    function pool() { return VOCAB.filter(function (e) { return s.levels.indexOf(e.level) > -1 && s.types.indexOf(e.type) > -1; }); }
    function drawSetup() {
      var p = pool(), now = Date.now(), boxes = [0, 0, 0, 0, 0], due = 0, fresh = 0;
      p.forEach(function (e) {
        var r = progress[e.id];
        if (!r) { fresh++; return; }
        boxes[r.box - 1]++;
        if (r.due <= now) due++;
      });
      function multi(name, opts, arr) {
        return '<div class="chips" role="group" aria-label="' + name + '">' + opts.map(function (o) {
          return '<button class="chip" data-multi="' + name + '" data-val="' + o[0] + '" aria-pressed="' + (arr.indexOf(o[0]) > -1) + '">' + o[1] + '</button>';
        }).join('') + '</div>';
      }
      setup.innerHTML = '<div class="fgroup"><span>Level</span>' + multi('levels', LEVELS.map(function (l) { return [l.code, l.code]; }), s.levels) + '</div>' +
        '<div class="fgroup"><span>Word type</span>' + multi('types', [['N', 'Nouns'], ['V', 'Verbs'], ['A', 'Adjectives'], ['D', 'Adverbs']], s.types) + '</div>' +
        '<div class="fgroup"><span>Practice mode</span><div class="chips"><button class="chip" data-mode="flip" aria-pressed="' + (s.mode === 'flip') + '">Flip cards</button><button class="chip" data-mode="type" aria-pressed="' + (s.mode === 'type') + '">Type answers</button></div></div>' +
        (s.mode === 'type' ? '<div class="fgroup"><span>Also ask for</span><div class="chips"><button class="chip" data-forms="1" aria-pressed="' + s.forms + '">Word + forms</button><button class="chip" data-forms="0" aria-pressed="' + !s.forms + '">Word only</button></div></div>' : '') +
        '<div class="fgroup"><span>Direction</span><div class="chips"><button class="chip" data-dir="de" aria-pressed="' + (s.dir === 'de') + '">German first</button><button class="chip" data-dir="en" aria-pressed="' + (s.dir === 'en') + '">English first</button></div></div>' +
        '<div class="fgroup"><span>New cards per round</span><div class="chips">' + [10, 20, 40].map(function (n) { return '<button class="chip" data-per="' + n + '" aria-pressed="' + (s.perSession === n) + '">' + n + '</button>'; }).join('') + '</div></div>' +
        '<div class="fc-stats">' + p.length + ' cards selected: ' + fresh + ' new, ' + due + ' due.<div class="boxes">' +
        boxes.map(function (b, k) { return '<div title="Box ' + (k + 1) + '"><b>' + b + '</b>Box ' + (k + 1) + '</div>'; }).join('') + '</div></div>' +
        '<button class="btn" id="reset" style="align-self:flex-start;font-size:14px;padding:9px 14px">Reset progress for this selection</button>';
      setup.querySelectorAll('[data-multi]').forEach(function (b) {
        b.addEventListener('click', function () {
          var arr = s[b.dataset.multi], v = b.dataset.val, k = arr.indexOf(v);
          if (k > -1) { if (arr.length > 1) arr.splice(k, 1); } else arr.push(v);
          save('dsfs-settings', s); drawSetup(); idle();
        });
      });
      setup.querySelectorAll('[data-dir]').forEach(function (b) { b.addEventListener('click', function () { s.dir = b.dataset.dir; save('dsfs-settings', s); drawSetup(); idle(); }); });
      setup.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { s.mode = b.dataset.mode; save('dsfs-settings', s); drawSetup(); idle(); }); });
      setup.querySelectorAll('[data-forms]').forEach(function (b) { b.addEventListener('click', function () { s.forms = b.dataset.forms === '1'; save('dsfs-settings', s); drawSetup(); idle(); }); });
      setup.querySelectorAll('[data-per]').forEach(function (b) { b.addEventListener('click', function () { s.perSession = +b.dataset.per; save('dsfs-settings', s); drawSetup(); idle(); }); });
      var resetBtn = document.getElementById('reset');
      resetBtn.addEventListener('click', function () {
        if (!resetBtn.dataset.armed) {
          resetBtn.dataset.armed = '1';
          resetBtn.textContent = 'Click again to delete progress for ' + p.length + ' cards';
          return;
        }
        p.forEach(function (e) { delete progress[e.id]; });
        save('dsfs-progress', progress); drawSetup(); idle();
      });
    }

    function buildQueue() {
      var p = pool(), now = Date.now();
      var dueCards = p.filter(function (e) { return progress[e.id] && progress[e.id].due <= now; })
        .sort(function (a, b) { return progress[a.id].box - progress[b.id].box; });
      var fresh = p.filter(function (e) { return !progress[e.id]; });
      for (var i = fresh.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = fresh[i]; fresh[i] = fresh[j]; fresh[j] = t; }
      return dueCards.concat(fresh.slice(0, s.perSession));
    }

    function idle() {
      stopKeys();
      var n = buildQueue().length;
      stage.innerHTML = n
        ? '<div class="done"><h2>' + n + ' cards ready</h2><p>' + (s.mode === 'type'
            ? 'Type your answer and press Enter. Small typos count as almost right, and ae, oe, ue and ss work in place of ä, ö, ü and ß.'
            : 'Click a card or press the space bar to turn it over, then rate how well you knew it.') +
          '</p><button class="btn primary" id="start">Start round</button></div>'
        : '<div class="done"><h2>All done</h2><p>No cards are due in this selection. Choose another level, or come back tomorrow.</p></div>';
      var b = document.getElementById('start');
      if (b) { b.addEventListener('click', session); b.focus(); }
    }

    function schedule(card, correct) {
      var r = progress[card.id] || { box: 0 };
      var box = correct ? Math.min(5, Math.max(r.box, 1) + 1) : 1;
      progress[card.id] = { box: box, due: Date.now() + INTERVAL_DAYS[box] * DAY };
      save('dsfs-progress', progress);
    }

    function fieldsFor(e) {
      var f = [];
      if (s.dir === 'de') f.push({ label: 'English', check: function (v) { return checkEn(v, e.en); }, answer: e.en });
      else {
        if (e.type === 'N') f.push({ label: 'Article', article: true, answer: e.art === 'pl' ? 'die' : e.art });
        f.push({ label: 'German', check: function (v) { return checkDe(v, [e.word, e.word.replace(/^sich /, '')]); }, answer: e.word });
      }
      if (s.forms) {
        if (e.type === 'N' && e.art !== 'pl' && e.f1 !== '—')
          f.push({ label: 'Plural', hint: 'e.g. Männer', check: function (v) { return checkDe(v, [e.f1, 'die ' + e.f1]); }, answer: 'die ' + e.f1 });
        if (e.type === 'V') {
          f.push({ label: 'Präteritum', hint: 'er/sie/es form', check: function (v) { return checkDe(v, [e.f1, 'er ' + e.f1]); }, answer: e.f1 });
          f.push({ label: 'Perfekt', hint: 'e.g. hat gemacht / ist gegangen', check: function (v) { return checkDe(v, [e.f2, 'er ' + e.f2]); }, answer: e.f2 });
        }
        if (e.type === 'A' && e.f1 !== '—') {
          f.push({ label: 'Komparativ', check: function (v) { return checkDe(v, [e.f1]); }, answer: e.f1 });
          f.push({ label: 'Superlativ', hint: 'am …sten', check: function (v) { return checkDe(v, [e.f2, e.f2.replace(/^am /, '')]); }, answer: e.f2 });
        }
      }
      return f;
    }

    function typeSession() {
      var queue = buildQueue(), total = queue.length, doneCount = 0, firstRight = 0, seen = {}, cur, fields, lastInput = null;
      stopKeys();
      function show() {
        if (!queue.length) {
          stage.innerHTML = '<div class="done"><h2>Round complete</h2><p>' + firstRight + ' of ' + Object.keys(seen).length + ' cards correct on the first try. Your progress is saved.</p><button class="btn primary" id="again">New round</button></div>';
          document.getElementById('again').addEventListener('click', function () { drawSetup(); idle(); });
          drawSetup();
          return;
        }
        cur = queue[0]; fields = fieldsFor(cur);
        var g = s.dir === 'de' && cur.type === 'N' && cur.art !== 'pl' ? ' g-' + cur.art : '';
        var prompt = s.dir === 'de' ? '<div class="front">' + wordHtml(cur) + '</div>' : '<div class="front en">' + esc(cur.en) + '</div>';
        var pct = Math.round(doneCount / Math.max(total, 1) * 100);
        var inputs = fields.map(function (f, k) {
          if (f.article) {
            return '<div class="tfield" data-k="' + k + '"><span class="tlabel">Article</span><div class="tart" role="group" aria-label="Article">' +
              ['der', 'die', 'das'].map(function (a) { return '<button type="button" class="chip c-' + a + '" data-art="' + a + '" aria-pressed="false">' + a + '</button>'; }).join('') +
              '</div><span class="tsol"></span></div>';
          }
          return '<div class="tfield" data-k="' + k + '"><label class="tlabel" for="tin' + k + '">' + f.label + '</label>' +
            '<input class="tinput" id="tin' + k + '" type="text" autocomplete="off" autocapitalize="off" spellcheck="false"' + (f.hint ? ' placeholder="' + f.hint + '"' : '') + '><span class="tsol"></span></div>';
        }).join('');
        stage.innerHTML = '<div class="fc-progress"><span>' + doneCount + ' / ' + total + '</span><span class="track"><i style="width:' + pct + '%"></i></span><span>' + queue.length + ' left</span></div>' +
          '<form class="card typing' + g + '" id="tform" autocomplete="off"><span class="kind">' + TYPE_NAMES[cur.type] + '</span><span class="lvl">' + cur.level + '</span>' + prompt +
          '<div class="tfields">' + inputs + '</div>' +
          '<div class="umlauts" aria-label="Insert special characters">' + ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(function (c) { return '<button type="button" class="ukey" data-ch="' + c + '">' + c + '</button>'; }).join('') + '</div>' +
          '<p class="verdict" id="verdict" role="status"></p>' +
          '<div class="tactions" id="tactions"><button type="submit" class="btn primary" id="tcheck">Check</button><button type="button" class="btn" id="tskip">Show answer</button></div></form>' +
          '<p class="keys"><kbd>Enter</kbd> check, then next</p>';
        var form = document.getElementById('tform');
        form.querySelectorAll('.tinput').forEach(function (inp) { inp.addEventListener('focus', function () { lastInput = inp; }); });
        form.querySelectorAll('[data-art]').forEach(function (b) {
          b.addEventListener('click', function () {
            if (form.dataset.checked) return;
            form.querySelectorAll('[data-art]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
            var first = form.querySelector('.tinput'); if (first) first.focus();
          });
        });
        form.querySelectorAll('.ukey').forEach(function (b) {
          b.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
          b.addEventListener('click', function () {
            var inp = lastInput || form.querySelector('.tinput');
            if (!inp || inp.disabled) return;
            var a = inp.selectionStart, z = inp.selectionEnd;
            inp.value = inp.value.slice(0, a) + b.dataset.ch + inp.value.slice(z);
            inp.focus(); inp.setSelectionRange(a + 1, a + 1);
          });
        });
        form.addEventListener('submit', function (ev) { ev.preventDefault(); if (form.dataset.checked) next(); else check(false); });
        document.getElementById('tskip').addEventListener('click', function () { check(true); });
        var firstInput = form.querySelector('.tinput');
        if (firstInput && !fields[0].article) firstInput.focus({ preventScroll: true });
        else form.querySelector('[data-art]').focus({ preventScroll: true });
      }

      var lastCorrect = false, curFirst = false;
      function check(gaveUp) {
        var form = document.getElementById('tform');
        form.dataset.checked = '1';
        var results = fields.map(function (f, k) {
          var box = form.querySelector('.tfield[data-k="' + k + '"]'), res;
          if (f.article) {
            var chosen = form.querySelector('[data-art][aria-pressed="true"]');
            res = !gaveUp && chosen && chosen.dataset.art === f.answer ? 'ok' : 'bad';
            form.querySelectorAll('[data-art]').forEach(function (x) { x.disabled = true; });
          } else {
            var inp = box.querySelector('input');
            res = gaveUp ? 'bad' : f.check(inp.value);
            inp.disabled = true;
          }
          box.classList.add('r-' + res);
          if (res !== 'ok') box.querySelector('.tsol').textContent = (res === 'almost' ? 'Correct spelling: ' : 'Answer: ') + f.answer;
          return res;
        });
        var bad = results.filter(function (r) { return r === 'bad'; }).length;
        var almost = results.filter(function (r) { return r === 'almost'; }).length;
        lastCorrect = bad === 0;
        var v = document.getElementById('verdict');
        v.className = 'verdict ' + (bad ? 'v-bad' : almost ? 'v-almost' : 'v-ok');
        v.textContent = gaveUp ? 'Here is the answer. This card will come back shortly.'
          : bad ? (bad === results.length ? 'Not quite. This card will come back shortly.' : 'Partly correct. This card will come back shortly.')
          : almost ? 'Almost! Check the spelling.' : 'Correct!';
        curFirst = !seen[cur.id];
        seen[cur.id] = true;
        if (curFirst && lastCorrect) firstRight++;
        if (s.dir === 'en' && cur.type === 'N' && cur.art !== 'pl') form.classList.add('g-' + cur.art);
        var actions = document.getElementById('tactions');
        actions.innerHTML = '<button type="submit" class="btn primary" id="tnext">Next</button>' +
          (bad && !gaveUp ? '<button type="button" class="btn" id="tover">I was right</button>' : '');
        document.getElementById('tnext').focus({ preventScroll: true });
        var over = document.getElementById('tover');
        if (over) over.addEventListener('click', function () { lastCorrect = true; if (curFirst) firstRight++; next(); });
      }
      function next() {
        schedule(cur, lastCorrect);
        queue.shift();
        if (lastCorrect) doneCount++;
        else { queue.splice(Math.min(3, queue.length), 0, cur); total = Math.max(total, doneCount + queue.length); }
        show();
      }
      show();
    }

    function session() {
      if (s.mode === 'type') return typeSession();
      var queue = buildQueue(), total = queue.length, doneCount = 0, flipped = false, cur;
      function show() {
        if (!queue.length) {
          stopKeys();
          stage.innerHTML = '<div class="done"><h2>Round complete</h2><p>You reviewed ' + doneCount + ' cards. Your progress is saved.</p><button class="btn primary" id="again">New round</button></div>';
          document.getElementById('again').addEventListener('click', function () { drawSetup(); idle(); });
          drawSetup();
          return;
        }
        cur = queue[0]; flipped = false;
        var g = cur.type === 'N' && cur.art !== 'pl' ? ' g-' + cur.art : '';
        var front = s.dir === 'de' ? '<div class="front">' + wordHtml(cur) + '</div>' : '<div class="front en">' + esc(cur.en) + '</div>';
        var pct = Math.round(doneCount / Math.max(total, 1) * 100);
        stage.innerHTML = '<div class="fc-progress"><span>' + doneCount + ' / ' + total + '</span><span class="track"><i style="width:' + pct + '%"></i></span><span>' + queue.length + ' left</span></div>' +
          '<div class="card' + (s.dir === 'de' ? g : '') + '" id="card" role="button" tabindex="0" aria-label="Turn card over"><span class="kind">' + TYPE_NAMES[cur.type] + '</span><span class="lvl">' + cur.level + '</span>' + front +
          '<div class="back" id="back" hidden></div><span class="hint">Click or press space to turn over</span></div>' +
          '<div class="grade" id="grade" hidden><button class="g-again" data-g="1">Again<small>1, comes back soon</small></button><button class="g-good" data-g="2">Good<small>2, see it later</small></button><button class="g-easy" data-g="3">Easy<small>3, much later</small></button></div>' +
          '<p class="keys"><kbd>Space</kbd> turn over &nbsp; <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> rate</p>';
        var card = document.getElementById('card');
        card.addEventListener('click', flip);
        card.focus({ preventScroll: true });
        stage.querySelectorAll('[data-g]').forEach(function (b) { b.addEventListener('click', function () { grade(+b.dataset.g); }); });
      }
      function backHtml(e) {
        var rows = '';
        if (e.type === 'N') rows = '<dt>Plural</dt><dd>' + esc(formsText(e)) + '</dd>';
        if (e.type === 'V') rows = '<dt>Präteritum</dt><dd>' + esc(e.f1) + '</dd><dt>Perfekt</dt><dd>' + esc(e.f2) + '</dd>';
        if (e.type === 'D') rows = '<dt>Kind</dt><dd>' + esc(ADV_KIND[e.cat] || e.cat) + '</dd><dt>Example</dt><dd>' + esc(e.ex) + '</dd>';
        if (e.type === 'A' && e.f1 !== '—') rows = '<dt>Komparativ</dt><dd>' + esc(e.f1) + '</dd><dt>Superlativ</dt><dd>' + esc(e.f2) + '</dd>';
        var top = s.dir === 'de' ? '<p class="meaning">' + esc(e.en) + '</p>' : '<p class="front" style="font-size:36px;margin:0 0 14px">' + wordHtml(e) + '</p>';
        return top + (rows ? '<dl>' + rows + '</dl>' : '');
      }
      function flip() {
        if (flipped) return;
        flipped = true;
        var card = document.getElementById('card'), back = document.getElementById('back');
        back.innerHTML = backHtml(cur); back.hidden = false;
        card.classList.add('flipped', 'flip-anim');
        if (s.dir === 'en' && cur.type === 'N' && cur.art !== 'pl') card.classList.add('g-' + cur.art);
        document.getElementById('grade').hidden = false;
      }
      function grade(g) {
        if (!flipped) return;
        var r = progress[cur.id] || { box: 0 };
        var box;
        if (g === 1) box = 1;
        else if (g === 2) box = Math.min(5, Math.max(r.box, 1) + 1);
        else box = Math.min(5, Math.max(r.box, 1) + 2);
        progress[cur.id] = { box: box, due: Date.now() + INTERVAL_DAYS[box] * DAY };
        save('dsfs-progress', progress);
        queue.shift();
        if (g === 1) queue.splice(Math.min(3, queue.length), 0, cur);
        else doneCount++;
        if (g === 1) total = Math.max(total, doneCount + queue.length);
        show();
      }
      listenKeys(function (ev) {
        if (ev.target.tagName === 'INPUT') return;
        if (ev.key === ' ' || ev.key === 'Enter') { if (!flipped) { ev.preventDefault(); flip(); } }
        else if (flipped && /^[123]$/.test(ev.key)) grade(+ev.key);
      });
      show();
    }

    drawSetup();
    idle();
  }

  window.DS = { main: main, load: load, save: save, esc: esc, setNav: setNav };
  render();
})();
