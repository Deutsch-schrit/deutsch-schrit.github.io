/* Additional B2 topics: word order, negation, comparative clauses, wer/wo(r)- relative clauses, indefinite pronouns, text cohesion, lassen, werden. */
GRAMMAR.push(
{
  level: 'B2', id: 'b2-wortstellung', title: 'Word order in the middle field', de: 'Wortstellung im Satz: Mittelfeld und TeKaMoLo',
  summary: 'Where objects, pronouns, adverbials and nicht go between the two parts of the verb.',
  body:
  '<p>In a German main clause, the conjugated verb is in position 2 and the rest of the verb is at the end. Everything in between is the <strong>Mittelfeld</strong> (middle field). Its order follows a few clear rules.</p>' +
  '<h2>The basic order</h2>' +
  TBL('Vorfeld | Verb | Mittelfeld | Verb end\nIch | habe | ihm gestern wegen des Termins schnell eine E-Mail | geschrieben.\nGestern | habe | ich ihm wegen des Termins schnell eine E-Mail | geschrieben.') +
  '<p>Typical order in the middle field: <strong>subject (if not in position 1) → pronouns → dative noun → adverbials (TeKaMoLo) → accusative noun → prepositional complement / place of direction</strong>.</p>' +
  '<h2>TeKaMoLo</h2>' +
  '<p>When several adverbials appear, the neutral order is <strong>Te</strong>mporal (when?) – <strong>Ka</strong>usal (why?) – <strong>Mo</strong>dal (how?) – <strong>Lo</strong>kal (where?).</p>' +
  EX('Ich fahre morgen wegen der Prüfung mit dem Zug nach Leipzig. | I am going to Leipzig by train tomorrow because of the exam.\nSie arbeitet seit Jahren aus Überzeugung ehrenamtlich im Tierheim. | For years she has volunteered at the animal shelter out of conviction.') +
  '<h2>Objects and pronouns</h2>' +
  '<p>Pronouns come right after the verb (or the subject). With two nouns, the dative comes before the accusative; with two pronouns, the accusative comes first. An accusative noun usually comes <strong>after</strong> the adverbials, a pronoun <strong>before</strong> them: <span class="de">Ich habe meiner Kollegin gestern das Buch gegeben. – Ich habe es ihr gestern gegeben.</span></p>' +
  '<h2>Where nicht goes</h2>' +
  '<p>To negate the whole sentence, <span class="de">nicht</span> goes as far back as possible: after objects and time expressions, but before manner and place adverbials, prepositional complements and the second verb part: <span class="de">Ich habe ihn gestern nicht gesehen. Er wohnt nicht in Halle.</span></p>' +
  NOTE('The order is flexible for emphasis: what is new or important tends to move towards the end. Putting an element in the Vorfeld (position 1) highlights it: <span class="de">Mit dem Zug fahre ich nie wieder!</span>') +
  MISTAKE('Ich habe gegeben ihm das Buch.', 'Ich habe ihm das Buch gegeben.', 'The participle goes to the end.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-negation', title: 'Negation in depth', de: 'Negation: Wörter, Stellung, Präfixe',
  summary: 'nicht and kein, sentence and partial negation, negative words like nie and niemand, and negation through un-, -los and -frei.',
  body:
  '<p>German can negate a statement in several ways: with <span class="de">nicht</span> and <span class="de">kein</span>, with special <strong>negative words</strong>, and inside words with <strong>prefixes and suffixes</strong>. At B2 you need to choose precisely and place the negation correctly.</p>' +
  '<h2>Sentence negation and partial negation</h2>' +
  '<p><strong>Sentence negation</strong> denies the whole statement; <span class="de">nicht</span> goes towards the end. <strong>Partial negation</strong> denies only one element; <span class="de">nicht</span> goes directly before that element, often followed by <span class="de">sondern</span>.</p>' +
  EX('Ich komme heute nicht. | I am not coming today. (whole sentence)\nIch komme nicht heute, sondern morgen. | I am coming not today but tomorrow. (only "heute")\nNicht ich habe das gesagt, sondern mein Kollege. | It wasn\'t me who said that, it was my colleague.') +
  '<h2>Negative words</h2>' +
  TBL('Positive | Negative | Meaning\nimmer, oft, manchmal | nie, niemals | never\njemand | niemand | nobody\netwas, alles | nichts | nothing\nirgendwo, überall | nirgends, nirgendwo | nowhere\nschon | noch nicht | not yet\nnoch | nicht mehr / kein … mehr | no longer\nsowohl … als auch | weder … noch | neither … nor\nja, sicher | keineswegs, keinesfalls, auf keinen Fall | by no means') +
  '<h2>Negation inside words</h2>' +
  TBL('Affix | Meaning | Examples\nun- | not | unklar, unmöglich, die Unruhe\nmiss- | wrong, badly | das Missverständnis, misslingen\nnicht- | not (nouns) | der Nichtraucher, die Nichtbeachtung\n-los | without | arbeitslos, hoffnungslos, kostenlos\n-frei | free of | alkoholfrei, barrierefrei, fehlerfrei\na- / in- / des- | not (foreign words) | asozial, inakzeptabel, desinteressiert') +
  NOTE('Standard German does not use double negation: <span class="de">Ich habe niemanden gesehen</span>, not "nicht niemanden". Two negations cancel each other out: <span class="de">nicht unwichtig</span> = quite important (a polite understatement).') +
  MISTAKE('Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Nouns with an indefinite article or no article are negated with kein.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-vergleichssaetze', title: 'Comparative clauses', de: 'Vergleichssätze mit als, wie und je … desto',
  summary: 'Comparing a reality with an expectation: besser, als ich dachte; so schön, wie ich gehofft hatte; je mehr, desto besser.',
  body:
  '<p>A <strong>Vergleichssatz</strong> (comparative clause) compares something with an expectation, an earlier situation or another fact. It is a subordinate clause, so the verb goes to the end.</p>' +
  '<h2>Unequal: Komparativ + als</h2>' +
  '<p>When two things are <strong>different</strong>, use the comparative + <span class="de">als</span>:</p>' +
  EX('Die Prüfung war leichter, als ich erwartet hatte. | The exam was easier than I had expected.\nEr spricht besser Deutsch, als man denkt. | He speaks better German than you would think.\nEs kostet mehr, als wir geplant haben. | It costs more than we planned.') +
  '<h2>Equal: (genau)so + adjective + wie</h2>' +
  '<p>When they are the <strong>same</strong> (or not the same, with nicht so), use <span class="de">so … wie</span>:</p>' +
  EX('Der Urlaub war so schön, wie ich gehofft hatte. | The holiday was as nice as I had hoped.\nDas Projekt ist nicht so schwierig, wie alle sagen. | The project is not as difficult as everyone says.\nWie erwartet, kam er zu spät. | As expected, he was late.') +
  '<h2>je … desto / umso</h2>' +
  '<p>To say that one thing <strong>increases with another</strong>, use <span class="de">je + comparative</span> (verb at the end) and <span class="de">desto / umso + comparative</span> (verb directly after):</p>' +
  TBL('je-clause (verb at the end) | desto / umso-clause (verb next)\nJe länger ich in Deutschland lebe, | desto besser verstehe ich die Kultur.\nJe früher wir anfangen, | umso eher sind wir fertig.') +
  NOTE('The tense often shows the time difference: the expectation is usually earlier, so it takes the Plusquamperfekt or Perfekt: <span class="de">schneller, als ich gedacht hatte</span>.') +
  MISTAKE('Es war besser wie erwartet.', 'Es war besser als erwartet.', 'After a comparative, standard German uses als, not wie.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-relativ-wer', title: 'Relative clauses with wer, was and wo(r)-', de: 'Relativsätze mit wer, was und wo(r)- + Präposition',
  summary: 'Wer …, (der) …: general statements about people; was after alles, nichts, das; worüber, woran after was and whole clauses.',
  body:
  '<p>Most relative clauses refer to a specific noun: <span class="de">der Mann, der …</span>. Some relative clauses have <strong>no noun to refer to</strong>, or refer to a whole idea. Then German uses <span class="de">wer, was</span> and <span class="de">wo(r)- + preposition</span>.</p>' +
  '<h2>wer: "whoever, anyone who"</h2>' +
  '<p><span class="de">Wer</span> makes general statements about people, like proverbs and rules. The main clause starts with a demonstrative pronoun (der, den, dem) that shows its case. If both cases are Nominativ, <span class="de">der</span> can be dropped.</p>' +
  TBL('wer-clause | Main clause\nWer viel liest, | (der) weiß viel.\nWer Hilfe braucht, | dem helfen wir gern.\nWen ich nicht kenne, | den lasse ich nicht herein.\nWem das Angebot gefällt, | der kann sich melden.') +
  '<h2>was</h2>' +
  '<p>Use <span class="de">was</span> after <strong>indefinite words</strong> (alles, nichts, etwas, vieles, manches, das), after <strong>nominalised superlatives</strong> (das Beste, das Schönste) and to refer to a <strong>whole clause</strong>.</p>' +
  EX('Das ist alles, was ich weiß. | That is all I know.\nDas Beste, was du tun kannst, ist zu schlafen. | The best thing you can do is sleep.\nEr hat die Prüfung bestanden, was mich sehr freut. | He passed the exam, which makes me very happy.') +
  '<h2>wo(r)- + preposition</h2>' +
  '<p>If the verb needs a preposition and the relative clause refers to <span class="de">was</span>, a whole clause or an indefinite word, use <span class="de">wo + preposition</span> (with -r- before a vowel): <span class="de">woran, worüber, wofür, womit</span>.</p>' +
  EX('Das ist etwas, worüber ich oft nachdenke. | That is something I often think about.\nSie hat mir geholfen, wofür ich ihr sehr dankbar bin. | She helped me, for which I am very grateful.\nEs gibt nichts, wovor ich Angst habe. | There is nothing I am afraid of.') +
  NOTE('After a normal noun, use the preposition + relative pronoun: <span class="de">das Thema, über das ich nachdenke</span>. The wo(r)- form there is colloquial.') +
  MISTAKE('Das ist alles, das ich weiß.', 'Das ist alles, was ich weiß.', 'After alles, nichts, etwas, use was.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-indefinit', title: 'Indefinite pronouns', de: 'Indefinitpronomen',
  summary: 'jemand, niemand, etwas, nichts, man, einer, keiner, welche, irgendwer: talking about people and things that are not specified.',
  body:
  '<p>An <strong>indefinite pronoun</strong> refers to people or things that are <strong>not specified</strong> or not known: someone, nobody, something, everyone. Some are invariable; others are declined like articles.</p>' +
  '<h2>For people and things</h2>' +
  TBL('Pronoun | Meaning | Declension\njemand / niemand | someone / nobody | jemand(en), jemand(em); niemand(en), niemand(em)\nman | one, you, people | only Nominativ; Akk. einen, Dat. einem\netwas / nichts | something / nothing | invariable\nalle / alles | everyone / everything | like the definite article (plural / neuter)\njeder / jede / jedes | each, everyone | like der, die, das\nmanche, einige, mehrere | some, several | plural endings') +
  '<h2>einer, keiner, welche</h2>' +
  '<p>When the noun is already known, the article becomes a pronoun. It then shows the gender clearly: <span class="de">einer, eine, eins</span> / <span class="de">keiner, keine, keins</span>. In the plural, <span class="de">welche</span> replaces the missing plural of <span class="de">ein</span>.</p>' +
  TBL('Question | Answer\nHast du einen Stift? | Ja, ich habe einen. / Nein, ich habe keinen.\nBraucht ihr ein Ladekabel? | Ja, wir brauchen eins.\nGibt es noch Brötchen? | Ja, es gibt noch welche. / Nein, es gibt keine mehr.') +
  '<h2>irgend-</h2>' +
  '<p><span class="de">irgend-</span> stresses that it does not matter who, what or where: <span class="de">irgendwer, irgendwas, irgendwo, irgendwann, irgendein Buch</span>.</p>' +
  EX('Kann mir bitte jemand helfen? | Can somebody help me, please?\nIch habe niemanden gesehen. | I didn\'t see anybody.\nIrgendwann fahre ich nach Japan. | Some day I will go to Japan.\nMan muss sich hier anmelden. | You have to register here.') +
  NOTE('<span class="de">man</span> always takes the 3rd person singular and is repeated as <span class="de">man</span> (never "er"): <span class="de">Wenn man müde ist, sollte man schlafen.</span>') +
  MISTAKE('Hast du ein Kuli? – Ja, ich habe ein.', 'Hast du einen Kuli? – Ja, ich habe einen.', 'As a pronoun, ein must show its ending.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-textzusammenhang', title: 'Text cohesion', de: 'Textzusammenhang: Verweiswörter',
  summary: 'Linking sentences with pronouns, dieser, deshalb, darauf and similar words so that a text reads as a whole.',
  body:
  '<p>A good text is not just a list of sentences: each sentence connects to the one before. This connection is called <strong>Textzusammenhang</strong> (cohesion). It is created mostly by <strong>reference words</strong> (Verweiswörter) that point back to something already mentioned, and by connectors.</p>' +
  '<h2>Ways to refer back</h2>' +
  TBL('Tool | Example\npersonal pronouns | Die Firma wurde 1990 gegründet. Sie hat heute 200 Mitarbeiter.\ndemonstratives (der, dieser, jener) | Ich habe mit Herrn Weber gesprochen. Der war sehr freundlich.\nsynonyms and general nouns | Das Kolosseum … Das antike Bauwerk …\npossessive articles | Die Stadt ist alt. Ihre Altstadt ist berühmt.\nda(r)- + preposition | Wir planen ein Fest. Darauf freuen sich alle.\ndas, dies (for a whole idea) | Die Mieten steigen. Das ist ein großes Problem.\nlocal and temporal adverbs | Wir waren in Rom. Dort … / Im Jahr 2010 … Damals …\nconnectors | deshalb, trotzdem, außerdem, zum Beispiel') +
  '<h2>Referring forward</h2>' +
  '<p>Some words point to something that comes <strong>later</strong>, usually a clause: <span class="de">Ich freue mich darauf, dass du kommst. Es ist wichtig, dass …. Folgendes ist zu beachten: …</span></p>' +
  EX('Viele Sprachen sterben aus. Dies hat verschiedene Gründe. | Many languages are dying out. This has various reasons.\nAnna und Ben arbeiten zusammen. Erstere ist Ärztin, Letzterer Pfleger. | Anna and Ben work together. The former is a doctor, the latter a nurse.\nDas Museum wurde renoviert. Seitdem kommen mehr Besucher. | The museum was renovated. Since then, more visitors have come.') +
  NOTE('Avoid repeating the same noun again and again: replace it with a pronoun, a synonym or a more general term. In exam writing, cohesion is part of the marking criteria.') +
  MISTAKE('Ich habe ein neues Handy. Das Handy ist schnell. Das Handy war teuer.', 'Ich habe ein neues Handy. Es ist schnell, war aber teuer.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-lassen', title: 'The verb lassen', de: 'Das Verb lassen',
  summary: 'allow, have something done, leave, stop: the meanings of lassen, its forms and the double infinitive in the Perfekt.',
  body:
  '<p><strong>lassen</strong> is one of the most versatile German verbs. It can be a main verb or be used with an infinitive, like a modal verb. Its meaning depends on the context.</p>' +
  '<h2>The main meanings</h2>' +
  TBL('Meaning | Example | English\nhave something done (by someone else) | Ich lasse mein Auto reparieren. | I am having my car repaired.\nallow, let | Die Eltern lassen ihr Kind allein reisen. | The parents let their child travel alone.\nleave (something somewhere) | Ich habe meinen Schirm im Zug gelassen. | I left my umbrella on the train.\nstop doing | Lass das! / Er lässt das Rauchen. | Stop it! / He is giving up smoking.\nsich lassen = can be done | Das Fenster lässt sich nicht öffnen. | The window can\'t be opened.\nlass uns … = let\'s | Lass uns gehen! | Let\'s go!') +
  '<h2>Forms</h2>' +
  TBL('Tense | Form\nPräsens | ich lasse, du lässt, er lässt\nPräteritum | ich ließ, er ließ\nPerfekt (alone) | Ich habe den Schlüssel zu Hause gelassen.\nPerfekt (+ infinitive) | Ich habe das Auto reparieren lassen.') +
  '<p>With another infinitive, the Perfekt uses the <strong>double infinitive</strong>: <span class="de">habe … reparieren lassen</span>, not "gelassen". In a subordinate clause, <span class="de">haben</span> comes before both infinitives: <span class="de">…, weil ich das Auto habe reparieren lassen.</span></p>' +
  EX('Wo lässt du dir die Haare schneiden? | Where do you get your hair cut?\nLassen Sie mich bitte ausreden. | Please let me finish.\nDas lässt sich leicht erklären. | That can be explained easily.') +
  NOTE('<span class="de">lassen</span> + infinitive takes no <em>zu</em>, just like modal verbs.') +
  MISTAKE('Ich habe mein Fahrrad reparieren gelassen.', 'Ich habe mein Fahrrad reparieren lassen.') +
  PRACTICE('')
},
{
  level: 'B2', id: 'b2-werden', title: 'The uses of werden', de: 'Das Verb werden: Übersicht',
  summary: 'werden as a main verb, for the future, the passive, the Konjunktiv II and assumptions: recognising which one you see.',
  body:
  '<p><strong>werden</strong> appears in five different structures. To understand a sentence, look at what else is in it: an adjective or noun, an infinitive or a participle.</p>' +
  '<h2>Overview</h2>' +
  TBL('Use | Structure | Example | Meaning\nmain verb | werden + noun / adjective | Sie wird Ärztin. Es wird dunkel. | become, get\nFutur I | werden + infinitive | Ich werde morgen anrufen. | will\nassumption | werden + (wohl) + infinitive | Er wird wohl krank sein. | is probably\nPassiv | werden + Partizip II | Das Haus wird renoviert. | is being done\nKonjunktiv II | würde + infinitive | Ich würde gern helfen. | would') +
  '<h2>Forms</h2>' +
  TBL('Person | Präsens | Präteritum | Konjunktiv II\nich | werde | wurde | würde\ndu | wirst | wurdest | würdest\ner / sie / es | wird | wurde | würde\nwir / sie / Sie | werden | wurden | würden\nihr | werdet | wurdet | würdet') +
  '<h2>Perfekt: geworden or worden?</h2>' +
  '<p>As a <strong>main verb</strong>, the participle is <span class="de">geworden</span>: <span class="de">Sie ist Ärztin geworden.</span> In the <strong>passive</strong>, it is <span class="de">worden</span>: <span class="de">Das Haus ist renoviert worden.</span></p>' +
  EX('Mein Bruder wird nächstes Jahr 30. | My brother will turn 30 next year.\nDie Ergebnisse werden morgen veröffentlicht. | The results will be published tomorrow. (passive)\nDas wird schon klappen. | It will work out. (reassurance)\nWürden Sie mir bitte helfen? | Would you help me, please?') +
  NOTE('A quick test: werden + <strong>Partizip II</strong> = passive; werden + <strong>infinitive</strong> = future or assumption; <strong>würde</strong> = Konjunktiv II.') +
  MISTAKE('Das Problem ist gelöst geworden.', 'Das Problem ist gelöst worden.', 'Passive Perfekt uses worden.') +
  PRACTICE('')
}
);

window.BASICS = window.BASICS || {};
Object.assign(window.BASICS, {
'b2-wortstellung': {
  what: `<p><strong>Word order</strong> is the rule for which part of a sentence goes where. In German, the two parts of the verb form a frame, and the area between them is the <strong>Mittelfeld</strong> (middle field). Inside it, pronouns, objects and adverbials follow a typical order, remembered as <strong>TeKaMoLo</strong>: time, reason, manner, place.</p>`,
  terms: [['Vorfeld', 'position 1, before the conjugated verb'], ['Mittelfeld', 'everything between the two verb parts'], ['Angabe (adverbial)', 'extra information: when, why, how, where'], ['TeKaMoLo', 'temporal – kausal – modal – lokal']],
  when: [`Whenever you build a longer sentence with several pieces of information.`, `When you replace nouns with pronouns: <span class="de">Ich habe es ihr gestern gegeben.</span>`, `To emphasise something by moving it to position 1 or to the end.`],
  english: `English keeps a strict order: subject – verb – object – manner – place – time ("I went by bus to work yesterday"). German puts time early and place late: <span class="de">Ich bin gestern mit dem Bus zur Arbeit gefahren.</span>`
},
'b2-negation': {
  what: `<p><strong>Negation</strong> means saying that something is not true or does not happen. Besides <span class="de">nicht</span> and <span class="de">kein</span>, German has negative words like <span class="de">nie, niemand, nichts, nirgends</span>, and can negate inside a word with prefixes and suffixes like <span class="de">un-, miss-, -los, -frei</span>.</p>`,
  terms: [['Satznegation', 'the whole statement is negated'], ['Teilnegation', 'only one element is negated, often with sondern'], ['Negationswort', 'a word that is negative itself: nie, niemand, nichts'], ['Negationspräfix / -suffix', 'un-, miss-, -los, -frei']],
  when: [`Correcting information: <span class="de">nicht am Montag, sondern am Dienstag</span>`, `Expressing absolute statements: <span class="de">Ich war noch nie in Paris.</span>`, `Writing compactly: <span class="de">kostenlos</span> instead of <span class="de">es kostet nichts</span>`, `Polite understatement: <span class="de">nicht uninteressant</span>`],
  english: `English often uses "not any" (I don't have any time) where German uses <span class="de">kein</span>: <span class="de">Ich habe keine Zeit.</span> Like English, standard German does not use double negatives.`
},
'b2-vergleichssaetze': {
  what: `<p>A <strong>comparative clause</strong> compares a situation with another one or with an expectation: "It was easier than I thought", "as good as I hoped". German uses <span class="de">als</span> for differences, <span class="de">so … wie</span> for equality, and <span class="de">je … desto</span> when two things change together.</p>`,
  terms: [['Komparativ', 'the comparative form: größer, besser, mehr'], ['als', 'than (difference)'], ['so … wie', 'as … as (equality)'], ['je … desto / umso', 'the more … the more']],
  when: [`Comparing expectations with reality: <span class="de">Der Film war spannender, als ich gedacht hatte.</span>`, `Reviews and reports: <span class="de">Das Hotel war nicht so sauber, wie die Bilder versprochen hatten.</span>`, `Describing developments: <span class="de">Je mehr ich übe, desto sicherer werde ich.</span>`],
  english: `These match English "than", "as … as" and "the more … the more". Beware: in German, the clause after <em>als / wie</em> needs a subject and the verb at the end: <span class="de">als ich dachte</span>.`
},
'b2-relativ-wer': {
  what: `<p>Some relative clauses do <strong>not refer to a specific noun</strong>. <span class="de">Wer</span> means "whoever / anyone who" and makes general statements about people. <span class="de">Was</span> refers to words like <span class="de">alles, nichts, etwas</span> or to a whole sentence. If a preposition is needed, <span class="de">was</span> becomes <span class="de">wo(r)- + preposition</span>: <span class="de">worüber, wofür</span>.</p>`,
  terms: [['wer', 'whoever, anyone who (people, general)'], ['was', 'what / which (things, ideas, whole clauses)'], ['wo(r)- + Präposition', 'replaces preposition + was: worauf, woran'], ['Demonstrativpronomen', 'der, den, dem at the start of the main clause']],
  when: [`Proverbs and general rules: <span class="de">Wer zu spät kommt, den bestraft das Leben.</span>`, `Commenting on a whole situation: <span class="de">Der Zug fiel aus, was uns sehr ärgerte.</span>`, `After alles, nichts, etwas: <span class="de">Es gibt nichts, worauf ich mich mehr freue.</span>`],
  english: `<span class="de">Wer</span> = "whoever" or "those who"; <span class="de">was</span> = "what" or "which" (… which made me happy). English "something I think about" becomes <span class="de">etwas, worüber ich nachdenke</span>, with the preposition attached to <span class="de">wo-</span>.`
},
'b2-indefinit': {
  what: `<p>An <strong>indefinite pronoun</strong> stands for a person or thing that is <strong>not named or not known</strong>: someone, nobody, something, nothing, everyone, one. Some never change (<span class="de">etwas, nichts, man</span>); others take endings (<span class="de">jemanden, einer, keins, welche</span>).</p>`,
  terms: [['indefinit', 'not specified, not definite'], ['einer / keiner / welche', 'replace a noun already mentioned'], ['irgend-', 'any, some (it does not matter which)'], ['man', 'people in general, "you"']],
  when: [`Asking for help or information: <span class="de">Weiß jemand, wo der Raum ist?</span>`, `Answering without repeating the noun: <span class="de">Brauchst du einen Stift? – Ich habe schon einen.</span>`, `General statements and instructions: <span class="de">Man darf hier nicht parken.</span>`],
  english: `They correspond to someone, nobody, something, one, some. English "some" in "Do you have any?" becomes <span class="de">welche</span>: <span class="de">Hast du welche?</span>`
},
'b2-textzusammenhang': {
  what: `<p><strong>Text cohesion</strong> (Textzusammenhang) is what makes separate sentences into one connected text. You create it with <strong>reference words</strong> that point back or forward (pronouns, <span class="de">dieser, das, darauf, dort, damals</span>) and with connectors (<span class="de">deshalb, außerdem</span>).</p>`,
  terms: [['Verweiswort', 'a word that refers to something else in the text'], ['rückverweisend', 'pointing back to something already mentioned'], ['vorausverweisend', 'pointing forward: darauf, dass …; Folgendes'], ['Kohäsion', 'the linking of sentences']],
  when: [`In every essay, report and summary, to avoid repetition.`, `When summarising a text: <span class="de">Dieser Aspekt …, Daraus folgt …</span>`, `Reading: to understand longer texts, find what each pronoun refers to.`],
  english: `English uses the same tools (it, this, there, then, the former / the latter). German additionally uses <span class="de">da(r)-</span> words (darüber, dafür) and demonstrative <span class="de">der / die / das</span>, which are very common in speech.`
},
'b2-lassen': {
  what: `<p><strong>lassen</strong> is a verb with several meanings: to <strong>have something done</strong> by someone else, to <strong>allow</strong>, to <strong>leave</strong> something somewhere, and to <strong>stop</strong> doing something. With another verb, it works like a modal verb: the second verb goes to the end as an infinitive without <em>zu</em>.</p>`,
  terms: [['veranlassen', 'to arrange for someone else to do it'], ['erlauben', 'to allow'], ['Ersatzinfinitiv (double infinitive)', 'habe … machen lassen, instead of gelassen'], ['sich lassen', 'can be done (a passive alternative)']],
  when: [`Services: <span class="de">Ich lasse meine Haare schneiden / meine Wohnung renovieren.</span>`, `Permission: <span class="de">Mein Chef lässt mich früher gehen.</span>`, `Suggestions: <span class="de">Lass uns einen Kaffee trinken!</span>`, `Possibility: <span class="de">Das lässt sich ändern.</span>`],
  english: `English uses different verbs: "have / get something done", "let", "leave", "stop". German uses <span class="de">lassen</span> for all of them, so the context and the sentence structure decide the meaning.`
},
'b2-werden': {
  what: `<p><strong>werden</strong> is a verb that German uses in several ways. Alone, it means <strong>to become</strong>. As a helper verb, it builds the <strong>future</strong> (with an infinitive), the <strong>passive</strong> (with a Partizip II) and, as <span class="de">würde</span>, the <strong>Konjunktiv II</strong>. With <span class="de">wohl</span>, it expresses an <strong>assumption</strong>.</p>`,
  terms: [['Vollverb', 'main verb: become'], ['Hilfsverb', 'helper verb for future, passive, Konjunktiv II'], ['geworden / worden', 'participle as main verb / in the passive']],
  when: [`Talking about change: <span class="de">Es wird kalt. Sie ist Lehrerin geworden.</span>`, `Predictions and promises: <span class="de">Ich werde pünktlich sein.</span>`, `Processes and rules (passive): <span class="de">Die Bewerbungen werden geprüft.</span>`, `Polite requests and wishes: <span class="de">Ich würde gern …</span>`],
  english: `English needs four different words: become, will, be (passive) and would. German uses forms of one verb. The structure tells you which meaning it has.`
}
});
