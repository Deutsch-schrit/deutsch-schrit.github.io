GRAMMAR.push(
{
  level: 'B2', id: 'b2-zustandspassiv', title: 'The passive with sein', de: 'Das Passiv mit sein (Zustandspassiv)',
  summary: 'Das Fenster wird geöffnet (process) versus Das Fenster ist geöffnet (resulting state).',
  body:
  '<p>The <strong>Vorgangspassiv</strong> (werden + Partizip II) describes an action in progress. The <strong>Zustandspassiv</strong> (sein + Partizip II) describes the <strong>state</strong> that exists after the action is finished.</p>' +
  TBL(' | Vorgangspassiv (process) | Zustandspassiv (state)\nFormation | werden + Partizip II | sein + Partizip II\nPräsens | Die Tür wird geschlossen. | Die Tür ist geschlossen.\nPräteritum | Die Tür wurde geschlossen. | Die Tür war geschlossen.\nQuestion it answers | What is happening? | What is the situation now?') +
  '<p>The Zustandspassiv is used almost only in the Präsens and Präteritum.</p>' +
  '<h2>Process first, state afterwards</h2>' +
  EX('Die Bibliothek wird um 20 Uhr abgeschlossen. → Danach ist sie abgeschlossen. | The library is locked at 8 pm (action). After that it is locked (state).\nDie Straße wurde gesperrt. → Die Straße war den ganzen Tag gesperrt. | The road was closed (event). The road was closed all day (condition).\nDer Platz am Fenster ist schon besetzt. | The seat by the window is already taken.\nDie Hausaufgaben sind erledigt. | The homework is done.') +
  '<p>Only verbs whose action leaves a lasting result form a natural Zustandspassiv: <span class="de">öffnen, schließen, reservieren, verpacken, beschädigen, bezahlen, sperren, erledigen, ausverkaufen</span>.</p>' +
  '<h2>Three structures that look alike</h2>' +
  TBL('Structure | Example | How to recognise it\nZustandspassiv | Das Paket ist verpackt. | describes a state; someone did it earlier\nPerfekt Passiv | Das Paket ist verpackt worden. | ends in worden; describes the finished action\nPerfekt Aktiv with sein | Das Paket ist angekommen. | verb of movement or change; no hidden agent') +
  '<h2>werden or sein?</h2>' +
  '<p>Use <strong>werden</strong> for procedures, rules and ongoing steps: <span class="de">In unserer Firma werden Rechnungen jeden Freitag bezahlt.</span> Use <strong>sein</strong> for a condition already reached: <span class="de">Wenn die Rechnung schon bezahlt ist, müssen Sie nichts mehr tun.</span></p>' +
  MISTAKE('Das Formular wird schon ausgefüllt. (it is done)', 'Das Formular ist schon ausgefüllt.') +
  PRACTICE('Turn the Vorgangspassiv into a Zustandspassiv in the same tense.',
    'Die Fenster werden geputzt.\nDer Brief wurde unterschrieben.\nDie Zimmer werden aufgeräumt.\nDer Fehler wurde behoben.\nDie Heizung wurde repariert.',
    'Die Fenster sind geputzt.\nDer Brief war unterschrieben.\nDie Zimmer sind aufgeräumt.\nDer Fehler war behoben.\nDie Heizung war repariert.')
},
{
  level: 'B2', id: 'b2-passiversatz', title: 'Alternatives to the passive', de: 'Passiversatzformen',
  summary: 'sein + zu, sich lassen, -bar and -lich, and man: four ways to avoid a heavy passive.',
  body:
  '<p>A passive with a modal verb (<em>muss gemacht werden, kann gelöst werden</em>) can sound heavy. German has several equivalent forms that make writing more varied.</p>' +
  TBL('Passive with modal verb | Alternative | Example\nmuss / soll / kann + Partizip II + werden | sein + zu + Infinitiv | Das Formular ist bis Freitag auszufüllen.\nkann + Partizip II + werden | sich lassen + Infinitiv | Das Problem lässt sich lösen.\nkann + Partizip II + werden | sein + Adjektiv auf -bar / -lich | Die Ware ist nicht lieferbar. Das ist verständlich.\nany passive | man + Aktiv | Man bezahlt an der Kasse.') +
  '<p><em>sein + zu</em> can mean "must" or "can", depending on context: <span class="de">Die Rechnung ist innerhalb von 14 Tagen zu bezahlen</span> (must) vs. <span class="de">Das Gerät ist leicht zu bedienen</span> (can).</p>' +
  NOTE('With separable verbs, zu goes inside: <span class="de">auszufüllen, zurückzusenden, anzumelden</span>.') +
  EX('Die Daten lassen sich nicht wiederherstellen. | The data cannot be restored.\nDer Text ist kaum lesbar. | The text is barely readable.\nDie Hausaufgaben sind bis Montag abzugeben. | The homework must be handed in by Monday.') +
  PRACTICE('Rewrite with the form in brackets.',
    'Die Ware kann nicht umgetauscht werden. (-bar)\nDer Betrag muss sofort überwiesen werden. (sein + zu)\nDas Passwort kann leicht geändert werden. (sich lassen)\nDie Kontodaten müssen geschützt werden. (sein + zu)\nDas kann man nicht erklären. (-lich)',
    'Die Ware ist nicht umtauschbar.\nDer Betrag ist sofort zu überweisen.\nDas Passwort lässt sich leicht ändern.\nDie Kontodaten sind zu schützen.\nDas ist unerklärlich.')
},
{
  level: 'B2', id: 'b2-als-ob', title: 'Unreal comparisons: als ob, als wenn, als', de: 'Irreale Vergleichssätze',
  summary: 'Er tut so, als ob er alles wüsste. Konjunktiv II for comparisons that are not true.',
  body:
  '<p>These clauses compare with something that is <strong>not real</strong>, so they use the <strong>Konjunktiv II</strong>. They follow verbs of perceiving, feeling and behaving.</p>' +
  TBL('Type | Word order | Example\nals ob | verb at the end | Mein Nachbar tut so, als ob ihm das ganze Haus gehören würde.\nals wenn | verb at the end | Es fühlt sich an, als wenn heute Sonntag wäre.\nals | verb directly after als | Sie spricht so gut Deutsch, als wäre sie in Berlin aufgewachsen.') +
  '<p>The comparison clause always comes <strong>after</strong> the main clause. Typical introductions: <span class="de">Er tut so, … / Es sieht so aus, … / Es kommt mir so vor, … / Ich habe das Gefühl, … / Sie verhält sich, …</span></p>' +
  '<h2>Present and past</h2>' +
  TBL('Time | Form | Example\nsame time | wäre, hätte, könnte, würde + Inf. | Er tut so, als ob er keine Zeit hätte.\nearlier | hätte / wäre + Partizip II | Sie sieht aus, als hätte sie die ganze Nacht nicht geschlafen.') +
  NOTE('Do not confuse with real comparisons in the indicative: <span class="de">Es war schwieriger, als ich dachte</span> (comparative + als) and <span class="de">so groß wie</span>.') +
  PRACTICE('Complete with an unreal comparison.',
    'Er spricht so laut, ___ (wir / schwerhörig sein)\nSie tut so, ___ (sie / die Mail nicht bekommen haben, past)\nEs sieht so aus, ___ (es / gleich regnen)\nDu benimmst dich, ___ (du / der Chef sein) — use als + verb',
    'als ob wir schwerhörig wären\nals hätte sie die Mail nicht bekommen\nals wenn es gleich regnen würde\nals wärst du der Chef')
},
{
  level: 'B2', id: 'b2-zweiteilig', title: 'Two-part connectors', de: 'Zweiteilige Konnektoren',
  summary: 'sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber, je … desto.',
  body:
  '<p>Two-part connectors link two ideas in one sentence and are typical of good written German.</p>' +
  TBL('Connector | Meaning | Example\nsowohl … als auch | both … and | Sie spricht sowohl Englisch als auch Französisch.\nnicht nur … sondern auch | not only … but also | Er ist nicht nur klug, sondern auch hilfsbereit.\nweder … noch | neither … nor | Ich habe weder Zeit noch Geld.\nentweder … oder | either … or | Entweder wir fahren heute, oder wir bleiben bis Sonntag.\nzwar … aber | admittedly … but | Die Wohnung ist zwar klein, aber sehr hell.\nje … desto / umso | the … the | Je mehr ich übe, desto besser spreche ich.') +
  '<h2>je … desto</h2>' +
  '<p><em>je</em> introduces a subordinate clause (verb at the end); <em>desto/umso</em> + comparative is followed directly by the verb: <span class="de">Je früher wir losfahren, desto weniger Stau gibt es.</span></p>' +
  MISTAKE('Je mehr ich lerne, desto ich verstehe besser.', 'Je mehr ich lerne, desto besser verstehe ich.') +
  PRACTICE('Connect the ideas.',
    'Er trinkt keinen Kaffee. Er trinkt keinen Tee. (weder … noch)\nDas Hotel ist teuer. Es ist sehr schön. (zwar … aber)\nDu lernst viel. Du wirst gut. (je … desto)\nSie ist Ärztin. Sie ist Musikerin. (sowohl … als auch)',
    'Er trinkt weder Kaffee noch Tee.\nDas Hotel ist zwar teuer, aber sehr schön.\nJe mehr du lernst, desto besser wirst du.\nSie ist sowohl Ärztin als auch Musikerin.')
},
{
  level: 'B2', id: 'b2-infinitivsaetze', title: 'um … zu, ohne … zu, anstatt … zu', de: 'Infinitivsätze und ihre Alternativen',
  summary: 'Purpose, missing action and alternative action, with damit, ohne dass and anstatt dass when the subjects differ.',
  body:
  '<p>These three constructions use <strong>zu + infinitive</strong> at the end when the subject of both clauses is the same. When the subjects are different, use the matching <em>dass</em>-clause.</p>' +
  TBL('Meaning | same subject | different subject\npurpose | um … zu: Ich lerne, um die Prüfung zu bestehen. | damit: Ich erkläre es, damit du es verstehst.\nsomething does not happen | ohne … zu: Er ging, ohne sich zu verabschieden. | ohne dass: Er ging, ohne dass wir es merkten.\ninstead | (an)statt … zu: Statt zu lernen, sah er fern. | (an)statt dass: Statt dass er hilft, schaut er zu.') +
  '<p><em>damit</em> is also possible with the same subject, but <em>um … zu</em> is more elegant.</p>' +
  EX('Viele Menschen ziehen in die Stadt, um Arbeit zu finden. | Many people move to the city to find work.\nSie hat den Vertrag unterschrieben, ohne ihn zu lesen. | She signed the contract without reading it.\nAnstatt sich zu beschweren, sollte er eine Lösung suchen. | Instead of complaining, he should look for a solution.') +
  MISTAKE('Ich spare, für ein Auto zu kaufen.', 'Ich spare, um ein Auto zu kaufen.') +
  PRACTICE('Connect the sentences.',
    'Er arbeitet nachts. Er verdient mehr Geld. (um … zu)\nSie fuhr los. Sie tankte nicht. (ohne … zu)\nIch spreche langsam. Alle verstehen mich. (damit)\nEr bleibt im Bett. Er geht nicht zur Arbeit. (statt … zu)',
    'Er arbeitet nachts, um mehr Geld zu verdienen.\nSie fuhr los, ohne zu tanken.\nIch spreche langsam, damit alle mich verstehen.\nStatt zur Arbeit zu gehen, bleibt er im Bett.')
},
{
  level: 'B2', id: 'b2-modalsaetze', title: 'Saying how: indem and dadurch, dass', de: 'Modalsätze mit indem und dadurch, dass',
  summary: 'Answering "how?" or "by what means?" with a subordinate clause.',
  body:
  '<p>Modal clauses explain <strong>how</strong> or <strong>by what means</strong> something is achieved, like English "by doing".</p>' +
  TBL('Connector | Structure | Example\nindem | subordinate clause | Man lernt Wörter am besten, indem man sie regelmäßig wiederholt.\ndadurch, dass | dadurch in the main clause, dass-clause after | Man kann Energie dadurch sparen, dass man die Heizung herunterdreht.\nso, dass / sodass | consequence (not the means) | Es regnete stark, sodass das Spiel abgesagt wurde.') +
  '<p>The question to test it: <span class="de">Wie? Wodurch?</span> In nominal style, the same idea is expressed with <span class="de">durch + Akkusativ</span>: <span class="de">durch regelmäßiges Wiederholen</span>.</p>' +
  EX('Er verbesserte sein Deutsch, indem er jeden Tag Podcasts hörte. | He improved his German by listening to podcasts every day.\nDie Firma spart Kosten dadurch, dass sie weniger druckt. | The company saves costs by printing less.') +
  PRACTICE('Answer the question with indem.',
    'Wie kann man gesünder leben? (mehr Gemüse essen)\nWie hat sie die Stelle bekommen? (sich gut vorbereiten)\nWie schützt man seine Daten? (sichere Passwörter benutzen)',
    'Man kann gesünder leben, indem man mehr Gemüse isst.\nSie hat die Stelle bekommen, indem sie sich gut vorbereitet hat.\nMan schützt seine Daten, indem man sichere Passwörter benutzt.')
},
{
  level: 'B2', id: 'b2-konjunktiv1', title: 'Reported speech with Konjunktiv I', de: 'Indirekte Rede mit Konjunktiv I',
  summary: 'Er sagt, er habe keine Zeit: how news and formal texts report what someone said.',
  body:
  '<p>Newspapers, reports and academic texts report speech in the <strong>Konjunktiv I</strong>. It shows neutrally that you are passing on someone else\'s words.</p>' +
  '<h2>Forms</h2>' +
  '<p>Take the infinitive stem and add <em>-e, -est, -e, -en, -et, -en</em>. In practice, the 3rd person singular is the one you need most.</p>' +
  TBL('Person | haben | sein | können | werden\nich | habe* | sei | könne | werde*\ndu | habest | sei(e)st | könnest | werdest\ner / sie / es | habe | sei | könne | werde\nwir | haben* | seien | können* | werden*\nsie / Sie | haben* | seien | können* | werden*') +
  '<p>* When the Konjunktiv I looks like the indicative, use the <strong>Konjunktiv II</strong> instead: <span class="de">Sie sagen, sie hätten keine Zeit.</span></p>' +
  '<h2>Tenses</h2>' +
  TBL('Original | Reported\nPräsens: „Ich arbeite viel.“ | Er sagt, er arbeite viel.\nPast: „Ich habe viel gearbeitet.“ | Er sagt, er habe viel gearbeitet.\nFuture: „Ich werde kommen.“ | Er sagt, er werde kommen.\nQuestion: „Kommst du?“ | Sie fragt, ob ich komme / käme.\nImperative: „Warte!“ | Er sagt, ich solle warten.') +
  NOTE('Pronouns and time words change perspective: <span class="de">„Ich komme morgen.“ → Sie sagte, sie komme am nächsten Tag.</span> In everyday speech, Germans mostly use the indicative or würde.') +
  PRACTICE('Report the statements.',
    'Der Minister: „Die Lage ist ernst.“\nDie Studentin: „Ich habe die Prüfung bestanden.“\nDie Firma: „Wir werden 200 Stellen schaffen.“\nDer Arzt zum Patienten: „Schlafen Sie mehr!“',
    'Der Minister sagte, die Lage sei ernst.\nDie Studentin sagte, sie habe die Prüfung bestanden.\nDie Firma teilte mit, sie werde 200 Stellen schaffen.\nDer Arzt sagte dem Patienten, er solle mehr schlafen.')
},
{
  level: 'B2', id: 'b2-nominalisierung', title: 'Nominalisation of verbs', de: 'Nominalisierung von Verben',
  summary: 'From verbs to nouns: das Lesen, die Entscheidung, der Besuch. Essential for headlines and formal writing.',
  body:
  '<p>Formal German turns verbs into nouns. This makes texts more compact and is typical of headlines, reports and academic writing.</p>' +
  TBL('Pattern | Gender | Examples\ninfinitive as noun | das | lesen → das Lesen, essen → das Essen\nstem + -ung | die | entscheiden → die Entscheidung, bewerben → die Bewerbung\nstem only (often with vowel change) | der | besuchen → der Besuch, beginnen → der Beginn, gehen → der Gang\n-e | die | fragen → die Frage, reisen → die Reise\n-t / -schaft / -nis | die / das | ankommen → die Ankunft, ergeben → das Ergebnis') +
  '<h2>From verbal to nominal style</h2>' +
  TBL('Verbal style | Nominal style\nWenn man regelmäßig Sport treibt, … | Bei regelmäßigem Sport …\nNachdem der Zug angekommen war, … | Nach der Ankunft des Zuges …\nWeil es stark regnete, … | Wegen des starken Regens …\nBevor die Prüfung beginnt, … | Vor Beginn der Prüfung …') +
  '<p>The subject or object of the verb usually becomes a genitive: <span class="de">Die Preise steigen → der Anstieg der Preise</span>. Adverbs become adjectives: <span class="de">schnell reagieren → die schnelle Reaktion</span>.</p>' +
  PRACTICE('Make nominal phrases.',
    'die Mieten steigen\nman entwickelt neue Produkte\nder Kurs beginnt\nwir bestellen online',
    'der Anstieg der Mieten\ndie Entwicklung neuer Produkte\nder Beginn des Kurses / der Kursbeginn\ndie Online-Bestellung / das Bestellen im Internet')
},
{
  level: 'B2', id: 'b2-partizipien', title: 'Participles as adjectives', de: 'Partizipien als Adjektive',
  summary: 'das lachende Kind (Partizip I, active, at the same time) and das reparierte Auto (Partizip II, passive or finished).',
  body:
  '<p>Both participles can be used like adjectives before a noun, with normal adjective endings.</p>' +
  TBL('Participle | Formation | Meaning | Example\nPartizip I | infinitive + -d | active, happening at the same time | das schlafende Kind (the child who is sleeping)\nPartizip II | ge- … -t / -en | passive or completed | das reparierte Auto (the car that has been repaired)') +
  EX('Die steigenden Preise machen vielen Sorgen. | The rising prices worry many people.\nDie gestohlenen Fahrräder wurden gefunden. | The stolen bicycles were found.\nDer angekommene Zug fährt gleich weiter. | The train that has arrived is about to continue.') +
  '<h2>Turning relative clauses into participles</h2>' +
  TBL('Relative clause | Participle\ndie Frau, die am Fenster sitzt | die am Fenster sitzende Frau\ndas Buch, das letztes Jahr veröffentlicht wurde | das letztes Jahr veröffentlichte Buch') +
  NOTE('Long participle phrases before a noun are typical of C1 academic German; see <a href="#/thema/c1-partizipialattribute">extended participle attributes</a>.') +
  PRACTICE('Use a participle.',
    'die Kinder, die spielen\ndas Paket, das beschädigt wurde\ndie Kosten, die steigen\nder Brief, der gestern geschrieben wurde',
    'die spielenden Kinder\ndas beschädigte Paket\ndie steigenden Kosten\nder gestern geschriebene Brief')
},
{
  level: 'B2', id: 'b2-genitivpraep', title: 'Prepositions with the genitive', de: 'Präpositionen mit Genitiv',
  summary: 'wegen, trotz, während, aufgrund, innerhalb, außerhalb, statt: formal prepositions for reports and letters.',
  body:
  '<p>These prepositions take the genitive in written German. In speech, <em>wegen, trotz</em> and <em>während</em> are often used with the dative.</p>' +
  TBL('Preposition | Meaning | Example\nwegen | because of | Wegen des Streiks fahren keine Züge.\naufgrund | due to | Aufgrund der hohen Nachfrage ist der Artikel ausverkauft.\ntrotz | despite | Trotz des Regens gingen wir spazieren.\nwährend | during | Während der Prüfung ist das Handy verboten.\ninnerhalb / außerhalb | within / outside | innerhalb einer Woche, außerhalb der Stadt\nstatt / anstelle | instead of | Statt eines Briefes schickte sie eine E-Mail.\ndank | thanks to | Dank deiner Hilfe habe ich es geschafft.\nbezüglich | regarding | Bezüglich Ihrer Anfrage …') +
  '<h2>während as preposition and connector</h2>' +
  '<p><em>während</em> is also a subordinating conjunction meaning "while" (same time) or "whereas" (contrast): <span class="de">Während ich koche, deckst du den Tisch. Während er gern reist, bleibt sie lieber zu Hause.</span></p>' +
  MISTAKE('wegen dem Wetter (in formal writing)', 'wegen des Wetters') +
  PRACTICE('Rewrite with the preposition.',
    'Weil es stark regnete, fiel das Spiel aus. (wegen)\nObwohl er krank war, kam er zur Arbeit. (trotz)\nAls die Konferenz stattfand, … (während)\nIch melde mich in den nächsten zwei Tagen. (innerhalb)',
    'Wegen des starken Regens fiel das Spiel aus.\nTrotz seiner Krankheit kam er zur Arbeit.\nWährend der Konferenz …\nIch melde mich innerhalb von zwei Tagen / innerhalb der nächsten zwei Tage.')
},
{
  level: 'B2', id: 'b2-modalpartikeln', title: 'Modal particles', de: 'Modalpartikeln',
  summary: 'doch, mal, ja, eben, halt, denn, wohl: small words that change the tone of a sentence.',
  body:
  '<p>Modal particles have no direct translation. They express the speaker\'s attitude: surprise, impatience, friendliness. They are typical of spoken German and make you sound natural.</p>' +
  TBL('Particle | Effect | Example\nmal | softens a request | Kannst du mal kommen?\ndoch | reproach, reminder, encouragement | Komm doch mit! / Das weißt du doch!\nja | shared knowledge, surprise | Das ist ja toll! / Du weißt ja, wie er ist.\ndenn | interest or surprise in questions | Was machst du denn hier?\neben / halt | it is how it is | Das ist eben so. / Dann nehmen wir halt den Bus.\nwohl | assumption | Er ist wohl krank.\nschon | reassurance, concession | Das wird schon klappen.') +
  '<p>Particles usually come after the verb and pronouns, before the information they colour. Combinations are common: <span class="de">Komm doch mal vorbei!</span></p>' +
  NOTE('Particles are about tone, so listen for them in conversation and series; overusing them in writing sounds informal.') +
  PRACTICE('Which particle fits?',
    'Gib mir ___ das Salz, bitte. (soften)\nWo warst du ___? (interested question)\nDas habe ich dir ___ gesagt! (reproach)\nKeine Sorge, das klappt ___. (reassure)',
    'mal\ndenn\ndoch\nschon')
},
{
  level: 'B2', id: 'b2-n-deklination', title: 'The n-declension', de: 'Die n-Deklination',
  summary: 'der Kollege, den Kollegen: masculine nouns that add -n in every case except the nominative.',
  body:
  '<p>A group of masculine nouns adds <strong>-(e)n</strong> in the accusative, dative and genitive singular, and in all plural forms.</p>' +
  TBL('Case | der Kollege | der Student | der Mensch\nNominativ | der Kollege | der Student | der Mensch\nAkkusativ | den Kollegen | den Studenten | den Menschen\nDativ | dem Kollegen | dem Studenten | dem Menschen\nGenitiv | des Kollegen | des Studenten | des Menschen') +
  '<h2>Which nouns?</h2>' +
  TBL('Group | Examples\nmasculine nouns ending in -e (people, animals) | der Kollege, der Junge, der Kunde, der Löwe, der Neffe\nnationalities in -e | der Franzose, der Türke, der Pole\nforeign words in -ant, -ent, -ist, -at, -oge | der Student, der Präsident, der Journalist, der Kandidat, der Biologe\nsome single words | der Mensch, der Herr, der Nachbar, der Bauer') +
  NOTE('A few take <em>-ns</em> in the genitive: <span class="de">der Name → des Namens, der Gedanke → des Gedankens</span>. And <span class="de">der Herr</span> takes <em>-n</em> in the singular but <em>-en</em> in the plural: <span class="de">die Herren</span>.') +
  MISTAKE('Ich frage den Student.', 'Ich frage den Studenten.') +
  PRACTICE('Add the ending.',
    'Ich habe mit dem Kunde___ telefoniert.\nKennst du den neuen Kollege___?\nDas ist das Büro des Präsident___.\nWir helfen dem Nachbar___.',
    'Kunden\nKollegen\nPräsidenten\nNachbarn')
}
);
