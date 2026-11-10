GRAMMAR.push(
{
  level: 'A2', id: 'a2-perfekt', title: 'The perfect tense', de: 'Das Perfekt',
  summary: 'The spoken past: haben or sein plus the Partizip II at the end.',
  body:
  '<p>In spoken German, the <strong>Perfekt</strong> is the normal way to talk about the past. It is formed with <strong>haben or sein</strong> in position 2 and the <strong>Partizip II</strong> at the end.</p>' +
  EX('Ich habe gestern Pizza gegessen. | I ate pizza yesterday.\nWir sind nach Dresden gefahren. | We went to Dresden.') +
  '<h2>haben or sein?</h2>' +
  '<p>Most verbs use <strong>haben</strong>. Use <strong>sein</strong> for verbs of movement from one place to another (gehen, fahren, fliegen, kommen), for changes of state (aufwachen, einschlafen, sterben, werden), and for <span class="de">sein, bleiben, passieren</span>.</p>' +
  '<h2>Forming the Partizip II</h2>' +
  TBL('Verb type | Pattern | Examples\nregular | ge- + stem + -(e)t | machen → gemacht, arbeiten → gearbeitet\nirregular | ge- + stem (often changed) + -en | schreiben → geschrieben, trinken → getrunken\nmixed | ge- + changed stem + -t | bringen → gebracht, denken → gedacht\nseparable | prefix + ge + stem | einkaufen → eingekauft, ankommen → angekommen\ninseparable (be-, ver-, er-, ent-…) | no ge- | bezahlen → bezahlt, verstehen → verstanden\nending in -ieren | no ge-, ends in -t | studieren → studiert, telefonieren → telefoniert') +
  EX('Hast du die Hausaufgaben gemacht? | Did you do the homework?\nDer Zug ist pünktlich angekommen. | The train arrived on time.\nIch habe dich nicht verstanden. | I didn\'t understand you.\nWas ist passiert? | What happened?') +
  NOTE('Every verb in the vocabulary list shows its Perfekt with haben or sein, so learn the auxiliary together with the participle.') +
  MISTAKE('Ich habe nach Berlin gefahren.', 'Ich bin nach Berlin gefahren.', '<em>fahren</em> describes movement to a place, so it takes <em>sein</em>.') +
  PRACTICE('Put the sentences into the Perfekt.',
    'Ich kaufe ein neues Handy.\nSie fliegt nach Rom.\nWir trinken einen Kaffee.\nEr steht um 6 Uhr auf.\nDu verstehst die Frage.',
    'Ich habe ein neues Handy gekauft.\nSie ist nach Rom geflogen.\nWir haben einen Kaffee getrunken.\nEr ist um 6 Uhr aufgestanden.\nDu hast die Frage verstanden.')
},
{
  level: 'A2', id: 'a2-dativ', title: 'The dative case', de: 'Der Dativ',
  summary: 'The indirect object, the dative verbs and the dative forms of articles and pronouns.',
  body:
  '<p>The dative usually marks the <strong>receiver</strong> or the person who benefits: the indirect object. In English it is often "to someone" or "for someone".</p>' +
  EX('Ich gebe dem Kind ein Buch. | I give the child a book. (dem Kind = to whom; ein Buch = what)') +
  '<h2>Forms</h2>' +
  TBL('Case | masculine | feminine | neuter | plural\nNominativ | der / ein | die / eine | das / ein | die\nAkkusativ | den / einen | die / eine | das / ein | die\nDativ | <strong>dem / einem</strong> | <strong>der / einer</strong> | <strong>dem / einem</strong> | <strong>den + -n</strong>') +
  '<p>In the dative plural, the noun takes an extra <em>-n</em> if it does not already end in -n or -s: <span class="de">mit den Kindern</span>.</p>' +
  TBL('Pronoun | Nominativ | Akkusativ | Dativ\n1st sg | ich | mich | mir\n2nd sg | du | dich | dir\n3rd sg | er / sie / es | ihn / sie / es | ihm / ihr / ihm\n1st pl | wir | uns | uns\n2nd pl | ihr | euch | euch\n3rd pl / polite | sie / Sie | sie / Sie | ihnen / Ihnen') +
  '<h2>Verbs with the dative</h2>' +
  '<p>Some common verbs take only a dative object: <span class="de">helfen, danken, gefallen, gehören, schmecken, passen, antworten, gratulieren</span>. Verbs of giving and telling take dative (person) + accusative (thing): <span class="de">geben, schenken, zeigen, erklären, empfehlen, schicken</span>.</p>' +
  EX('Kannst du mir helfen? | Can you help me?\nDas Kleid gefällt ihr. | She likes the dress.\nWir schenken unserer Mutter Blumen. | We give our mother flowers.\nWie geht es Ihnen? | How are you? (polite)') +
  MISTAKE('Ich helfe dich.', 'Ich helfe dir.', '<em>helfen</em> always takes the dative.') +
  PRACTICE('Fill in the dative.',
    'Ich danke ___ (du).\nDas Auto gehört ___ (mein Vater).\nEr zeigt ___ (die Touristen) den Weg.\nDie Suppe schmeckt ___ (wir) gut.\nSie gibt ___ (das Kind) einen Apfel.',
    'Ich danke dir.\nDas Auto gehört meinem Vater.\nEr zeigt den Touristen den Weg.\nDie Suppe schmeckt uns gut.\nSie gibt dem Kind einen Apfel.')
},
{
  level: 'A2', id: 'a2-praepositionen', title: 'Prepositions with dative or accusative', de: 'Präpositionen mit Dativ und Akkusativ',
  summary: 'Some prepositions always take the dative, others always the accusative. Learn them as groups.',
  body:
  '<p>Every preposition decides the case of the noun after it. Two groups always take the same case.</p>' +
  TBL('Always Dativ | Always Akkusativ\naus, bei, mit, nach, seit, von, zu, gegenüber | durch, für, gegen, ohne, um, bis, entlang') +
  EX('Ich komme aus der Türkei. | I come from Turkey.\nSie wohnt bei ihren Eltern. | She lives with her parents.\nWir fahren mit dem Bus zur Arbeit. | We take the bus to work.\nSeit einem Jahr lerne ich Deutsch. | I have been learning German for a year.\nDas Geschenk ist für dich. | The present is for you.\nEr geht ohne seinen Hund spazieren. | He goes for a walk without his dog.') +
  '<h2>Contractions</h2>' +
  TBL('Long form | Contraction\nzu dem | zum\nzu der | zur\nbei dem | beim\nvon dem | vom\nan dem / in dem | am / im\nin das | ins') +
  '<h2>Time expressions</h2>' +
  TBL('Preposition | Used for | Example\num | clock time | um 8 Uhr\nam | days, dates, parts of the day | am Montag, am 3. Mai, am Abend\nim | months, seasons, years with im Jahr | im Juli, im Winter\nvon … bis | from … until | von 9 bis 17 Uhr\nseit (+ Dat.) | since / for (still continuing) | seit zwei Wochen\nvor (+ Dat.) | ago | vor drei Tagen') +
  NOTE('<strong>seit</strong> uses the present tense for something that is still going on: <span class="de">Ich wohne seit 2023 in Leipzig</span> = I have lived in Leipzig since 2023.') +
  MISTAKE('Ich fahre mit den Bus.', 'Ich fahre mit dem Bus.') +
  PRACTICE('Complete with the correct article or contraction.',
    'Ich gehe ___ Arzt. (zu + der Arzt)\nWir laufen durch ___ Park. (der)\nSie kommt ___ Bahnhof. (von + der Bahnhof)\nIch kaufe ein Geschenk für ___ Schwester. (meine)\nSeit ___ Monat arbeite ich hier. (ein)',
    'Ich gehe zum Arzt.\nWir laufen durch den Park. (durch + Akkusativ)\nSie kommt vom Bahnhof.\nIch kaufe ein Geschenk für meine Schwester.\nSeit einem Monat arbeite ich hier.')
},
{
  level: 'A2', id: 'a2-wechsel', title: 'Two-way prepositions', de: 'Wechselpräpositionen',
  summary: 'in, an, auf and six others take the accusative for direction (wohin?) and the dative for location (wo?).',
  body:
  '<p>Nine prepositions can take either case: <span class="de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span>. The question decides.</p>' +
  TBL('Question | Meaning | Case | Example\nWohin? | movement to a place | Akkusativ | Ich lege das Buch auf den Tisch.\nWo? | location, no change of place | Dativ | Das Buch liegt auf dem Tisch.') +
  '<h2>Verb pairs</h2>' +
  '<p>German uses different verbs for putting something somewhere and for where it is. The putting verbs are regular and take the accusative; the position verbs are irregular and take the dative.</p>' +
  TBL('Wohin? (Akkusativ) | Wo? (Dativ)\nlegen (lay flat) → hat gelegt | liegen (lie) → hat gelegen\nstellen (stand upright) → hat gestellt | stehen (stand) → hat gestanden\nsetzen (sit someone down) → hat gesetzt | sitzen (sit) → hat gesessen\nhängen (hang up) → hat gehängt | hängen (be hanging) → hat gehangen') +
  EX('Ich hänge das Bild an die Wand. Jetzt hängt es an der Wand. | I hang the picture on the wall. Now it hangs on the wall.\nWir gehen ins Kino. Wir sind im Kino. | We go to the cinema. We are at the cinema.\nDie Katze springt unter das Bett. Sie schläft unter dem Bett. | The cat jumps under the bed. It sleeps under the bed.') +
  MISTAKE('Ich stelle die Flasche auf dem Tisch.', 'Ich stelle die Flasche auf den Tisch.', '<em>stellen</em> shows movement, so wohin? and the accusative.') +
  PRACTICE('Dative or accusative?',
    'Das Auto steht vor ___ Haus.\nIch lege den Schlüssel in ___ Schublade (f.).\nWir sitzen in ___ Garten (m.).\nEr hängt die Jacke an ___ Haken (m.).\nDie Lampe hängt über ___ Tisch.',
    'vor dem Haus (wo?)\nin die Schublade (wohin?)\nim Garten (wo?)\nan den Haken (wohin?)\nüber dem Tisch (wo?)')
},
{
  level: 'A2', id: 'a2-komparativ', title: 'Comparative and superlative', de: 'Komparativ und Superlativ',
  summary: 'größer als, so groß wie and am größten, plus the irregular forms you need to know.',
  body:
  '<p>To compare, add <strong>-er</strong> for the comparative and use <strong>am …-sten</strong> for the superlative. Many short adjectives also take an umlaut.</p>' +
  TBL('Grundform | Komparativ | Superlativ\nschnell | schneller | am schnellsten\nalt | älter | am ältesten\njung | jünger | am jüngsten\nteuer | teurer | am teuersten\nheiß | heißer | am heißesten') +
  '<p>After <em>-d, -t, -s, -ß, -z</em> the superlative takes <em>-esten</em>: <span class="de">am ältesten, am kürzesten</span>.</p>' +
  '<h2>Irregular forms</h2>' +
  TBL('Grundform | Komparativ | Superlativ\ngut | besser | am besten\nviel | mehr | am meisten\ngern | lieber | am liebsten\nhoch | höher | am höchsten\nnah | näher | am nächsten') +
  '<h2>als and wie</h2>' +
  '<p>Use <strong>als</strong> after a comparative (different) and <strong>so … wie</strong> for equality.</p>' +
  EX('Berlin ist größer als Leipzig. | Berlin is bigger than Leipzig.\nMein Bruder ist so alt wie ich. | My brother is as old as me.\nIch trinke lieber Tee als Kaffee. | I prefer tea to coffee.\nIm Juli ist es am heißesten. | It is hottest in July.') +
  NOTE('Before a noun, the comparative and superlative take normal adjective endings: <span class="de">ein größeres Auto, der schnellste Zug</span>.') +
  MISTAKE('Er ist größer wie ich.', 'Er ist größer als ich.') +
  PRACTICE('Complete the comparisons.',
    'Ein Fahrrad ist ___ (billig) ___ ein Auto.\nDer Zug ist ___ (schnell) ___ der Bus.\nIch esse ___ (gern) Pasta. (superlative)\nMeine Schwester ist so ___ (groß) ___ meine Mutter.\nDas ist das ___ (gut) Restaurant der Stadt.',
    'billiger als\nschneller als\nIch esse am liebsten Pasta.\nso groß wie\ndas beste Restaurant')
},
{
  level: 'A2', id: 'a2-nebensatz', title: 'Subordinate clauses: weil, dass, wenn', de: 'Nebensätze mit weil, dass, wenn',
  summary: 'In a subordinate clause the conjugated verb goes to the very end.',
  body:
  '<p>Subordinating conjunctions such as <span class="de">weil, dass, wenn, ob, obwohl</span> send the conjugated verb to the <strong>end</strong> of the clause. A comma always separates the clauses.</p>' +
  TBL('Conjunction | Meaning | Example\nweil | because | Ich bleibe zu Hause, weil ich krank bin.\ndass | that | Ich glaube, dass er recht hat.\nwenn | if; whenever | Wenn es regnet, nehme ich den Bus.\nob | whether | Weißt du, ob der Laden offen ist?\nals | when (single event in the past) | Als ich Kind war, wohnte ich in Lagos.') +
  '<h2>Subordinate clause first</h2>' +
  '<p>If the subordinate clause comes first, it takes position 1, so the main clause starts with its verb: <span class="de">Weil ich krank bin, bleibe ich zu Hause.</span> This gives the typical "verb, verb" pattern in the middle.</p>' +
  '<h2>With separable verbs and Perfekt</h2>' +
  EX('…, weil der Zug um 8 Uhr ankommt. | separable verb joins together at the end\n…, dass sie gestern angerufen hat. | auxiliary goes after the participle\n…, weil ich morgen arbeiten muss. | modal verb comes last') +
  NOTE('<strong>denn</strong> also means "because", but it does not change word order: <span class="de">Ich bleibe zu Hause, denn ich bin krank.</span>') +
  MISTAKE('…, weil ich bin krank.', '…, weil ich krank bin.') +
  PRACTICE('Join the sentences with the conjunction.',
    'Ich lerne Deutsch. Ich wohne in Deutschland. (weil)\nEr sagt: Der Film ist gut. (dass)\nDu hast Zeit. Wir gehen ins Kino. (wenn, start with wenn)\nIch weiß nicht: Kommt sie heute? (ob)\nSie ist müde. Sie hat schlecht geschlafen. (weil)',
    'Ich lerne Deutsch, weil ich in Deutschland wohne.\nEr sagt, dass der Film gut ist.\nWenn du Zeit hast, gehen wir ins Kino.\nIch weiß nicht, ob sie heute kommt.\nSie ist müde, weil sie schlecht geschlafen hat.')
},
{
  level: 'A2', id: 'a2-reflexiv', title: 'Reflexive verbs', de: 'Reflexive Verben',
  summary: 'sich freuen, sich waschen, sich interessieren: the reflexive pronoun and when it is dative.',
  body:
  '<p>Reflexive verbs use a pronoun that refers back to the subject. Many German verbs are reflexive where English is not: <span class="de">sich freuen</span> (to be happy), <span class="de">sich beeilen</span> (to hurry), <span class="de">sich erinnern</span> (to remember).</p>' +
  TBL('Person | Akkusativ | Dativ\nich | mich | mir\ndu | dich | dir\ner / sie / es | sich | sich\nwir | uns | uns\nihr | euch | euch\nsie / Sie | sich | sich') +
  '<p>Use the <strong>dative</strong> form when the sentence already has an accusative object: <span class="de">Ich wasche mich</span> (I wash myself) but <span class="de">Ich wasche mir die Hände</span> (I wash my hands).</p>' +
  '<h2>Common reflexive verbs</h2>' +
  TBL('Verb | Meaning | Example\nsich freuen auf / über | look forward to / be pleased about | Ich freue mich auf den Urlaub.\nsich interessieren für | be interested in | Sie interessiert sich für Kunst.\nsich ärgern über | be annoyed about | Er ärgert sich über den Stau.\nsich treffen | meet | Wir treffen uns um acht.\nsich fühlen | feel | Ich fühle mich nicht gut.\nsich vorstellen | introduce oneself; (Dat.) imagine | Darf ich mich vorstellen? Ich kann mir das vorstellen.') +
  '<h2>Where sich goes in the sentence</h2>' +
  '<p>The reflexive pronoun stands <strong>as early as possible after the conjugated verb</strong>. In a question or after another first element, it comes right after the subject pronoun. In a subordinate clause, it follows the subject, and the verb goes to the end. If the subject is a noun, <span class="de">sich</span> often comes <strong>before</strong> it.</p>' +
  TBL('Sentence type | Example\nmain clause | Ich freue mich auf das Wochenende.\nquestion | Freust du dich auf das Wochenende?\nsomething else in position 1 | Morgen treffen wir uns im Café.\nsubordinate clause | Ich weiß, dass er sich für Musik interessiert.\nnoun as subject | Heute freut sich mein Bruder sehr.\nwith a modal verb | Du musst dich beeilen.') +
  '<h2>Perfekt and Imperativ</h2>' +
  '<p>Reflexive verbs form the Perfekt with <strong>haben</strong>, and the pronoun stays after <span class="de">haben</span>: <span class="de">Ich habe mich gefreut. Wir haben uns gestern getroffen.</span> In the Imperativ, the pronoun follows the verb:</p>' +
  TBL('Person | Imperativ\ndu | Beeil dich!\nihr | Beeilt euch!\nSie | Beeilen Sie sich!') +
  '<h2>Always reflexive or only sometimes?</h2>' +
  '<p>Some verbs are <strong>always reflexive</strong>: they don\'t exist without <span class="de">sich</span>. Others can be used <strong>with or without</strong> it: reflexive when the action goes back to the subject, normal when it goes to someone else.</p>' +
  TBL('Always reflexive | With or without sich\nsich beeilen (to hurry) | Ich wasche mich. / Ich wasche das Auto.\nsich bedanken (to say thank you) | Ich ärgere mich. / Du ärgerst mich.\nsich erholen (to recover) | Er zieht sich an. / Er zieht das Kind an.\nsich verlieben (to fall in love) | Sie stellt sich vor. / Sie stellt ihren Freund vor.\nsich weigern (to refuse) | Wir treffen uns. / Wir treffen Anna.') +
  '<h2>"Each other" (reciprocal)</h2>' +
  '<p>In the plural, <span class="de">uns, euch, sich</span> can also mean <strong>each other</strong>: <span class="de">Wir kennen uns seit Jahren.</span> (We have known each other for years.) <span class="de">Sie lieben sich.</span> (They love each other.) To make it clear, you can use <span class="de">einander</span>: <span class="de">Sie helfen einander.</span></p>' +
  '<h2>Verbs with a dative pronoun</h2>' +
  '<p>Some verbs always take the <strong>dative</strong> pronoun, because they also have an accusative object (the thing). These are very common in everyday German:</p>' +
  TBL('Verb | Meaning | Example\nsich etwas merken | to remember, note | Ich kann mir das nicht merken.\nsich etwas wünschen | to wish for | Was wünschst du dir zum Geburtstag?\nsich etwas überlegen | to think something over | Ich überlege es mir.\nsich etwas ansehen | to have a look at | Wir sehen uns den Film an.\nsich etwas leisten | to afford | Das kann ich mir nicht leisten.\nsich etwas vorstellen | to imagine | Kannst du dir das vorstellen?') +
  NOTE('The difference only shows with <span class="de">ich</span> and <span class="de">du</span> (<span class="de">mich/mir, dich/dir</span>); all other forms are the same in the accusative and dative.') +
  MISTAKE('Ich freue auf das Wochenende.', 'Ich freue mich auf das Wochenende.') +
  PRACTICE('Add the reflexive pronoun.',
    'Du musst ___ beeilen.\nWir treffen ___ vor dem Kino.\nIch putze ___ die Zähne.\nInteressierst du ___ für Fußball?\nSie (they) erinnern ___ an den Urlaub.',
    'Du musst dich beeilen.\nWir treffen uns vor dem Kino.\nIch putze mir die Zähne.\nInteressierst du dich für Fußball?\nSie erinnern sich an den Urlaub.')
},
{
  level: 'A2', id: 'a2-adjektiv', title: 'Adjective endings', de: 'Adjektivdeklination',
  summary: 'Adjectives before a noun take endings. Three patterns, depending on the article.',
  body:
  '<p>After <em>sein</em>, adjectives have no ending: <span class="de">Das Auto ist neu.</span> Before a noun they take an ending: <span class="de">das neue Auto</span>. The ending depends on the article in front.</p>' +
  '<h2>After der, die, das (definite)</h2>' +
  TBL('Case | masculine | feminine | neuter | plural\nNom. | der neue Tisch | die neue Lampe | das neue Bett | die neuen Stühle\nAkk. | den neuen Tisch | die neue Lampe | das neue Bett | die neuen Stühle\nDat. | dem neuen Tisch | der neuen Lampe | dem neuen Bett | den neuen Stühlen') +
  '<p>Simple rule: <strong>-e</strong> in the five "basic" forms (nominative singular, plus accusative feminine and neuter), and <strong>-en</strong> everywhere else.</p>' +
  '<h2>After ein, kein, mein (indefinite)</h2>' +
  TBL('Case | masculine | feminine | neuter | plural (keine)\nNom. | ein neuer Tisch | eine neue Lampe | ein neues Bett | keine neuen Stühle\nAkk. | einen neuen Tisch | eine neue Lampe | ein neues Bett | keine neuen Stühle\nDat. | einem neuen Tisch | einer neuen Lampe | einem neuen Bett | keinen neuen Stühlen') +
  '<p>Where <em>ein</em> has no ending (masculine nominative, neuter nominative and accusative), the adjective "shows" the gender: <span class="de">ein neuer, ein neues</span>.</p>' +
  '<h2>Without an article</h2>' +
  '<p>The adjective takes the ending the definite article would have: <span class="de">guter Wein (der), frische Milch (die), kaltes Wasser (das), mit kaltem Wasser (dem)</span>.</p>' +
  MISTAKE('ein großes Haus? ein großer Haus?', 'ein großes Haus', 'Neuter, so the adjective takes the -s of <em>das</em>.') +
  PRACTICE('Add the adjective ending.',
    'Ich kaufe einen neu___ Computer.\nDas ist ein schön___ Bild.\nWir wohnen in der klein___ Wohnung.\nSie trinkt heiß___ Tee.\nMit dem alt___ Auto fahren wir nicht mehr.',
    'einen neuen Computer\nein schönes Bild\nin der kleinen Wohnung\nheißen Tee (der Tee, accusative)\nmit dem alten Auto')
},
{
  level: 'A2', id: 'a2-praeteritum-basis', title: 'Past tense of sein, haben and modal verbs', de: 'Präteritum: sein, haben, Modalverben',
  summary: 'Even in speech, Germans say war, hatte, konnte and musste rather than the Perfekt.',
  body:
  '<p>For most verbs, spoken German uses the Perfekt. But for <strong>sein, haben and the modal verbs</strong>, the simple past (Präteritum) is normal in speech too, because it is shorter.</p>' +
  TBL('Person | sein | haben | können | müssen | wollen | dürfen\nich | war | hatte | konnte | musste | wollte | durfte\ndu | warst | hattest | konntest | musstest | wolltest | durftest\ner / sie / es | war | hatte | konnte | musste | wollte | durfte\nwir | waren | hatten | konnten | mussten | wollten | durften\nihr | wart | hattet | konntet | musstet | wolltet | durftet\nsie / Sie | waren | hatten | konnten | mussten | wollten | durften') +
  '<p>As with modal verbs in the present, <em>ich</em> and <em>er/sie/es</em> have the same form. Modal verbs lose their umlaut in the past: <span class="de">können → konnte</span>.</p>' +
  EX('Gestern war ich sehr müde. | Yesterday I was very tired.\nWir hatten keine Zeit. | We had no time.\nIch konnte nicht schlafen. | I couldn\'t sleep.\nEr musste lange warten. | He had to wait a long time.') +
  MISTAKE('Ich habe gestern müde gewesen.', 'Ich war gestern müde.') +
  PRACTICE('Put into the Präteritum.',
    'Ich bin in Berlin.\nSie hat Kopfschmerzen.\nWir müssen früh aufstehen.\nKannst du das lesen?\nIhr seid nicht da.',
    'Ich war in Berlin.\nSie hatte Kopfschmerzen.\nWir mussten früh aufstehen.\nKonntest du das lesen?\nIhr wart nicht da.')
},
{
  level: 'A2', id: 'a2-hoeflich', title: 'Polite requests with würde, könnte, hätte', de: 'Höfliche Bitten mit dem Konjunktiv II',
  summary: 'Könnten Sie …? Ich hätte gern … Ich würde gern …: the polite forms you need every day.',
  body:
  '<p>German uses the <strong>Konjunktiv II</strong> to make requests and wishes sound polite. At A2 you only need a few fixed forms.</p>' +
  TBL('Form | Use | Example\nKönnten Sie / Könntest du …? | polite request | Könnten Sie mir bitte helfen?\nWürden Sie / Würdest du …? | polite request | Würden Sie bitte das Fenster schließen?\nIch hätte gern … | ordering, asking for something | Ich hätte gern ein Stück Kuchen.\nIch würde gern … | wish | Ich würde gern nach Japan reisen.\nIch möchte … | wish, order | Ich möchte einen Termin.\nDu solltest … | advice | Du solltest mehr schlafen.') +
  EX('Könnten Sie das bitte wiederholen? | Could you repeat that, please?\nWir hätten gern die Rechnung. | We would like the bill.\nAn deiner Stelle würde ich zum Arzt gehen. | If I were you, I would go to the doctor.') +
  NOTE('The verb after <em>würde, könnte, sollte</em> goes to the end in the infinitive, just like with modal verbs.') +
  '<h2>On the phone</h2>' +
  '<p>Phone calls to offices, doctors or landlords sound much better with the Konjunktiv II. Useful phrases:</p>' +
  EX('Könnte ich bitte mit Frau Weber sprechen? | Could I speak to Ms Weber, please?\nIch hätte eine Frage zu meiner Rechnung. | I have a question about my bill.\nKönnten Sie das bitte buchstabieren? | Could you spell that, please?\nWürden Sie bitte etwas langsamer sprechen? | Would you speak a little more slowly, please?\nHabe ich Sie richtig verstanden, dass …? | Did I understand correctly that …?\nVielen Dank für Ihre Hilfe, Frau Weber. Auf Wiederhören! | Thank you for your help, Ms Weber. Goodbye! (on the phone)') +
  MISTAKE('Ich will ein Bier. (at a restaurant)', 'Ich hätte gern ein Bier. / Ich möchte ein Bier.', '<em>wollen</em> sounds demanding in requests.') +
  PRACTICE('Make these sentences polite.',
    'Helfen Sie mir!\nGib mir das Salz!\nIch will einen Kaffee.\nSchlaf mehr! (advice)\nIch will gern Spanisch lernen. (wish)',
    'Könnten Sie mir bitte helfen?\nKönntest du mir bitte das Salz geben?\nIch hätte gern einen Kaffee.\nDu solltest mehr schlafen.\nIch würde gern Spanisch lernen.')
}
);
