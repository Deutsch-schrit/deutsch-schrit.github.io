/*
  Exam simulation engine.
  Exam data lives in js/exams/*.js as EXAMS['<id>'] = { ... } (see js/exams/README.md).
  The engine is called from app.js through window.ExamUI.
*/
window.EXAMS = window.EXAMS || {};
(function () {
  'use strict';

  var LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var PROVIDERS = {
    goethe: { name: 'Goethe-Institut', short: 'Goethe' },
    telc: { name: 'telc', short: 'telc' }
  };
  var CONNECTORS = ['und', 'aber', 'oder', 'denn', 'sondern', 'weil', 'dass', 'wenn', 'als', 'ob', 'obwohl', 'deshalb', 'deswegen', 'darum',
    'trotzdem', 'außerdem', 'zuerst', 'dann', 'danach', 'schließlich', 'zum schluss', 'damit', 'sodass', 'während', 'nachdem', 'bevor',
    'jedoch', 'allerdings', 'dennoch', 'folglich', 'daher', 'zudem', 'darüber hinaus', 'einerseits', 'andererseits', 'zwar', 'nicht nur',
    'sowohl', 'weder', 'je', 'indem', 'zumal', 'hingegen', 'wohingegen', 'insofern', 'somit', 'erstens', 'zweitens', 'abschließend',
    'meiner meinung nach', 'ich bin der meinung', 'ich finde', 'zum beispiel', 'beispielsweise', 'zunächst', 'anschließend', 'stattdessen',
    'vielmehr', 'zudem', 'ferner', 'gleichzeitig', 'insgesamt', 'nämlich', 'falls', 'sobald', 'sowie', 'obgleich', 'wenngleich', 'dagegen',
    'hinzu kommt', 'tatsächlich', 'deshalb', 'also', 'auch', 'leider', 'natürlich'];

  function D() { return window.DS; }
  function esc(s) { return D().esc(s); }
  function results() { return D().load('dsfs-exams', {}); }
  function saveResult(examId, modId, data) {
    var r = results();
    r[examId] = r[examId] || {};
    r[examId][modId] = data;
    D().save('dsfs-exams', r);
  }
  function norm(x) {
    return String(x).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[.,!?;:"„“”'’]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function wordCount(t) { var m = t.trim().match(/[A-Za-zÄÖÜäöüß0-9][\wÄÖÜäöüß\-]*/g); return m ? m.length : 0; }
  function fmtTime(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }

  /* ---------- text to speech for listening ----------
     Picks the most natural German voices the device offers (neural / premium / enhanced voices first),
     gives women and men their own voices, reads sentence by sentence with short pauses, and lets the
     learner choose voices and speed. Choices are saved in localStorage (dsfs-voice). */
  var HAS_TTS = 'speechSynthesis' in window;
  var voices = [];
  var FEM_V = /katja|amala|elke|gisela|klarissa|louisa|maja|tanja|anna|petra|helena|hedda|marlene|vicki|seraphina|ingrid|sabine|leonie|lea\b|google deutsch|female|weiblich/i;
  var MALE_V = /conrad|killian|kasper|bernd|christoph|ralf|florian|markus|yannick|stefan|martin|hans|jonas|\bmale\b|männlich/i;
  function vScore(v) {
    var n = v.name + ' ' + (v.voiceURI || ''), sc = 0;
    if (/natural|neural/i.test(n)) sc += 60;
    if (/online/i.test(n)) sc += 15;
    if (/premium/i.test(n)) sc += 55;
    if (/enhanced|erweitert|verbessert/i.test(n)) sc += 45;
    if (/google/i.test(n)) sc += 35;
    if (/multilingual/i.test(n)) sc -= 5;
    if (/espeak|compact|eloquence|novelty/i.test(n)) sc -= 80;
    if (/^de[-_]DE/i.test(v.lang)) sc += 5;
    return sc;
  }
  function vGender(v) { return FEM_V.test(v.name) ? 'f' : MALE_V.test(v.name) ? 'm' : '?'; }
  function loadVoices() {
    if (!HAS_TTS) return;
    voices = window.speechSynthesis.getVoices()
      .filter(function (v) { return /^de(-|_|$)/i.test(v.lang); })
      .map(function (v) { return { v: v, score: vScore(v), g: vGender(v) }; })
      .sort(function (a, b) { return b.score - a.score; });
    var panel = document.querySelector('.voice-panel');
    if (panel) fillVoicePanel(panel);
  }
  if (HAS_TTS) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function vPrefs() { try { return JSON.parse(localStorage.getItem('dsfs-voice')) || {}; } catch (e) { return {}; } }
  function vSave(p) { try { localStorage.setItem('dsfs-voice', JSON.stringify(p)); } catch (e) {} }

  var NARRATOR = /^(durchsage|ansage|nachricht|nachrichten|radio|praxis|kaufhaus|hotel|autowerkstatt|gleis|bus|anrufbeantworter|mailbox)/i;
  var FEM_S = /^(frau|mama|oma)|(in|erin)$|in \d+$|^(miriam|lena|ayşe|ayse|jana|anna|sara|petra|monika|maria|julia|lisa|sophie|emma)\b/i;
  var MALE_S = /^(herr|mann|papa|opa)|^(moderator|sprecher|referent|dozent|student|kellner|kunde|verkäufer|hausarzt|datenschützer|gast)\b|^(tim|tom|jakob|markus|jonas|lukas|paul|max|ben|david)\b/i;
  function speakerGender(label) {
    if (NARRATOR.test(label)) return 'n';
    if (/^(frau|herr)\b/i.test(label)) return /^frau/i.test(label) ? 'f' : 'm';
    if (FEM_S.test(label) && !/^(herr|mann)/i.test(label)) return 'f';
    if (MALE_S.test(label)) return 'm';
    return null;
  }
  function candidates(g) {
    var p = vPrefs(), list = voices.filter(function (x) { return x.g === g; });
    if (!list.length) list = voices.slice();
    var want = g === 'm' ? p.m : p.f;
    if (want) {
      var hit = voices.filter(function (x) { return x.v.voiceURI === want; })[0];
      if (hit) list = [hit].concat(list.filter(function (x) { return x !== hit; }));
    }
    return list;
  }
  function assignVoices(lines) {
    var map = {}, count = { f: 0, m: 0 }, unknown = 0;
    lines.forEach(function (l) {
      if (map.hasOwnProperty(l[0])) return;
      var g = speakerGender(l[0]);
      if (g === 'n') g = 'f';
      if (!g) g = unknown++ % 2 === 0 ? 'f' : 'm';
      var c = candidates(g);
      map[l[0]] = c.length ? c[count[g] % c.length].v : null;
      count[g]++;
    });
    return map;
  }
  function splitSentences(t) {
    return t.replace(/\s+/g, ' ').trim().split(/(?<=[.!?…:])\s+(?=[A-ZÄÖÜ0-9„"])/).filter(Boolean);
  }
  var speakToken = 0, speakDone = null;
  function finishSpeech() { var f = speakDone; speakDone = null; if (f) f(true); }
  function speak(lines, onEnd) {
    if (!HAS_TTS) { onEnd && onEnd(false); return; }
    stopSpeech();
    var my = ++speakToken, map = assignVoices(lines), rate = vPrefs().rate || 0.88;
    speakDone = onEnd || null;
    var q = [];
    lines.forEach(function (l, li) {
      var ss = splitSentences(l[1]);
      ss.forEach(function (sen, si) {
        q.push({ t: sen, v: map[l[0]], pause: si < ss.length - 1 ? 280 : (li < lines.length - 1 ? 750 : 0) });
      });
    });
    function next(i) {
      if (my !== speakToken) return;
      if (i >= q.length) { finishSpeech(); return; }
      var u = new SpeechSynthesisUtterance(q[i].t);
      if (q[i].v) { u.voice = q[i].v; u.lang = q[i].v.lang; } else u.lang = 'de-DE';
      u.rate = rate; u.pitch = 1;
      var go = function () { setTimeout(function () { next(i + 1); }, q[i].pause); };
      u.onend = go; u.onerror = go;
      window.speechSynthesis.speak(u);
    }
    setTimeout(function () { next(0); }, 150);
  }
  function stopSpeech() {
    speakToken++;
    if (HAS_TTS) window.speechSynthesis.cancel();
    finishSpeech();
  }

  /* voice settings panel (shown before listening modules) */
  function voicePanelHtml() {
    if (!HAS_TTS) return '';
    return '<div class="voice-panel"><p class="vp-head"><strong>Voices</strong> <span>Choose how the recordings sound. Your choice is saved in this browser.</span></p>' +
      '<div class="vp-row"><label>Women and announcements<select class="vp-f"></select></label><label>Men<select class="vp-m"></select></label>' +
      '<label>Speed<select class="vp-rate"><option value="0.82">Slow and calm</option><option value="0.88">Calm (recommended)</option><option value="0.96">Normal</option></select></label></div>' +
      '<div class="vp-row"><button type="button" class="btn vp-test">Listen to a sample</button><span class="vp-hint"></span></div></div>';
  }
  function fillVoicePanel(panel) {
    var p = vPrefs(), f = panel.querySelector('.vp-f'), m = panel.querySelector('.vp-m');
    function opts(g, sel) {
      var list = voices.slice().sort(function (a, b) { return (b.g === g) - (a.g === g) || b.score - a.score; });
      var best = candidates(g)[0];
      sel.innerHTML = list.map(function (x) {
        var tag = x.score >= 40 ? ' (natural)' : x.score < 0 ? ' (robotic)' : '';
        return '<option value="' + esc(x.v.voiceURI) + '"' + ((p[g] ? p[g] === x.v.voiceURI : best === x) ? ' selected' : '') + '>' + esc(x.v.name.replace(/^Microsoft /, '').replace(/\s+Online.*$|\s+\(.*$|\s+-\s+.*$/, '') + tag) + '</option>';
      }).join('') || '<option>Default German voice</option>';
    }
    opts('f', f); opts('m', m);
    panel.querySelector('.vp-rate').value = String(p.rate || 0.88);
    var good = voices.some(function (x) { return x.score >= 40; });
    panel.querySelector('.vp-hint').textContent = !voices.length
      ? 'No German voice found on this device. Install one in your system settings, or use Microsoft Edge or Chrome.'
      : good ? '' : 'Tip: the most natural German voices are in Microsoft Edge (Katja, Conrad) and Chrome (Google Deutsch). On iPhone and Mac, download an "Enhanced" German voice under Settings → Accessibility → Spoken Content → Voices.';
  }
  function bindVoicePanel(root) {
    var panel = root.querySelector('.voice-panel');
    if (!panel) return;
    fillVoicePanel(panel);
    function store() {
      var p = vPrefs();
      p.f = panel.querySelector('.vp-f').value; p.m = panel.querySelector('.vp-m').value;
      p.rate = parseFloat(panel.querySelector('.vp-rate').value) || 0.88;
      vSave(p);
    }
    panel.querySelectorAll('select').forEach(function (s) { s.addEventListener('change', store); });
    panel.querySelector('.vp-test').addEventListener('click', function () {
      store();
      speak([['Frau Keller', 'Guten Tag. Willkommen zur Prüfung. Hören Sie bitte genau zu.'], ['Herr Okafor', 'Sie hören jeden Text einmal oder zweimal. Viel Erfolg!']]);
    });
  }

  /* ---------- overview pages ---------- */
  function list(provider) {
    var main = D().main;
    D().setNav('pruefungen');
    document.title = 'Exam simulation | Deutsch Schritt für Schritt';
    var prov = provider && PROVIDERS[provider] ? provider : null;
    var res = results();
    var tabs = '<div class="chips" role="group" aria-label="Exam provider" style="margin-bottom:28px">' +
      ['goethe', 'telc'].map(function (p) {
        return '<a class="chip" style="text-decoration:none" aria-pressed="' + (prov === p) + '" href="#/pruefungen/' + p + '">' + PROVIDERS[p].name + '</a>';
      }).join('') + '</div>';
    var body = '';
    if (!prov) {
      body = '<div class="prov-grid">' + ['goethe', 'telc'].map(function (p) {
        var n = Object.keys(window.EXAMS).filter(function (k) { return window.EXAMS[k].provider === p; }).length;
        var txt = p === 'goethe'
          ? 'Goethe-Zertifikat A1 to C2. Each skill is its own module (reading, listening, writing, speaking) and each module is passed separately with 60 percent.'
          : 'telc Deutsch A1 to C2. From B1 the exam adds a grammar and vocabulary part (Sprachbausteine). The written and oral exams are passed separately with 60 percent.';
        return '<a class="prov-card" href="#/pruefungen/' + p + '"><span class="prov-name">' + PROVIDERS[p].name + '</span><span class="prov-txt">' + txt + '</span><span class="prov-n">' + n + ' model tests</span></a>';
      }).join('') + '</div>';
    } else {
      var exams = Object.keys(window.EXAMS).map(function (k) { return window.EXAMS[k]; })
        .filter(function (e) { return e.provider === prov; })
        .sort(function (a, b) { return LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level); });
      body = '<div class="exam-grid">' + exams.map(function (e) {
        var r = res[e.id] || {};
        var done = e.modules.filter(function (m) { return r[m.id]; }).length;
        var mins = e.modules.reduce(function (s, m) { return s + (m.minutes || 0); }, 0);
        return '<a class="exam-card" href="#/pruefung/' + e.id + '"><span class="exam-level">' + e.level + '</span><span class="exam-name">' + esc(e.name) + '</span>' +
          '<span class="exam-mods">' + e.modules.map(function (m) { return esc(m.name); }).join(', ') + '</span>' +
          '<span class="exam-meta">about ' + Math.round(mins / 5) * 5 + ' minutes in total' + (done ? ', ' + done + ' of ' + e.modules.length + ' parts done' : '') + '</span></a>';
      }).join('') + '</div>';
    }
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>Exam simulation</h1>' +
      '<p class="sub">Full model tests in the structure of the Goethe and telc exams, with timers, automatic marking, read-aloud listening texts and graded writing. Choose an exam provider, then a level.</p></div>' +
      tabs + body + disclaimer();
  }
  function disclaimer() {
    return '<p class="exam-disclaimer">These are original practice tests written for this site. They follow the published structure of the Goethe-Institut and telc exams (parts, task types, timing and points), but they are not official materials and are not connected to either organisation. Exam formats change from time to time, so check the current handbook of your exam centre before the real exam.</p>';
  }

  /* ---------- exam page ---------- */
  var timer = null;
  function clearTimer() { if (timer) { clearInterval(timer); timer = null; } stopSpeech(); }

  function exam(id, modId) {
    clearTimer();
    var e = window.EXAMS[id], main = D().main;
    D().setNav('pruefungen');
    if (!e) { main.innerHTML = '<div class="page-head"><h1>Exam not found</h1><p class="sub"><a href="#/pruefungen">Back to exam simulation</a></p></div>'; return; }
    document.title = e.name + ' | Exam simulation';
    if (modId) return module(e, modId);
    var r = results()[e.id] || {};
    var rows = e.modules.map(function (m) {
      var res = r[m.id];
      return '<tr><td><a href="#/pruefung/' + e.id + '/' + m.id + '"><strong>' + esc(m.name) + '</strong></a><br><small>' + esc(m.en) + '</small></td>' +
        '<td>' + (m.parts ? m.parts.length : (m.tasks ? m.tasks.length : 0)) + '</td><td>' + (m.minutes ? m.minutes + ' min' : '—') + '</td><td>' + m.points + '</td>' +
        '<td>' + (res ? '<span class="mod-res ' + (res.points >= m.points * 0.6 ? 'pass' : 'fail') + '">' + res.points + ' / ' + m.points + '</span>' : '<a class="btn" href="#/pruefung/' + e.id + '/' + m.id + '">Start</a>') + '</td></tr>';
    }).join('');
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/pruefungen/' + e.provider + '">Exam simulation</a> / ' + PROVIDERS[e.provider].name + '</p>' +
      '<h1><span class="level-tag">' + e.level + '</span>' + esc(e.name) + '</h1><p class="sub">' + esc(e.about) + '</p></div>' +
      '<div class="table-wrap"><table class="exam-table"><thead><tr><th>Part</th><th>Sections</th><th>Time</th><th>Points</th><th>Your result</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="exam-summary">' + summary(e, r) + '</div>' +
      '<div class="exam-how"><h2>How the simulation works</h2><p>Start any part. A timer runs with the official time, and the part is marked automatically when you hand it in or when the time is up. Listening texts are read aloud by your browser\'s German voice and can be played as often as the real exam allows. Writing is checked for length, content points and form, then you rate it on the official criteria. Speaking has preparation and speaking timers, a recorder, and a self-assessment.</p>' +
      '<p>' + esc(e.passText) + '</p><button class="btn" id="exreset">Delete my results for this exam</button></div>' + disclaimer();
    var b = document.getElementById('exreset');
    b.addEventListener('click', function () {
      if (!b.dataset.armed) { b.dataset.armed = '1'; b.textContent = 'Click again to delete all results for this exam'; return; }
      var all = results(); delete all[e.id]; D().save('dsfs-exams', all); exam(e.id);
    });
  }

  function summary(e, r) {
    var done = e.modules.filter(function (m) { return r[m.id]; });
    if (!done.length) return '<p>No parts done yet. Take them in any order; your results are saved in this browser.</p>';
    if (e.pass.type === 'module') {
      var all = done.length === e.modules.length;
      var passed = done.filter(function (m) { return r[m.id].points >= m.points * e.pass.min; }).length;
      return '<p><strong>' + passed + ' of ' + done.length + ' completed parts passed</strong> (each part needs ' + Math.round(e.pass.min * 100) + ' percent).' +
        (all ? (passed === e.modules.length ? ' You would pass all modules of this exam.' : ' Practise the parts below 60 percent and try them again.') : '') + '</p>';
    }
    if (e.pass.type === 'total') {
      var maxT = e.modules.reduce(function (s, m) { return s + m.points; }, 0);
      var gotT = done.reduce(function (s, m) { return s + r[m.id].points; }, 0);
      var allT = done.length === e.modules.length;
      return '<p><strong>Total so far: ' + Math.round(gotT * 10) / 10 + ' / ' + maxT + ' points.</strong> ' + (allT ? (gotT >= maxT * e.pass.min ? 'You would pass this exam.' : 'Not passed yet: ' + Math.ceil(maxT * e.pass.min) + ' points are needed.') : 'Do all parts to see your result; ' + Math.ceil(maxT * e.pass.min) + ' points are needed to pass.') + '</p>';
    }
    return '<p>' + e.pass.groups.map(function (g) {
      var mods = e.modules.filter(function (m) { return g.modules.indexOf(m.id) > -1; });
      var max = mods.reduce(function (s, m) { return s + m.points; }, 0);
      var got = mods.reduce(function (s, m) { return s + (r[m.id] ? r[m.id].points : 0); }, 0);
      var complete = mods.every(function (m) { return r[m.id]; });
      return '<strong>' + esc(g.name) + ':</strong> ' + Math.round(got * 10) / 10 + ' / ' + max + ' points' +
        (complete ? (got >= max * g.min ? ' (passed)' : ' (not passed, ' + Math.ceil(max * g.min) + ' needed)') : ' so far');
    }).join('<br>') + '</p>';
  }

  /* ---------- module ---------- */
  function module(e, modId) {
    var m = e.modules.filter(function (x) { return x.id === modId; })[0], main = D().main;
    if (!m) return exam(e.id);
    var head = '<div class="page-head"><p class="crumbs"><a href="#/pruefung/' + e.id + '">' + esc(e.name) + '</a></p>' +
      '<h1><span class="level-tag">' + e.level + '</span>' + esc(m.name) + '</h1><p class="sub">' + esc(m.en) + '. ' + (m.minutes ? m.minutes + ' minutes, ' : '') + m.points + ' points.</p></div>';
    main.innerHTML = head + '<div class="mod-start"><p>' + (m.intro ? esc(m.intro) + ' ' : '') + 'When you start, the timer begins. You can hand in early.</p>' +
      (m.kind === 'items' && m.parts.some(function (p) { return p.audio || p.items.some(function (it) { return it.audio; }); }) ? listenNote() : '') +
      '<button class="btn primary" id="modstart">Start ' + esc(m.name) + '</button></div>';
    bindVoicePanel(main);
    document.getElementById('modstart').addEventListener('click', function () {
      if (m.kind === 'items') itemsModule(e, m);
      else if (m.kind === 'writing') writingModule(e, m);
      else speakingModule(e, m);
    });
  }
  function listenNote() {
    var ok = HAS_TTS;
    return '<p class="note">' + (ok
      ? 'The listening texts are read aloud by your device\'s German voices: women and men get different voices, with short pauses between sentences. Turn your sound on. Each text shows how often you may play it, as in the real exam.'
      : 'Your browser cannot read texts aloud, so the listening texts will be shown as text instead.') + '</p>' + voicePanelHtml();
  }

  function timerBar(m, onEnd) {
    var bar = document.createElement('div');
    bar.className = 'exam-timer';
    bar.innerHTML = '<span id="tleft"></span><button type="button" class="btn" id="handin">Hand in</button>';
    var start = Date.now(), total = (m.minutes || 15) * 60;
    function tick() {
      var left = total - (Date.now() - start) / 1000;
      var el = document.getElementById('tleft');
      if (!el) { clearTimer(); return; }
      el.textContent = 'Time left: ' + fmtTime(left);
      bar.classList.toggle('low', left < 300);
      if (left <= 0) { clearTimer(); onEnd(true); }
    }
    clearTimer();
    timer = setInterval(tick, 1000);
    setTimeout(tick, 0);
    bar.querySelector('#handin').addEventListener('click', function () { clearTimer(); onEnd(false); });
    return bar;
  }

  /* ---------- reading, listening, Sprachbausteine ---------- */
  function itemsModule(e, m) {
    var main = D().main;
    var n = 0;
    var html = m.parts.map(function (p, pi) {
      var choices = p.choices ? '<div class="ex-choices">' + p.choices.map(function (c) { return '<p><strong>' + esc(c[0]) + '</strong> ' + c[1] + '</p>'; }).join('') + '</div>' : '';
      var audio = p.audio ? audioBox(p.audio, p.plays || 1, 'p' + pi) : '';
      var items = p.items.map(function (it, ii) {
        n++;
        var name = 'i' + pi + '_' + ii, ctrl;
        if (it.type === 'tf' || it.type === 'rfn') {
          var opts = it.type === 'tf' ? [['r', 'Richtig'], ['f', 'Falsch']] : [['r', 'Richtig'], ['f', 'Falsch'], ['n', 'Nicht im Text']];
          ctrl = opts.map(function (o) { return '<label class="ex-opt"><input type="radio" name="' + name + '" value="' + o[0] + '"> ' + o[1] + '</label>'; }).join('');
        } else if (it.type === 'mc') {
          ctrl = it.options.map(function (o, k) { return '<label class="ex-opt"><input type="radio" name="' + name + '" value="' + k + '"> <span class="ex-key">' + 'abcd'.charAt(k) + '</span> ' + o + '</label>'; }).join('');
        } else if (it.type === 'match') {
          ctrl = '<select name="' + name + '" class="ex-sel"><option value="">–</option>' + p.choices.map(function (c) { return '<option value="' + esc(c[0]) + '">' + esc(c[0]) + '</option>'; }).join('') + '</select>';
        } else {
          ctrl = '<input type="text" name="' + name + '" class="ex-gap" autocomplete="off" spellcheck="false">';
        }
        return '<li class="ex-item" data-p="' + pi + '" data-i="' + ii + '"><span class="ex-num">' + n + '</span><div class="ex-body">' +
          (it.audio ? audioBox(it.audio, it.plays || p.plays || 1, 'i' + pi + '_' + ii) : '') +
          (it.q ? '<p class="ex-q">' + it.q + '</p>' : '') + '<div class="ex-ctrl' + (it.type === 'mc' ? ' col' : '') + '">' + ctrl + '</div><p class="ex-fb"></p></div></li>';
      }).join('');
      return '<section class="ex-part"><h2>' + esc(p.title) + '</h2><p class="ex-instr">' + p.instructions + '</p>' + audio +
        (p.text ? '<div class="ex-text">' + p.text + '</div>' : '') + choices + '<ol class="ex-items">' + items + '</ol></section>';
    }).join('');
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/pruefung/' + e.id + '">' + esc(e.name) + '</a></p><h1><span class="level-tag">' + e.level + '</span>' + esc(m.name) + '</h1></div>' +
      '<form id="exform" class="ex-form">' + html + '</form>';
    var bar = timerBar(m, function (timeUp) { mark(timeUp); });
    main.insertBefore(bar, main.firstChild.nextSibling);
    bindAudio(main);
    window.scrollTo(0, 0);

    function mark(timeUp) {
      stopSpeech();
      var form = document.getElementById('exform'), right = 0, total = 0;
      m.parts.forEach(function (p, pi) {
        p.items.forEach(function (it, ii) {
          total++;
          var name = 'i' + pi + '_' + ii, li = form.querySelector('.ex-item[data-p="' + pi + '"][data-i="' + ii + '"]');
          var val, ok, show;
          if (it.type === 'gap') {
            val = form.querySelector('[name="' + name + '"]').value;
            var answers = [].concat(it.a);
            ok = answers.some(function (a) { return norm(a) === norm(val); });
            show = answers[0];
          } else if (it.type === 'match') {
            val = form.querySelector('[name="' + name + '"]').value;
            ok = val === it.a; show = it.a;
          } else {
            var c = form.querySelector('[name="' + name + '"]:checked');
            val = c ? c.value : '';
            ok = it.type === 'mc' ? val === String(it.a) : val === it.a;
            show = it.type === 'mc' ? 'abcd'.charAt(it.a) + ') ' + it.options[it.a] : { r: 'Richtig', f: 'Falsch', n: 'Nicht im Text' }[it.a];
          }
          if (ok) right++;
          li.classList.add(ok ? 'ok' : 'bad');
          li.querySelector('.ex-fb').innerHTML = ok ? 'Correct' : 'Answer: ' + show;
          li.querySelectorAll('input, select').forEach(function (x) { x.disabled = true; });
        });
      });
      var pts = Math.round(right / total * m.points * 10) / 10;
      saveResult(e.id, m.id, { points: pts, right: right, total: total, date: Date.now() });
      // show transcripts
      form.querySelectorAll('.audio-box').forEach(function (b) { var t = b.querySelector('.transcript'); if (t) t.hidden = false; });
      var res = document.createElement('div');
      var pass = pts >= m.points * 0.6;
      res.className = 'ex-result ' + (pass ? 'pass' : 'fail');
      res.innerHTML = (timeUp ? '<p><strong>Time is up.</strong></p>' : '') + '<p class="ex-score">' + right + ' of ' + total + ' correct: <strong>' + pts + ' / ' + m.points + ' points</strong></p>' +
        '<p>' + (pass ? 'That is above the 60 percent pass mark.' : 'The pass mark is 60 percent (' + Math.ceil(m.points * 0.6) + ' points). Look at the answers below, then try again later.') + '</p>' +
        '<p><a class="btn primary" href="#/pruefung/' + e.id + '">Back to the exam overview</a> <button type="button" class="btn" id="retry">Try this part again</button></p>';
      var t = document.querySelector('.exam-timer'); if (t) t.remove();
      form.parentNode.insertBefore(res, form);
      document.getElementById('retry').addEventListener('click', function () { itemsModule(e, m); });
      window.scrollTo(0, 0);
    }
  }

  function audioBox(lines, plays, key) {
    var transcript = lines.map(function (l) { return '<p><strong>' + esc(l[0]) + ':</strong> ' + esc(l[1]) + '</p>'; }).join('');
    return '<div class="audio-box" data-key="' + key + '" data-plays="' + plays + '"><button type="button" class="btn audio-play">Play recording</button>' +
      '<span class="audio-left">You may play this ' + (plays === 1 ? 'once' : plays + ' times') + '.</span>' +
      '<div class="transcript" hidden><p class="tr-head">Transcript</p>' + transcript + '</div>' +
      '<script type="application/json" class="audio-data">' + JSON.stringify(lines).replace(/</g, '\\u003c') + '<\/script></div>';
  }
  function bindAudio(root) {
    root.querySelectorAll('.audio-box').forEach(function (box) {
      var left = +box.dataset.plays, btn = box.querySelector('.audio-play'), info = box.querySelector('.audio-left');
      var lines = JSON.parse(box.querySelector('.audio-data').textContent);
      if (!HAS_TTS) {
        btn.remove(); info.textContent = 'Read the text instead:'; box.querySelector('.transcript').hidden = false; return;
      }
      btn.addEventListener('click', function () {
        if (btn.dataset.playing) { stopSpeech(); return; }
        if (left <= 0) return;
        left--;
        root.querySelectorAll('.audio-play').forEach(function (b) { delete b.dataset.playing; if (b !== btn && b.textContent === 'Stop') b.textContent = 'Play recording'; });
        btn.dataset.playing = '1'; btn.textContent = 'Stop';
        info.textContent = left > 0 ? 'Playing. ' + left + ' more play left.' : 'Playing. This is the last play.';
        speak(lines, function () {
          delete btn.dataset.playing;
          btn.textContent = left > 0 ? 'Play again' : 'Played';
          btn.disabled = left <= 0;
          info.textContent = left > 0 ? left + (left === 1 ? ' play' : ' plays') + ' left.' : 'No plays left.';
        });
      });
    });
  }

  /* ---------- writing ---------- */
  var RUBRIC_TEXT = [
    'Not done or not understandable',
    'Clearly below the level: much is missing or hard to follow',
    'Partly at the level: some points or features missing',
    'At the level with small weaknesses',
    'Fully at the level'
  ];
  function writingModule(e, m) {
    var main = D().main;
    var chooseNote = m.choose ? '<p class="note">Choose <strong>one</strong> of the ' + m.tasks.length + ' tasks, as in the real exam. Only the task you write is graded.</p>' : '';
    var html = m.tasks.map(function (t, ti) {
      return '<section class="ex-part wr-task" data-t="' + ti + '"><h2>' + esc(t.title) + '</h2>' +
        '<div class="ex-text">' + t.situation + (t.points && t.points.length ? '<ul class="leitpunkte">' + t.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') + '</div>' +
        (t.audio ? audioBox(t.audio, t.plays || 1, 'w' + ti) : '') +
        (t.form
          ? '<p class="ex-instr">' + esc(t.instructions || '') + '</p><ol class="ex-items wr-form">' + t.form.map(function (f, k) {
              return '<li class="ex-item" data-k="' + k + '"><span class="ex-num">' + (k + 1) + '</span><div class="ex-body"><label class="ex-q" for="wf' + ti + '_' + k + '">' + f.label + '</label>' +
                '<input type="text" class="ex-gap wide" id="wf' + ti + '_' + k + '" autocomplete="off" spellcheck="false"><p class="ex-fb"></p></div></li>'; }).join('') + '</ol>'
          : '<p class="ex-instr">' + esc(t.instructions || '') + ' Aim for ' + (t.maxWords ? t.minWords + ' to ' + t.maxWords : 'at least ' + t.minWords) + ' words.</p>' +
            '<textarea class="wr-text" id="wr' + ti + '" rows="' + (t.minWords > 120 ? 14 : 9) + '" spellcheck="false" lang="de" aria-label="Your text for ' + esc(t.title) + '"></textarea>' +
            '<p class="wr-count" id="wc' + ti + '">0 words</p>') +
        '<div class="wr-eval" id="we' + ti + '"></div></section>';
    }).join('');
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/pruefung/' + e.id + '">' + esc(e.name) + '</a></p><h1><span class="level-tag">' + e.level + '</span>' + esc(m.name) + '</h1></div>' +
      chooseNote + '<div id="wrform">' + html + '</div>';
    var bar = timerBar(m, function (timeUp) { evaluate(timeUp); });
    main.insertBefore(bar, main.firstChild.nextSibling);
    bindAudio(main);
    m.tasks.forEach(function (t, ti) {
      if (t.form) return;
      var ta = document.getElementById('wr' + ti), wc = document.getElementById('wc' + ti);
      var draftKey = 'dsfs-draft-' + e.id + '-' + ti;
      try { ta.value = localStorage.getItem(draftKey) || ''; } catch (err) { /* ignore */ }
      function upd() {
        var w = wordCount(ta.value);
        wc.textContent = w + ' words' + (w < t.minWords ? ' (' + (t.minWords - w) + ' to go)' : '');
        wc.classList.toggle('enough', w >= t.minWords);
        try { localStorage.setItem(draftKey, ta.value); } catch (err) { /* ignore */ }
      }
      ta.addEventListener('input', upd); upd();
    });
    window.scrollTo(0, 0);

    function evaluate(timeUp) {
      var t0 = document.querySelector('.exam-timer'); if (t0) t0.remove();
      stopSpeech();
      var tasks = m.tasks.map(function (t, ti) { return { t: t, ti: ti, text: t.form ? '' : document.getElementById('wr' + ti).value }; });
      var graded = m.choose ? tasks.filter(function (x) { return wordCount(x.text) > 0; }).sort(function (a, b) { return wordCount(b.text) - wordCount(a.text); }).slice(0, 1) : tasks;
      if (m.choose && !graded.length) graded = tasks.slice(0, 1);
      var state = {};
      tasks.forEach(function (x) { var ta = document.getElementById('wr' + x.ti); if (ta) ta.readOnly = true; });
      graded.forEach(function (x) {
        if (x.t.form) { state[x.ti] = markForm(x); return; }
        state[x.ti] = autoCheck(x.t, x.text, e); renderEval(x, state[x.ti]);
      });
      main.querySelectorAll('.audio-box .transcript').forEach(function (tr) { tr.hidden = false; });
      tasks.forEach(function (x) { if (!state[x.ti]) document.getElementById('we' + x.ti).innerHTML = '<p class="note">Not graded: you chose the other task.</p>'; });
      var res = document.createElement('div');
      res.className = 'ex-result';
      res.id = 'wrres';
      document.getElementById('wrform').parentNode.insertBefore(res, document.getElementById('wrform'));
      function total() {
        var pts = 0;
        graded.forEach(function (x) {
          var s = state[x.ti];
          if (s.form) { pts += s.right / s.total * x.t.weight; return; }
          var sum = s.ratings.reduce(function (a, b) { return a + b; }, 0);
          pts += sum / (s.ratings.length * 4) * x.t.weight;
        });
        return Math.round(pts * 10) / 10;
      }
      function update() {
        var pts = total(), pass = pts >= m.points * 0.6;
        res.className = 'ex-result ' + (pass ? 'pass' : 'fail');
        res.innerHTML = (timeUp ? '<p><strong>Time is up.</strong></p>' : '') + '<p class="ex-score">Writing result: <strong>' + pts + ' / ' + m.points + ' points</strong></p>' +
          '<p>The automatic check has pre-set the content rating. Read the model answer, then adjust each rating below honestly; the total updates as you go. For detailed feedback, use "Copy for Claude" and paste it into a chat with Claude.</p>' +
          '<p><button type="button" class="btn primary" id="wrsave">Save this result</button> <a class="btn" href="#/pruefung/' + e.id + '">Back to the exam overview</a></p>';
        document.getElementById('wrsave').addEventListener('click', function () {
          saveResult(e.id, m.id, { points: total(), date: Date.now() });
          this.textContent = 'Saved'; this.disabled = true;
        });
      }
      graded.forEach(function (x) {
        document.getElementById('we' + x.ti).querySelectorAll('[data-crit]').forEach(function (sel) {
          sel.addEventListener('change', function () { state[x.ti].ratings[+sel.dataset.crit] = +sel.value; update(); });
        });
      });
      update();
      window.scrollTo(0, 0);
    }

    function markForm(x) {
      var right = 0;
      x.t.form.forEach(function (f, k) {
        var inp = document.getElementById('wf' + x.ti + '_' + k), li = inp.closest('.ex-item');
        var ok = [].concat(f.a).some(function (a) { return norm(a) === norm(inp.value); });
        if (ok) right++;
        inp.readOnly = true;
        li.classList.add(ok ? 'ok' : 'bad');
        li.querySelector('.ex-fb').textContent = ok ? 'Correct' : 'Answer: ' + [].concat(f.a)[0];
      });
      document.getElementById('we' + x.ti).innerHTML = '<p class="note">' + right + ' of ' + x.t.form.length + ' correct: ' + Math.round(right / x.t.form.length * x.t.weight * 10) / 10 + ' of ' + x.t.weight + ' points for this task.</p>';
      return { form: true, right: right, total: x.t.form.length };
    }
    function renderEval(x, s) {
      var t = x.t, el = document.getElementById('we' + x.ti);
      var checks = s.checks.map(function (c) { return '<li class="' + (c.ok ? 'ok' : 'bad') + '">' + c.text + '</li>'; }).join('');
      var crit = e.rubric.map(function (name, k) {
        return '<label class="crit"><span>' + esc(name) + '</span><select data-crit="' + k + '">' +
          RUBRIC_TEXT.map(function (d, v) { return '<option value="' + v + '"' + (s.ratings[k] === v ? ' selected' : '') + '>' + v + ' – ' + d + '</option>'; }).join('') + '</select></label>';
      }).join('');
      el.innerHTML = '<div class="wr-box"><h3>Automatic check</h3><ul class="wr-checks">' + checks + '</ul>' +
        '<h3>Rate your text</h3><p class="wr-help">' + esc(e.rubricHelp || 'Each criterion is rated from 0 to 4.') + '</p><div class="crits">' + crit + '</div>' +
        '<details class="wr-model"><summary>Show model answer</summary><div class="model-text">' + t.model.split('\n').map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></details>' +
        '<button type="button" class="btn" data-copy="' + x.ti + '">Copy for Claude</button> <span class="copy-msg" aria-live="polite"></span></div>';
      el.querySelector('[data-copy]').addEventListener('click', function () {
        var prompt = 'Please grade my German writing like an examiner for the ' + e.name + ' (' + e.level + '). ' +
          'Use the official criteria (' + e.rubric.join(', ') + '), give each a score from 0 to 4 with a short reason, list my mistakes with corrections, and show an improved version.\n\n' +
          'TASK:\n' + t.situation.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() + (t.points ? '\nPoints to cover: ' + t.points.join('; ') : '') +
          '\nLength: ' + (t.maxWords ? t.minWords + '–' + t.maxWords : 'at least ' + t.minWords) + ' words.\n\nMY TEXT (' + wordCount(x.text) + ' words):\n' + x.text;
        var msg = el.querySelector('.copy-msg'), btn = this;
        function fallback() {
          var ta = document.createElement('textarea'); ta.value = prompt; ta.className = 'copy-fallback'; ta.rows = 6;
          btn.parentNode.appendChild(ta); ta.focus(); ta.select();
          msg.textContent = 'Select all of the text below and copy it.';
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(prompt).then(function () { msg.textContent = 'Copied. Paste it into a chat with Claude.'; }, fallback);
        } else fallback();
      });
    }
  }

  function autoCheck(t, text, e) {
    var w = wordCount(text), n = norm(text), checks = [];
    var lenOk = w >= t.minWords * 0.9 && (!t.maxWords || w <= t.maxWords * 1.5);
    checks.push({ ok: lenOk, text: 'Length: ' + w + ' words (target ' + (t.maxWords ? t.minWords + '–' + t.maxWords : 'at least ' + t.minWords) + ').' + (w < t.minWords * 0.9 ? ' Too short: texts that are much too short lose points.' : '') + (t.maxWords && w > t.maxWords * 1.5 ? ' Much longer than needed.' : '') });
    var covered = 0, kwsLen = (t.keywords || []).length;
    (t.keywords || []).forEach(function (kws, k) {
      var hit = kws.some(function (kw) { return n.indexOf(norm(kw)) > -1; });
      if (hit) covered++;
      checks.push({ ok: hit || !!t.needPoints, text: 'Content point ' + (k + 1) + ' (' + esc(t.points[k]) + '): ' + (hit ? 'looks covered.' : (t.needPoints ? 'not found (optional: you need ' + t.needPoints + ' of ' + kwsLen + ' points).' : 'not found. Did you write about it?')) });
    });
    var reg = t.register;
    if (reg === 'formal') {
      var op = /(sehr geehrte|guten tag)/.test(n), cl = /(mit freundlichen gruessen|freundliche gruesse|beste gruesse|mit besten gruessen|viele gruesse)/.test(n);
      checks.push({ ok: op, text: op ? 'Formal greeting found.' : 'No formal greeting (for example "Sehr geehrte Damen und Herren,").' });
      checks.push({ ok: cl, text: cl ? 'Formal closing found.' : 'No formal closing (for example "Mit freundlichen Grüßen").' });
      var du = /\b(du|dich|dir|dein|deine)\b/.test(n);
      if (du) checks.push({ ok: false, text: 'You used "du" in a formal text. Use "Sie", "Ihnen", "Ihr".' });
    } else if (reg === 'semiformal') {
      var op3 = /(liebe frau|lieber herr|sehr geehrte|guten tag)/.test(n), cl3 = /(viele gruesse|herzliche gruesse|freundliche gruesse|liebe gruesse|beste gruesse)/.test(n);
      checks.push({ ok: op3, text: op3 ? 'Polite greeting found.' : 'No polite greeting (for example "Liebe Frau Lehmann," or "Sehr geehrte Frau Lehmann,").' });
      checks.push({ ok: cl3, text: cl3 ? 'Closing found.' : 'No closing (for example "Viele Grüße").' });
      if (/\b(du|dich|dir|dein|deine)\b/.test(n)) checks.push({ ok: false, text: 'You used "du". Address the person with "Sie".' });
    } else if (reg === 'informal') {
      var op2 = /(liebe |lieber |hallo|hi )/.test(n + ' '), cl2 = /(viele gruesse|liebe gruesse|bis bald|gruss|lg|dein |deine |bis dann)/.test(n + ' ');
      checks.push({ ok: op2, text: op2 ? 'Informal greeting found.' : 'No informal greeting (for example "Liebe Anna," or "Hallo Tom,").' });
      checks.push({ ok: cl2, text: cl2 ? 'Informal closing found.' : 'No informal closing (for example "Viele Grüße" or "Bis bald").' });
    }
    var used = CONNECTORS.filter(function (c) { return new RegExp('(^| )' + norm(c) + '( |$)').test(n); });
    var needed = { A1: 1, A2: 1, B1: 3, B2: 5, C1: 6, C2: 7 }[e.level] || 3;
    checks.push({ ok: used.length >= needed, text: 'Linking words: ' + used.length + ' different (' + (used.slice(0, 10).join(', ') || 'none') + '). At ' + e.level + ' aim for at least ' + needed + '.' });
    var sentences = text.split(/[.!?]+/).filter(function (s) { return s.trim().split(/\s+/).length > 2; });
    var avg = sentences.length ? w / sentences.length : 0;
    if (/^(B2|C1|C2)$/.test(e.level)) checks.push({ ok: avg >= 10, text: 'Average sentence length: ' + Math.round(avg) + ' words. ' + (avg >= 10 ? 'Good variety of longer sentences.' : 'Mostly short sentences. At this level, combine ideas with subordinate clauses.') });
    // pre-set ratings: first criterion from content and length, others neutral at 2 (user adjusts)
    var kwN = (t.keywords || []).length;
    var share = kwN ? Math.min(1, covered / (t.needPoints || kwN)) : 1;
    var first = w === 0 ? 0 : Math.max(0, Math.min(4, Math.round(share * 4) - (lenOk ? 0 : 1)));
    var linkOk = used.length >= needed;
    var ratings = e.rubric.map(function (_, k) { return w === 0 ? 0 : k === 0 ? first : (k === 1 && e.rubric.length > 3 ? (linkOk ? 3 : 2) : 2); });
    return { checks: checks, ratings: ratings };
  }

  /* ---------- speaking ---------- */
  function speakingModule(e, m) {
    var main = D().main;
    var html = m.tasks.map(function (t, ti) {
      return '<section class="ex-part sp-task" data-t="' + ti + '"><h2>' + esc(t.title) + '</h2><div class="ex-text">' + t.html + '</div>' +
        '<div class="sp-tools"><button type="button" class="btn" data-timer="' + (t.seconds || 120) + '">Start speaking timer (' + fmtTime(t.seconds || 120) + ')</button>' +
        '<span class="sp-time" aria-live="polite"></span>' +
        '<button type="button" class="btn sp-rec">Record myself</button><audio class="sp-audio" controls hidden></audio></div>' +
        (t.tips ? '<details class="wr-model"><summary>Useful phrases and ideas</summary><div class="model-text">' + t.tips + '</div></details>' : '') + '</section>';
    }).join('');
    var crit = e.speakRubric.map(function (name, k) {
      return '<label class="crit"><span>' + esc(name) + '</span><select data-crit="' + k + '">' +
        RUBRIC_TEXT.map(function (d, v) { return '<option value="' + v + '"' + (v === 2 ? ' selected' : '') + '>' + v + ' – ' + d + '</option>'; }).join('') + '</select></label>';
    }).join('');
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/pruefung/' + e.id + '">' + esc(e.name) + '</a></p><h1><span class="level-tag">' + e.level + '</span>' + esc(m.name) + '</h1>' +
      '<p class="sub">' + esc(m.intro || '') + '</p></div>' +
      (m.prep ? '<div class="note sp-prep"><strong>Preparation: ' + m.prep + ' minutes.</strong> In the real exam you prepare with notes before speaking. <button type="button" class="btn" data-timer="' + m.prep * 60 + '">Start preparation timer</button> <span class="sp-time" aria-live="polite"></span></div>' : '') +
      html + '<section class="ex-part"><h2>Rate your speaking</h2><p class="wr-help">Listen to your recordings and rate yourself honestly on the criteria the examiners use. Speaking with a partner or a teacher is the best practice, because the real exam is a conversation.</p><div class="crits">' + crit + '</div>' +
      '<p class="ex-score" id="spscore"></p><p><button type="button" class="btn primary" id="spsave">Save this result</button> <a class="btn" href="#/pruefung/' + e.id + '">Back to the exam overview</a></p></section>';
    function score() {
      var sum = 0; main.querySelectorAll('[data-crit]').forEach(function (s) { sum += +s.value; });
      return Math.round(sum / (e.speakRubric.length * 4) * m.points * 10) / 10;
    }
    function upd() { document.getElementById('spscore').textContent = 'Self-assessment: ' + score() + ' / ' + m.points + ' points (pass mark ' + Math.ceil(m.points * 0.6) + ').'; }
    main.querySelectorAll('[data-crit]').forEach(function (s) { s.addEventListener('change', upd); }); upd();
    document.getElementById('spsave').addEventListener('click', function () { saveResult(e.id, m.id, { points: score(), date: Date.now() }); this.textContent = 'Saved'; this.disabled = true; });
    main.querySelectorAll('[data-timer]').forEach(function (b) {
      b.addEventListener('click', function () {
        var out = b.parentNode.querySelector('.sp-time'), end = Date.now() + (+b.dataset.timer) * 1000;
        clearTimer();
        main.querySelectorAll('.sp-time').forEach(function (x) { x.textContent = ''; });
        timer = setInterval(function () {
          if (!document.body.contains(out)) { clearTimer(); return; }
          var left = (end - Date.now()) / 1000;
          out.textContent = left > 0 ? fmtTime(left) + ' left' : 'Time is up.';
          if (left <= 0) clearTimer();
        }, 250);
      });
    });
    main.querySelectorAll('.sp-rec').forEach(function (btn) {
      var rec = null, chunks = [], audio = btn.parentNode.querySelector('.sp-audio');
      btn.addEventListener('click', function () {
        if (rec && rec.state === 'recording') { rec.stop(); return; }
        if (!navigator.mediaDevices || !window.MediaRecorder) { btn.textContent = 'Recording is not available in this browser'; btn.disabled = true; return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          chunks = []; rec = new MediaRecorder(stream);
          rec.ondataavailable = function (ev) { chunks.push(ev.data); };
          rec.onstop = function () {
            stream.getTracks().forEach(function (tr) { tr.stop(); });
            audio.src = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
            audio.hidden = false; btn.textContent = 'Record again';
          };
          rec.start(); btn.textContent = 'Stop recording';
        }, function () { btn.textContent = 'Microphone access was refused'; btn.disabled = true; });
      });
    });
  }

  window.ExamUI = { list: list, exam: exam, stop: clearTimer };
})();
