GRAMMAR.push(
{
  level: 'C2', id: 'c2-register', title: 'Register and style', de: 'Register und Stilebenen',
  summary: 'From salopp to gehoben: choosing words and structures that fit the situation.',
  body:
  '<p>At C2 the question is no longer whether a sentence is correct, but whether it fits. German distinguishes several <strong>style levels</strong>, and dictionaries mark them (ugs., salopp, gehoben, bildungssprachlich, Amtssprache).</p>' +
  TBL('Register | Typical features | Example\nsalopp / umgangssprachlich | short forms, particles, slang | Hast du \'ne Ahnung, wo der Typ hin ist?\nneutral / standard | everyday correct German | Weißt du, wohin er gegangen ist?\ngehoben / bildungssprachlich | Latin-based words, Konjunktiv, Genitiv | Ist Ihnen bekannt, wohin er sich begeben hat?\nAmtsdeutsch | nominal chains, passive, fixed formulas | Über den Verbleib der Person liegen keine Erkenntnisse vor.') +
  '<h2>Word pairs across registers</h2>' +
  TBL('umgangssprachlich | neutral | gehoben\nkapieren | verstehen | begreifen, nachvollziehen\nkriegen | bekommen | erhalten\nabhauen | weggehen | sich entfernen\nquatschen | reden | sich unterhalten, konversieren\nmies | schlecht | dürftig, mangelhaft\nkriegen wir hin | schaffen wir | ist zu bewältigen') +
  NOTE('The genitive and the Konjunktiv I signal a high register; <em>wegen + Dativ</em> and <em>würde</em> everywhere signal a casual one. Mixing them unintentionally sounds odd, but mixing them on purpose can be witty.') +
  PRACTICE('Rewrite in a neutral or formal register.',
    'Ich hab\'s echt nicht kapiert.\nDer Chef hat total rumgemeckert.\nWir kriegen das schon hin.\nDas Essen war ziemlich mies.',
    'Ich habe es wirklich nicht verstanden. / Ich konnte es nicht nachvollziehen.\nDer Vorgesetzte hat sich sehr kritisch geäußert.\nWir werden das bewältigen.\nDas Essen war von dürftiger Qualität.')
},
{
  level: 'C2', id: 'c2-redewendungen', title: 'Idioms and fixed expressions', de: 'Redewendungen',
  summary: 'Tomaten auf den Augen haben, den Nagel auf den Kopf treffen: idioms that native speakers use every day.',
  body:
  '<p>Idioms carry cultural images. Their meaning cannot be guessed from the words, so learn them with an example and the right situation.</p>' +
  TBL('Redewendung | Meaning | Example\nden Nagel auf den Kopf treffen | hit the nail on the head | Mit deiner Analyse hast du den Nagel auf den Kopf getroffen.\nTomaten auf den Augen haben | not see the obvious | Hast du Tomaten auf den Augen? Das Schild ist doch riesig!\nauf dem Holzweg sein | be on the wrong track | Mit dieser Vermutung bist du auf dem Holzweg.\njemandem auf den Keks gehen | get on someone\'s nerves | Der Lärm geht mir auf den Keks.\ndie Daumen drücken | keep one\'s fingers crossed | Ich drücke dir für die Prüfung die Daumen.\nins Fettnäpfchen treten | put one\'s foot in it | Mit der Frage nach ihrem Alter bin ich ins Fettnäpfchen getreten.\nsich kein Blatt vor den Mund nehmen | not mince one\'s words | Sie nimmt sich nie ein Blatt vor den Mund.\netwas auf die lange Bank schieben | put something off | Schieb die Steuererklärung nicht auf die lange Bank!\nzwei Fliegen mit einer Klappe schlagen | kill two birds with one stone | Ich fahre mit dem Rad zur Arbeit und schlage zwei Fliegen mit einer Klappe.\nunter vier Augen | in private | Können wir das unter vier Augen besprechen?\nes ist nicht mein Bier | it\'s not my problem | Wie er das löst, ist nicht mein Bier.\nim Eimer sein | be broken, ruined | Mein Laptop ist im Eimer.\nwie die Faust aufs Auge passen | clash completely (or, ironically, fit perfectly) | Die Farben passen wie die Faust aufs Auge.\ndie Katze im Sack kaufen | buy a pig in a poke | Ohne Probefahrt kaufst du die Katze im Sack.\nHals- und Beinbruch! | break a leg | Hals- und Beinbruch für deinen Auftritt!') +
  NOTE('Idioms are mostly informal. In academic writing, use them rarely and only when the register allows it.') +
  PRACTICE('Which idiom fits?',
    'Du siehst nicht, dass der Schlüssel direkt vor dir liegt.\nEr erledigt seine Aufgaben nie rechtzeitig.\nSie sagt immer direkt, was sie denkt.\nDu wünschst jemandem Glück für ein Vorstellungsgespräch.',
    'Du hast wohl Tomaten auf den Augen!\nEr schiebt alles auf die lange Bank.\nSie nimmt sich kein Blatt vor den Mund.\nIch drücke dir die Daumen!')
},
{
  level: 'C2', id: 'c2-wortbildung', title: 'Word formation', de: 'Wortbildung',
  summary: 'Prefixes, suffixes and compounds: understanding and building new words.',
  body:
  '<p>German builds new words freely. Knowing the building blocks lets you understand words you have never seen and choose the most precise one.</p>' +
  '<h2>Suffixes and what they do</h2>' +
  TBL('Suffix | Creates | Examples\n-ung, -heit, -keit, -schaft | abstract nouns (die) | Bildung, Freiheit, Möglichkeit, Gesellschaft\n-er, -ler, -ling | people, tools (der) | Lehrer, Sportler, Flüchtling, Bohrer\n-bar | can be done (passive) | lesbar, machbar, unverzichtbar\n-lich, -ig, -isch | adjectives | freundlich, wichtig, praktisch\n-los, -frei, -arm | without, low in | arbeitslos, zuckerfrei, fettarm\n-haft | having the quality of | vorbildhaft, fehlerhaft\n-weise | adverbs of manner | glücklicherweise, schrittweise') +
  '<h2>Prefixes on adjectives and nouns</h2>' +
  TBL('Prefix | Meaning | Examples\nun- | negation | unklar, Unruhe\nmiss- | wrongly, badly | Missverständnis, misstrauisch\nur- | original, very old | Urwald, uralt, Ursprung\nerz- | arch-, extremely | Erzfeind, erzkonservativ\nhoch-, tief-, grund- | intensifiers | hochinteressant, tiefgreifend, grundfalsch') +
  '<h2>Compounds</h2>' +
  '<p>The <strong>last element</strong> determines the gender and the core meaning; the others specify it. Linking elements <em>-s-, -n-, -es-</em> are common: <span class="de">Arbeit-s-markt, Sonne-n-schein, Tag-es-zeit</span>.</p>' +
  PRACTICE('Form the word.',
    'kann nicht vermieden werden (adjective)\neine Person, die flüchtet (noun)\nohne Rücksicht (adjective)\nnicht verstanden, falsch verstanden (noun with miss-)',
    'unvermeidbar / unvermeidlich\nder Flüchtling\nrücksichtslos\ndas Missverständnis')
},
{
  level: 'C2', id: 'c2-praefixverben', title: 'Verbs with separable and inseparable prefixes', de: 'Doppelförmige Verben: durch-, über-, um-, unter-, wieder-',
  summary: 'übersetzen and übersetzen, umfahren and umfahren: the same spelling with two meanings.',
  body:
  '<p>Some prefixes can be separable (stressed) or inseparable (unstressed). The two versions usually differ in meaning: the separable one is literal, the inseparable one is figurative.</p>' +
  TBL('Verb | Separable (stressed prefix) | Inseparable (stressed stem)\nübersetzen | ÜBERsetzen: ferry across. Er setzte uns über. | überSETZen: translate. Sie übersetzte den Text.\numfahren | UMfahren: knock down. Er hat das Schild umgefahren. | umFAHRen: drive around. Wir haben den Stau umfahren.\ndurchschauen | DURCHschauen: look through. Schau mal durch! | durchSCHAUen: see through (someone). Ich habe ihn durchschaut.\nunterhalten | UNTERhalten: hold underneath. Halt die Schüssel unter! | unterHALten: entertain; converse. Wir haben uns gut unterhalten.\nwiederholen | WIEDERholen: fetch back. Er holte das Buch wieder. | wiederHOLen: repeat. Bitte wiederholen Sie!\numgehen | UMgehen mit: deal with. Sie geht gut mit Kritik um. | umGEHen: avoid, bypass. Er umgeht das Problem.\nübergehen | ÜBERgehen zu: move on to. Wir gehen zum nächsten Punkt über. | überGEHen: ignore, pass over. Man hat ihn bei der Beförderung übergangen.') +
  NOTE('The Partizip II shows the type: separable verbs take <em>-ge-</em> (umgefahren, übergesetzt), inseparable ones do not (umfahren, übersetzt).') +
  PRACTICE('Separable or inseparable? Write the Perfekt.',
    'Sie (übersetzen) das Buch ins Deutsche.\nDer LKW (umfahren) die Laterne.\nWir (umfahren) die Innenstadt.\nIch (durchschauen) seinen Trick sofort.',
    'Sie hat das Buch ins Deutsche übersetzt.\nDer LKW hat die Laterne umgefahren.\nWir haben die Innenstadt umfahren.\nIch habe seinen Trick sofort durchschaut.')
},
{
  level: 'C2', id: 'c2-satzklammer', title: 'Sentence bracket and the end field', de: 'Satzklammer und Ausklammerung',
  summary: 'What may follow the final verb, and how word order creates emphasis.',
  body:
  '<p>German main clauses form a bracket: the conjugated verb in position 2 and the rest of the verb at the end. Everything in between is the middle field. Material placed <strong>after</strong> the closing bracket (the <em>Nachfeld</em>) is called Ausklammerung.</p>' +
  TBL('Vorfeld | left bracket | Mittelfeld | right bracket | Nachfeld\nIch | habe | gestern mit meiner Freundin | telefoniert | —\nIch | habe | gestern | telefoniert | mit meiner Freundin.\nEr | hat | nicht | gewusst | , dass sie kommt.') +
  '<h2>What goes into the Nachfeld?</h2>' +
  '<p>Subordinate clauses and infinitive clauses go there as a rule. Comparisons with <em>als/wie</em> very often: <span class="de">Er ist schneller gelaufen als alle anderen.</span> In speech, long prepositional phrases are often moved out for clarity: <span class="de">Wir haben lange diskutiert über die neuen Regeln.</span> In formal writing, keep prepositional phrases inside the bracket.</p>' +
  '<h2>Emphasis through the Vorfeld</h2>' +
  '<p>Position 1 is a stylistic tool. Putting an object or adverbial there gives it emphasis or links it to the previous sentence: <span class="de">Diesen Fehler werde ich nicht noch einmal machen. Gerade deshalb ist die Frage so wichtig.</span></p>' +
  NOTE('In the middle field, given information comes before new information, and pronouns come before nouns: <span class="de">Ich habe es ihm gestern gegeben</span> vs. <span class="de">Ich habe dem Kind gestern das Buch gegeben.</span>') +
  PRACTICE('Improve the style by moving one element.',
    'Ich habe gestern, weil ich krank war, nicht gearbeitet.\nEr hat mehr Geld, als er braucht, verdient.\nIch werde den Fehler nicht wieder machen. (emphasise den Fehler)',
    'Ich habe gestern nicht gearbeitet, weil ich krank war.\nEr hat mehr Geld verdient, als er braucht.\nDiesen Fehler werde ich nicht wieder machen.')
},
{
  level: 'C2', id: 'c2-konzessiv', title: 'Refined concession and contrast', de: 'Konzessive Strukturen',
  summary: 'wenngleich, so … auch, mag … auch, wie dem auch sei: conceding a point elegantly.',
  body:
  '<p>Beyond <em>obwohl</em> and <em>trotzdem</em>, written German has a range of concessive structures that let you acknowledge a point before contradicting it.</p>' +
  TBL('Structure | Example | Register\nwenngleich / obgleich / obschon | Wenngleich die Studie klein ist, sind die Ergebnisse aussagekräftig. | formal\nso + adj. + auch | So schwierig die Lage auch ist, wir geben nicht auf. | formal, emphatic\nmag … auch | Mag das Projekt auch teuer sein, es lohnt sich. | elevated\nwie / was / wer … auch (immer) | Was auch immer passiert, ich bin für dich da. | neutral\nzwar …, doch / jedoch | Zwar ist der Plan ambitioniert, doch er ist umsetzbar. | neutral\nungeachtet + Gen. | Ungeachtet der Kritik hielt sie an ihrem Plan fest. | formal\nwie dem auch sei | Wie dem auch sei, wir müssen eine Entscheidung treffen. | set phrase') +
  '<p>With <em>so … auch</em> and <em>mag … auch</em>, the main clause keeps normal word order (subject first), not the inverted order you would expect after a subordinate clause: <span class="de">So sehr ich mich bemühe, ich schaffe es nicht.</span></p>' +
  PRACTICE('Rewrite with the structure in brackets.',
    'Obwohl die Aufgabe schwierig ist, lösen wir sie. (so … auch)\nTrotz der Warnungen fuhren sie los. (ungeachtet)\nEgal, was du sagst, ich glaube dir nicht. (was … auch)\nDas Argument ist vielleicht richtig, aber es überzeugt nicht. (mag … auch)',
    'So schwierig die Aufgabe auch ist, wir lösen sie.\nUngeachtet der Warnungen fuhren sie los.\nWas du auch sagst, ich glaube dir nicht.\nMag das Argument auch richtig sein, es überzeugt nicht.')
},
{
  level: 'C2', id: 'c2-redewiedergabe', title: 'Nuances in reported speech', de: 'Redewiedergabe: Nuancen',
  summary: 'Konjunktiv I versus II, reporting verbs and how to signal distance from a claim.',
  body:
  '<p>In reported speech, the choice of mood and verb shows how the writer stands to what is reported. Journalists and academics use this deliberately.</p>' +
  TBL('Choice | Effect | Example\nKonjunktiv I | neutral report | Der Sprecher sagte, die Firma sei profitabel.\nKonjunktiv II (where KI is possible) | doubt, distance | Der Sprecher sagte, die Firma wäre profitabel.\nIndikativ | the writer accepts it as fact | Der Sprecher bestätigte, dass die Firma profitabel ist.\nsollen | hearsay | Die Firma soll profitabel sein.\nwollen | the subject\'s own, doubtful claim | Er will nichts davon gewusst haben.') +
  '<h2>Reporting verbs</h2>' +
  TBL('Verb | Nuance\nsagen, erklären, mitteilen | neutral\nbetonen, unterstreichen, hervorheben | the speaker stresses it\nbehaupten | the writer doubts it\neinräumen, zugeben | the speaker concedes something\nbestreiten, dementieren | the speaker denies it\nvermuten, annehmen | the speaker is not sure') +
  NOTE('Other markers of distance: <span class="de">angeblich, vermeintlich, laut + Dat., zufolge + Dat. (nachgestellt)</span>: <span class="de">Dem Bericht zufolge …</span>') +
  PRACTICE('Report with the nuance given.',
    'Minister: „Ich wusste nichts davon.“ (writer doubts it)\nFirma: „Wir haben keine Daten verkauft.“ (denial)\nZeugin: „Ich habe den Mann gesehen.“ (neutral)\nGerücht: Der Trainer wird entlassen. (hearsay)',
    'Der Minister behauptet, er habe nichts davon gewusst. / Der Minister will nichts davon gewusst haben.\nDie Firma bestreitet, Daten verkauft zu haben.\nDie Zeugin sagte, sie habe den Mann gesehen.\nDer Trainer soll entlassen werden.')
}
);
