GRAMMAR.push(
{
  level: 'A1', id: 'a1-praesens', title: 'Present tense', de: 'Das Präsens',
  summary: 'How verbs change their endings for ich, du, er and the others, including sein and haben.',
  body:
  '<p>German verbs change their ending depending on who is doing the action. You take the <strong>stem</strong> (the infinitive without <em>-en</em>) and add an ending. The present tense covers both "I live" and "I am living", and is also used for the near future: <span class="de">Morgen fahre ich nach Berlin.</span></p>' +
  '<h2>Regular verbs</h2>' +
  TBL('Person | Ending | wohnen | arbeiten\nich | -e | wohne | arbeite\ndu | -st | wohnst | arbeitest\ner / sie / es | -t | wohnt | arbeitet\nwir | -en | wohnen | arbeiten\nihr | -t | wohnt | arbeitet\nsie / Sie | -en | wohnen | arbeiten') +
  '<p>When the stem ends in <em>-t</em> or <em>-d</em> (arbeiten, finden), add an extra <em>-e-</em> before <em>-st</em> and <em>-t</em> so you can pronounce it: <span class="de">du arbeitest, er findet</span>. When it ends in <em>-s, -ß, -z</em> (heißen, tanzen), the du-form only adds <em>-t</em>: <span class="de">du heißt</span>.</p>' +
  '<h2>Verbs with a vowel change</h2>' +
  '<p>Some irregular verbs change their vowel in the <em>du</em> and <em>er/sie/es</em> forms only.</p>' +
  TBL('Change | Infinitive | du | er / sie / es\ne → i | sprechen | sprichst | spricht\ne → ie | lesen | liest | liest\na → ä | fahren | fährst | fährt\nau → äu | laufen | läufst | läuft') +
  '<h2>sein and haben</h2>' +
  TBL('Person | sein (to be) | haben (to have)\nich | bin | habe\ndu | bist | hast\ner / sie / es | ist | hat\nwir | sind | haben\nihr | seid | habt\nsie / Sie | sind | haben') +
  EX('Ich wohne in Leipzig. | I live in Leipzig.\nWas machst du heute? | What are you doing today?\nSie spricht drei Sprachen. | She speaks three languages.\nWir sind müde und haben Hunger. | We are tired and hungry.') +
  NOTE('<strong>Sie</strong> with a capital S is the polite "you" and always takes the plural form: <span class="de">Woher kommen Sie?</span>') +
  MISTAKE('Ich bin 25 Jahre.', 'Ich bin 25 Jahre alt.', 'Age needs <em>alt</em>. And for hunger, German uses haben: <span class="de">Ich habe Hunger</span>, not <em>Ich bin hungrig</em> in everyday speech.') +
  PRACTICE('Put the verb in the correct form.',
    'Du ___ (lernen) Deutsch.\nEr ___ (fahren) nach Hause.\nIhr ___ (sein) sehr nett.\nWas ___ (lesen) sie (she)?\nWir ___ (haben) keine Zeit.',
    'Du lernst Deutsch.\nEr fährt nach Hause.\nIhr seid sehr nett.\nWas liest sie?\nWir haben keine Zeit.')
},
{
  level: 'A1', id: 'a1-artikel', title: 'Articles and gender', de: 'Artikel und Genus',
  summary: 'Every German noun is der, die or das. Learn the article with the word, and use the patterns that help.',
  body:
  '<p>Every German noun has a grammatical gender: masculine, feminine or neuter. The gender decides the article. There is no fully reliable rule, so always learn a noun <strong>together with its article</strong>: not <em>Tisch</em>, but <span class="de"><span class="art art-der">der</span> Tisch</span>. On this site the colours help: <span class="art art-der">der</span> is blue, <span class="art art-die">die</span> is red, <span class="art art-das">das</span> is green.</p>' +
  '<h2>Definite and indefinite articles</h2>' +
  TBL('Gender | definite (the) | indefinite (a) | Example\nmasculine | der | ein | der / ein Tisch\nfeminine | die | eine | die / eine Lampe\nneuter | das | ein | das / ein Buch\nplural | die | (no article) | die Bücher / Bücher') +
  '<h2>Patterns that help</h2>' +
  TBL('Usually der | Usually die | Usually das\nmale people and animals: der Vater | female people: die Mutter | young beings: das Kind, das Baby\ndays, months, seasons: der Montag, der Mai | nouns ending in -ung, -heit, -keit, -schaft: die Wohnung | nouns ending in -chen, -lein: das Mädchen\nnouns ending in -er (from verbs), -ling: der Lehrer | nouns ending in -e (many): die Straße | infinitives as nouns: das Essen\nweather and directions: der Regen, der Norden | numbers: die Eins | -um, -ment: das Museum, das Dokument') +
  '<p>In compound nouns, the <strong>last part</strong> decides the gender: <span class="de">das Haus + die Tür = <span class="art art-die">die</span> Haustür</span>.</p>' +
  EX('Das ist ein Tisch. Der Tisch ist neu. | That is a table. The table is new.\nDas Mädchen heißt Lea. | The girl is called Lea. (das, because of -chen)\nDie Zeitung liegt auf dem Tisch. | The newspaper is on the table.') +
  MISTAKE('die Mädchen (one girl)', 'das Mädchen', 'The ending <em>-chen</em> always makes a noun neuter, even for a person.') +
  PRACTICE('Write der, die or das.',
    '___ Wohnung\n___ Montag\n___ Brötchen\n___ Lehrer\n___ Freiheit\n___ Kinderzimmer',
    'die Wohnung (-ung)\nder Montag (day)\ndas Brötchen (-chen)\nder Lehrer (-er person)\ndie Freiheit (-heit)\ndas Kinderzimmer (last part: das Zimmer)')
},
{
  level: 'A1', id: 'a1-plural', title: 'Plural of nouns', de: 'Der Plural',
  summary: 'German has five main plural patterns. The plural article is always die.',
  body:
  '<p>The plural article is always <span class="de"><span class="art art-die">die</span></span>, whatever the gender in the singular. The ending, however, changes from noun to noun, so learn the plural together with the word: <span class="de">der Tisch, die Tische</span>.</p>' +
  '<h2>The five patterns</h2>' +
  TBL('Ending | Typical for | Examples\n-e (sometimes with umlaut) | many masculine nouns | der Tag → die Tage, der Stuhl → die Stühle\n-(e)n | most feminine nouns | die Frau → die Frauen, die Lampe → die Lampen\n-er (umlaut where possible) | many neuter nouns | das Kind → die Kinder, das Buch → die Bücher\n- (no ending, sometimes umlaut) | nouns ending in -er, -el, -en | der Lehrer → die Lehrer, der Vater → die Väter\n-s | foreign words, words ending in a vowel | das Auto → die Autos, das Handy → die Handys') +
  NOTE('Feminine nouns ending in <em>-in</em> double the n: <span class="de">die Lehrerin → die Lehrerinnen</span>.') +
  EX('Ich habe zwei Brüder und eine Schwester. | I have two brothers and one sister.\nDie Kinder spielen im Garten. | The children are playing in the garden.\nWir brauchen drei Stühle. | We need three chairs.') +
  MISTAKE('zwei Buchs', 'zwei Bücher', 'Only some foreign words take <em>-s</em>. Most German nouns use the other patterns.') +
  PRACTICE('Give the plural.',
    'die Tasche\ndas Haus\nder Apfel\ndas Foto\ndie Freundin',
    'die Taschen\ndie Häuser\ndie Äpfel\ndie Fotos\ndie Freundinnen')
},
{
  level: 'A1', id: 'a1-akkusativ', title: 'Nominative and accusative', de: 'Nominativ und Akkusativ',
  summary: 'The subject is in the nominative, the direct object in the accusative. Only masculine articles change.',
  body:
  '<p>German shows the role of a noun in the sentence through its <strong>case</strong>. The <strong>nominative</strong> is the subject, the person or thing doing the action. The <strong>accusative</strong> is the direct object, the person or thing the action happens to.</p>' +
  EX('Der Mann kauft einen Apfel. | The man (subject) buys an apple (object).') +
  '<h2>Only the masculine changes</h2>' +
  TBL('Case | masculine | feminine | neuter | plural\nNominativ | der / ein / kein | die / eine / keine | das / ein / kein | die / – / keine\nAkkusativ | <strong>den / einen / keinen</strong> | die / eine / keine | das / ein / kein | die / – / keine') +
  '<p>So you only need to remember one change: <span class="de">der → den, ein → einen</span>. Pronouns change too: <span class="de">ich → mich, du → dich, er → ihn, wir → uns, ihr → euch, sie/Sie → sie/Sie</span>.</p>' +
  '<h2>Verbs that take the accusative</h2>' +
  '<p>Most verbs with an object use the accusative: <span class="de">haben, brauchen, kaufen, sehen, suchen, finden, essen, trinken, besuchen, lieben</span>, and also <span class="de">es gibt</span>.</p>' +
  EX('Ich habe einen Bruder. | I have a brother.\nEs gibt keinen Kaffee mehr. | There is no more coffee.\nKennst du den Lehrer? Ja, ich kenne ihn. | Do you know the teacher? Yes, I know him.') +
  NOTE('Because the case shows the role, word order can change without changing the meaning: <span class="de">Den Apfel kauft der Mann.</span> still means the man buys the apple.') +
  MISTAKE('Ich habe ein Hund.', 'Ich habe einen Hund.', '<em>Hund</em> is masculine and is the object of <em>haben</em>.') +
  PRACTICE('Fill in the article in the accusative.',
    'Ich suche ___ (der) Bahnhof.\nWir kaufen ___ (ein) Tisch.\nSie trinkt ___ (ein) Tee.\nHast du ___ (das) Buch?\nEr besucht ___ (die) Großmutter.',
    'Ich suche den Bahnhof.\nWir kaufen einen Tisch.\nSie trinkt einen Tee.\nHast du das Buch?\nEr besucht die Großmutter.')
},
{
  level: 'A1', id: 'a1-negation', title: 'Negation with nicht and kein', de: 'Negation: nicht und kein',
  summary: 'Use kein for nouns without a definite article and nicht for everything else.',
  body:
  '<p>German has two main words for "not". Choosing between them follows a simple rule.</p>' +
  '<h2>kein</h2>' +
  '<p>Use <strong>kein</strong> to negate a noun that would have <em>ein</em> or no article. It takes the same endings as <em>ein</em>.</p>' +
  EX('Ich habe ein Auto. → Ich habe kein Auto. | I have no car.\nWir haben Zeit. → Wir haben keine Zeit. | We have no time.\nDas ist kein Problem. | That is no problem.') +
  '<h2>nicht</h2>' +
  '<p>Use <strong>nicht</strong> for verbs, adjectives, adverbs, names and nouns with a definite or possessive article.</p>' +
  EX('Ich komme nicht. | I am not coming.\nDas ist nicht teuer. | That is not expensive.\nDas ist nicht mein Handy. | That is not my phone.\nIch kenne den Film nicht. | I do not know the film.') +
  '<h2>Where nicht goes</h2>' +
  '<p><em>nicht</em> usually comes at the end of the sentence when it negates the whole statement, but <strong>before</strong> adjectives, place expressions, prepositional phrases and the second part of the verb.</p>' +
  TBL('Position | Example\nat the end | Ich verstehe das nicht.\nbefore an adjective | Der Film ist nicht gut.\nbefore a place | Er wohnt nicht in Berlin.\nbefore the verb at the end | Ich kann heute nicht kommen.') +
  NOTE('Answering a negative question with "yes" uses <strong>doch</strong>: <span class="de">Kommst du nicht? Doch, ich komme!</span>') +
  MISTAKE('Ich habe nicht ein Auto.', 'Ich habe kein Auto.') +
  PRACTICE('Make the sentences negative.',
    'Ich habe einen Bruder.\nSie ist müde.\nWir trinken Kaffee.\nEr findet den Schlüssel.\nDas ist meine Tasche.',
    'Ich habe keinen Bruder.\nSie ist nicht müde.\nWir trinken keinen Kaffee.\nEr findet den Schlüssel nicht.\nDas ist nicht meine Tasche.')
},
{
  level: 'A1', id: 'a1-satzbau', title: 'Word order and questions', de: 'Satzbau und Fragen',
  summary: 'The conjugated verb is always in position 2 in statements. Questions start with a W-word or the verb.',
  body:
  '<p>The most important rule of German word order: in a main clause the <strong>conjugated verb is in position 2</strong>. Position 1 can be the subject, a time expression or almost anything else; the subject then moves behind the verb.</p>' +
  TBL('Position 1 | Position 2 (verb) | Rest\nIch | fahre | morgen nach Berlin.\nMorgen | fahre | ich nach Berlin.\nNach Berlin | fahre | ich morgen.') +
  '<h2>W-questions</h2>' +
  '<p>The question word is in position 1, the verb in position 2.</p>' +
  TBL('Question word | Meaning | Example\nwer | who | Wer ist das?\nwas | what | Was machst du?\nwo | where | Wo wohnen Sie?\nwoher | where from | Woher kommst du?\nwohin | where to | Wohin fährt der Bus?\nwann | when | Wann beginnt der Kurs?\nwie | how | Wie heißt du?\nwarum | why | Warum lernst du Deutsch?\nwie viel / wie viele | how much / how many | Wie viele Kinder haben Sie?') +
  '<h2>Yes/no questions</h2>' +
  '<p>The verb goes to position 1: <span class="de">Kommst du heute? Sprechen Sie Englisch?</span></p>' +
  NOTE('Time, manner, place: when several adverbials follow the verb, the usual order is <strong>when, how, where</strong> (TeKaMoLo): <span class="de">Ich fahre morgen mit dem Zug nach Hamburg.</span>') +
  MISTAKE('Morgen ich fahre nach Berlin.', 'Morgen fahre ich nach Berlin.', 'The verb must stay in position 2, so the subject comes after it.') +
  PRACTICE('Start the sentence with the underlined word and reorder it.',
    'Ich lerne <u>heute</u> Deutsch.\nWir essen <u>am Abend</u> Pizza.\nEr wohnt <u>seit 2020</u> in Leipzig.\nWrite a question: du / wohnen / wo?\nWrite a yes/no question: Sie / sprechen / Deutsch',
    'Heute lerne ich Deutsch.\nAm Abend essen wir Pizza.\nSeit 2020 wohnt er in Leipzig.\nWo wohnst du?\nSprechen Sie Deutsch?')
},
{
  level: 'A1', id: 'a1-modalverben', title: 'Modal verbs', de: 'Modalverben',
  summary: 'können, müssen, wollen, dürfen, sollen and möchten, with the second verb at the end.',
  body:
  '<p>Modal verbs express ability, obligation, wish or permission. The modal verb is conjugated in position 2, and the main verb goes to the <strong>end</strong> of the sentence in the infinitive. This is called the sentence bracket (Satzklammer).</p>' +
  EX('Ich kann gut schwimmen. | I can swim well.\nWir müssen heute arbeiten. | We have to work today.') +
  '<h2>Forms</h2>' +
  TBL('Person | können | müssen | wollen | dürfen | sollen | möchten\nich | kann | muss | will | darf | soll | möchte\ndu | kannst | musst | willst | darfst | sollst | möchtest\ner / sie / es | kann | muss | will | darf | soll | möchte\nwir | können | müssen | wollen | dürfen | sollen | möchten\nihr | könnt | müsst | wollt | dürft | sollt | möchtet\nsie / Sie | können | müssen | wollen | dürfen | sollen | möchten') +
  '<p>Note that <em>ich</em> and <em>er/sie/es</em> have the same form and no ending.</p>' +
  '<h2>Meanings</h2>' +
  TBL('Verb | Meaning | Example\nkönnen | can, be able to; possibility | Kannst du mir helfen?\nmüssen | must, have to | Ich muss zum Arzt.\nwollen | want to (strong) | Sie will Ärztin werden.\nmöchten | would like to (polite) | Ich möchte einen Kaffee.\ndürfen | may, be allowed to | Hier darf man nicht rauchen.\nsollen | should; someone else wants it | Der Arzt sagt, ich soll mehr schlafen.') +
  NOTE('<strong>nicht müssen</strong> means "do not have to", not "must not". <span class="de">Du musst nicht kommen</span> = you don\'t have to come. "Must not" is <span class="de">nicht dürfen</span>.') +
  MISTAKE('Ich kann spreche Deutsch.', 'Ich kann Deutsch sprechen.') +
  PRACTICE('Complete with the modal verb in brackets.',
    'Er ___ (können) sehr gut kochen.\nDu ___ (müssen) mehr lernen.\n___ (dürfen) ich das Fenster öffnen?\nWir ___ (wollen) nach Spanien fahren.\nIch ___ (möchten) ein Glas Wasser.',
    'Er kann sehr gut kochen.\nDu musst mehr lernen.\nDarf ich das Fenster öffnen?\nWir wollen nach Spanien fahren.\nIch möchte ein Glas Wasser.')
},
{
  level: 'A1', id: 'a1-trennbar', title: 'Separable verbs', de: 'Trennbare Verben',
  summary: 'Verbs like aufstehen and anrufen split: the prefix goes to the end of the sentence.',
  body:
  '<p>Many German verbs have a prefix that separates from the verb in the present tense. The conjugated verb stays in position 2 and the <strong>prefix moves to the end</strong>.</p>' +
  EX('aufstehen → Ich stehe um 7 Uhr auf. | I get up at 7.\nanrufen → Er ruft seine Mutter an. | He calls his mother.\neinkaufen → Wir kaufen am Samstag ein. | We go shopping on Saturday.') +
  '<h2>Which prefixes separate?</h2>' +
  TBL('Separable (stressed) | Inseparable (unstressed)\nab-, an-, auf-, aus-, bei-, ein-, fern-, mit-, nach-, vor-, weg-, zu-, zurück- | be-, emp-, ent-, er-, ge-, miss-, ver-, zer-\naufstehen, einkaufen, fernsehen, mitkommen, zurückgehen | bezahlen, empfehlen, verstehen, erklären, gefallen') +
  '<p>Separable prefixes are always stressed in speech: <em>AUF</em>stehen, <em>AN</em>rufen. Inseparable ones are never stressed: ver<em>STE</em>hen.</p>' +
  '<h2>With a modal verb</h2>' +
  '<p>When a modal verb is in position 2, the separable verb stays together as one word at the end: <span class="de">Ich muss morgen früh aufstehen.</span></p>' +
  MISTAKE('Ich aufstehe um 7 Uhr.', 'Ich stehe um 7 Uhr auf.') +
  PRACTICE('Make sentences.',
    'ich / fernsehen / am Abend\ner / einkaufen / im Supermarkt\nder Zug / ankommen / um 10 Uhr\ndu / mitkommen / ? (yes/no question)\nwir / müssen / aufräumen / heute',
    'Ich sehe am Abend fern.\nEr kauft im Supermarkt ein.\nDer Zug kommt um 10 Uhr an.\nKommst du mit?\nWir müssen heute aufräumen.')
},
{
  level: 'A1', id: 'a1-possessiv', title: 'Possessive articles', de: 'Possessivartikel',
  summary: 'mein, dein, sein, ihr, unser, euer, Ihr: they take the same endings as ein.',
  body:
  '<p>Possessive articles show who something belongs to. They take the <strong>same endings as ein / kein</strong>.</p>' +
  TBL('Person | Possessive | Example\nich | mein | mein Bruder, meine Schwester\ndu | dein | dein Auto\ner / es | sein | sein Vater\nsie (she) | ihr | ihr Vater\nwir | unser | unser Haus\nihr | euer | eure Wohnung (euer loses the e)\nsie (they) | ihr | ihr Garten\nSie (polite) | Ihr | Ihr Pass, bitte') +
  '<h2>Endings</h2>' +
  TBL('Case | masculine | feminine | neuter | plural\nNominativ | mein | meine | mein | meine\nAkkusativ | meinen | meine | mein | meine') +
  EX('Das ist meine Freundin. | This is my girlfriend / friend.\nKennst du seinen Bruder? | Do you know his brother?\nWir besuchen unsere Eltern. | We are visiting our parents.\nIst das Ihr Koffer? | Is that your suitcase? (polite)') +
  NOTE('<strong>sein</strong> or <strong>ihr</strong> depends on the owner, not on the thing owned: <span class="de">Anna und ihr Bruder</span>, <span class="de">Tom und seine Schwester</span>.') +
  MISTAKE('Maria besucht seine Mutter. (meaning Maria\'s own mother)', 'Maria besucht ihre Mutter.') +
  PRACTICE('Fill in the possessive article.',
    'Das ist ___ (ich) Wohnung.\nHast du ___ (du) Schlüssel (m.)?\nPeter sucht ___ (er) Handy.\nLisa ruft ___ (sie) Vater an.\nWir lieben ___ (wir) Kinder.',
    'Das ist meine Wohnung.\nHast du deinen Schlüssel?\nPeter sucht sein Handy.\nLisa ruft ihren Vater an.\nWir lieben unsere Kinder.')
},
{
  level: 'A1', id: 'a1-imperativ', title: 'The imperative', de: 'Der Imperativ',
  summary: 'Giving instructions and requests with du, ihr and Sie.',
  body:
  '<p>The imperative is used for requests, instructions and advice. There are three forms, depending on whom you are speaking to. Add <em>bitte</em> to sound polite.</p>' +
  TBL('Form | How to build it | kommen | nehmen | sein\ndu | du-form minus -st, no pronoun | Komm! | Nimm! | Sei!\nihr | ihr-form, no pronoun | Kommt! | Nehmt! | Seid!\nSie | Sie-form, Sie after the verb | Kommen Sie! | Nehmen Sie! | Seien Sie!') +
  '<p>Verbs with <em>a → ä</em> lose the umlaut in the du-imperative: <span class="de">du fährst → Fahr!</span> Verbs with <em>e → i/ie</em> keep the change: <span class="de">du liest → Lies!</span> Separable verbs put the prefix at the end: <span class="de">Ruf mich an!</span></p>' +
  EX('Öffne bitte das Fenster. | Please open the window.\nSeid leise, bitte! | Be quiet, please! (to several people)\nNehmen Sie Platz. | Take a seat. (polite)\nSteh auf! | Get up!') +
  MISTAKE('Du komm bitte!', 'Komm bitte!', 'The du-imperative has no pronoun.') +
  PRACTICE('Make imperatives.',
    'du / langsam sprechen\nSie / hier unterschreiben\nihr / die Hausaufgaben machen\ndu / das Buch lesen\ndu / nicht so spät nach Hause kommen',
    'Sprich langsam!\nUnterschreiben Sie hier!\nMacht die Hausaufgaben!\nLies das Buch!\nKomm nicht so spät nach Hause!')
}
);
