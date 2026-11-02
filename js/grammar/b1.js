GRAMMAR.push(
{
  level: 'B1', id: 'b1-praeteritum', title: 'The simple past', de: 'Das Präteritum',
  summary: 'The written past tense for stories, reports and news, with regular, irregular and mixed verbs.',
  body:
  '<p>The <strong>Präteritum</strong> is the main past tense in written German: novels, newspaper articles, reports and CVs. In speech, Germans mostly use the Perfekt, except for <em>sein, haben</em>, the modal verbs and a few common verbs such as <em>es gab, ich dachte, ich wusste</em>.</p>' +
  '<h2>Regular verbs: stem + -te</h2>' +
  TBL('Person | Ending | machen | arbeiten\nich | -te | machte | arbeitete\ndu | -test | machtest | arbeitetest\ner / sie / es | -te | machte | arbeitete\nwir | -ten | machten | arbeiteten\nihr | -tet | machtet | arbeitetet\nsie / Sie | -ten | machten | arbeiteten') +
  '<h2>Irregular verbs: new stem, no ending in ich and er</h2>' +
  TBL('Person | gehen | kommen | sprechen\nich | ging | kam | sprach\ndu | gingst | kamst | sprachst\ner / sie / es | ging | kam | sprach\nwir | gingen | kamen | sprachen\nihr | gingt | kamt | spracht\nsie / Sie | gingen | kamen | sprachen') +
  '<p>Mixed verbs change their stem but take the regular <em>-te</em> endings: <span class="de">bringen → brachte, denken → dachte, kennen → kannte, wissen → wusste</span>. The irregular stems must be learned; every verb in the Wortschatz shows its Präteritum.</p>' +
  EX('Als Kind wohnte ich in Lagos. | As a child I lived in Lagos.\nDer Zug kam mit zwei Stunden Verspätung an. | The train arrived two hours late.\nEs war einmal ein König, der drei Töchter hatte. | Once upon a time there was a king who had three daughters.') +
  MISTAKE('Er gehte nach Hause.', 'Er ging nach Hause.') +
  PRACTICE('Put the verbs into the Präteritum.',
    'Sie (fahren) ___ mit dem Fahrrad zur Arbeit.\nWir (essen) ___ im Restaurant.\nIch (denken) ___ an dich.\nDie Kinder (spielen) ___ im Garten.\nEr (schreiben) ___ einen langen Brief.',
    'fuhr\naßen\ndachte\nspielten\nschrieb')
},
{
  level: 'B1', id: 'b1-plusquamperfekt', title: 'The past perfect', de: 'Das Plusquamperfekt',
  summary: 'hatte or war plus Partizip II: for something that happened before another past event.',
  body:
  '<p>The <strong>Plusquamperfekt</strong> describes an action that was already finished before another action in the past. It is formed like the Perfekt, but with <strong>hatte</strong> or <strong>war</strong>.</p>' +
  TBL('Tense | Example\nPerfekt | Ich habe gegessen. / Ich bin gegangen.\nPlusquamperfekt | Ich hatte gegessen. / Ich war gegangen.') +
  '<h2>With nachdem</h2>' +
  '<p>The Plusquamperfekt is very common with <strong>nachdem</strong> (after): the earlier action goes in the nachdem-clause in the Plusquamperfekt, the later one in the Präteritum or Perfekt.</p>' +
  EX('Nachdem ich gegessen hatte, ging ich spazieren. | After I had eaten, I went for a walk.\nAls wir ankamen, war der Film schon zu Ende gegangen. | When we arrived, the film had already ended.\nSie hatte die Prüfung bestanden und feierte mit Freunden. | She had passed the exam and celebrated with friends.') +
  NOTE('<strong>bevor</strong> (before) is the opposite and usually takes the same tense as the main clause: <span class="de">Bevor ich ging, schloss ich die Tür ab.</span>') +
  MISTAKE('Nachdem ich esse, gehe ich ins Bett. (past meaning)', 'Nachdem ich gegessen hatte, ging ich ins Bett.', 'nachdem needs a tense step back: Plusquamperfekt before Präteritum, or Perfekt before Präsens.') +
  PRACTICE('Combine with nachdem.',
    'Er duscht. Dann frühstückt er. (past)\nWir kaufen Tickets. Dann fahren wir los. (past)\nSie kommt nach Hause. Dann ruft sie an. (past)',
    'Nachdem er geduscht hatte, frühstückte er.\nNachdem wir Tickets gekauft hatten, fuhren wir los.\nNachdem sie nach Hause gekommen war, rief sie an.')
},
{
  level: 'B1', id: 'b1-passiv', title: 'The passive with werden', de: 'Das Passiv mit werden (Vorgangspassiv)',
  summary: 'werden plus Partizip II, in all main tenses, with modal verbs and with von or durch.',
  body:
  '<p>The passive puts the <strong>action</strong> in the foreground rather than the person doing it. It is very common in rules, instructions, news and scientific writing. It is formed with <strong>werden + Partizip II</strong>.</p>' +
  EX('Aktiv: Der Mechaniker repariert das Auto. | The mechanic repairs the car.\nPassiv: Das Auto wird (vom Mechaniker) repariert. | The car is (being) repaired (by the mechanic).') +
  '<p>The accusative object of the active sentence becomes the subject in the nominative. Dative objects stay dative: <span class="de">Mir wurde geholfen.</span></p>' +
  '<h2>Tenses</h2>' +
  TBL('Tense | Form | Example\nPräsens | wird + Partizip II | Das Haus wird gebaut.\nPräteritum | wurde + Partizip II | Das Haus wurde gebaut.\nPerfekt | ist + Partizip II + worden | Das Haus ist gebaut worden.\nPlusquamperfekt | war + Partizip II + worden | Das Haus war gebaut worden.\nmit Modalverb | muss + Partizip II + werden | Das Haus muss gebaut werden.') +
  NOTE('In the Perfekt passive, the participle of werden is <strong>worden</strong>, not geworden.') +
  '<h2>von or durch</h2>' +
  '<p>Name the agent with <strong>von + Dativ</strong> (person, institution) or <strong>durch + Akkusativ</strong> (means, cause): <span class="de">Das Gesetz wurde vom Parlament beschlossen. Die Stadt wurde durch ein Erdbeben zerstört.</span></p>' +
  '<h2>Impersonal passive</h2>' +
  '<p>Verbs without an object can also form a passive, which describes an activity in general: <span class="de">Hier wird nicht geraucht. Am Samstag wird gefeiert.</span></p>' +
  MISTAKE('Das Fenster ist geöffnet geworden.', 'Das Fenster ist geöffnet worden.') +
  PRACTICE('Change into the passive. Keep the tense.',
    'Man spricht hier Deutsch.\nDer Koch bereitete das Essen vor.\nMan hat die Rechnung bezahlt.\nMan muss den Text übersetzen.\nDie Firma verschickt die Pakete.',
    'Hier wird Deutsch gesprochen.\nDas Essen wurde vom Koch vorbereitet.\nDie Rechnung ist bezahlt worden.\nDer Text muss übersetzt werden.\nDie Pakete werden von der Firma verschickt.')
},
{
  level: 'B1', id: 'b1-relativsatz', title: 'Relative clauses', de: 'Relativsätze',
  summary: 'der, die, das, dem, dessen: the relative pronoun takes its gender from the noun and its case from the clause.',
  body:
  '<p>A relative clause gives more information about a noun. It begins with a <strong>relative pronoun</strong> and the conjugated verb goes to the end.</p>' +
  EX('Das ist der Mann, der neben uns wohnt. | That is the man who lives next to us.') +
  '<h2>Choosing the pronoun</h2>' +
  '<p>Two questions decide the form: the <strong>gender and number</strong> come from the noun it refers to; the <strong>case</strong> comes from its role inside the relative clause.</p>' +
  TBL('Case | masculine | feminine | neuter | plural\nNominativ | der | die | das | die\nAkkusativ | den | die | das | die\nDativ | dem | der | dem | <strong>denen</strong>\nGenitiv | <strong>dessen</strong> | <strong>deren</strong> | <strong>dessen</strong> | <strong>deren</strong>') +
  EX('Der Film, den ich gestern gesehen habe, war toll. | The film (that) I saw yesterday was great. (Akk.: ich habe den Film gesehen)\nDie Kollegin, der ich geholfen habe, bedankt sich. | The colleague I helped says thank you. (Dat.: helfen + Dativ)\nDie Leute, mit denen ich arbeite, sind nett. | The people I work with are nice.\nDer Student, dessen Laptop kaputt ist, schreibt mit der Hand. | The student whose laptop is broken writes by hand.') +
  NOTE('English can leave out the relative pronoun ("the film I saw"). German never can. A preposition always comes <strong>before</strong> the pronoun: <span class="de">die Stadt, in der ich wohne</span>.') +
  '<h2>wo and was</h2>' +
  '<p>After places you can use <strong>wo</strong>: <span class="de">die Stadt, wo ich wohne</span>. After <em>alles, nichts, etwas, das</em> and whole clauses, use <strong>was</strong>: <span class="de">Das ist alles, was ich weiß.</span></p>' +
  MISTAKE('Der Mann, das ich kenne', 'Der Mann, den ich kenne') +
  PRACTICE('Complete with the relative pronoun.',
    'Das ist die Frau, ___ ich im Kurs kennengelernt habe.\nWo ist das Buch, ___ auf dem Tisch lag?\nDas sind die Kinder, ___ wir Geschenke gegeben haben.\nDer Kollege, ___ Auto kaputt ist, kommt mit dem Bus.\nIch verstehe nicht, ___ du meinst.',
    'die (Akk., f.)\ndas (Nom., n.)\ndenen (Dat. Pl.)\ndessen (Gen., m.)\nwas')
},
{
  level: 'B1', id: 'b1-infinitiv-zu', title: 'Infinitive with zu', de: 'Infinitiv mit zu',
  summary: 'Ich habe keine Lust, … zu …; es ist wichtig, … zu …: which verbs and phrases need zu.',
  body:
  '<p>After many verbs, nouns and adjectives, the second verb goes to the end in the infinitive with <strong>zu</strong>. With separable verbs, <em>zu</em> goes between prefix and stem.</p>' +
  EX('Ich habe vergessen, dich anzurufen. | I forgot to call you.\nEs ist wichtig, regelmäßig zu lernen. | It is important to study regularly.\nHast du Lust, ins Kino zu gehen? | Do you feel like going to the cinema?') +
  TBL('Typical triggers | Examples\nverbs | anfangen, aufhören, versuchen, vergessen, vorhaben, beschließen, empfehlen, hoffen, planen\nnoun + haben | Lust haben, Zeit haben, Angst haben, die Möglichkeit haben\nes ist + adjective | es ist wichtig / schwer / leicht / verboten / schön') +
  '<h2>No zu</h2>' +
  '<p>Modal verbs and a few others take the infinitive <strong>without zu</strong>: <span class="de">können, müssen, wollen, dürfen, sollen, möchten, lassen, werden</span>, and the verbs of perception <span class="de">sehen, hören</span>, plus <span class="de">gehen, bleiben, lernen</span> with a simple infinitive: <span class="de">Ich gehe einkaufen.</span></p>' +
  NOTE('<strong>brauchen</strong> + nicht/nur + zu replaces "nicht müssen": <span class="de">Du brauchst nicht zu kommen.</span> (You don\'t need to come.)') +
  MISTAKE('Ich versuche zu anrufen ihn.', 'Ich versuche, ihn anzurufen.') +
  PRACTICE('Complete with zu + infinitive.',
    'Ich habe keine Zeit. (einkaufen)\nEr hört auf. (rauchen)\nEs ist schwer. (eine Wohnung finden)\nWir haben vor. (im Sommer nach Italien fahren)\nVergiss nicht! (die Tür abschließen)',
    'Ich habe keine Zeit einzukaufen.\nEr hört auf zu rauchen.\nEs ist schwer, eine Wohnung zu finden.\nWir haben vor, im Sommer nach Italien zu fahren.\nVergiss nicht, die Tür abzuschließen!')
},
{
  level: 'B1', id: 'b1-konnektoren', title: 'Connectors: reason, consequence, contrast', de: 'Konnektoren: deshalb, trotzdem, obwohl',
  summary: 'Three word-order patterns: conjunctions in position 0, adverbs in position 1, subordinators that send the verb to the end.',
  body:
  '<p>Connectors link ideas, and each type has its own word order. Learn them in three groups.</p>' +
  TBL('Group | Word order | Words\nPosition 0 (conjunctions) | normal order after them | und, aber, oder, denn, sondern\nPosition 1 (adverbs) | verb comes next, then subject | deshalb, deswegen, darum, trotzdem, außerdem, dann, sonst\nSubordinating | verb at the end | weil, da, obwohl, damit, sodass, während, bevor, nachdem') +
  '<h2>Reason, consequence and contrast</h2>' +
  TBL('Meaning | Subordinating | Adverb\nreason | weil / da: …, weil ich krank war. | denn (pos. 0): …, denn ich war krank.\nconsequence | sodass: …, sodass ich zu Hause blieb. | deshalb: Ich war krank, deshalb blieb ich zu Hause.\nunexpected contrast | obwohl: Obwohl ich krank war, ging ich zur Arbeit. | trotzdem: Ich war krank. Trotzdem ging ich zur Arbeit.\npurpose | damit: Ich lerne, damit ich die Prüfung bestehe. | (um … zu, see B2)') +
  EX('Es regnete, deshalb nahmen wir ein Taxi. | It was raining, so we took a taxi.\nObwohl er müde war, arbeitete er weiter. | Although he was tired, he kept working.\nDas ist nicht billig, sondern sehr teuer. | That is not cheap, but very expensive.') +
  NOTE('<strong>sondern</strong> replaces something after a negation ("not A but B"); <strong>aber</strong> adds a contrast.') +
  MISTAKE('Ich war krank, deshalb ich bin zu Hause geblieben.', 'Ich war krank, deshalb bin ich zu Hause geblieben.') +
  PRACTICE('Connect the sentences.',
    'Das Wetter ist schlecht. Wir gehen spazieren. (trotzdem)\nDas Wetter ist schlecht. Wir gehen spazieren. (obwohl)\nIch habe den Bus verpasst. Ich komme zu spät. (deshalb)\nEr spricht laut. Alle verstehen ihn. (damit)\nSie trinkt keinen Kaffee. Sie trinkt Tee. (sondern)',
    'Das Wetter ist schlecht. Trotzdem gehen wir spazieren.\nObwohl das Wetter schlecht ist, gehen wir spazieren.\nIch habe den Bus verpasst, deshalb komme ich zu spät.\nEr spricht laut, damit alle ihn verstehen.\nSie trinkt keinen Kaffee, sondern Tee.')
},
{
  level: 'B1', id: 'b1-genitiv', title: 'The genitive case', de: 'Der Genitiv',
  summary: 'des Mannes, der Frau: possession in written German, and the forms of articles and nouns.',
  body:
  '<p>The genitive shows possession or belonging, like English "of" or "\'s". In speech, Germans often replace it with <em>von + Dativ</em>, but in writing it is standard.</p>' +
  TBL('Gender | Article | Noun ending | Example\nmasculine | des / eines | -(e)s | das Auto des Mannes\nneuter | des / eines | -(e)s | die Farbe des Hauses\nfeminine | der / einer | none | die Tasche der Frau\nplural | der | none | die Zimmer der Kinder') +
  '<p>One-syllable masculine and neuter nouns usually take <em>-es</em> (des Mannes, des Kindes), longer ones <em>-s</em> (des Lehrers, des Computers). Names take <em>-s</em> without an apostrophe: <span class="de">Annas Wohnung</span>.</p>' +
  EX('Das ist das Büro meines Chefs. | That is my boss\'s office.\nDie Meinung der Studierenden ist wichtig. | The opinion of the students is important.\nAm Ende des Jahres ziehen wir um. | At the end of the year we are moving.') +
  NOTE('Spoken alternative: <span class="de">das Auto von meinem Bruder</span>. The genitive version <span class="de">das Auto meines Bruders</span> sounds more formal.') +
  MISTAKE('Anna\'s Buch', 'Annas Buch', 'No apostrophe in German, except after names ending in s, x, z: <span class="de">Max\' Buch</span>.') +
  PRACTICE('Use the genitive.',
    'das Ende (der Film)\ndie Adresse (die Firma)\ndie Spielsachen (die Kinder)\ndas Zimmer (mein Bruder)\ndie Lage (das Hotel)',
    'das Ende des Films\ndie Adresse der Firma\ndie Spielsachen der Kinder\ndas Zimmer meines Bruders\ndie Lage des Hotels')
},
{
  level: 'B1', id: 'b1-konjunktiv2', title: 'Konjunktiv II: wishes and unreal conditions', de: 'Konjunktiv II: Wünsche und irreale Bedingungen',
  summary: 'Wenn ich Zeit hätte, würde ich …: talking about what is not real, in the present and the past.',
  body:
  '<p>The <strong>Konjunktiv II</strong> expresses things that are not real: wishes, imagined situations and advice. For most verbs you use <strong>würde + infinitive</strong>. Some frequent verbs have their own form.</p>' +
  TBL('Infinitive | Konjunktiv II\nsein | wäre\nhaben | hätte\nwerden | würde\nkönnen / müssen / dürfen | könnte / müsste / dürfte\nsollen / wollen | sollte / wollte\nwissen / kommen / gehen / geben | wüsste / käme / ginge / gäbe') +
  '<h2>Unreal conditions</h2>' +
  EX('Wenn ich mehr Zeit hätte, würde ich öfter Sport machen. | If I had more time, I would do more sport.\nWenn es nicht so teuer wäre, würden wir es kaufen. | If it weren\'t so expensive, we would buy it.') +
  '<h2>Wishes</h2>' +
  EX('Wenn ich doch nur mehr Zeit hätte! | If only I had more time!\nIch wünschte, ich könnte fliegen. | I wish I could fly.') +
  '<h2>The past: hätte or wäre + Partizip II</h2>' +
  EX('Wenn ich das gewusst hätte, wäre ich früher gekommen. | If I had known that, I would have come earlier.\nDu hättest mich anrufen sollen. | You should have called me.') +
  NOTE('Never put <em>würde</em> in both halves. One clause with <em>wenn</em> usually takes hätte/wäre or the own form, the other takes würde.') +
  MISTAKE('Wenn ich reich würde sein, …', 'Wenn ich reich wäre, …') +
  PRACTICE('Make unreal conditions.',
    'Ich habe kein Auto. Ich fahre nicht ans Meer.\nEr ist nicht hier. Er kann nicht helfen.\nWir wussten es nicht. Wir haben nichts gesagt. (past)\nDu hast keine Zeit. Du kommst nicht mit.',
    'Wenn ich ein Auto hätte, würde ich ans Meer fahren.\nWenn er hier wäre, könnte er helfen.\nWenn wir es gewusst hätten, hätten wir etwas gesagt.\nWenn du Zeit hättest, würdest du mitkommen.')
},
{
  level: 'B1', id: 'b1-praepverben', title: 'Verbs with prepositions, da- and wo-words', de: 'Verben mit Präpositionen, da(r)- und wo(r)-',
  summary: 'warten auf, sich freuen über, denken an: fixed prepositions, and how to ask and refer back to them.',
  body:
  '<p>Many verbs are combined with a fixed preposition, often different from English. The preposition decides the case. Learn the whole package: <span class="de">warten auf + Akk.</span></p>' +
  TBL('Verb | Preposition + case | Example\nwarten | auf + Akk. | Ich warte auf den Bus.\nsich freuen | auf + Akk. (future) / über + Akk. (present, past) | Ich freue mich auf die Ferien.\ndenken | an + Akk. | Ich denke oft an dich.\nsich interessieren | für + Akk. | Sie interessiert sich für Politik.\nsprechen / reden | über + Akk. / mit + Dat. | Wir sprechen über das Problem.\nteilnehmen | an + Dat. | Er nimmt an dem Kurs teil.\nAngst haben | vor + Dat. | Sie hat Angst vor Hunden.\nsich kümmern | um + Akk. | Wer kümmert sich um die Katze?\nabhängen | von + Dat. | Das hängt vom Wetter ab.\nsich bewerben | um + Akk. / bei + Dat. | Ich bewerbe mich um die Stelle bei Siemens.') +
  '<h2>Questions and references</h2>' +
  '<p>For <strong>things</strong>, use <strong>wo(r)- + preposition</strong> in questions and <strong>da(r)- + preposition</strong> to refer back. Add <em>r</em> before a vowel. For <strong>people</strong>, use preposition + pronoun.</p>' +
  TBL('Thing | Person\nWorauf wartest du? Auf den Bus. Ich warte schon lange darauf. | Auf wen wartest du? Auf meine Schwester. Ich warte auf sie.\nWorüber sprecht ihr? Über den Film. | Über wen sprecht ihr? Über den Chef.') +
  '<p>da-words can also point forward to a clause: <span class="de">Ich freue mich darauf, dich zu sehen. Es hängt davon ab, ob es regnet.</span></p>' +
  '<h2>Nouns and adjectives with prepositions</h2>' +
  '<p>Not only verbs but also many <strong>nouns</strong> and <strong>adjectives</strong> have a fixed preposition. Nouns often keep the preposition of the related verb: <span class="de">sich interessieren für → das Interesse an</span> (careful: this one changes!), <span class="de">sich freuen auf → die Vorfreude auf</span>.</p>' +
  TBL('Adjective | Preposition + case | Example\nstolz | auf + Akk. | Sie ist stolz auf ihre Tochter.\nzufrieden | mit + Dat. | Ich bin mit dem Ergebnis zufrieden.\ninteressiert | an + Dat. | Er ist an Politik interessiert.\nabhängig | von + Dat. | Das ist vom Wetter abhängig.\nbekannt | für + Akk. | Leipzig ist für seine Musik bekannt.\nverantwortlich | für + Akk. | Wer ist für das Projekt verantwortlich?\nbegeistert | von + Dat. | Wir sind von der Stadt begeistert.\nfroh | über + Akk. | Ich bin froh über die Nachricht.\neifersüchtig | auf + Akk. | Er ist eifersüchtig auf seinen Bruder.\nbereit | zu + Dat. | Sind Sie zu einem Gespräch bereit?') +
  TBL('Noun | Preposition + case | Example\ndie Angst | vor + Dat. | die Angst vor Prüfungen\ndas Interesse | an + Dat. | das Interesse an Kunst\ndie Freude | über / auf + Akk. | die Freude über das Geschenk\ndie Bitte | um + Akk. | eine Bitte um Hilfe\ndie Teilnahme | an + Dat. | die Teilnahme am Kurs\nder Grund | für + Akk. | der Grund für die Verspätung\ndie Erinnerung | an + Akk. | die Erinnerung an die Kindheit\ndie Kritik | an + Dat. | die Kritik an der Regierung') +
  NOTE('The same da(r)- and wo(r)- words work with adjectives and nouns: <span class="de">Bist du damit zufrieden? Wovor hast du Angst?</span>') +
  MISTAKE('Ich warte für den Bus.', 'Ich warte auf den Bus.') +
  PRACTICE('Fill in the preposition, da-word or wo-word.',
    'Ich interessiere mich ___ Geschichte.\n___ denkst du? An die Prüfung.\nEr hat Angst ___ der Prüfung.\nDie Ferien? Ich freue mich schon ___!\nWir sprechen ___ unseren Lehrer. (person)',
    'für\nWoran\nvor\ndarauf\nüber')
},
{
  level: 'B1', id: 'b1-als-wenn', title: 'als, wenn or wann?', de: 'als, wenn oder wann?',
  summary: 'Three words for "when", and how to choose between them.',
  body:
  '<p>English uses "when" for all three, but German makes a clear distinction.</p>' +
  TBL('Word | Use | Example\nals | a single event or period in the past | Als ich 18 war, zog ich nach Berlin.\nwenn | repeated events (past or present); present and future; conditions | Wenn ich nach Hause komme, koche ich. / Immer wenn es regnete, blieben wir drinnen.\nwann | questions, direct and indirect | Wann kommst du? / Weißt du, wann der Zug fährt?') +
  EX('Als wir in Rom waren, hat es jeden Tag geregnet. | When we were in Rome (once), it rained every day.\n(Immer) wenn wir in Rom waren, haben wir Eis gegessen. | Whenever we were in Rome, we ate ice cream.\nIch sage dir Bescheid, wenn ich fertig bin. | I will let you know when I am finished.') +
  NOTE('Test: if you can say <em>whenever</em> or <em>if</em>, use <strong>wenn</strong>. If it happened once in the past, use <strong>als</strong>. If it is a question about time, use <strong>wann</strong>.') +
  MISTAKE('Wenn ich ein Kind war, …', 'Als ich ein Kind war, …') +
  PRACTICE('als, wenn or wann?',
    '___ ich gestern nach Hause kam, war niemand da.\n___ beginnt das Konzert?\n___ du Hilfe brauchst, ruf mich an.\nJedes Mal, ___ ich ihn sehe, lacht er.\nIch weiß nicht, ___ sie Geburtstag hat.',
    'Als\nWann\nWenn\nwenn\nwann')
},
{
  level: 'B1', id: 'b1-futur', title: 'The future tense', de: 'Futur I',
  summary: 'werden plus infinitive, for plans, predictions and assumptions.',
  body:
  '<p>German often uses the present tense with a time word for the future: <span class="de">Morgen fahre ich nach Hamburg.</span> The <strong>Futur I</strong> (werden + infinitive) is used when there is no time word, for predictions and promises, and for assumptions about the present.</p>' +
  TBL('Person | werden | + infinitive at the end\nich | werde | Ich werde dich anrufen.\ndu | wirst | Du wirst das schaffen.\ner / sie / es | wird | Es wird morgen regnen.\nwir | werden | Wir werden sehen.\nihr | werdet | Ihr werdet es nicht glauben.\nsie / Sie | werden | Sie werden bald heiraten.') +
  '<h2>Uses</h2>' +
  EX('Ich werde ab jetzt mehr Sport machen. | From now on I will do more sport. (resolution)\nDu wirst die Prüfung bestimmt bestehen. | You will surely pass the exam. (prediction)\nEr wird wohl krank sein. | He is probably ill. (assumption about now)') +
  NOTE('Do not confuse the three uses of werden: full verb "to become" (<span class="de">Sie wird Ärztin</span>), Futur (<span class="de">Sie wird kommen</span>) and passive (<span class="de">Das wird gemacht</span>).') +
  PRACTICE('Put into Futur I.',
    'Ich lerne jeden Tag.\nDas Wetter wird besser. (careful!)\nWir kaufen ein Haus.\nSie ist wohl schon zu Hause. (assumption)',
    'Ich werde jeden Tag lernen.\nDas Wetter wird besser werden.\nWir werden ein Haus kaufen.\nSie wird wohl schon zu Hause sein.')
}
);
