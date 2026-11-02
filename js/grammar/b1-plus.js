/* Additional B1 topics: modal alternatives, temporal clauses, temporal and local prepositions, purpose, verbs and their objects. */
GRAMMAR.push(
{
  level: 'B1', id: 'b1-modal-alternativen', title: 'Modal verbs and their alternatives', de: 'Modalverben und Alternativen',
  summary: 'in der Lage sein, die Möglichkeit haben, es ist verboten, nicht brauchen … zu: other ways to say können, müssen, dürfen.',
  body:
  '<p>The six modal verbs are very common, but repeating them makes a text sound simple. German has many <strong>alternative expressions</strong> with the same meaning. They are useful in writing and in exams, where variety of expression is rewarded.</p>' +
  '<h2>Alternatives for each modal verb</h2>' +
  TBL('Modal verb | Meaning | Alternatives\nkönnen | ability | in der Lage sein, zu …; fähig sein, zu …; die Fähigkeit haben, zu …\nkönnen | possibility | die Möglichkeit haben, zu …; es ist möglich, zu …\nmüssen | necessity | es ist nötig / notwendig, zu …; gezwungen sein, zu …; haben + zu\ndürfen | permission | die Erlaubnis haben, zu …; es ist erlaubt, zu …\nnicht dürfen | prohibition | es ist verboten / nicht erlaubt, zu …\nwollen | intention | vorhaben, zu …; die Absicht haben, zu …; planen, zu …\nsollen | duty, advice | die Aufgabe haben, zu …; es wird erwartet, dass …\nmögen / möchten | wish | Lust haben, zu …; den Wunsch haben, zu …') +
  EX('Ich kann gut kochen. → Ich bin in der Lage, gut zu kochen. | I can cook well. / I am able to cook well.\nWir müssen den Antrag ausfüllen. → Wir haben den Antrag auszufüllen. | We have to fill in the application.\nHier darf man nicht parken. → Es ist verboten, hier zu parken. | Parking here is not allowed.\nSie will im Ausland studieren. → Sie hat vor, im Ausland zu studieren. | She plans to study abroad.') +
  '<h2>nicht brauchen … zu</h2>' +
  '<p><span class="de">nicht müssen</span> (do not have to) is often replaced by <strong>nicht brauchen + zu + infinitive</strong>. Note: <span class="de">nicht müssen</span> means "it is not necessary", while <span class="de">nicht dürfen</span> means "it is forbidden".</p>' +
  EX('Du musst nicht kommen. = Du brauchst nicht zu kommen. | You don\'t have to come.\nDu darfst nicht kommen. | You are not allowed to come.') +
  NOTE('Almost all of these alternatives use <strong>zu + infinitive</strong> at the end of the clause, after a comma: <span class="de">Ich habe die Absicht, nächstes Jahr umzuziehen.</span>') +
  MISTAKE('Du brauchst nicht kommen.', 'Du brauchst nicht zu kommen.', 'In standard written German, brauchen in this meaning needs zu.') +
  PRACTICE('')
},
{
  level: 'B1', id: 'b1-temporalsaetze', title: 'Temporal clauses', de: 'Temporale Nebensätze',
  summary: 'bevor, nachdem, während, seit(dem), bis, sobald, solange: saying when something happens in relation to something else.',
  body:
  '<p>A <strong>temporal clause</strong> answers the question <em>Wann?</em> or <em>Wie lange?</em> and relates two events in time: one happens before, after or at the same time as the other. All temporal conjunctions are subordinating, so the conjugated verb goes to the end.</p>' +
  '<h2>The conjunctions</h2>' +
  TBL('Conjunction | Meaning | Relation | Example\nals | when (once, past) | same time | Als ich ankam, regnete es.\nwenn | when / whenever | same time, repeated | Wenn ich Zeit habe, lese ich.\nwährend | while | same time | Während er kocht, deckt sie den Tisch.\nsolange | as long as | same duration | Solange du Fieber hast, bleibst du zu Hause.\nbevor / ehe | before | main clause first | Bevor wir essen, waschen wir die Hände.\nnachdem | after | subordinate clause first | Nachdem er gegessen hatte, ging er.\nsobald | as soon as | immediately after | Sobald ich fertig bin, rufe ich an.\nseit / seitdem | since | start point until now | Seit sie in Halle wohnt, fährt sie Rad.\nbis | until | end point | Warte hier, bis ich zurückkomme.') +
  '<h2>Tense change with nachdem</h2>' +
  '<p>The action in the <span class="de">nachdem</span>-clause happened <strong>earlier</strong>, so it takes a tense one step further back:</p>' +
  TBL('nachdem-clause | main clause\nPerfekt: Nachdem ich gegessen habe, | Präsens: gehe ich spazieren.\nPlusquamperfekt: Nachdem ich gegessen hatte, | Präteritum: ging ich spazieren.') +
  '<h2>seit with the present</h2>' +
  '<p>If the situation is still continuing, German uses the <strong>present tense</strong> with <span class="de">seit</span>, where English uses the present perfect: <span class="de">Seit ich Deutsch lerne, verstehe ich mehr.</span> (Since I have been learning German …)</p>' +
  EX('Bevor ich zur Arbeit gehe, trinke ich Kaffee. | Before I go to work, I drink coffee.\nWährend ich lernte, hörte ich Musik. | While I was studying, I listened to music.\nSobald der Kurs beginnt, schalten wir die Handys aus. | As soon as the course starts, we switch off our phones.\nIch bleibe hier, bis der Regen aufhört. | I am staying here until the rain stops.') +
  NOTE('Many of these words also exist as prepositions with a noun: <span class="de">vor dem Essen, nach der Arbeit, während des Kurses, seit dem Umzug, bis Montag</span>. See "Temporal prepositions".') +
  MISTAKE('Nachdem ich esse, gehe ich spazieren.', 'Nachdem ich gegessen habe, gehe ich spazieren.', 'nachdem needs the earlier tense.') +
  PRACTICE('')
},
{
  level: 'B1', id: 'b1-temporalpraep', title: 'Temporal prepositions', de: 'Temporale Präpositionen',
  summary: 'vor, nach, seit, ab, bis, während, innerhalb, über, für: time expressions with the correct case.',
  body:
  '<p><strong>Temporal prepositions</strong> place an event in time: when it happens, since when, until when or how long. Each one takes a fixed case, which you must learn with it.</p>' +
  '<h2>Overview</h2>' +
  TBL('Preposition | Case | Meaning | Example\num | Akk. | clock time | um 9 Uhr\nan (am) | Dat. | day, date, part of day | am Freitag, am Abend\nin (im) | Dat. | month, season, week, year | im Mai, in der nächsten Woche\nvor | Dat. | before / ago | vor dem Kurs, vor zwei Jahren\nnach | Dat. | after | nach der Arbeit\nseit | Dat. | since / for (still continuing) | seit einem Monat\nab | Dat. | from … on (future) | ab nächster Woche\nbis | (Akk.) | until | bis Montag, bis zum Abend\nvon … an | Dat. | from … on | vom 1. Juni an\nzwischen | Dat. | between | zwischen 12 und 13 Uhr\nwährend | Gen. | during | während des Studiums\ninnerhalb | Gen. | within | innerhalb einer Woche\nfür | Akk. | for (planned period) | für zwei Wochen\nüber | Akk. | over (duration) | über das Wochenende\ngegen | Akk. | around, approximately | gegen 8 Uhr\nbei | Dat. | at / during an activity | beim Essen') +
  '<h2>Easily confused pairs</h2>' +
  '<p><strong>seit</strong> looks back from now: it started in the past and is still going on (present tense). <strong>ab</strong> looks forward: something starts now or in the future. <strong>vor</strong> + time span means "ago": <span class="de">vor drei Tagen</span>. <strong>für</strong> describes a planned duration: <span class="de">Ich fahre für eine Woche nach Wien.</span></p>' +
  EX('Ich wohne seit drei Jahren in Leipzig. | I have been living in Leipzig for three years.\nAb Montag arbeite ich in Teilzeit. | From Monday I will work part-time.\nWährend der Pause habe ich telefoniert. | During the break I made a phone call.\nBitte antworten Sie innerhalb von zwei Wochen. | Please reply within two weeks.') +
  NOTE('bis is usually combined with another preposition: <span class="de">bis zum Wochenende, bis nach dem Essen</span>. On its own it is used with times and days: <span class="de">bis 18 Uhr, bis Freitag</span>.') +
  MISTAKE('Ich wohne hier für drei Jahre.', 'Ich wohne hier seit drei Jahren.', 'For something still continuing, use seit + Dativ, with the present tense.') +
  PRACTICE('')
},
{
  level: 'B1', id: 'b1-lokalpraep', title: 'Local prepositions: where, where to, where from', de: 'Lokale Präpositionen: wo, wohin, woher',
  summary: 'in, an, auf, zu, nach, bei, aus, von: choosing the right preposition for places, destinations and origins.',
  body:
  '<p><strong>Local prepositions</strong> describe place. German distinguishes three questions: <strong>Wo?</strong> (where: position), <strong>Wohin?</strong> (where to: direction) and <strong>Woher?</strong> (where from: origin). The preposition often changes with the question.</p>' +
  '<h2>The three questions</h2>' +
  TBL('Type of place | Wo? (Dativ) | Wohin? | Woher? (Dativ)\ncountries and cities without article | in Deutschland | nach Deutschland | aus Deutschland\ncountries with article | in der Schweiz | in die Schweiz | aus der Schweiz\nbuildings, rooms | im Kino | ins Kino | aus dem Kino\npeople | bei meiner Freundin | zu meiner Freundin | von meiner Freundin\nshops, institutions, events | beim Arzt, auf der Party | zum Arzt, auf die Party | vom Arzt, von der Party\nwater, edges | am Meer | ans Meer | vom Meer\nopen spaces, islands | auf dem Markt | auf den Markt | vom Markt\nhome | zu Hause | nach Hause | von zu Hause') +
  '<h2>Wechselpräpositionen</h2>' +
  '<p>The nine two-way prepositions <span class="de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span> take the <strong>Dativ for position</strong> (Wo?) and the <strong>Akkusativ for direction</strong> (Wohin?). See the A2 topic for details.</p>' +
  '<h2>Other local prepositions</h2>' +
  TBL('Preposition | Case | Meaning | Example\ndurch | Akk. | through | durch den Park\num … herum | Akk. | around | um den See herum\nentlang | Akk. (after the noun) | along | den Fluss entlang\ngegenüber | Dat. | opposite | gegenüber dem Bahnhof\nbis zu | Dat. | as far as | bis zur Kreuzung\naußerhalb / innerhalb | Gen. | outside / inside | außerhalb der Stadt') +
  EX('Ich fahre am Wochenende zu meinen Eltern. | I am going to my parents\' at the weekend.\nSie kommt gerade vom Zahnarzt. | She has just come from the dentist.\nWir gehen heute Abend ins Theater. | We are going to the theatre tonight.\nIm Sommer fliegen wir in die Türkei. | In summer we are flying to Turkey.') +
  NOTE('A useful tip: <span class="de">zu</span> goes with the same places as <span class="de">bei</span> (people, shops, doctors), and <span class="de">nach</span> with places without an article (cities, most countries, Hause).') +
  MISTAKE('Ich gehe zu Hause.', 'Ich gehe nach Hause.', 'zu Hause = at home (Wo?); nach Hause = home (Wohin?).') +
  PRACTICE('')
},
{
  level: 'B1', id: 'b1-final', title: 'Expressing purpose', de: 'Finalsätze: damit, um … zu, zum + Infinitiv',
  summary: 'Saying why you do something: damit, um … zu, and the short forms zum + noun and für + noun.',
  body:
  '<p>A <strong>Finalsatz</strong> (purpose clause) says <strong>what for</strong> someone does something: the aim or intention. It answers the questions <em>Wozu?</em> and <em>Mit welchem Ziel?</em> German has four main ways to express it.</p>' +
  '<h2>damit or um … zu?</h2>' +
  TBL('Form | When | Example\num … zu + Infinitiv | same subject in both parts | Ich lerne Deutsch, um in Deutschland zu arbeiten.\ndamit + verb at the end | different subjects (also possible with the same subject) | Ich erkläre es dir, damit du es verstehst.') +
  '<p>With <strong>um … zu</strong> there is no subject and no conjugated verb: the infinitive with <span class="de">zu</span> goes to the end. With separable verbs, <span class="de">zu</span> goes between the parts: <span class="de">um früh aufzustehen</span>.</p>' +
  '<h2>zum + infinitive and für + noun</h2>' +
  '<p>In short statements, purpose can be expressed with a noun phrase instead of a clause. <strong>zum + nominalised infinitive</strong> (written with a capital letter) or <strong>für + noun</strong>:</p>' +
  EX('Ich brauche eine Brille zum Lesen. | I need glasses for reading.\nDas Messer ist zum Schneiden von Brot. | The knife is for cutting bread.\nFür die Prüfung muss ich viel lernen. | I have to study a lot for the exam.\nWir sparen für eine Reise. | We are saving for a trip.') +
  '<h2>Asking about purpose</h2>' +
  '<p>Use <strong>Wozu?</strong> or <strong>Wofür?</strong> to ask about the purpose: <span class="de">Wozu brauchst du das Geld? – Um ein Fahrrad zu kaufen.</span> <span class="de">Warum?</span> asks for a reason (weil), not a purpose.</p>' +
  NOTE('Do not use <span class="de">für</span> with a verb to express purpose: "für zu lernen" does not exist. Use <span class="de">um … zu</span> or <span class="de">zum Lernen</span>.') +
  MISTAKE('Ich spare Geld, für ein Auto zu kaufen.', 'Ich spare Geld, um ein Auto zu kaufen.', 'Purpose with a verb: um … zu.') +
  PRACTICE('')
},
{
  level: 'B1', id: 'b1-verbergaenzungen', title: 'Verbs and their objects', de: 'Verben und Ergänzungen',
  summary: 'Which verbs take the accusative, the dative, both or a preposition, and the order of two objects.',
  body:
  '<p>Every verb decides which <strong>complements</strong> (Ergänzungen) it needs and in which case. This is called the verb\'s <strong>valency</strong>. If you know a verb\'s pattern, you can build correct sentences with it.</p>' +
  '<h2>The main patterns</h2>' +
  TBL('Pattern | Verbs (examples) | Example\nonly subject | schlafen, kommen, lachen | Das Kind schläft.\n+ Akkusativ | haben, sehen, kaufen, brauchen, besuchen | Ich besuche meine Tante.\n+ Dativ | helfen, danken, gefallen, gehören, gratulieren, antworten, vertrauen, zuhören, folgen | Ich helfe meinem Bruder.\n+ Dativ + Akkusativ | geben, schenken, zeigen, erklären, schicken, leihen, empfehlen, bringen, erzählen | Ich schenke meiner Mutter Blumen.\n+ preposition | warten auf, denken an, sich interessieren für | Ich warte auf den Bus.\n+ Nominativ (second) | sein, werden, bleiben, heißen | Er wird Arzt.') +
  '<p>In the "Dativ + Akkusativ" pattern the <strong>person</strong> is usually in the dative (to whom?) and the <strong>thing</strong> in the accusative (what?).</p>' +
  '<h2>The order of two objects</h2>' +
  TBL('Objects | Order | Example\ntwo nouns | Dativ before Akkusativ | Ich gebe dem Kind den Ball.\none pronoun, one noun | pronoun first | Ich gebe ihm den Ball. / Ich gebe ihn dem Kind.\ntwo pronouns | Akkusativ before Dativ | Ich gebe ihn ihm.') +
  NOTE('Short rule: pronouns come before nouns; with two nouns, Dativ comes first; with two pronouns, Akkusativ comes first.') +
  EX('Kannst du mir das Salz geben? | Can you pass me the salt?\nDer Lehrer erklärt den Studierenden die Regel. | The teacher explains the rule to the students.\nDie Regel? Er erklärt sie ihnen. | The rule? He explains it to them.\nDas Buch gehört meiner Schwester. | The book belongs to my sister.') +
  MISTAKE('Ich gebe dem Kind ihn.', 'Ich gebe ihn dem Kind.', 'A pronoun comes before a noun.') +
  PRACTICE('')
}
);

