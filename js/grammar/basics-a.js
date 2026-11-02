/*
  Plain-language basics shown at the top of each grammar topic.
  what: definition in simple English
  terms: key terms [term, explanation]
  when: situations where German uses it, with examples
  english: comparison with English
*/
window.BASICS = window.BASICS || {};
Object.assign(window.BASICS, {

'a1-praesens': {
  what: `<p>The <strong>Präsens</strong> (present tense) is the basic form of a verb that you use to talk about now. In German, the verb changes its ending to match the person doing the action: <span class="de">ich lerne, du lernst, sie lernt</span>. This changing of endings is called <strong>conjugation</strong>.</p>`,
  terms: [['Infinitiv', 'the dictionary form of a verb, ending in -en or -n: lernen, wohnen, sein'], ['Stamm (stem)', 'the infinitive without -en: lern-, wohn-'], ['Endung (ending)', 'the part added to the stem: -e, -st, -t, -en'], ['konjugieren', 'to change the verb so it fits the person: ich lerne, du lernst']],
  when: [
    `For things happening right now: <span class="de">Ich koche gerade.</span> (I am cooking right now.)`,
    `For habits and things that are generally true: <span class="de">Ich trinke morgens Kaffee.</span> (I drink coffee in the morning.)`,
    `For the future, together with a time word. This is very common: <span class="de">Morgen fahre ich nach Berlin.</span> (Tomorrow I am going to Berlin.)`,
    `For something that started in the past and is still going on, with <em>seit</em>: <span class="de">Ich wohne seit zwei Jahren hier.</span> (I have lived here for two years.)`
  ],
  english: `English has two present tenses (I work / I am working). German has only one: <span class="de">ich arbeite</span> means both. German also uses the present much more often for the future.`
},

'a1-artikel': {
  what: `<p>An <strong>article</strong> is the small word in front of a noun, like "the" or "a" in English. In German, every noun has a <strong>grammatical gender</strong>: masculine, feminine or neuter. The gender decides which article you use: <span class="de"><span class="art art-der">der</span> Tisch, <span class="art art-die">die</span> Lampe, <span class="art art-das">das</span> Buch</span>. Grammatical gender is a word category, not about male or female: a table is masculine, a girl (<span class="de">das Mädchen</span>) is neuter.</p>`,
  terms: [['bestimmter Artikel (definite)', 'der, die, das = "the": a specific, known thing'], ['unbestimmter Artikel (indefinite)', 'ein, eine = "a/an": something new or not specific'], ['Genus (gender)', 'masculine, feminine or neuter'], ['Nomen / Substantiv', 'a noun; always written with a capital letter in German']],
  when: [
    `Use <strong>der, die, das</strong> when you talk about something specific or already mentioned: <span class="de">Der Kaffee ist kalt.</span> (The coffee is cold.)`,
    `Use <strong>ein, eine</strong> when you mention something for the first time or it is not specific: <span class="de">Ich trinke einen Kaffee.</span> (I am drinking a coffee.)`,
    `Use <strong>no article</strong> for uncountable things in general, and often for jobs and nationalities: <span class="de">Ich trinke Kaffee. Sie ist Ärztin.</span>`
  ],
  english: `English has one article for everything ("the"). German has three in the singular, and they also change with the case (der → den → dem). That is why it pays to learn every noun with its article from the start.`
},

'a1-plural': {
  what: `<p>The <strong>plural</strong> is the form of a noun for more than one: one book, two books. German does not have one plural ending like English "-s". Instead, there are several patterns, and many nouns also change their vowel to an umlaut: <span class="de">das Buch → die Bücher</span>. The article in the plural is always <span class="de">die</span>.</p>`,
  terms: [['Singular', 'one thing: das Kind'], ['Plural', 'more than one: die Kinder'], ['Umlaut', 'the two dots on a, o, u: ä, ö, ü; they often appear in the plural: der Apfel → die Äpfel']],
  when: [
    `Whenever you talk about more than one thing: <span class="de">Ich habe zwei Brüder.</span>`,
    `For things in general: <span class="de">Katzen schlafen viel.</span> (Cats sleep a lot.)`,
    `After numbers above one, and after words like <em>viele, einige, alle</em>: <span class="de">viele Leute, alle Kinder</span>.`
  ],
  english: `In English almost every plural ends in -s. In German, -s is only used for some foreign words (Autos, Handys). Learn each noun as a set: article, singular, plural (der Tisch, die Tische).`
},

'a1-akkusativ': {
  what: `<p>German nouns appear in four <strong>cases</strong>. A case shows the <em>role</em> of a noun in the sentence. The <strong>Nominativ</strong> is the subject: the person or thing that does the action. The <strong>Akkusativ</strong> is the direct object: the person or thing that the action is done to. You can see the case on the article: <span class="de">Der Hund sieht den Mann.</span></p>`,
  terms: [['Kasus (case)', 'the form a noun and its article take because of their role in the sentence'], ['Subjekt', 'who or what does the action; ask: Wer? Was?'], ['direktes Objekt', 'who or what the action is done to; ask: Wen? Was?']],
  when: [
    `Nominativ for the subject of the sentence: <span class="de">Der Lehrer erklärt die Regel.</span>`,
    `Akkusativ for the direct object of most verbs: <span class="de">Ich kaufe einen Apfel. Ich sehe den Film.</span>`,
    `Akkusativ after <span class="de">es gibt</span>: <span class="de">Es gibt einen Park.</span>`,
    `Akkusativ after certain prepositions (für, ohne, durch, gegen, um): <span class="de">für den Kurs</span>`
  ],
  english: `English shows the role mostly through word order (The dog sees the man / The man sees the dog). German shows it through the article, so word order can change without changing the meaning: <span class="de">Den Mann sieht der Hund</span> still means the dog sees the man. English has a tiny remainder of cases in pronouns: he → him, she → her.`
},

'a1-negation': {
  what: `<p><strong>Negation</strong> means saying "no" or "not" about something. German has two main words for this: <span class="de">nicht</span> (not) and <span class="de">kein</span> (no / not a / not any). Which one you need depends on what you are negating.</p>`,
  terms: [['nicht', 'not: negates verbs, adjectives, adverbs and specific things'], ['kein', 'no / not a: negates nouns that would have ein or no article'], ['doch', 'yes, used to contradict a negative question or statement']],
  when: [
    `Use <strong>kein</strong> instead of "not a" or "no" before a noun: <span class="de">Ich habe kein Auto.</span> (I don't have a car.)`,
    `Use <strong>nicht</strong> for actions and descriptions: <span class="de">Ich komme nicht. Das ist nicht teuer.</span>`,
    `Use <strong>nicht</strong> for specific things with der/die/das or mein/dein: <span class="de">Ich finde den Schlüssel nicht.</span>`,
    `Use <strong>doch</strong> to answer "yes" to a negative question: <span class="de">Hast du keine Zeit? – Doch!</span>`
  ],
  english: `English needs "do" to make a negative (I do not work). German just adds nicht: <span class="de">Ich arbeite nicht.</span> And where English says "I don't have a…", German uses kein.`
},

'a1-satzbau': {
  what: `<p><strong>Satzbau</strong> means sentence structure: the order of the words. German word order follows strict rules for the verb. In a normal statement, the conjugated verb always stands in <strong>position 2</strong>. In yes/no questions it moves to <strong>position 1</strong>.</p>`,
  terms: [['Position', 'a slot in the sentence; one position can hold several words, e.g. "Am Montag" is one position'], ['konjugiertes Verb', 'the verb with a personal ending: lerne, fährt, ist'], ['W-Frage', 'a question with a question word: wer, was, wo, wann, wie, warum'], ['Ja/Nein-Frage', 'a question you can answer with yes or no']],
  when: [
    `Statements: anything can go first, but the verb stays second: <span class="de">Heute lerne ich Deutsch.</span>`,
    `W-questions: question word first, verb second: <span class="de">Wo wohnst du?</span>`,
    `Yes/no questions: verb first: <span class="de">Wohnst du in Leipzig?</span>`,
    `Putting time or place first gives it emphasis or links to the previous sentence: <span class="de">Am Wochenende habe ich Zeit.</span>`
  ],
  english: `English keeps the subject before the verb (Tomorrow I work). German keeps the verb in position 2, so the subject moves behind it: <span class="de">Morgen arbeite ich.</span> German also forms questions by moving the verb, with no "do": <span class="de">Arbeitest du?</span> (Do you work?)`
},

'a1-modalverben': {
  what: `<p><strong>Modal verbs</strong> are helper verbs that add a meaning like ability, wish, permission or obligation to another verb: can, must, want, may, should. The modal verb is conjugated in position 2, and the main verb goes to the very end in its infinitive form.</p>`,
  terms: [['Modalverb', 'können, müssen, wollen, möchten, dürfen, sollen'], ['Satzklammer (sentence bracket)', 'the two verb parts around the middle of the sentence: Ich <u>kann</u> heute nicht <u>kommen</u>.'], ['Infinitiv am Ende', 'the main verb in its basic form at the end']],
  when: [
    `Ability or possibility: <span class="de">Ich kann schwimmen.</span>`,
    `Necessity: <span class="de">Ich muss arbeiten.</span>`,
    `A wish (strong): <span class="de">Ich will Ärztin werden.</span> A polite wish: <span class="de">Ich möchte einen Tee.</span>`,
    `Permission or a ban: <span class="de">Darf ich hier parken? Hier darf man nicht rauchen.</span>`,
    `Advice or someone else's request: <span class="de">Du sollst mehr schlafen, sagt der Arzt.</span>`
  ],
  english: `English modals stand next to the main verb (I can swim). German sends the main verb to the end: <span class="de">Ich kann gut schwimmen.</span> Watch out: German <em>muss nicht</em> means "don't have to", and "must not" is <em>darf nicht</em>.`
},

'a1-trennbar': {
  what: `<p>Many German verbs have a <strong>prefix</strong>, a small part at the beginning that changes the meaning: <span class="de">stehen</span> (to stand) → <span class="de">aufstehen</span> (to get up). With <strong>separable verbs</strong>, this prefix splits off in the present and simple past and goes to the end of the sentence: <span class="de">Ich stehe um 7 Uhr auf.</span></p>`,
  terms: [['Präfix', 'a small part before the verb: an-, auf-, aus-, ein-, mit-, zurück-'], ['trennbar', 'separable: the prefix moves to the end'], ['untrennbar', 'inseparable: be-, ver-, er-, ent- … never move']],
  when: [
    `Daily routines and movement are full of separable verbs: <span class="de">aufstehen, einkaufen, anrufen, mitkommen, zurückfahren, fernsehen</span>.`,
    `In a main clause, the prefix goes to the end: <span class="de">Ich rufe dich morgen an.</span>`,
    `With a modal verb or at the end of a subordinate clause, the verb stays together: <span class="de">Ich muss dich anrufen. …, weil ich dich anrufe.</span>`
  ],
  english: `English has similar phrasal verbs (to get up, to call back), and the small word often moves too: "call me back". German just moves it further, to the very end of the clause.`
},

'a1-possessiv': {
  what: `<p><strong>Possessive articles</strong> show who something belongs to: my, your, his, her, our, their. In German they come before a noun like an article and take endings like <span class="de">ein</span>: <span class="de">mein Bruder, meine Schwester, meinen Bruder</span>.</p>`,
  terms: [['Possessivartikel', 'mein, dein, sein, ihr, unser, euer, Ihr'], ['Besitzer (owner)', 'decides which word: his = sein, her = ihr'], ['Endung', 'decided by the noun that follows: gender, number and case']],
  when: [
    `To say who owns something: <span class="de">Das ist mein Handy.</span>`,
    `For family and relationships: <span class="de">Meine Mutter wohnt in Lagos.</span>`,
    `With the polite form Sie, use <span class="de">Ihr</span> with a capital I: <span class="de">Ist das Ihr Koffer?</span>`
  ],
  english: `Like English, the word depends on the owner (his/her). Unlike English, it also takes an ending depending on the noun after it: <span class="de">mein Vater</span> but <span class="de">meine Mutter</span>, and <span class="de">ich sehe meinen Vater</span> in the accusative.`
},

'a1-imperativ': {
  what: `<p>The <strong>imperative</strong> is the verb form for instructions, requests, advice and orders: "Come here!", "Please sit down." German has three forms, depending on whether you speak to one friend (du), several friends (ihr) or someone formally (Sie).</p>`,
  terms: [['Imperativ', 'the command form of a verb'], ['du-Form', 'for one person you know well: Komm!'], ['ihr-Form', 'for several people you know well: Kommt!'], ['Sie-Form', 'polite, for one or more people: Kommen Sie!']],
  when: [
    `Instructions and directions: <span class="de">Gehen Sie geradeaus und dann links.</span>`,
    `Requests, softened with bitte or mal: <span class="de">Hilf mir bitte mal!</span>`,
    `Advice: <span class="de">Trink mehr Wasser!</span>`,
    `Recipes and manuals often use the Sie-form or the infinitive: <span class="de">Zwiebeln schneiden.</span>`
  ],
  english: `English has one imperative for everyone (Come!). German changes it depending on who you talk to, and the polite form keeps the pronoun: <span class="de">Kommen Sie!</span> A bare imperative can sound rude, so Germans add <em>bitte</em> or <em>mal</em>.`
},

'a2-perfekt': {
  what: `<p>The <strong>Perfekt</strong> is the main <strong>past tense in spoken German</strong>. It has two parts: a helping verb (<span class="de">haben</span> or <span class="de">sein</span>) in position 2, and the <strong>Partizip II</strong> (past participle) at the end: <span class="de">Ich habe gegessen. Wir sind gefahren.</span></p>`,
  terms: [['Hilfsverb (auxiliary)', 'haben or sein, conjugated in position 2'], ['Partizip II', 'the past participle, usually with ge-: gemacht, gegangen, gegessen'], ['Bewegungsverb', 'a verb of movement from A to B; these take sein']],
  when: [
    `Talking about the past in conversation, messages and emails: <span class="de">Was hast du am Wochenende gemacht?</span>`,
    `Telling someone what has happened: <span class="de">Ich habe meinen Schlüssel verloren.</span>`,
    `For most verbs, Germans say the Perfekt even where English uses the simple past: <span class="de">Gestern habe ich einen Film gesehen.</span> (Yesterday I saw a film.)`
  ],
  english: `The form looks like the English present perfect (I have eaten), but it is used like the English simple past (I ate). <span class="de">Ich habe gestern gearbeitet</span> = I worked yesterday. And some verbs use "be" instead of "have": <span class="de">Ich bin gefahren.</span>`
},

'a2-dativ': {
  what: `<p>The <strong>Dativ</strong> is the third case. It mainly marks the <strong>indirect object</strong>: the person who receives something or for whom something is done. The question is <span class="de">Wem?</span> (to whom?). In the sentence <span class="de">Ich gebe dem Kind ein Buch</span>, the book is the direct object (Akkusativ) and the child is the receiver (Dativ).</p>`,
  terms: [['indirektes Objekt', 'the receiver; ask Wem?'], ['Dativverb', 'a verb that always takes the dative: helfen, danken, gefallen, gehören'], ['Dativpräposition', 'a preposition that always takes the dative: mit, bei, von, zu, aus, nach, seit']],
  when: [
    `With verbs of giving, showing, explaining: <span class="de">Ich zeige dir die Stadt.</span>`,
    `With verbs that take only a dative: <span class="de">Kannst du mir helfen? Das gefällt mir.</span>`,
    `After dative prepositions: <span class="de">mit dem Bus, bei meiner Freundin</span>`,
    `In many fixed expressions: <span class="de">Wie geht es Ihnen? Mir ist kalt.</span>`
  ],
  english: `English uses "to" or word order for the receiver (I give the child a book / I give a book to the child). German uses the dative form: <span class="de">dem Kind</span>. English "me" covers both mich and mir; German keeps them apart.`
},

'a2-praepositionen': {
  what: `<p>A <strong>preposition</strong> is a small word that shows a relation of place, time, direction or manner: with, for, without, from, to. In German, every preposition <strong>controls a case</strong>: the noun after it must be in the accusative, dative or genitive.</p>`,
  terms: [['Präposition', 'mit, für, ohne, aus, bei, nach, seit, von, zu …'], ['Rektion', 'the case a preposition requires'], ['Verschmelzung (contraction)', 'preposition + article as one word: zum, zur, im, am, beim, vom']],
  when: [
    `Place and origin: <span class="de">aus der Türkei, bei meinen Eltern, zum Arzt</span>`,
    `Time: <span class="de">um 8 Uhr, am Montag, im Juli, seit einem Jahr, vor drei Tagen</span>`,
    `Means and company: <span class="de">mit dem Zug, mit meiner Schwester</span>`,
    `Purpose and absence: <span class="de">für dich, ohne Zucker</span>`
  ],
  english: `Prepositions rarely translate one to one. "To" can be <em>zu, nach, in</em> or <em>an</em>, and "at" can be <em>um, am, bei</em> or <em>in</em>. Learn them in phrases, together with their case: <span class="de">mit + Dativ, für + Akkusativ</span>.`
},

'a2-wechsel': {
  what: `<p><strong>Two-way prepositions</strong> (Wechselpräpositionen) are nine prepositions of place that can take either the accusative or the dative: <span class="de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span>. The case shows the meaning: <strong>accusative for movement to a place</strong> (Wohin?), <strong>dative for a location</strong> (Wo?).</p>`,
  terms: [['Wohin?', 'where to? movement towards a goal → Akkusativ'], ['Wo?', 'where? a position without change of place → Dativ'], ['Positionsverben', 'stehen, liegen, sitzen, hängen (where something is)'], ['Richtungsverben', 'stellen, legen, setzen, hängen (putting something somewhere)']],
  when: [
    `Putting things somewhere: <span class="de">Ich lege das Buch auf den Tisch.</span>`,
    `Saying where something is: <span class="de">Das Buch liegt auf dem Tisch.</span>`,
    `Going somewhere vs. being there: <span class="de">Ich gehe ins Kino. Ich bin im Kino.</span>`
  ],
  english: `English uses different prepositions for this difference (into vs. in, onto vs. on). German keeps the same preposition and changes the case: <span class="de">in die Küche</span> (into the kitchen) vs. <span class="de">in der Küche</span> (in the kitchen).`
},

'a2-komparativ': {
  what: `<p>The <strong>comparative</strong> compares two things: bigger, faster, more beautiful. The <strong>superlative</strong> says something is the most: the biggest, the fastest. German adds <span class="de">-er</span> for the comparative and uses <span class="de">am …-sten</span> or <span class="de">der/die/das …-ste</span> for the superlative.</p>`,
  terms: [['Grundform', 'the basic adjective: schnell'], ['Komparativ', 'schneller'], ['Superlativ', 'am schnellsten / der schnellste'], ['als / wie', 'als after a comparative (than), so … wie for equality (as … as)']],
  when: [
    `Comparing two things: <span class="de">Der Zug ist schneller als der Bus.</span>`,
    `Saying two things are equal: <span class="de">Sie ist so alt wie ich.</span>`,
    `Saying what is the most: <span class="de">Im Juli ist es am heißesten. Das ist das beste Restaurant.</span>`,
    `Preferences with gern – lieber – am liebsten: <span class="de">Ich trinke lieber Tee.</span>`
  ],
  english: `English uses "more/most" for long adjectives (more interesting). German always adds endings, even to long words: <span class="de">interessanter, am interessantesten</span>. "Than" is <em>als</em>, not <em>wie</em>.`
},

'a2-nebensatz': {
  what: `<p>A <strong>subordinate clause</strong> (Nebensatz) is a part of a sentence that cannot stand alone. It gives extra information, such as a reason, a condition or a fact, and starts with a <strong>conjunction</strong> like <span class="de">weil, dass, wenn, ob</span>. Its key rule: the conjugated verb goes to the <strong>very end</strong>.</p>`,
  terms: [['Hauptsatz (main clause)', 'can stand alone; verb in position 2'], ['Nebensatz', 'depends on a main clause; verb at the end'], ['Konjunktion / Subjunktion', 'the word that introduces it: weil, dass, wenn, ob, als, obwohl'], ['Komma', 'always separates main and subordinate clause in German']],
  when: [
    `Giving a reason: <span class="de">…, weil ich müde bin.</span>`,
    `Reporting what someone thinks or says: <span class="de">Ich glaube, dass er recht hat.</span>`,
    `Conditions and repeated situations: <span class="de">Wenn es regnet, bleibe ich zu Hause.</span>`,
    `Indirect yes/no questions: <span class="de">Weißt du, ob der Laden offen ist?</span>`
  ],
  english: `English word order does not change in a subordinate clause (because I am tired). German sends the verb to the end: <span class="de">weil ich müde bin</span>. German also always uses a comma before it.`
},

'a2-reflexiv': {
  what: `<p>A <strong>reflexive verb</strong> is used with a pronoun that refers back to the subject, like "myself" or "yourself": <span class="de">Ich wasche mich</span> (I wash myself). Many German verbs are always reflexive even when English does not use "myself": <span class="de">sich freuen</span> (to be happy), <span class="de">sich beeilen</span> (to hurry).</p>`,
  terms: [['Reflexivpronomen', 'mich/mir, dich/dir, sich, uns, euch, sich'], ['echt reflexiv', 'always used with sich: sich beeilen, sich erholen'], ['reziprok', '"each other": Wir treffen uns.']],
  when: [
    `Body care and daily routine: <span class="de">sich waschen, sich anziehen, sich die Zähne putzen</span>`,
    `Feelings and attitudes: <span class="de">sich freuen, sich ärgern, sich interessieren, sich fühlen</span>`,
    `Doing something to each other: <span class="de">Wir treffen uns um acht.</span>`
  ],
  english: `English often drops the reflexive (I hurry, I sit down). German needs it: <span class="de">Ich beeile mich. Ich setze mich.</span> Learn these verbs with <em>sich</em> and their preposition: <span class="de">sich freuen auf</span>.`
},

'a2-adjektiv': {
  what: `<p>An <strong>adjective</strong> describes a noun: new, big, beautiful. When an adjective stands <strong>before a noun</strong>, German adds an <strong>ending</strong> to it: <span class="de">das neue Auto, ein neues Auto</span>. After <span class="de">sein</span> or <span class="de">werden</span> it has no ending: <span class="de">Das Auto ist neu.</span></p>`,
  terms: [['attributiv', 'before a noun, with ending: der große Tisch'], ['prädikativ', 'after sein/werden, no ending: Der Tisch ist groß.'], ['Adjektivdeklination', 'the system of endings, which depends on the article, gender, number and case']],
  when: [
    `Describing things in detail: <span class="de">Ich suche eine helle Wohnung mit großem Balkon.</span>`,
    `Writing descriptions, ads, reviews and emails, where adjectives before nouns are frequent.`,
    `The endings carry information: when the article does not show the gender, the adjective does: <span class="de">ein neuer Tisch (der), ein neues Bett (das)</span>.`
  ],
  english: `English adjectives never change (a new car, new cars). German adjectives take endings like -e, -en, -er, -es. The good news: in most cases the ending is -en, so if you are unsure, -en is the best guess.`
},

'a2-praeteritum-basis': {
  what: `<p>The <strong>Präteritum</strong> (simple past) is a one-word past tense: <span class="de">ich war, ich hatte, ich konnte</span>. For most verbs it is used mainly in writing. But for <strong>sein, haben and the modal verbs</strong>, Germans use it in everyday speech too, because it is shorter than the Perfekt.</p>`,
  terms: [['Präteritum', 'simple past: war, hatte, musste'], ['Modalverben', 'können, müssen, wollen, dürfen, sollen; they lose the umlaut in the past: konnte, musste']],
  when: [
    `Saying how something was: <span class="de">Der Urlaub war schön.</span>`,
    `Saying what you had: <span class="de">Ich hatte keine Zeit.</span>`,
    `Saying what you could, had to or wanted to do: <span class="de">Ich musste arbeiten. Ich konnte nicht kommen.</span>`,
    `With <span class="de">es gab</span> (there was/were): <span class="de">Es gab viele Leute.</span>`
  ],
  english: `These forms correspond to English was/had/could/had to. In German conversation, <span class="de">Ich war krank</span> is much more natural than <span class="de">Ich bin krank gewesen</span>.`
},

'a2-hoeflich': {
  what: `<p>The <strong>Konjunktiv II</strong> is a verb form for things that are imagined, wished for or polite. At A2 you use a few of its forms as fixed phrases to make <strong>requests and wishes polite</strong>: <span class="de">Könnten Sie …? Ich hätte gern … Ich würde gern …</span></p>`,
  terms: [['Konjunktiv II', 'the "would/could" form of a verb'], ['würde', 'would; würde + infinitive works for almost all verbs'], ['hätte, wäre, könnte', 'the special forms of haben, sein, können']],
  when: [
    `Polite requests: <span class="de">Könnten Sie mir bitte helfen?</span>`,
    `Ordering in a café or shop: <span class="de">Ich hätte gern einen Tee.</span>`,
    `Wishes and plans you dream of: <span class="de">Ich würde gern nach Japan reisen.</span>`,
    `Advice: <span class="de">Du solltest zum Arzt gehen.</span>`
  ],
  english: `These are the German equivalents of "could you", "I would like" and "you should". As in English, using them instead of the direct form (Helfen Sie mir!) makes you sound much friendlier.`
}

});
