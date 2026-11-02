window.BASICS = window.BASICS || {};
Object.assign(window.BASICS, {

'c1-nominalstil': {
  what: `<p>German can express the same idea in two styles. The <strong>Verbalstil</strong> (verbal style) uses verbs and full clauses: <span class="de">Weil die Preise gestiegen sind, kaufen die Leute weniger.</span> The <strong>Nominalstil</strong> (nominal style) packs the idea into nouns: <span class="de">Aufgrund des Preisanstiegs sinkt der Konsum.</span> At C1 you need to switch between the two.</p>`,
  terms: [['Nominalstil', 'noun-heavy, compact, formal'], ['Verbalstil', 'verb-heavy, clearer, closer to speech'], ['Umformung', 'transforming one style into the other, a typical C1 exam task']],
  when: [
    `Nominal style: academic papers, legal and official texts, reports, headlines: <span class="de">nach Abschluss des Studiums</span>.`,
    `Verbal style: speech, emails, explanations for a general audience: <span class="de">nachdem ich das Studium abgeschlossen hatte</span>.`,
    `Good writing mixes both: too many nouns make a text heavy and hard to read.`
  ],
  english: `English academic writing does the same thing ("the reduction of costs" vs. "we reduced costs"), but German goes much further, chaining several nouns with genitives and prepositions.`
},

'c1-nvv': {
  what: `<p>A <strong>noun-verb combination</strong> is a fixed phrase in which a noun carries the meaning and the verb is almost empty: <span class="de">eine Entscheidung treffen</span> (= entscheiden), <span class="de">in Frage stellen</span> (= bezweifeln). The verb cannot be swapped: you "meet" a decision in German, you do not "make" it.</p>`,
  terms: [['Nomen-Verb-Verbindung (Funktionsverbgefüge)', 'noun + "light" verb with a fixed meaning'], ['Funktionsverb', 'the light verb: treffen, stellen, bringen, kommen, nehmen, finden']],
  when: [
    `Formal and official texts: <span class="de">einen Antrag stellen, zur Verfügung stellen, in Kraft treten</span>.`,
    `Expressing nuances like beginning or passive meaning: <span class="de">in Bewegung setzen</span> (start moving), <span class="de">Anerkennung finden</span> (be recognised).`,
    `Exam writing at B2–C2, where they make your style sound more precise.`
  ],
  english: `English has some too (make a decision, take into account, call into question). The verbs rarely match: make a decision = <span class="de">eine Entscheidung treffen</span>, take part = <span class="de">teilnehmen</span>. Learn each combination as one unit.`
},

'c1-subjektive-modalverben': {
  what: `<p>Modal verbs normally talk about ability, obligation or permission. In their <strong>subjective</strong> use they express <strong>how sure the speaker is</strong> that something is true, or that the information comes from someone else: <span class="de">Er muss krank sein</span> (he must be ill: I'm almost sure). <span class="de">Er soll krank sein</span> (he is said to be ill).</p>`,
  terms: [['muss', '~90% sure: logical conclusion'], ['dürfte', '~75%: probably'], ['kann / könnte', '~50%: possibly'], ['kann nicht', 'impossible'], ['soll', 'according to others (hearsay)'], ['will', 'he/she claims about himself/herself']],
  when: [
    `Guessing and drawing conclusions: <span class="de">Das Licht ist an, sie muss zu Hause sein.</span>`,
    `Reporting rumours and news without confirming them: <span class="de">Der Sänger soll geheiratet haben.</span>`,
    `Doubting someone's claim: <span class="de">Er will den Unfall nicht gesehen haben.</span>`,
    `About the past: modal + Partizip II + haben/sein: <span class="de">Sie muss den Zug verpasst haben.</span>`
  ],
  english: `English "must" and "might" work similarly (he must be ill). But German <em>soll</em> = "is said to" and <em>will</em> = "claims to" have no direct English modal equivalent.`
},

'c1-partizipialattribute': {
  what: `<p>An <strong>extended participle attribute</strong> is a whole description squeezed in <strong>between the article and the noun</strong>: <span class="de">die seit Jahren steigenden Mieten</span> (the rents which have been rising for years). It replaces a relative clause and is typical of formal written German.</p>`,
  terms: [['Partizipialattribut', 'participle + extra information before a noun'], ['Rahmen', 'the article opens the "frame", the noun closes it'], ['Auflösung', 'turning it back into a relative clause to understand it']],
  when: [
    `Newspapers, academic and legal texts: <span class="de">die von der Regierung beschlossenen Maßnahmen</span>.`,
    `Reading strategy: when an article is not directly followed by its noun, look for the noun further on, then read the middle part as a relative clause.`,
    `Compact writing at C1: <span class="de">das gestern in Berlin unterzeichnete Abkommen</span>.`
  ],
  english: `English puts this information after the noun (the measures decided by the government). German puts it before, which is why these phrases are hard to read at first. Practise "unpacking" them into relative clauses.`
},

'c1-passiv-komplex': {
  what: `<p>At C1 the passive appears in <strong>all tenses</strong> and combined with <strong>modal verbs</strong> and <strong>subordinate clauses</strong>: <span class="de">Das Problem hätte früher gelöst werden müssen.</span> The rules are the same as in B1; only the verb clusters get longer.</p>`,
  terms: [['Passiv Perfekt', 'ist … worden (not geworden): Das Haus ist renoviert worden.'], ['Passiv mit Modalverb', 'muss … werden: Das muss geprüft werden.'], ['Verbcluster', 'several verbs together at the end of a clause']],
  when: [
    `Reports and academic texts: <span class="de">Es konnte gezeigt werden, dass …</span>`,
    `Saying what should have happened: <span class="de">Die Daten hätten gelöscht werden sollen.</span>`,
    `Passive in subordinate clauses: <span class="de">…, weil das Gebäude renoviert werden muss.</span>`
  ],
  english: `English "has been renovated" = <span class="de">ist renoviert worden</span>. The German order of the final verbs is the reverse of English: participle first, then werden, then the modal: <span class="de">gelöst werden müssen</span> = "must be solved".`
},

'c1-konnektoren': {
  what: `<p>In arguments and essays, <strong>connectors</strong> guide the reader: they introduce a point, add an argument, contrast, concede or conclude. At C1 you are expected to use a <strong>wide, precise range</strong> of them, not just und, aber and weil.</p>`,
  terms: [['Argumentationsstruktur', 'introduction, arguments, counter-arguments, conclusion'], ['einräumen (concede)', 'zwar … aber, obgleich, wenngleich'], ['folgern (conclude)', 'folglich, somit, demnach']],
  when: [
    `Adding: <span class="de">darüber hinaus, zudem, ferner</span>`,
    `Contrasting: <span class="de">hingegen, demgegenüber, während</span>`,
    `Reasons and consequences: <span class="de">zumal, infolgedessen, sodass</span>`,
    `Concluding: <span class="de">alles in allem, zusammenfassend lässt sich sagen</span>`
  ],
  english: `They correspond to English "moreover", "whereas", "consequently". As always in German, check the word order: adverbs like <em>folglich</em> take position 1 (verb next), subjunctions like <em>zumal</em> send the verb to the end.`
},

'c1-es': {
  what: `<p>The little word <strong>es</strong> has several jobs. Sometimes it is a normal pronoun (it = das Buch). Often, though, it is a <strong>placeholder</strong> without its own meaning: it fills a grammatical position or points to a clause that comes later.</p>`,
  terms: [['Pronomen', 'replaces a neuter noun: Das Buch? Es liegt dort.'], ['unpersönliches es', 'weather, time, fixed phrases: es regnet, es gibt'], ['Platzhalter-es', 'fills position 1 and disappears when something else stands there: Es kamen viele Gäste. → Viele Gäste kamen.'], ['Korrelat-es', 'points to a following clause: Ich finde es gut, dass …']],
  when: [
    `Weather and time: <span class="de">Es schneit. Es ist spät.</span>`,
    `Existence: <span class="de">Es gibt keine Lösung.</span>`,
    `Announcing a clause: <span class="de">Es ist wichtig, dass du kommst.</span>`,
    `Impersonal passive: <span class="de">Es wird viel diskutiert.</span>`
  ],
  english: `English uses "it" and "there" for most of these (it's raining, there are many guests, it is important that …). The tricky part is knowing when German <em>es</em> must disappear: in <span class="de">Viele Gäste kamen</span> there is no es.`
},

'c1-konjunktiv-modal': {
  what: `<p>This structure talks about <strong>missed obligations and possibilities in the past</strong>: what someone should have done, could have done or would have needed to do. It uses <span class="de">hätte</span> + infinitive + modal infinitive: <span class="de">Ich hätte früher anfangen sollen.</span></p>`,
  terms: [['Doppelinfinitiv', 'two infinitives at the end: anfangen sollen'], ['hätte … sollen', 'should have'], ['hätte … können', 'could have'], ['hätte … müssen', 'would have had to']],
  when: [
    `Regret: <span class="de">Ich hätte mehr lernen sollen.</span>`,
    `Criticism: <span class="de">Du hättest mich anrufen können!</span>`,
    `Missed possibilities: <span class="de">Wir hätten den Zug noch erreichen können.</span>`,
    `In subordinate clauses, hätte comes before the two infinitives: <span class="de">…, weil ich früher hätte gehen sollen.</span>`
  ],
  english: `English "should have done" uses a participle; German uses two infinitives: <span class="de">hätte machen sollen</span> (not "gemacht sollen"). The order is reversed: English "should have done" = German <em>hätte … machen sollen</em>.`
},

'c2-register': {
  what: `<p><strong>Register</strong> is the level of formality of language. The same message can be said in very different ways depending on who you are talking to: <span class="de">Haste mal 'ne Minute?</span> (casual) vs. <span class="de">Hätten Sie einen Moment Zeit?</span> (polite) vs. <span class="de">Dürfte ich Sie kurz in Anspruch nehmen?</span> (very formal).</p>`,
  terms: [['Stilebene', 'style level: gehoben, neutral, umgangssprachlich, salopp'], ['gehoben', 'elevated, literary or formal'], ['umgangssprachlich (ugs.)', 'colloquial']],
  when: [
    `Choosing words for the situation: <span class="de">bekommen</span> (neutral), <span class="de">erhalten</span> (formal), <span class="de">kriegen</span> (casual).`,
    `C2 exams expect you to rewrite a text in a different register and to recognise inappropriate style.`,
    `Formal letters, speeches and academic texts need consistent register throughout.`
  ],
  english: `English has the same range (get / receive / obtain). German additionally marks register with du/Sie, with Konjunktiv forms and with nominal style, so register mistakes are more noticeable.`
},

'c2-redewendungen': {
  what: `<p>An <strong>idiom</strong> (Redewendung) is a fixed expression whose meaning cannot be worked out from the individual words: <span class="de">Ich verstehe nur Bahnhof</span> means "I don't understand a thing", not anything about stations. Native speakers use them constantly, especially in speech and journalism.</p>`,
  terms: [['Redewendung / Idiom', 'fixed expression with a figurative meaning'], ['Sprichwort', 'a proverb, a complete saying: Übung macht den Meister.'], ['feste Wendung', 'a fixed collocation: zur Sprache bringen']],
  when: [
    `Informal conversation and storytelling: <span class="de">Das ist nicht mein Bier.</span> (not my business)`,
    `Journalism and commentary, often in headlines.`,
    `Understanding them is essential at C2; using them sounds natural if the register fits. Too many in a formal text sound odd.`
  ],
  english: `Some idioms have English twins (<span class="de">ins kalte Wasser springen</span> ≈ jump in at the deep end), but many do not. Never translate English idioms word for word; look up the German equivalent.`
},

'c2-wortbildung': {
  what: `<p><strong>Word formation</strong> describes how German builds new words from existing parts: by joining words into <strong>compounds</strong> (<span class="de">Haus + Tür = Haustür</span>), by adding <strong>prefixes and suffixes</strong> (<span class="de">un-klar, Frei-heit, les-bar</span>), and by changing word class (<span class="de">lesen → das Lesen</span>). If you know the parts, you can understand words you have never seen.</p>`,
  terms: [['Kompositum', 'compound word; the last part decides gender and main meaning'], ['Ableitung (derivation)', 'word + prefix/suffix'], ['Fugenelement', 'linking letters: Arbeit-s-platz']],
  when: [
    `Reading: break long words into parts from the end: <span class="de">Rechts|schutz|versicherung</span> = insurance for legal protection.`,
    `Writing precisely: <span class="de">-bar</span> (can be done), <span class="de">-los</span> (without), <span class="de">-ung</span> (action → noun).`,
    `Expanding vocabulary quickly from one root: <span class="de">fahren, Fahrer, Fahrt, befahrbar, Erfahrung</span>.`
  ],
  english: `English often writes compounds as separate words (health insurance). German writes them as one: <span class="de">Krankenversicherung</span>. The gender always comes from the last noun: <span class="de">die Tür → die Haustür</span>.`
},

'c2-praefixverben': {
  what: `<p>Some prefixes, like <span class="de">durch-, über-, um-, unter-, wider-, wieder-</span>, can be <strong>separable or inseparable</strong>, and the meaning changes with it. <span class="de">Er fährt das Schild um</span> (he knocks the sign over) vs. <span class="de">Er umfährt das Schild</span> (he drives around it).</p>`,
  terms: [['trennbar', 'stressed prefix, splits off: um|fahren → fährt um, umgefahren'], ['untrennbar', 'stress on the stem, stays together: umfahren → umfährt, umfahren (no ge-)'], ['wörtlich / übertragen', 'separable is usually literal, inseparable usually figurative']],
  when: [
    `Literal, physical meaning (often separable): <span class="de">Er setzt mit der Fähre über.</span> (crosses over)`,
    `Figurative, abstract meaning (often inseparable): <span class="de">Sie übersetzt den Text.</span> (translates)`,
    `In speech, stress tells you which one is meant: <span class="de">ÜBERsetzen</span> vs. <span class="de">überSETZen</span>.`
  ],
  english: `English has similar pairs with different word order: "to look over" vs. "to overlook" (meaning very different things). Learn each verb pair with an example sentence.`
},

'c2-satzklammer': {
  what: `<p>German main clauses form a <strong>sentence bracket</strong>: the conjugated verb in position 2 and the rest of the verb (participle, infinitive, prefix) at the end frame the middle of the sentence: <span class="de">Ich <u>habe</u> gestern mit meiner Schwester lange <u>telefoniert</u>.</span> <strong>Ausklammerung</strong> means placing something <strong>after</strong> the closing bracket, in the end field, to make a sentence easier to follow.</p>`,
  terms: [['Vorfeld', 'position before the verb'], ['Mittelfeld', 'the middle, inside the bracket'], ['Nachfeld', 'after the bracket'], ['Ausklammerung', 'moving material into the Nachfeld']],
  when: [
    `Comparisons are usually placed outside: <span class="de">Er hat mehr gearbeitet als ich.</span>`,
    `Long prepositional phrases, especially in speech: <span class="de">Wir haben lange diskutiert über das neue Projekt.</span>`,
    `Avoiding an overloaded middle field in formal writing, so the reader does not wait too long for the verb.`
  ],
  english: `English keeps verbs together (I have talked to my sister for a long time). German splits them. Understanding the bracket explains why German sentences "save" their main meaning for the end.`
},

'c2-konzessiv': {
  what: `<p>A <strong>concessive</strong> structure admits a fact that would normally prevent something, and then says it happens anyway: <span class="de">Obwohl es regnete, gingen wir spazieren.</span> At C2 you use more refined forms: <span class="de">wenngleich, so … auch, wie … auch immer, ungeachtet, selbst wenn</span>.</p>`,
  terms: [['Konzession', 'admitting a counter-fact'], ['wenngleich / obgleich', 'formal "although"'], ['so … auch', 'however …: So schwer es auch ist, …'], ['ungeachtet + Gen.', 'regardless of']],
  when: [
    `Formal argumentation: <span class="de">Wenngleich die Kosten hoch sind, lohnt sich die Investition.</span>`,
    `Emphatic "however much": <span class="de">So sehr ich mich auch bemühe, es klappt nicht.</span>`,
    `Formal written style: <span class="de">Ungeachtet der Kritik hielt sie an ihrem Plan fest.</span>`,
    `Hypothetical: <span class="de">Selbst wenn ich Zeit hätte, würde ich nicht kommen.</span>`
  ],
  english: `They match English "although", "however hard", "regardless of", "even if". Watch word order: after <em>so … auch</em>-clauses the main clause starts with the verb: <span class="de">…, klappt es nicht.</span>`
},

'c2-redewiedergabe': {
  what: `<p>When you report what others said, German lets you show <strong>how much you trust the information</strong>. You can choose between the indicative, Konjunktiv I, Konjunktiv II, modal verbs (soll, will) and introducing phrases (laut, zufolge, angeblich). Each choice adds a nuance of neutrality, distance or doubt.</p>`,
  terms: [['Konjunktiv I', 'neutral reporting: Er sagt, er sei krank.'], ['Konjunktiv II', 'often signals more doubt, or replaces Konj. I'], ['Indikativ', 'the reporter accepts the information as true'], ['redeeinleitende Ausdrücke', 'laut, zufolge, nach Angaben, angeblich']],
  when: [
    `Neutral journalism: <span class="de">Der Sprecher erklärte, man prüfe den Fall.</span>`,
    `Showing distance or doubt: <span class="de">Er behauptet, er hätte nichts gewusst.</span> / <span class="de">Er will nichts gewusst haben.</span>`,
    `Citing sources: <span class="de">Laut der Studie / Der Studie zufolge steigen die Werte.</span>`,
    `Academic writing, to separate others' claims from your own position.`
  ],
  english: `English signals distance with verbs (claims, alleges) or "reportedly". German can do this with the verb form itself. The choice of mood is a stylistic and even ethical decision in journalism.`
}

});