window.BASICS = window.BASICS || {};
Object.assign(window.BASICS, {
'b1-modal-alternativen': {
  what: `<p>A <strong>modal verb</strong> (können, müssen, dürfen, sollen, wollen, mögen) changes the meaning of another verb: it adds ability, obligation, permission, wish or intention. A <strong>modal alternative</strong> is another expression with the same meaning, for example <span class="de">in der Lage sein, zu …</span> instead of <span class="de">können</span>.</p>`,
  terms: [['Modalverb', 'a helper verb that expresses ability, necessity, permission or wish'], ['Alternative', 'an equivalent expression, usually with zu + infinitive'], ['nicht brauchen zu', 'not have to (= nicht müssen)']],
  when: [`In writing and exams, to avoid repeating the same modal verb: <span class="de">Viele Studierende sind gezwungen, nebenbei zu arbeiten.</span>`, `In formal texts and rules: <span class="de">Es ist nicht gestattet, hier zu rauchen.</span>`, `When you want to sound more precise: <span class="de">Ich habe vor, …</span> (a plan) is stronger than <span class="de">Ich will …</span>`],
  english: `English also has alternatives (be able to, be allowed to, have to). The trap: English "must not" = forbidden = <span class="de">nicht dürfen</span>; "don't have to" = <span class="de">nicht müssen / nicht brauchen zu</span>.`
},
'b1-temporalsaetze': {
  what: `<p>A <strong>temporal clause</strong> is a subordinate clause that tells you <strong>when</strong> something happens, compared with another event: before it, after it, at the same time or until it. It starts with a time conjunction like <span class="de">bevor, nachdem, während, sobald, seit</span> or <span class="de">bis</span>, and its verb goes to the end.</p>`,
  terms: [['Gleichzeitigkeit', 'two things at the same time: während, als, wenn, solange'], ['Vorzeitigkeit', 'the clause happened first: nachdem, sobald'], ['Nachzeitigkeit', 'the clause happens later: bevor, bis']],
  when: [`Telling stories and describing routines in order: <span class="de">Nachdem ich aufgestanden bin, dusche ich.</span>`, `Setting conditions in time: <span class="de">Sobald die Ergebnisse da sind, melde ich mich.</span>`, `Saying how long a situation has lasted: <span class="de">Seit ich hier wohne, …</span>`],
  english: `The words correspond to English before, after, while, as soon as, since and until. Two differences: after <em>nachdem</em> German steps one tense back, and with <em>seit</em> German uses the present where English uses "have been".`
},
'b1-temporalpraep': {
  what: `<p>A <strong>temporal preposition</strong> is a short word before a noun that places something in time: <span class="de">vor dem Essen, seit Montag, während der Woche</span>. Each preposition requires a specific case for the noun after it.</p>`,
  terms: [['Zeitpunkt', 'a point in time: um, am, im, gegen'], ['Zeitraum', 'a period: seit, während, innerhalb, für, über'], ['Rektion', 'the case a preposition requires']],
  when: [`Making appointments: <span class="de">am Dienstag um 14 Uhr</span>`, `Saying how long something has lasted or will last: <span class="de">seit zwei Jahren, für drei Monate</span>`, `Deadlines in emails and forms: <span class="de">bis Freitag, innerhalb von 14 Tagen</span>`],
  english: `English uses "for" for both past and future periods. German splits it: <span class="de">seit</span> (still continuing) and <span class="de">für</span> (planned period). English "ago" comes after the time; German <span class="de">vor</span> comes before it: <span class="de">vor zwei Tagen</span>.`
},
'b1-lokalpraep': {
  what: `<p><strong>Local prepositions</strong> are words like <span class="de">in, an, auf, bei, zu, nach, aus, von</span> that say <strong>where</strong> something is, <strong>where to</strong> it goes or <strong>where from</strong> it comes. The right choice depends on the question (Wo? Wohin? Woher?) and on the type of place.</p>`,
  terms: [['Wo?', 'position, no movement'], ['Wohin?', 'direction, movement to a place'], ['Woher?', 'origin, coming from a place'], ['Wechselpräposition', 'takes Dativ for Wo? and Akkusativ for Wohin?']],
  when: [`Talking about travel: <span class="de">nach Berlin, in die USA, ans Meer</span>`, `Everyday errands: <span class="de">zum Arzt, beim Bäcker, vom Supermarkt</span>`, `Saying where you are from: <span class="de">Ich komme aus Nigeria.</span>`],
  english: `English uses "to", "at" and "from" for almost everything. German has several words for each: "to" can be <span class="de">nach, zu, in, an, auf</span>; "at" can be <span class="de">bei, in, an, auf</span>. Learn the preposition together with the place.`
},
'b1-final': {
  what: `<p>A <strong>purpose clause</strong> (Finalsatz) explains the <strong>goal</strong> of an action: why you do something in the sense of "in order to". German uses <span class="de">um … zu</span>, <span class="de">damit</span>, or short phrases like <span class="de">zum Lernen</span> and <span class="de">für die Prüfung</span>.</p>`,
  terms: [['Finalsatz', 'a clause expressing purpose'], ['um … zu', 'in order to (same subject)'], ['damit', 'so that (different or same subject)'], ['Wozu?', 'What for?']],
  when: [`Explaining your plans and motives: <span class="de">Ich mache einen Kurs, um meine Chancen zu verbessern.</span>`, `Explaining what something is used for: <span class="de">eine App zum Vokabellernen</span>`, `Giving instructions with a reason: <span class="de">Schreiben Sie deutlich, damit wir Ihre Antwort lesen können.</span>`],
  english: `English often uses just "to": I work to earn money. German needs <span class="de">um … zu</span> here: <span class="de">Ich arbeite, um Geld zu verdienen.</span> English "so that" = <span class="de">damit</span>. Do not translate "for" + verb with <span class="de">für</span>.`
},
'b1-verbergaenzungen': {
  what: `<p>Every verb needs certain partners to make a complete sentence. These partners are called <strong>complements</strong> (Ergänzungen) or objects. The verb decides how many it needs and which <strong>case</strong> they take: <span class="de">helfen</span> needs a dative, <span class="de">sehen</span> an accusative, <span class="de">geben</span> both.</p>`,
  terms: [['Ergänzung', 'a complement the verb requires'], ['Valenz', 'the pattern of complements a verb has'], ['Dativobjekt', 'usually the person who receives or benefits'], ['Akkusativobjekt', 'usually the thing or person directly affected']],
  when: [`Every time you build a sentence: the verb tells you which case to use.`, `Giving, telling and showing: <span class="de">Ich zeige dir die Stadt.</span>`, `Replacing objects with pronouns without changing the meaning: <span class="de">Ich zeige sie dir.</span>`],
  english: `English shows objects by word order (I give the child the ball). German shows them by case, so the order is more flexible, but pronouns still come first. Some verbs differ from English: <span class="de">helfen, danken, folgen</span> take the dative.`
}
});
