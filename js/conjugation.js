/*
  Conjugation section.
  Builds full conjugation tables for every verb in the vocabulary list (VOCAB_RAW, lines starting with V|).
  The vocabulary gives the infinitive, the Präteritum (er form) and the Perfekt (er form);
  everything else is generated with the rules below plus a list of irregular forms.
*/
(function () {
  var PERSONS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  var REFL_ACC = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
  var REFL_DAT = ['mir', 'dir', 'sich', 'uns', 'euch', 'sich'];
  var DATIVE_REFLEXIVE = { 'anmaßen': 1, 'verbitten': 1 };
  /* Verbs normally used only in the 3rd person (es geschieht, es gelingt mir, die Lage spitzt sich zu) */
  var THIRD_ONLY = { geschehen: 1, gelingen: 1, passieren: 1, 'erübrigen': 1, obliegen: 1, innewohnen: 1, zuspitzen: 1, beruhen: 1, 'fußen': 1, reimen: 1 };

  /* Fully irregular present tense (ich, du, er, wir, ihr, sie) */
  var PRESENT_IRREG = {
    sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
    haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
    werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'],
    wissen: ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'],
    tun: ['tue', 'tust', 'tut', 'tun', 'tut', 'tun'],
    'können': ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
    'müssen': ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
    'dürfen': ['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
    sollen: ['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
    wollen: ['will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
    'mögen': ['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen']
  };
  var MODALS = { 'können': 1, 'müssen': 1, 'dürfen': 1, sollen: 1, wollen: 1, 'mögen': 1 };

  /* Stem-changing verbs in the present: du form, er form, and for e→i(e) verbs the du-imperative */
  var VOWEL_CHANGE = {
    fahren: ['fährst', 'fährt'], schlafen: ['schläfst', 'schläft'], tragen: ['trägst', 'trägt'],
    waschen: ['wäschst', 'wäscht'], laufen: ['läufst', 'läuft'], lassen: ['lässt', 'lässt'],
    halten: ['hältst', 'hält'], fallen: ['fällst', 'fällt'], raten: ['rätst', 'rät'],
    wachsen: ['wächst', 'wächst'], schlagen: ['schlägst', 'schlägt'], laden: ['lädst', 'lädt'],
    fangen: ['fängst', 'fängt'], stoßen: ['stößt', 'stößt'], braten: ['brätst', 'brät'],
    sprechen: ['sprichst', 'spricht', 'sprich'], lesen: ['liest', 'liest', 'lies'], sehen: ['siehst', 'sieht', 'sieh'],
    essen: ['isst', 'isst', 'iss'], geben: ['gibst', 'gibt', 'gib'], nehmen: ['nimmst', 'nimmt', 'nimm'],
    treffen: ['triffst', 'trifft', 'triff'], helfen: ['hilfst', 'hilft', 'hilf'], vergessen: ['vergisst', 'vergisst', 'vergiss'],
    empfehlen: ['empfiehlst', 'empfiehlt', 'empfiehl'], befehlen: ['befiehlst', 'befiehlt', 'befiehl'],
    sterben: ['stirbst', 'stirbt', 'stirb'], werfen: ['wirfst', 'wirft', 'wirf'], treten: ['trittst', 'tritt', 'tritt'],
    geschehen: ['geschiehst', 'geschieht', 'geschieh'], stehlen: ['stiehlst', 'stiehlt', 'stiehl'], brechen: ['brichst', 'bricht', 'brich'],
    gelten: ['giltst', 'gilt', 'gilt'], werben: ['wirbst', 'wirbt', 'wirb'], messen: ['misst', 'misst', 'miss'],
    bergen: ['birgst', 'birgt', 'birg'], fechten: ['fichtst', 'ficht', 'ficht'], erschrecken: ['erschrickst', 'erschrickt', 'erschrick']
  };

  /* Konjunktiv II with its own form (er form). Other verbs use würde + infinitive. */
  var KONJ2 = {
    sein: 'wäre', haben: 'hätte', werden: 'würde', 'können': 'könnte', 'müssen': 'müsste', 'dürfen': 'dürfte',
    sollen: 'sollte', wollen: 'wollte', 'mögen': 'möchte', wissen: 'wüsste', kommen: 'käme', gehen: 'ginge',
    geben: 'gäbe', finden: 'fände', lassen: 'ließe', bleiben: 'bliebe', tun: 'täte', stehen: 'stünde',
    halten: 'hielte', bringen: 'brächte', denken: 'dächte', nehmen: 'nähme', sehen: 'sähe', liegen: 'läge',
    sitzen: 'säße', fahren: 'führe', essen: 'äße', schlafen: 'schliefe', brauchen: 'bräuchte'
  };
  var KONJ2_COMMON = { sein: 1, haben: 1, werden: 1, 'können': 1, 'müssen': 1, 'dürfen': 1, sollen: 1, wollen: 1, 'mögen': 1, wissen: 1 };

  var INSEP = ['be', 'emp', 'ent', 'er', 'ge', 'miss', 'ver', 'zer', 'über', 'unter', 'wider', 'hinter', 'durch', 'um'];

  function endsWithAny(s, list) { for (var i = 0; i < list.length; i++) if (s.slice(-list[i].length) === list[i]) return true; return false; }

  /* Find a base verb in a table that the (prefix-free) verb ends with, allowing only real prefixes before it. */
  function lookupBase(table, verb) {
    if (table[verb]) return { base: verb, pre: '' };
    var best = null;
    Object.keys(table).forEach(function (k) {
      if (verb.length > k.length && verb.slice(-k.length) === k) {
        var pre = verb.slice(0, -k.length);
        if (INSEP.indexOf(pre) > -1 && (!best || k.length > best.base.length)) best = { base: k, pre: pre };
      }
    });
    return best;
  }

  function parseVerb(line, level) {
    var p = line.split('|').map(function (x) { return x.trim(); });
    var inf = p[1], prat = p[2], perf = p[3], en = p[4];
    var display = inf;
    var objPrep = '';
    var m = inf.match(/\s*\(([^)]+)\)\s*$/);
    if (m) { objPrep = m[1]; inf = inf.replace(m[0], ''); }
    var refl = false;
    if (inf.indexOf('sich ') === 0) { refl = true; inf = inf.slice(5); }
    /* separable prefix: read it from the Präteritum ("stand auf", "stellte sich vor", "trat zutage") */
    var pratParts = prat.split(' ').filter(function (x) { return x !== 'sich'; });
    var sep = pratParts.length > 1 ? pratParts[pratParts.length - 1] : '';
    var core = inf.replace(/\s+/g, '');
    if (sep) core = core.slice(sep.length);
    var pratCore = pratParts[0];
    var perfParts = perf.split(' ').filter(function (x) { return x !== 'sich'; });
    var aux = perfParts[0] === 'ist' ? 'sein' : 'haben';
    var part2 = perfParts.slice(1).join(' ');
    return { inf: inf, display: display, objPrep: objPrep, refl: refl, sep: sep, core: core, pratCore: pratCore,
      aux: aux, part2: part2, en: en, level: level, prat: prat, perf: perf,
      dat: refl && !!DATIVE_REFLEXIVE[inf.replace(/\s+/g, '')], third: !!THIRD_ONLY[inf.replace(/\s+/g, '')] };
  }

  /* ---------- present ---------- */
  function presentStem(core) {
    if (/(eln|ern)$/.test(core)) return core.slice(0, -1); /* lächel-, änder- */
    return /en$/.test(core) ? core.slice(0, -2) : core.replace(/n$/, '');
  }
  function needsE(stem) {
    if (/[dt]$/.test(stem)) return true;
    return /[^aeiouäöülrhmn][mn]$/.test(stem);
  }
  function present(v) {
    var c = v.core;
    if (PRESENT_IRREG[c]) return PRESENT_IRREG[c].slice();
    var stem = presentStem(c);
    var f;
    if (/(eln|ern)$/.test(c)) {
      var ich = /eln$/.test(c) ? stem.replace(/el$/, 'le') : stem + 'e';
      f = [ich, stem + 'st', stem + 't', c, stem + 't', c];
    } else {
      var e = needsE(stem) ? 'e' : '';
      var duEnd = /(s|ß|z|x)$/.test(stem) ? 't' : 'st';
      if (e) duEnd = 'st';
      f = [stem + 'e', stem + e + duEnd, stem + e + 't', c, stem + e + 't', c];
    }
    var vc = lookupBase(VOWEL_CHANGE, c);
    if (vc) {
      f[1] = vc.pre + VOWEL_CHANGE[vc.base][0];
      f[2] = vc.pre + VOWEL_CHANGE[vc.base][1];
    }
    return f;
  }

  /* ---------- Präteritum ---------- */
  function preterite(v) {
    var s = v.pratCore;
    if (/e$/.test(s)) return [s, s + 'st', s, s + 'n', s + 't', s + 'n'];
    var du = /(s|ß|z|t|d)$/.test(s) ? s + 'est' : s + 'st';
    var ihr = /(t|d)$/.test(s) ? s + 'et' : s + 't';
    return [s, du, s, s + 'en', ihr, s + 'en'];
  }

  /* ---------- Konjunktiv II own form ---------- */
  function konj2Own(v) {
    var k = lookupBase(KONJ2, v.core);
    if (!k) return null;
    var s = k.pre + KONJ2[k.base];
    return { forms: [s, s + 'st', s, s + 'n', s + 't', s + 'n'], common: !!KONJ2_COMMON[v.core] };
  }

  /* ---------- assembling phrases ---------- */
  function refl(v, i) { return v.refl ? ' ' + (v.dat ? REFL_DAT : REFL_ACC)[i] : ''; }
  function simple(v, forms) {
    return forms.map(function (f, i) { return f + refl(v, i) + (v.sep ? ' ' + v.sep : ''); });
  }
  function compound(v, auxForms, tail) {
    return auxForms.map(function (a, i) { return a + refl(v, i) + ' ' + tail; });
  }
  var HABEN = ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], SEIN = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
  var HATTE = ['hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'], WAR = ['war', 'warst', 'war', 'waren', 'wart', 'waren'];
  var WERDE = ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], WUERDE = ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'];

  function infinitiveFull(v) { return (v.sep || '') + v.core; }

  function imperative(v) {
    if (MODALS[v.core]) return null;
    var c = v.core, du, ihr, sie;
    var special = { sein: ['sei', 'seid', 'seien Sie'], haben: ['hab', 'habt', 'haben Sie'], werden: ['werde', 'werdet', 'werden Sie'], wissen: ['wisse', 'wisst', 'wissen Sie'], tun: ['tu', 'tut', 'tun Sie'] };
    if (special[c]) { du = special[c][0]; ihr = special[c][1]; sie = special[c][2]; }
    else {
      var stem = presentStem(c);
      if (/eln$/.test(c)) du = stem.replace(/el$/, 'le');
      else if (/ern$/.test(c)) du = stem + 'e';
      else du = stem + (needsE(stem) || /ig$/.test(stem) ? 'e' : '');
      var vc = lookupBase(VOWEL_CHANGE, c);
      if (vc && VOWEL_CHANGE[vc.base][2]) du = vc.pre + VOWEL_CHANGE[vc.base][2];
      ihr = present(v)[4];
      sie = c + ' Sie';
    }
    var rD = v.refl ? (v.dat ? ' dir' : ' dich') : '', rI = v.refl ? ' euch' : '', rS = v.refl ? ' sich' : '';
    var s = v.sep ? ' ' + v.sep : '';
    function cap(x) { return x.charAt(0).toUpperCase() + x.slice(1); }
    return [['du', cap(du + rD + s) + '!'], ['ihr', cap(ihr + rI + s) + '!'], ['Sie', cap(sie + rS + s) + '!']];
  }

  function classify(v) {
    var t = [];
    var stem = presentStem(v.core);
    var weakPrat = stem + 'te', weakPrat2 = stem + 'ete';
    if (PRESENT_IRREG[v.core] && !MODALS[v.core] && v.core !== 'tun') t.push(['irregular', 'Irregular verb']);
    else if (MODALS[v.core]) t.push(['modal', 'Modal verb']);
    else if (v.pratCore === weakPrat || v.pratCore === weakPrat2) t.push(['regular', 'Regular (weak) verb']);
    else if (/te$/.test(v.pratCore)) t.push(['mixed', 'Mixed verb']);
    else t.push(['strong', 'Irregular (strong) verb']);
    if (lookupBase(VOWEL_CHANGE, v.core)) t.push(['vowel', 'Vowel change in du/er']);
    if (v.sep) t.push(['sep', 'Separable: ' + v.sep + '-']);
    if (v.refl) t.push(['refl', 'Reflexive' + (v.dat ? ' (dative: mir, dir)' : '')]);
    t.push(['aux', 'Perfekt with ' + v.aux]);
    if (v.objPrep) t.push(['prep', '+ ' + v.objPrep]);
    if (v.third) t.push(['third', 'Used only in the 3rd person']);
    return t;
  }

  function conjugate(v) {
    var auxP = v.aux === 'sein' ? SEIN : HABEN, auxPl = v.aux === 'sein' ? WAR : HATTE;
    var own = konj2Own(v);
    var tables = [
      { id: 'praesens', name: 'Präsens', en: 'present', forms: simple(v, present(v)) },
      { id: 'praeteritum', name: 'Präteritum', en: 'simple past', forms: simple(v, preterite(v)) },
      { id: 'perfekt', name: 'Perfekt', en: 'present perfect', forms: compound(v, auxP, v.part2) },
      { id: 'plusquamperfekt', name: 'Plusquamperfekt', en: 'past perfect', forms: compound(v, auxPl, v.part2) },
      { id: 'futur', name: 'Futur I', en: 'future', forms: compound(v, WERDE, infinitiveFull(v)) },
      { id: 'konj2', name: 'Konjunktiv II', en: 'would …', forms: own ? simple(v, own.forms) : compound(v, WUERDE, infinitiveFull(v)),
        note: own ? (own.common ? 'This verb uses its own Konjunktiv II form; that is the normal form in speech and writing.' : 'Own form, mainly written. In speech the würde-form is more common: ich würde ' + (v.refl ? (v.dat ? 'mir ' : 'mich ') : '') + infinitiveFull(v) + '.') : 'Most verbs form the Konjunktiv II with würde + infinitive.' },
      { id: 'konj2past', name: 'Konjunktiv II Vergangenheit', en: 'would have …', forms: compound(v, v.aux === 'sein' ? ['wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären'] : ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'], v.part2) }
    ];
    if (v.third) tables.forEach(function (t) { t.forms = t.forms.map(function (f, i) { return i === 2 || i === 5 ? f : '—'; }); });
    return { tables: tables, imp: v.third ? null : imperative(v), tags: classify(v) };
  }

  /* ---------- data ---------- */
  var VERBS = null;
  function verbs() {
    if (VERBS) return VERBS;
    VERBS = [];
    var R = window.VOCAB_RAW || {};
    Object.keys(R).forEach(function (lvl) {
      R[lvl].trim().split('\n').forEach(function (l) {
        l = l.trim();
        if (l.indexOf('V|') === 0) VERBS.push(parseVerb(l, lvl));
      });
    });
    return VERBS;
  }
  function slug(v) { return encodeURIComponent(v.display); }
  function findVerb(s) {
    var d = decodeURIComponent(s || '');
    return verbs().filter(function (v) { return v.display === d; })[0];
  }

  /* ---------- page ---------- */
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim(); }

  function cnorm(x) { return x.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim(); }

  var INTRO = '<div class="conj-intro"><p><strong>Conjugation</strong> (Konjugation) means changing a verb so that it fits <strong>the person</strong> doing the action (ich, du, er …) and <strong>the time</strong> (present, past, future). The basic form in the dictionary is the <strong>infinitive</strong>: <span class="de">lernen</span>. Conjugated, it becomes <span class="de">ich lerne, du lernst, sie hat gelernt</span>.</p>' +
    '<p class="conj-types"><span><b>Regular (weak)</b> verbs keep their stem: lernen – lernte – gelernt.</span><span><b>Irregular (strong)</b> verbs change their vowel: gehen – ging – gegangen.</span><span><b>Mixed</b> verbs do both: bringen – brachte – gebracht.</span></p></div>';

  function listPage(q) {
    var DS = window.DS, main = DS.main;
    DS.setNav('konjugation');
    document.title = 'Conjugation | Deutsch Schritt für Schritt';
    var state = { level: (q && q.level) || 'all', text: '' };
    var lv = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/">Start</a></p><h1>Conjugation</h1><p class="sub">Full conjugation tables for all ' + verbs().length + ' verbs in the vocabulary, with a self-test.</p></div>' + INTRO +
      '<div class="filters"><div class="fgroup"><span>Level</span><div class="chips">' + ['all'].concat(lv).map(function (l) { return '<button class="chip" data-l="' + l + '" aria-pressed="' + (state.level === l) + '">' + (l === 'all' ? 'All' : l) + '</button>'; }).join('') + '</div></div>' +
      '<div class="fgroup"><label for="csearch"><span style="font-size:14px;color:var(--muted)">Search</span></label><input id="csearch" class="search" type="search" placeholder="Verb or English meaning" autocomplete="off"></div></div>' +
      '<p class="vcount" id="ccount"></p><div class="verb-grid" id="vgrid"></div>';
    var grid = document.getElementById('vgrid'), count = document.getElementById('ccount');
    function draw() {
      var t = norm(state.text);
      var list = verbs().filter(function (v) {
        if (state.level !== 'all' && v.level !== state.level) return false;
        if (t && norm(v.display).indexOf(t) < 0 && norm(v.en).indexOf(t) < 0) return false;
        return true;
      });
      count.textContent = list.length + (list.length === 1 ? ' verb' : ' verbs');
      grid.innerHTML = list.length ? list.map(function (v) {
        return '<a class="verb-link" href="#/konjugation/' + slug(v) + '"><span class="vl-de">' + DS.esc(v.display) + '</span><span class="vl-en">' + DS.esc(v.en) + '</span><span class="vl-lv">' + v.level + '</span></a>';
      }).join('') : '<p class="empty">No verbs match. Try another spelling.</p>';
    }
    main.querySelectorAll('[data-l]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.level = b.dataset.l;
        main.querySelectorAll('[data-l]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        draw();
      });
    });
    document.getElementById('csearch').addEventListener('input', function (e) { state.text = e.target.value; draw(); });
    draw();
  }

  function verbPage(s) {
    var DS = window.DS, main = DS.main, esc = DS.esc;
    DS.setNav('konjugation');
    var v = findVerb(s);
    if (!v) { main.innerHTML = '<div class="page-head"><h1>Verb not found</h1><p class="sub"><a href="#/konjugation">Back to all verbs</a></p></div>'; return; }
    document.title = v.display + ' | Conjugation | Deutsch Schritt für Schritt';
    var c = conjugate(v);
    var cardsHtml = c.tables.map(function (t) {
      var say = t.forms.map(function (f, i) { var pr = PERSONS[i].split('/')[0]; return f === '—' ? '' : pr.charAt(0).toUpperCase() + pr.slice(1) + ' ' + f; }).filter(Boolean).join('. ') + '.';
      return '<section class="conj-card"><h2>' + t.name + ' <small>' + t.en + '</small>' + (window.DSSayBtn ? window.DSSayBtn(say, 'Listen to ' + t.name) : '') + '</h2><table class="conj-table"><tbody>' +
        t.forms.map(function (f, i) { return '<tr><th scope="row">' + PERSONS[i] + '</th>' + (f === '—' ? '<td class="na">—</td>' : '<td data-a="' + esc(f) + '">' + esc(f) + '</td>') + '</tr>'; }).join('') +
        '</tbody></table>' + (t.note ? '<p class="conj-note">' + t.note + '</p>' : '') + '</section>';
    }).join('');
    if (c.imp) cardsHtml += '<section class="conj-card"><h2>Imperativ <small>commands</small></h2><table class="conj-table"><tbody>' +
      c.imp.map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td data-a="' + esc(r[1].replace(/!$/, '')) + '">' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table></section>';
    else cardsHtml += '<section class="conj-card"><h2>Imperativ <small>commands</small></h2><p class="conj-note">' + (v.third ? 'This verb is used only in the 3rd person, so it has no imperative.' : 'Modal verbs have no imperative.') + '</p></section>';

    var parts = '<dl class="conj-parts"><div><dt>Infinitiv</dt><dd>' + esc(v.display) + '</dd></div><div><dt>Präteritum</dt><dd>' + esc(v.prat) + '</dd></div><div><dt>Partizip II</dt><dd>' + esc(v.part2) + '</dd></div><div><dt>Perfekt</dt><dd>' + esc(v.perf) + '</dd></div></dl>';
    main.innerHTML = '<div class="page-head"><p class="crumbs"><a href="#/konjugation">Conjugation</a> / ' + v.level + '</p><h1>' + esc(v.display) + (window.DSSayBtn ? ' ' + window.DSSayBtn((v.refl ? 'sich ' : '') + infinitiveFull(v)) : '') + '</h1><p class="sub">' + esc(v.en) + '</p></div>' +
      '<div class="conj-tags">' + c.tags.map(function (t) { return '<span class="ctag ctag-' + t[0] + '">' + esc(t[1]) + '</span>'; }).join('') + '</div>' + parts +
      '<div class="conj-tools"><button class="btn" id="ctest">Test yourself</button><span class="conj-hint" id="chint">Hide the forms and type them in. The site checks each answer.</span></div>' +
      '<div class="conj-grid" id="cgrid">' + cardsHtml + '</div>' +
      '<p class="conj-foot">Forms are generated from the vocabulary list using the standard rules and a list of irregular verbs. ' +
      (v.refl ? 'Reflexive verbs are shown with the ' + (v.dat ? 'dative' : 'accusative') + ' reflexive pronoun. ' : '') +
      'Explanations: <a href="#/thema/a1-praesens">Präsens</a>, <a href="#/thema/a2-perfekt">Perfekt</a>, <a href="#/thema/b1-praeteritum">Präteritum</a>, <a href="#/thema/b1-futur">Futur</a>, <a href="#/thema/b1-konjunktiv2">Konjunktiv II</a>, <a href="#/thema/a1-imperativ">Imperativ</a>.</p>';

    var testing = false;
    var btn = document.getElementById('ctest'), hint = document.getElementById('chint');
    btn.addEventListener('click', function () {
      testing = !testing;
      var cells = main.querySelectorAll('#cgrid td[data-a]');
      if (testing) {
        cells.forEach(function (td, i) {
          td.innerHTML = '<input class="conj-in" aria-label="' + esc(td.parentNode.querySelector('th').textContent) + '" autocomplete="off" autocapitalize="off" spellcheck="false" data-i="' + i + '">';
        });
        btn.textContent = 'Check answers';
        hint.textContent = 'Type the verb form without the pronoun (e.g. "stehe auf", "habe gelernt"). ä = ae is fine.';
        var first = main.querySelector('.conj-in'); if (first) first.focus();
        main.querySelectorAll('.conj-in').forEach(function (inp) {
          inp.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); var all = main.querySelectorAll('.conj-in'); var n = all[+inp.dataset.i + 1]; if (n) n.focus(); else btn.click(); }
          });
        });
        btn.dataset.phase = 'check';
      } else if (btn.dataset.phase === 'check') {
        testing = true;
        var right = 0, total = 0;
        cells.forEach(function (td) {
          var inp = td.querySelector('input'); if (!inp) return;
          total++;
          var ok = cnorm(inp.value) === cnorm(td.dataset.a);
          if (ok) right++;
          td.className = ok ? 'ok' : 'bad';
          td.innerHTML = ok ? esc(td.dataset.a) : '<s>' + esc(inp.value || '—') + '</s> ' + esc(td.dataset.a);
        });
        btn.textContent = 'Show all forms';
        hint.textContent = right + ' / ' + total + ' correct.';
        btn.dataset.phase = 'done';
      } else {
        cells.forEach(function (td) { td.className = ''; td.textContent = td.dataset.a; });
        btn.textContent = 'Test yourself';
        hint.textContent = 'Hide the forms and type them in. The site checks each answer.';
        btn.dataset.phase = '';
        testing = false;
      }
    });
  }

  window.ConjUI = {
    page: function (s, q) { if (s) verbPage(s); else listPage(q); },
    conjugate: function (display) { var v = findVerb(display); return v ? conjugate(v) : null; },
    link: function (display) { return '#/konjugation/' + encodeURIComponent(display); }
  };
})();
