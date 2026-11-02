window.BASICS = window.BASICS || {};
Object.assign(window.BASICS, {

'b1-praeteritum': {
  what: `<p>The <strong>Präteritum</strong> (simple past) is a past tense made of <strong>one word</strong>: <span class="de">ich ging, sie schrieb, wir arbeiteten</span>. It is the typical past tense of <strong>written German</strong>: stories, novels, news reports, biographies and CVs.</p>`,
  terms: [['regelmäßig (weak)', 'stem + -te: machte, wohnte'], ['unregelmäßig (strong)', 'a new stem, no -te: ging, kam, schrieb'], ['Mischverb (mixed)', 'a new stem plus -te: brachte, dachte, wusste']],
  when: [
    `Telling stories and fairy tales: <span class="de">Es war einmal ein König …</span>`,
    `News and reports: <span class="de">Der Zug kam mit Verspätung an.</span>`,
    `CVs and biographies: <span class="de">Von 2019 bis 2022 arbeitete ich als Analystin.</span>`,
    `In speech, mainly for sein, haben, the modal verbs and a few common verbs: <span class="de">ich dachte, ich wusste, es gab</span>.`
  ],
  english: `It looks like the English simple past (I went), but German uses it mostly in writing. In conversation, the same meaning is usually expressed with the Perfekt.`
},

'b1-plusquamperfekt': {
  what: `<p>The <strong>Plusquamperfekt</strong> (past perfect) describes something that happened <strong>before another past event</strong>. It is formed with <span class="de">hatte</span> or <span class="de">war</span> plus the Partizip II: <span class="de">Ich hatte schon gegessen, als er kam.</span></p>`,
  terms: [['Vorvergangenheit', '"the past before the past"'], ['nachdem', '"after"; the typical conjunction with the Plusquamperfekt']],
  when: [
    `Showing the order of two past events: <span class="de">Nachdem ich die Prüfung bestanden hatte, feierte ich.</span>`,
    `Explaining the background of a past situation: <span class="de">Er war müde, weil er schlecht geschlafen hatte.</span>`,
    `In stories, to go back further in time.`
  ],
  english: `It works exactly like the English past perfect (I had eaten). The only extra rule: verbs that take <em>sein</em> in the Perfekt also take <em>war</em> here: <span class="de">Ich war gegangen.</span>`
},

'b1-passiv': {
  what: `<p>In an <strong>active</strong> sentence the subject does something: <span class="de">Der Mechaniker repariert das Auto.</span> In a <strong>passive</strong> sentence the focus is on what happens, and the doer is unimportant or unknown: <span class="de">Das Auto wird repariert.</span> The German passive is formed with <span class="de">werden</span> + Partizip II.</p>`,
  terms: [['Aktiv', 'the doer is the subject'], ['Passiv (Vorgangspassiv)', 'the action is in focus; formed with werden'], ['Agens (doer)', 'can be added with von + Dativ or durch + Akkusativ']],
  when: [
    `When the doer is unknown or obvious: <span class="de">Mein Fahrrad wurde gestohlen.</span>`,
    `For processes, rules and instructions: <span class="de">Der Teig wird 10 Minuten geknetet.</span>`,
    `In news, science and official texts: <span class="de">Das Gesetz wurde beschlossen.</span>`,
    `To describe general activity: <span class="de">Hier wird nicht geraucht.</span>`
  ],
  english: `English uses "be" for the passive (The car is repaired). German uses <em>werden</em>: <span class="de">Das Auto wird repariert.</span> German <em>ist repariert</em> means something different: that the car is now in a repaired state (see B2).`
},

'b1-relativsatz': {
  what: `<p>A <strong>relative clause</strong> describes a noun more closely, like English "who", "which" or "that": <span class="de">der Mann, der neben mir wohnt</span>. It starts with a <strong>relative pronoun</strong> (der, die, das, den, dem, dessen …), and the verb goes to the end.</p>`,
  terms: [['Bezugswort', 'the noun the clause describes'], ['Relativpronomen', 'der, die, das and their case forms; gender and number come from the noun, the case from the role in the clause'], ['dessen / deren', '"whose"']],
  when: [
    `Adding information about a person or thing without starting a new sentence: <span class="de">Das ist die Kollegin, die mir geholfen hat.</span>`,
    `Defining exactly which one you mean: <span class="de">Der Film, den wir gesehen haben, war gut.</span>`,
    `With prepositions: <span class="de">die Stadt, in der ich wohne</span>`
  ],
  english: `English can drop the pronoun (the film I saw). German never can: <span class="de">der Film, den ich gesehen habe</span>. German also puts a comma before every relative clause and the verb at the end.`
},

'b1-infinitiv-zu': {
  what: `<p>An <strong>infinitive with zu</strong> is a short clause built around a verb in its basic form with <span class="de">zu</span>: <span class="de">Ich habe vergessen, dich anzurufen.</span> It works like English "to + verb" after many verbs, nouns and adjectives.</p>`,
  terms: [['Infinitivsatz', 'a clause with zu + infinitive at the end, and no own subject'], ['zu bei trennbaren Verben', 'zu goes between prefix and stem: anzurufen, einzukaufen']],
  when: [
    `After verbs like <span class="de">versuchen, vergessen, anfangen, aufhören, vorhaben, hoffen</span>: <span class="de">Ich versuche, pünktlich zu sein.</span>`,
    `After <span class="de">Lust/Zeit/Angst haben</span>: <span class="de">Ich habe keine Lust, zu kochen.</span>`,
    `After <span class="de">es ist + adjective</span>: <span class="de">Es ist wichtig, regelmäßig zu üben.</span>`
  ],
  english: `It is like English "to do": I try to be on time. But German puts the zu-infinitive at the end of the clause, and modal verbs (können, müssen …) never take zu.`
},

'b1-konnektoren': {
  what: `<p><strong>Connectors</strong> are words that link two ideas and show their relationship: reason, consequence, contrast, purpose. German connectors belong to three groups, and each group has its <strong>own word order</strong>.</p>`,
  terms: [['Konjunktion (Position 0)', 'und, aber, oder, denn, sondern; no effect on word order'], ['Konnektor-Adverb (Position 1)', 'deshalb, trotzdem, außerdem; the verb follows directly'], ['Subjunktion', 'weil, obwohl, damit, sodass; the verb goes to the end']],
  when: [
    `Giving reasons: <span class="de">weil, da, denn</span>`,
    `Showing consequences: <span class="de">deshalb, deswegen, sodass</span>`,
    `Showing an unexpected contrast: <span class="de">obwohl, trotzdem</span>`,
    `Showing a purpose: <span class="de">damit</span>`,
    `Correcting after a negative: <span class="de">nicht …, sondern …</span>`
  ],
  english: `English "so" and "therefore" do not change word order. German <em>deshalb</em> takes position 1, so the verb comes next: <span class="de">Deshalb bleibe ich zu Hause.</span> Using varied connectors is one of the main things examiners look for from B1.`
},

'b1-genitiv': {
  what: `<p>The <strong>Genitiv</strong> is the fourth case. It mainly shows <strong>possession or belonging</strong>, like English "'s" or "of": <span class="de">das Auto meines Bruders</span> (my brother's car), <span class="de">das Ende des Films</span> (the end of the film).</p>`,
  terms: [['Genitiv', 'the case for "of" and "\'s"; question: Wessen?'], ['-s / -es', 'masculine and neuter nouns take an ending: des Mannes, des Lehrers'], ['Genitivpräpositionen', 'wegen, trotz, während and others (see B2)']],
  when: [
    `Possession in writing: <span class="de">die Meinung der Studierenden</span>`,
    `Formal texts, news and academic writing, where it is standard.`,
    `With names: <span class="de">Annas Wohnung</span> (no apostrophe).`,
    `In speech it is often replaced with von + Dativ: <span class="de">das Auto von meinem Bruder</span>.`
  ],
  english: `English "my brother's car" becomes <span class="de">das Auto meines Bruders</span>: the owner comes after the thing. Names work like English but without an apostrophe: <span class="de">Peters Fahrrad</span>.`
},

'b1-konjunktiv2': {
  what: `<p>The <strong>Konjunktiv II</strong> is the verb form for things that are <strong>not real</strong>: wishes, dreams, imagined situations and conditions that are not true. It corresponds to English "would", "could", "if I were". Most verbs use <span class="de">würde + infinitive</span>; common verbs have their own forms: <span class="de">wäre, hätte, könnte, müsste</span>.</p>`,
  terms: [['irreal', 'not real, only imagined'], ['Konjunktiv II Gegenwart', 'present: wäre, hätte, würde machen'], ['Konjunktiv II Vergangenheit', 'past: hätte gemacht, wäre gegangen ("would have")']],
  when: [
    `Unreal conditions: <span class="de">Wenn ich Zeit hätte, würde ich mitkommen.</span>`,
    `Wishes: <span class="de">Wenn ich doch nur mehr Geld hätte!</span>`,
    `Regret about the past: <span class="de">Wenn ich das gewusst hätte, wäre ich gekommen.</span>`,
    `Advice and polite requests: <span class="de">Du solltest … / Könnten Sie …?</span>`
  ],
  english: `It covers English "would", "could", "were" and "would have". Notice that German uses Konjunktiv II in both halves of a condition (if I had time, I would come), but avoid <em>würde</em> twice: <span class="de">Wenn ich Zeit hätte, würde ich …</span>`
},

'b1-praepverben': {
  what: `<p>Many German verbs are used with a <strong>fixed preposition</strong>, and the preposition decides the case: <span class="de">warten auf + Akkusativ</span>, <span class="de">teilnehmen an + Dativ</span>. The preposition often differs from English, so the verb and preposition are learned together as one unit.</p>`,
  terms: [['Präpositionalverb', 'verb + fixed preposition: denken an, sich freuen auf'], ['da-Wort', 'refers back to a thing: darauf, daran, dafür'], ['wo-Wort', 'asks about a thing: worauf, woran, wofür']],
  when: [
    `Talking about feelings, interests and plans: <span class="de">Ich freue mich auf die Ferien. Sie interessiert sich für Kunst.</span>`,
    `Asking about things: <span class="de">Worauf wartest du?</span> and about people: <span class="de">Auf wen wartest du?</span>`,
    `Referring back or pointing forward to a clause: <span class="de">Ich denke daran, dass …</span>`
  ],
  english: `English has the same idea (wait for, think of), but the prepositions rarely match: wait <em>for</em> = warten <em>auf</em>, think <em>of</em> = denken <em>an</em>. English "it" after a preposition (for it, about it) becomes one German word: <span class="de">dafür, darüber</span>.`
},

'b1-als-wenn': {
  what: `<p>English uses one word, "when", for three different situations. German has three words: <strong>als</strong> for a single event in the past, <strong>wenn</strong> for repeated events, the present and the future, and <strong>wann</strong> for questions about time.</p>`,
  terms: [['als', 'once, in the past: Als ich Kind war …'], ['wenn', 'whenever / if / when (now or future): Wenn ich Zeit habe …'], ['wann', 'question word: Wann kommst du?']],
  when: [
    `<strong>als</strong>: one moment or period in the past: <span class="de">Als ich nach Deutschland kam, sprach ich kein Deutsch.</span>`,
    `<strong>wenn</strong>: repeated past events (immer wenn), present, future and conditions: <span class="de">Wenn ich fertig bin, rufe ich dich an.</span>`,
    `<strong>wann</strong>: direct and indirect questions: <span class="de">Weißt du, wann der Kurs beginnt?</span>`
  ],
  english: `Test it in English: if you can say "whenever" or "if", use <em>wenn</em>; if it happened once in the past, use <em>als</em>; if it is a question about time, use <em>wann</em>.`
},

'b1-futur': {
  what: `<p>The <strong>Futur I</strong> is formed with <span class="de">werden</span> + infinitive: <span class="de">Ich werde dich anrufen.</span> It is used less than in English, because German often uses the present tense for the future. Futur I is preferred for predictions, promises, plans without a time word, and guesses about the present.</p>`,
  terms: [['Futur I', 'werden + Infinitiv'], ['Vermutung', 'an assumption, often with wohl: Er wird wohl krank sein.']],
  when: [
    `Predictions: <span class="de">Es wird morgen regnen.</span>`,
    `Promises and resolutions: <span class="de">Ich werde mehr Sport machen.</span>`,
    `Guessing about now: <span class="de">Sie wird wohl schon zu Hause sein.</span> (She is probably home already.)`,
    `With a time word, the present is more natural: <span class="de">Nächste Woche fahre ich nach Wien.</span>`
  ],
  english: `English uses "will" and "going to" all the time. German often just uses the present with a time word. Do not confuse <span class="de">ich will</span> (I want) with English "I will"; "I will" is <span class="de">ich werde</span>.`
},

'b2-zustandspassiv': {
  what: `<p>The <strong>Zustandspassiv</strong> (passive with sein) describes the <strong>state or result after an action</strong>, not the action itself. Compare: <span class="de">Die Tür wird geschlossen</span> (someone is closing it: process) and <span class="de">Die Tür ist geschlossen</span> (it is closed now: state). It is formed with <span class="de">sein</span> + Partizip II.</p>`,
  terms: [['Vorgangspassiv', 'werden + Partizip II: the process'], ['Zustandspassiv', 'sein + Partizip II: the resulting state'], ['Resultat', 'what is true after the action is finished']],
  when: [
    `Signs and notices: <span class="de">Geschlossen. Reserviert. Ausverkauft.</span> (short for <span class="de">ist geschlossen</span>)`,
    `Reporting that something is done: <span class="de">Die Rechnung ist bezahlt. Alles ist organisiert.</span>`,
    `Describing the condition of something in the past: <span class="de">Das Formular war nicht ausgefüllt.</span>`
  ],
  english: `English "The door is closed" can mean both the action and the state. German makes the difference visible: <em>wird geschlossen</em> (action) vs. <em>ist geschlossen</em> (state).`
},

'b2-passiversatz': {
  what: `<p><strong>Passiversatzformen</strong> are alternatives to the passive. They express the same meaning as a passive with a modal verb (must be done, can be done), but are shorter and more elegant: <span class="de">Das Problem lässt sich lösen</span> instead of <span class="de">Das Problem kann gelöst werden.</span></p>`,
  terms: [['sein + zu + Infinitiv', 'must/can be done: Das ist zu erledigen.'], ['sich lassen + Infinitiv', 'can be done: Das lässt sich ändern.'], ['-bar / -lich', 'adjectives meaning "can be …": machbar, lesbar, verständlich']],
  when: [
    `Official instructions and rules: <span class="de">Der Antrag ist bis Freitag einzureichen.</span>`,
    `Saying something is possible or impossible: <span class="de">Das lässt sich nicht vermeiden. Das ist unvermeidbar.</span>`,
    `To vary your style in exam writing at B2 and above.`
  ],
  english: `English has similar forms: "-able" adjectives (readable, doable) and "is to be done". German uses these alternatives more often, especially in formal writing.`
},

'b2-als-ob': {
  what: `<p>An <strong>unreal comparison</strong> says that something seems a certain way, although it is not true (or probably not): "He acts as if he knew everything." German uses <span class="de">als ob, als wenn</span> or <span class="de">als</span> + verb, always with the <strong>Konjunktiv II</strong>.</p>`,
  terms: [['irrealer Vergleich', 'an imagined, not real comparison'], ['als ob / als wenn', 'verb at the end: als ob er alles wüsste'], ['als + Verb', 'verb right after als: als wüsste er alles']],
  when: [
    `Describing behaviour: <span class="de">Er tut so, als ob er keine Zeit hätte.</span>`,
    `Describing impressions: <span class="de">Es sieht so aus, als würde es gleich regnen.</span>`,
    `Describing feelings: <span class="de">Ich fühle mich, als wäre ich zu Hause.</span>`
  ],
  english: `It matches English "as if / as though" with the subjunctive (as if he were). German is stricter: it always uses Konjunktiv II forms like <em>wäre, hätte, würde</em>.`
},

'b2-zweiteilig': {
  what: `<p><strong>Two-part connectors</strong> consist of two words that frame two ideas: both … and, either … or, neither … nor, not only … but also. They make texts more precise and are typical of good written German.</p>`,
  terms: [['sowohl … als auch', 'both … and'], ['weder … noch', 'neither … nor'], ['entweder … oder', 'either … or'], ['zwar … aber', 'admittedly … but'], ['je … desto', 'the more … the more']],
  when: [
    `Listing two things that are both true: <span class="de">Sie spricht sowohl Englisch als auch Spanisch.</span>`,
    `Saying both are not true: <span class="de">Ich habe weder Zeit noch Geld.</span>`,
    `Conceding a point and then contrasting: <span class="de">Die Wohnung ist zwar klein, aber hell.</span>`,
    `Describing a dependence: <span class="de">Je mehr ich übe, desto besser werde ich.</span>`
  ],
  english: `Most have direct English equivalents. The tricky one is <em>je … desto</em> (the more … the better): the <em>je</em>-part sends the verb to the end, the <em>desto</em>-part puts it right after the comparative.`
},

'b2-infinitivsaetze': {
  what: `<p>These are short clauses with <strong>zu + infinitive</strong> that express a <strong>purpose</strong> (um … zu = in order to), something that <strong>does not happen</strong> (ohne … zu = without doing) or an <strong>alternative</strong> ((an)statt … zu = instead of doing). They only work when both parts have the same subject.</p>`,
  terms: [['um … zu', 'in order to'], ['ohne … zu', 'without …ing'], ['(an)statt … zu', 'instead of …ing'], ['damit / ohne dass / statt dass', 'the versions for different subjects']],
  when: [
    `Purpose: <span class="de">Ich lerne Deutsch, um in Deutschland zu studieren.</span>`,
    `Something missing: <span class="de">Er ging, ohne sich zu verabschieden.</span>`,
    `Alternative: <span class="de">Statt zu lernen, sah er fern.</span>`,
    `Different subjects need a dass-clause: <span class="de">Ich erkläre es, damit du es verstehst.</span>`
  ],
  english: `English uses "to" or "-ing" (to study, without saying). German always uses zu + infinitive at the end of the clause, and a comma before it.`
},

'b2-modalsaetze': {
  what: `<p>A <strong>modal clause</strong> explains <strong>how</strong> or <strong>by what means</strong> something is achieved. German uses <span class="de">indem</span> or <span class="de">dadurch, dass</span>: <span class="de">Man lernt eine Sprache, indem man sie spricht.</span></p>`,
  terms: [['Modalsatz', 'answers the question Wie? or Wodurch?'], ['indem', 'by …ing; verb at the end'], ['dadurch, dass', 'the same meaning; dadurch stands in the main clause']],
  when: [
    `Explaining a method: <span class="de">Er spart Geld, indem er mit dem Rad fährt.</span>`,
    `Giving tips and instructions: <span class="de">Sie verbessern Ihr Deutsch, indem Sie jeden Tag lesen.</span>`,
    `In formal writing, the same idea is often a noun phrase with durch: <span class="de">durch tägliches Lesen</span>.`
  ],
  english: `It is the equivalent of English "by + -ing" (by reading every day). English uses a short phrase; German needs a full clause with a subject and the verb at the end.`
},

'b2-konjunktiv1': {
  what: `<p>The <strong>Konjunktiv I</strong> is the verb form for <strong>reported speech</strong>: passing on what someone else said, without saying whether it is true. It is used mainly in news, reports and academic texts: <span class="de">Der Minister sagte, die Lage sei ernst.</span></p>`,
  terms: [['indirekte Rede', 'reported speech'], ['Konjunktiv I', 'formed from the infinitive stem: er habe, sie sei, er komme'], ['Ersatzform', 'when Konjunktiv I looks like the indicative, Konjunktiv II is used instead: sie hätten']],
  when: [
    `News reports: <span class="de">Die Polizei teilte mit, der Fahrer sei verletzt.</span>`,
    `Academic texts, to report other authors: <span class="de">Müller zufolge sei die Methode ungenau.</span>`,
    `Formal summaries of what someone said in meetings or interviews.`,
    `In everyday speech, Germans mostly use the normal indicative or würde instead.`
  ],
  english: `English reports speech by shifting tenses (He said he was tired). German keeps the original tense but changes the mood: <span class="de">Er sagte, er sei müde.</span> This signals "I am only reporting this".`
},

'b2-nominalisierung': {
  what: `<p><strong>Nominalisation</strong> means turning a verb (or adjective) into a noun: <span class="de">entscheiden → die Entscheidung</span>, <span class="de">lesen → das Lesen</span>. It lets you pack a whole idea into a compact noun phrase, which is typical of formal and written German.</p>`,
  terms: [['Nominalisierung', 'making a noun out of a verb or adjective'], ['Nominalstil', 'a style with many nouns: formal, compact'], ['Verbalstil', 'a style with many verbs: clearer, more spoken']],
  when: [
    `Headlines: <span class="de">Anstieg der Mieten</span> instead of <span class="de">Die Mieten steigen.</span>`,
    `Formal letters and reports: <span class="de">nach Eingang Ihrer Zahlung</span>`,
    `Academic writing and exam essays at B2 and above.`,
    `Turning clauses into phrases: <span class="de">weil es regnete → wegen des Regens</span>`
  ],
  english: `English does this too (decide → decision, arrive → arrival), but German uses it much more in formal texts. The infinitive as a noun is very easy: any verb can become a neuter noun: <span class="de">das Lernen, das Kochen</span>.`
},

'b2-partizipien': {
  what: `<p><strong>Participles</strong> are verb forms that can be used like adjectives. The <strong>Partizip I</strong> (infinitive + d) describes something happening at the same time and is active: <span class="de">das lachende Kind</span> (the laughing child). The <strong>Partizip II</strong> describes something completed or passive: <span class="de">das reparierte Auto</span> (the repaired car).</p>`,
  terms: [['Partizip I', 'lachend, steigend, schlafend: "-ing"'], ['Partizip II', 'repariert, gestohlen, geschrieben: "-ed / -en"'], ['als Adjektiv', 'before a noun with normal adjective endings']],
  when: [
    `Short, precise descriptions instead of relative clauses: <span class="de">die steigenden Preise</span> (the prices that are rising).`,
    `News and reports: <span class="de">die gestohlenen Fahrräder</span>`,
    `Formal and academic writing, where long participle phrases are common (see C1).`
  ],
  english: `They work like English "-ing" and "-ed" adjectives (the rising prices, the stolen bikes). Unlike English, they take adjective endings: <span class="de">ein schlafendes Kind</span>.`
},

'b2-genitivpraep': {
  what: `<p>Some prepositions are followed by the <strong>genitive case</strong>: <span class="de">wegen, trotz, während, aufgrund, innerhalb, außerhalb, statt</span> and others. They are typical of formal written German.</p>`,
  terms: [['Genitivpräposition', 'a preposition that requires the genitive'], ['umgangssprachlich', 'colloquially, wegen, trotz and während are often used with the dative']],
  when: [
    `Giving reasons formally: <span class="de">Wegen des Streiks fallen Züge aus. Aufgrund der Nachfrage …</span>`,
    `Contrast: <span class="de">Trotz des Regens gingen wir spazieren.</span>`,
    `Time and place limits: <span class="de">während der Prüfung, innerhalb einer Woche, außerhalb der Stadt</span>`,
    `Letters and official texts: <span class="de">bezüglich Ihrer Anfrage</span>`
  ],
  english: `These match English "because of", "despite", "during", "within". In speech, Germans often say <span class="de">wegen dem Wetter</span>; in exams and formal writing use the genitive: <span class="de">wegen des Wetters</span>.`
},

'b2-modalpartikeln': {
  what: `<p><strong>Modal particles</strong> are small words like <span class="de">doch, mal, ja, denn, eben, halt, wohl, schon</span>. They do not change the facts of a sentence, but they show the <strong>speaker's attitude</strong>: friendliness, surprise, impatience or reassurance. They are very typical of spoken German.</p>`,
  terms: [['Modalpartikel', 'a small word that colours the tone'], ['Abtönung', 'the "toning" effect they have']],
  when: [
    `Making requests softer: <span class="de">Kannst du mal kommen?</span>`,
    `Showing interest or surprise in questions: <span class="de">Was machst du denn hier?</span>`,
    `Reminding or encouraging: <span class="de">Komm doch mit!</span>`,
    `Accepting something that cannot be changed: <span class="de">Das ist halt so.</span>`
  ],
  english: `English expresses this with tone of voice or phrases like "just", "really", "come on", "after all". There is no one-to-one translation, so learn them from examples and listening.`
},

'b2-n-deklination': {
  what: `<p>The <strong>n-declension</strong> is a group of masculine nouns that add <strong>-(e)n</strong> in every case except the nominative singular: <span class="de">der Kollege, den Kollegen, dem Kollegen, des Kollegen</span>. Most of them are people or animals.</p>`,
  terms: [['n-Deklination', 'the "weak" masculine nouns'], ['typische Endungen', '-e (Kollege, Junge), -ant, -ent, -ist, -at, -oge (Student, Journalist, Biologe)']],
  when: [
    `Whenever these nouns are objects or come after prepositions: <span class="de">Ich frage den Studenten. Ich spreche mit dem Kunden.</span>`,
    `In formal writing, where mistakes here are noticed: <span class="de">die Rede des Präsidenten</span>`
  ],
  english: `English has nothing comparable. The easiest strategy is to learn the most frequent ones (Kollege, Kunde, Junge, Mensch, Herr, Nachbar, Student, Präsident) and remember that in every form except "der …" they end in -n.`
}

});
