GRAMMAR.push(
{
  level: 'C1', id: 'c1-nominalstil', title: 'Nominal and verbal style', de: 'Nominalstil und Verbalstil',
  summary: 'Switching between compact academic nouns and readable verb clauses, in both directions.',
  body:
  '<p>Academic, legal and administrative German prefers the <strong>nominal style</strong>: information is packed into noun phrases with prepositions and genitives. Good writers can switch both ways: nominal for compactness, verbal for readability.</p>' +
  TBL('Relation | Verbal (clause) | Nominal (phrase)\ntime | Nachdem die Daten erhoben worden waren, … | Nach der Erhebung der Daten …\ntime | Während die Studie durchgeführt wurde, … | Während der Durchführung der Studie …\nreason | Weil die Kosten gestiegen sind, … | Aufgrund des Kostenanstiegs …\nconcession | Obwohl die Ergebnisse eindeutig sind, … | Trotz der eindeutigen Ergebnisse …\ncondition | Wenn man die Regeln nicht beachtet, … | Bei Nichtbeachtung der Regeln …\npurpose | Um die Qualität zu verbessern, … | Zur Verbesserung der Qualität …\nmeans | Indem man Prozesse digitalisiert, … | Durch die Digitalisierung von Prozessen …') +
  '<h2>Rules for the conversion</h2>' +
  '<p>The subject of an intransitive verb, or the object of a transitive one, becomes a <strong>genitive</strong>: <span class="de">die Preise steigen → der Anstieg der Preise; man erhebt Daten → die Erhebung der Daten</span>. The agent becomes <strong>durch + Akk.</strong> or <strong>seitens + Gen.</strong>. Adverbs become adjectives: <span class="de">erheblich steigen → der erhebliche Anstieg</span>.</p>' +
  NOTE('Avoid chains of more than two genitives; they make texts hard to read. If a sentence needs three nouns in a row, switch one part back to a verb clause.') +
  PRACTICE('Convert to nominal style.',
    'Weil die Nachfrage stark gesunken ist, wurde die Produktion eingestellt.\nNachdem das Gesetz verabschiedet worden war, protestierten viele.\nUm Missverständnisse zu vermeiden, …\nWenn man die Frist überschreitet, …',
    'Aufgrund des starken Rückgangs der Nachfrage wurde die Produktion eingestellt.\nNach der Verabschiedung des Gesetzes protestierten viele.\nZur Vermeidung von Missverständnissen …\nBei Überschreitung der Frist …')
},
{
  level: 'C1', id: 'c1-nvv', title: 'Noun-verb combinations', de: 'Nomen-Verb-Verbindungen',
  summary: 'eine Entscheidung treffen, zur Verfügung stellen, in Frage kommen: fixed phrases of formal German.',
  body:
  '<p>Noun-verb combinations (Funktionsverbgefüge) are fixed pairs in which the noun carries the meaning and the verb is almost empty. They sound formal and precise, and many simply have to be learned as units.</p>' +
  TBL('Combination | Meaning | Simple verb\neine Entscheidung treffen | make a decision | entscheiden\nzur Verfügung stellen / stehen | make / be available | bereitstellen\nin Frage kommen | be an option | möglich sein\nzum Ausdruck bringen | express | ausdrücken\nin Anspruch nehmen | make use of; take up | nutzen\nKritik üben (an) | criticise | kritisieren\nin Kraft treten | come into force | gültig werden\nzur Sprache bringen | raise (a topic) | ansprechen\nAbschied nehmen | say goodbye | sich verabschieden\nin Betracht ziehen | consider | erwägen\nBezug nehmen (auf) | refer to | sich beziehen\neine Rolle spielen | play a role | wichtig sein\nzu Ende bringen | complete | beenden\nunter Druck setzen / stehen | put / be under pressure | drängen') +
  '<h2>Passive meaning</h2>' +
  '<p>Some combinations with <em>finden, erfahren, kommen, gelangen</em> have a passive meaning: <span class="de">Das Projekt findet Anerkennung</span> (= wird anerkannt). <span class="de">Der Vorschlag kam zur Abstimmung</span> (= wurde abgestimmt).</p>' +
  PRACTICE('Replace the verb with a noun-verb combination.',
    'Wir müssen bald entscheiden.\nDie Firma stellt Laptops bereit.\nDas neue Gesetz gilt ab Januar.\nEr kritisierte den Plan scharf.\nWir sollten diese Option erwägen.',
    'Wir müssen bald eine Entscheidung treffen.\nDie Firma stellt Laptops zur Verfügung.\nDas neue Gesetz tritt im Januar in Kraft.\nEr übte scharfe Kritik an dem Plan.\nWir sollten diese Option in Betracht ziehen.')
},
{
  level: 'C1', id: 'c1-subjektive-modalverben', title: 'Modal verbs for probability and hearsay', de: 'Subjektiver Gebrauch der Modalverben',
  summary: 'Er muss krank sein, sie soll reich sein, er will es gewusst haben: how sure the speaker is.',
  body:
  '<p>Modal verbs do not only express obligation or ability. In their <strong>subjective</strong> use they show how certain the speaker is, or where a claim comes from.</p>' +
  TBL('Modal verb | Meaning | Example\nmuss | almost certain (≈ 90 %) | Er muss krank sein. Er fehlt nie.\ndürfte | probable (≈ 75 %) | Das dürfte der Grund sein.\nkann / könnte | possible (≈ 50 %) | Sie könnte im Stau stehen.\nmag | concession: may well be | Das mag stimmen, aber …\nkann nicht | almost certainly not | Das kann nicht sein.\nsoll | others say so (hearsay) | Der Film soll sehr gut sein.\nwill | the subject claims it, the speaker doubts | Er will nichts gesehen haben.') +
  '<h2>Referring to the past</h2>' +
  '<p>Use the modal verb in the present + <strong>Partizip II + haben/sein</strong> (infinitive perfect): <span class="de">Er muss den Zug verpasst haben. Sie soll schon abgereist sein.</span></p>' +
  NOTE('Compare: <span class="de">Er musste arbeiten</span> (he had to work, objective) vs. <span class="de">Er muss gearbeitet haben</span> (he must have worked, conclusion).') +
  PRACTICE('Rewrite with a modal verb.',
    'Wahrscheinlich ist sie schon zu Hause. (dürfte)\nMan sagt, das Restaurant ist ausgezeichnet. (soll)\nEr behauptet, dass er das Geld zurückgezahlt hat. (will)\nIch bin sicher, dass er den Termin vergessen hat. (muss)',
    'Sie dürfte schon zu Hause sein.\nDas Restaurant soll ausgezeichnet sein.\nEr will das Geld zurückgezahlt haben.\nEr muss den Termin vergessen haben.')
},
{
  level: 'C1', id: 'c1-partizipialattribute', title: 'Extended participle attributes', de: 'Erweiterte Partizipialattribute',
  summary: 'die im letzten Jahr veröffentlichte Studie: long phrases before the noun, and how to read them.',
  body:
  '<p>Academic and journalistic German often puts a whole relative clause <strong>between the article and the noun</strong>, built around a participle. Reading them is a key C1 skill.</p>' +
  TBL('Relative clause | Extended attribute\ndie Studie, die im letzten Jahr veröffentlicht wurde | die im letzten Jahr veröffentlichte Studie\ndie Preise, die seit Monaten steigen | die seit Monaten steigenden Preise\nein Problem, das schwer zu lösen ist | ein schwer zu lösendes Problem (zu + Partizip I = must/can be)') +
  '<h2>How to read them</h2>' +
  '<ol><li>Find the article (<em>die</em>) and jump to its noun (<em>Studie</em>).</li><li>Find the participle right before the noun (<em>veröffentlichte</em>).</li><li>Read everything in between as a relative clause: "the study that was published last year".</li></ol>' +
  EX('Die von der Regierung beschlossenen Maßnahmen reichen nicht aus. | The measures decided by the government are not sufficient.\nDer seit Jahren anhaltende Fachkräftemangel betrifft alle Branchen. | The skills shortage that has persisted for years affects all sectors.\nDie bis Freitag einzureichenden Unterlagen … | The documents that must be submitted by Friday …') +
  NOTE('Partizip I = active and simultaneous; Partizip II = passive or completed; zu + Partizip I = necessity or possibility.') +
  PRACTICE('Turn into an extended attribute.',
    'die Mitarbeiter, die im Homeoffice arbeiten\ndie Daten, die im Jahr 2024 erhoben wurden\neine Aufgabe, die kaum zu bewältigen ist\nder Zug, der aus Berlin kommt',
    'die im Homeoffice arbeitenden Mitarbeiter\ndie im Jahr 2024 erhobenen Daten\neine kaum zu bewältigende Aufgabe\nder aus Berlin kommende Zug')
},
{
  level: 'C1', id: 'c1-passiv-komplex', title: 'The passive in complex sentences', de: 'Das Passiv in allen Formen',
  summary: 'Passive with modal verbs in the past, in subordinate clauses and in the Konjunktiv.',
  body:
  '<p>At C1 you need the passive in every combination, especially with modal verbs and in subordinate clauses.</p>' +
  TBL('Form | Main clause | Subordinate clause\nPräsens + Modalverb | Das muss geprüft werden. | …, dass das geprüft werden muss.\nPräteritum + Modalverb | Das musste geprüft werden. | …, dass das geprüft werden musste.\nPerfekt + Modalverb | Das hat geprüft werden müssen. | …, dass das hat geprüft werden müssen.\nKonjunktiv II Vergangenheit | Das hätte geprüft werden müssen. | …, dass das hätte geprüft werden müssen.\nKonjunktiv I (reported) | Es heißt, das werde geprüft / sei geprüft worden. | —\nInfinitiv Perfekt Passiv | Das muss übersehen worden sein. (conclusion) | …, dass das übersehen worden sein muss.') +
  '<p>Note the word order with a double infinitive in a subordinate clause: the auxiliary (<em>hat, hätte</em>) comes <strong>before</strong> the infinitives, not at the very end.</p>' +
  EX('Der Fehler hätte früher entdeckt werden müssen. | The error should have been discovered earlier.\nEs wird berichtet, dass das Gebäude hätte evakuiert werden sollen. | It is reported that the building should have been evacuated.\nDer Brief muss verloren gegangen sein. | The letter must have got lost.') +
  PRACTICE('Make passive sentences.',
    'Man hätte das Problem früher lösen müssen.\nIch glaube, dass man den Antrag ablehnen wird.\nMan hat den Termin verschieben müssen.\n(subordinate) Er sagt, dass man die Rechnung hätte bezahlen sollen.',
    'Das Problem hätte früher gelöst werden müssen.\nIch glaube, dass der Antrag abgelehnt werden wird.\nDer Termin hat verschoben werden müssen.\nEr sagt, dass die Rechnung hätte bezahlt werden sollen.')
},
{
  level: 'C1', id: 'c1-konnektoren', title: 'Connectors for argumentation', de: 'Konnektoren in der Argumentation',
  summary: 'folglich, hingegen, demnach, insofern, wohingegen, zumal: structuring an argument precisely.',
  body:
  '<p>Precise connectors are the backbone of a good C1 essay or presentation. Watch the word order: adverbs take position 1 (verb follows), subordinating conjunctions send the verb to the end.</p>' +
  TBL('Function | Adverb (pos. 1) | Subordinating\nconsequence | folglich, demzufolge, somit, infolgedessen | sodass, so … dass\ncontrast | hingegen, dagegen, jedoch, allerdings | wohingegen, während\nconcession | dennoch, nichtsdestotrotz, gleichwohl | obgleich, wenngleich, auch wenn\nreason / addition | zudem, darüber hinaus, ferner | zumal, da\nrestriction | insofern, allerdings | insofern als, soweit\nconclusion | demnach, letztlich, alles in allem | —\ncondition | andernfalls, sonst | sofern, falls, vorausgesetzt, dass') +
  EX('Die Mieten steigen stark. Folglich ziehen viele Familien aufs Land. | Rents are rising sharply. As a result, many families move to the countryside.\nIn Städten gibt es viele Jobs, wohingegen die Wohnkosten dort hoch sind. | Cities have many jobs, whereas housing costs there are high.\nDas Angebot ist attraktiv, zumal die Bezahlung gut ist. | The offer is attractive, especially as the pay is good.') +
  NOTE('<strong>jedoch</strong> and <strong>allerdings</strong> can also stand in the middle of a clause: <span class="de">Das Projekt war jedoch teurer als geplant.</span>') +
  PRACTICE('Connect with the word in brackets.',
    'Die Daten sind unvollständig. Die Ergebnisse sind vorläufig. (somit)\nIm Norden regnet es viel. Im Süden ist es trocken. (wohingegen)\nIch komme gern mit. Ich habe ohnehin frei. (zumal)\nDie Studie ist klein. Sie liefert wichtige Hinweise. (dennoch)',
    'Die Daten sind unvollständig. Somit sind die Ergebnisse vorläufig.\nIm Norden regnet es viel, wohingegen es im Süden trocken ist.\nIch komme gern mit, zumal ich ohnehin frei habe.\nDie Studie ist klein. Dennoch liefert sie wichtige Hinweise.')
},
{
  level: 'C1', id: 'c1-es', title: 'The many uses of es', de: 'Das Wort es',
  summary: 'es as pronoun, placeholder, correlate and impersonal subject, and when it disappears.',
  body:
  '<p><em>es</em> has several functions, and some of them disappear when the word order changes.</p>' +
  TBL('Function | Example | Can it disappear?\npronoun for a neuter noun | Das Buch? Ich habe es gelesen. | no\nimpersonal subject (weather, time, feelings) | Es regnet. Es ist spät. Es geht mir gut. | no\nfixed expressions | es gibt, es handelt sich um, es kommt auf … an | no\nplaceholder in position 1 | Es kamen viele Gäste. | yes: Viele Gäste kamen.\ncorrelate pointing to a clause | Es freut mich, dass du da bist. | yes: Mich freut, dass du da bist.\nimpersonal passive | Es wird hier nicht geraucht. | yes: Hier wird nicht geraucht.') +
  '<p>The <strong>placeholder es</strong> only fills position 1; the verb agrees with the real subject: <span class="de">Es <strong>sind</strong> viele Fehler passiert.</span></p>' +
  NOTE('Many verbs take an obligatory correlate when the clause follows: <span class="de">Ich lehne es ab, …; Ich halte es für wichtig, dass …; Er hat es geschafft, …</span>') +
  PRACTICE('Start the sentence with the underlined part. Does es stay?',
    'Es ist wichtig, <u>dass wir pünktlich sind</u>.\nEs wurde <u>gestern</u> viel diskutiert.\nEs regnet <u>heute</u>.\nEs warteten <u>viele Menschen</u> vor der Tür.',
    'Dass wir pünktlich sind, ist wichtig. (es disappears)\nGestern wurde viel diskutiert. (es disappears)\nHeute regnet es. (es stays)\nViele Menschen warteten vor der Tür. (es disappears)')
},
{
  level: 'C1', id: 'c1-konjunktiv-modal', title: 'Konjunktiv II past with modal verbs', de: 'hätte machen sollen: Konjunktiv II mit Modalverben',
  summary: 'Regret, criticism and missed possibilities, and the special word order of the double infinitive.',
  body:
  '<p>To talk about what <strong>should have, could have</strong> or <strong>would have had to</strong> happen, German uses <strong>hätte + infinitive + modal infinitive</strong>. This is called the double infinitive.</p>' +
  TBL('Meaning | Form | Example\nshould have | hätte … sollen | Du hättest früher anrufen sollen.\ncould have | hätte … können | Wir hätten den Zug noch erreichen können.\nwould have had to | hätte … müssen | Ich hätte länger warten müssen.\nwould have been allowed | hätte … dürfen | Sie hätte das nicht sagen dürfen.') +
  '<h2>Word order in subordinate clauses</h2>' +
  '<p>With a double infinitive, <em>hätte</em> moves <strong>in front of</strong> the infinitive group instead of going to the very end:</p>' +
  EX('Er sagt, dass er früher hätte kommen können. | He says that he could have come earlier.\nIch weiß, dass ich mich besser hätte vorbereiten müssen. | I know that I would have had to prepare better.') +
  NOTE('The same order applies in the Perfekt with modal verbs: <span class="de">…, weil er hat arbeiten müssen.</span>') +
  PRACTICE('Express criticism or regret.',
    'Du hast nicht gelernt. (sollen)\nWir haben das Ticket nicht online gekauft. Das wäre billiger gewesen. (können)\nEr ist zu schnell gefahren. (nicht dürfen)\nIch weiß, dass ich ihm helfen sollte. (past, subordinate clause)',
    'Du hättest lernen sollen.\nWir hätten das Ticket online kaufen können.\nEr hätte nicht so schnell fahren dürfen.\nIch weiß, dass ich ihm hätte helfen sollen.')
}
);
