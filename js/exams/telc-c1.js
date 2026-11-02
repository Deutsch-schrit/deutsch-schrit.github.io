EXAMS['telc-c1'] = {
  id: 'telc-c1', provider: 'telc', level: 'C1', name: 'telc Deutsch C1 Hochschule',
  about: 'The telc C1 exam for university admission. Written exam: Leseverstehen and Sprachbausteine (90 min together), Hörverstehen (about 40 min), Schriftlicher Ausdruck (70 min). Oral exam in pairs after 20 minutes of preparation. 214 points in total.',
  passText: 'You need at least 60 percent in the written exam (100 of 166 points) and 60 percent in the oral exam (29 of 48 points).',
  pass: { type: 'groups', groups: [{ name: 'Schriftliche Prüfung', modules: ['lesen', 'sprachbausteine', 'hoeren', 'schreiben'], min: 0.6 }, { name: 'Mündliche Prüfung', modules: ['sprechen'], min: 0.6 }] },
  rubric: ['Aufgabenerfüllung (Inhalt, Argumentation)', 'Textaufbau und Kohärenz', 'Wortschatz und Ausdruck (Spektrum, Register)', 'Formale Richtigkeit'],
  rubricHelp: 'At telc C1 Hochschule you write an argumentative text (Erörterung) in an academic register, with a clear structure and well-supported arguments.',
  speakRubric: ['Präsentation (Inhalt und Struktur)', 'Zusammenfassung und Anschlussfragen', 'Diskussion (Argumentation, Interaktion)', 'Sprachliche Angemessenheit (Wortschatz, Korrektheit, Aussprache)'],
  modules: [
    {
      id: 'lesen', name: 'Leseverstehen', en: 'Reading', kind: 'items', minutes: 65, points: 48,
      intro: 'Three parts with 24 questions. In the real exam Leseverstehen and Sprachbausteine share 90 minutes.',
      parts: [
        {
          title: 'Teil 1: Textrekonstruktion', instructions: 'Lesen Sie den Text. Welcher Satz (a–h) passt in welche Lücke? Zwei Sätze bleiben übrig.',
          text: `<h3>Mehrsprachigkeit an Hochschulen</h3>
<p>An deutschen Universitäten werden immer mehr Studiengänge vollständig auf Englisch angeboten. (1) ___ Befürworter sehen darin eine notwendige Antwort auf die Internationalisierung der Wissenschaft.</p>
<p>Tatsächlich ziehen englischsprachige Programme Studierende aus aller Welt an. (2) ___ Für eine alternde Gesellschaft wie die deutsche ist das von erheblicher Bedeutung.</p>
<p>Kritiker geben jedoch zu bedenken, dass viele dieser Absolventinnen und Absolventen Deutschland nach dem Studium wieder verlassen. (3) ___ Wer im Studium kaum Deutsch gebraucht hat, findet sich im Arbeitsalltag oder bei Behördengängen oft schwer zurecht.</p>
<p>Hinzu kommt ein grundsätzlicheres Argument. (4) ___ Wenn Fachbegriffe nur noch auf Englisch geprägt werden, verliert die deutsche Wissenschaftssprache an Ausdrucksfähigkeit.</p>
<p>Einige Hochschulen haben darauf reagiert. (5) ___ Andere setzen auf Tandemprogramme, in denen internationale und deutsche Studierende voneinander lernen.</p>
<p>(6) ___ Mehrsprachigkeit wäre dann nicht Problem, sondern Profil der deutschen Hochschulen.</p>`,
          choices: [
            ['a', 'Ein Grund dafür sind fehlende Deutschkenntnisse.'],
            ['b', 'Sprache ist nicht nur ein Werkzeug, sondern prägt auch das Denken in einem Fach.'],
            ['c', 'Ein Teil von ihnen bleibt anschließend als Fachkraft im Land.'],
            ['d', 'Allein in den Masterstudiengängen hat sich ihre Zahl in zehn Jahren verdoppelt.'],
            ['e', 'Sie verpflichten internationale Studierende zu begleitenden Deutschkursen.'],
            ['f', 'Ideal wäre ein Modell, das beide Sprachen gezielt verbindet.'],
            ['g', 'Englisch ist an deutschen Schulen seit Jahrzehnten Pflichtfach.'],
            ['h', 'Die meisten Professorinnen und Professoren lehnen Englisch als Lehrsprache ab.']
          ],
          items: [{ type: 'match', q: 'Lücke 1', a: 'd' }, { type: 'match', q: 'Lücke 2', a: 'c' }, { type: 'match', q: 'Lücke 3', a: 'a' }, { type: 'match', q: 'Lücke 4', a: 'b' }, { type: 'match', q: 'Lücke 5', a: 'e' }, { type: 'match', q: 'Lücke 6', a: 'f' }]
        },
        {
          title: 'Teil 2: Selektives Verstehen', instructions: 'Lesen Sie die Kurztexte A–E zu Studienangeboten. Zu welchem Text passt die Aussage? Wenn keine Angabe passt, wählen Sie x.',
          text: `<p><strong>A) Universität Rostock: Meeresbiologie (M.Sc.)</strong> Forschungsnah, mit Exkursionen an die Ostsee. Zulassung nur zum Wintersemester. Unterrichtssprache Deutsch und Englisch.</p>
<p><strong>B) TU Chemnitz: Digitale Medien (B.A.)</strong> Praxisorientiert, Pflichtpraktikum im 5. Semester. Auch in Teilzeit studierbar.</p>
<p><strong>C) Universität Halle: Agrarökonomie (M.Sc.)</strong> Schwerpunkt ländliche Entwicklung und Ernährungssicherung. Kooperation mit einem Forschungsinstitut, Bewerbung auch zum Sommersemester möglich.</p>
<p><strong>D) Hochschule Mittweida: Soziale Arbeit (B.A.)</strong> Duales Studium mit Praxispartnern, Vergütung während des gesamten Studiums.</p>
<p><strong>E) Universität Leipzig: Germanistik (B.A.)</strong> Breites Angebot an Sprach- und Literaturwissenschaft, Auslandssemester empfohlen.</p>`,
          choices: [['A', 'Text A'], ['B', 'Text B'], ['C', 'Text C'], ['D', 'Text D'], ['E', 'Text E'], ['x', 'Keine Angabe']],
          items: [
            { type: 'match', q: 'Man verdient während des Studiums Geld.', a: 'D' },
            { type: 'match', q: 'Man kann neben dem Beruf mit reduzierter Stundenzahl studieren.', a: 'B' },
            { type: 'match', q: 'Ein Studienbeginn im Frühjahr ist möglich.', a: 'C' },
            { type: 'match', q: 'Ein Teil des Unterrichts findet auf Englisch statt.', a: 'A' },
            { type: 'match', q: 'Ein Aufenthalt an einer ausländischen Universität wird nahegelegt.', a: 'E' },
            { type: 'match', q: 'Das Studium ist kostenpflichtig.', a: 'x' }
          ]
        },
        {
          title: 'Teil 3: Detail- und Globalverstehen', instructions: 'Lesen Sie den Text. Sind die Aussagen richtig, falsch oder steht dazu nichts im Text? Wählen Sie am Ende die beste Überschrift.',
          text: `<p>Lange galt Prüfungsangst als individuelles Problem schwacher Studierender. Neuere Untersuchungen zeichnen ein anderes Bild: Betroffen sind keineswegs nur Studierende mit Wissenslücken, sondern häufig gerade leistungsstarke, die besonders hohe Erwartungen an sich stellen. Eine Befragung an zwölf Hochschulen ergab, dass etwa ein Fünftel der Studierenden unter starker Prüfungsangst leidet, Frauen etwas häufiger als Männer.</p>
<p>Die Folgen reichen über schlechte Noten hinaus. Wer wiederholt Prüfungen aufschiebt, verlängert sein Studium und riskiert, finanzielle Unterstützung zu verlieren. In einzelnen Fällen führt die Angst sogar zum Studienabbruch.</p>
<p>Die Hochschulen reagieren unterschiedlich. Manche bieten Workshops zur Stressbewältigung an, andere haben psychologische Beratungsstellen ausgebaut. Allerdings sind die Wartezeiten dort oft lang, an einigen Universitäten mehrere Wochen.</p>
<p>Fachleute plädieren deshalb dafür, auch die Prüfungskultur selbst zu überdenken. Formen wie Portfolios oder Projektarbeiten, die Leistung über einen längeren Zeitraum erfassen, könnten den Druck einzelner Prüfungstage verringern. Ob sie die klassische Klausur ersetzen sollten, ist unter Lehrenden jedoch umstritten.</p>`,
          items: [
            { type: 'rfn', q: 'Prüfungsangst betrifft vor allem Studierende mit großen Wissenslücken.', a: 'f' },
            { type: 'rfn', q: 'Studierende mit hohen Ansprüchen an sich selbst sind häufig betroffen.', a: 'r' },
            { type: 'rfn', q: 'Etwa 20 Prozent der Befragten leiden stark unter Prüfungsangst.', a: 'r' },
            { type: 'rfn', q: 'Männer sind häufiger betroffen als Frauen.', a: 'f' },
            { type: 'rfn', q: 'Prüfungsangst kann die Studiendauer verlängern.', a: 'r' },
            { type: 'rfn', q: 'Die meisten Betroffenen brechen ihr Studium ab.', a: 'f' },
            { type: 'rfn', q: 'Alle Hochschulen bieten Workshops zur Stressbewältigung an.', a: 'f' },
            { type: 'rfn', q: 'Die psychologischen Beratungsstellen sind gut ausgestattet und haben keine Wartezeiten.', a: 'f' },
            { type: 'rfn', q: 'Die Befragung wurde von einer Krankenkasse finanziert.', a: 'n' },
            { type: 'rfn', q: 'Alternative Prüfungsformen könnten den Druck verringern.', a: 'r' },
            { type: 'rfn', q: 'Alle Lehrenden wollen die Klausur abschaffen.', a: 'f' },
            { type: 'mc', q: 'Welche Überschrift passt am besten?', options: ['Prüfungsangst: ein unterschätztes Problem an Hochschulen', 'Warum Klausuren abgeschafft werden', 'Frauen studieren erfolgreicher'], a: 0 }
          ]
        }
      ]
    },
    {
      id: 'sprachbausteine', name: 'Sprachbausteine', en: 'Grammar and vocabulary', kind: 'items', minutes: 25, points: 22,
      intro: 'One text with 22 gaps (grammar, vocabulary and spelling).',
      parts: [
        {
          title: 'Sprachbausteine', instructions: 'Lesen Sie den Text. Welche Lösung (a, b, c oder d) passt in die Lücke?',
          text: `<p>Die Digitalisierung der Lehre hat sich in den vergangenen Jahren (1) ___ beschleunigt. Was zunächst als Notlösung (2) ___, ist inzwischen fester Bestandteil vieler Studiengänge. Vorlesungen werden aufgezeichnet, (3) ___ Studierende sie flexibel abrufen können, und Seminare finden teils online, teils in Präsenz statt.</p>
<p>(4) ___ der unbestreitbaren Vorteile mehren sich jedoch kritische Stimmen. Lehrende beobachten, dass die Beteiligung an Diskussionen (5) ___ hat, wenn Kameras ausgeschaltet bleiben. Zudem fehle vielen Erstsemestern der Kontakt zu Kommilitonen, (6) ___ für den Studienerfolg nachweislich von Bedeutung ist.</p>
<p>Eine aktuelle Studie (7) ___ zu dem Ergebnis, dass hybride Formate dann am erfolgreichsten sind, wenn sie didaktisch (8) ___ durchdacht sind. Es genüge nicht, eine Präsenzveranstaltung (9) ___ zu filmen. Vielmehr müssten Lehrende überlegen, (10) ___ Inhalte sich für das Selbststudium eignen und (11) ___ Austausch in der Gruppe erfordern.</p>
<p>Voraussetzung (12) ___ ist allerdings eine verlässliche technische Ausstattung, an (13) ___ es vielerorts noch mangelt. Auch die Weiterbildung der Lehrenden wird oft (14) ___. Viele haben sich die nötigen Kompetenzen (15) ___ selbst angeeignet.</p>
<p>(16) ___ man die Entwicklung insgesamt, so zeigt sich: Die Rückkehr zur reinen Präsenzlehre ist ebenso wenig wünschenswert (17) ___ ein vollständiger Verzicht auf sie. Entscheidend wird sein, die Stärken beider Formate gezielt (18) ___ nutzen. Die Hochschulen stehen damit vor einer Aufgabe, (19) ___ Bedeutung weit über die Pandemie hinausreicht. Ob sie diese meistern, hängt nicht zuletzt (20) ___ ab, wie viel Geld Bund und Länder (21) ___ Verfügung stellen. Sicher ist nur: Ein Zurück zum Zustand vor 2020 wird es nicht (22) ___.</p>`,
          items: [
            { type: 'mc', q: '1', options: ['erheblich', 'erheblicher', 'erheblichen', 'erhebliches'], a: 0 },
            { type: 'mc', q: '2', options: ['diente', 'galt', 'wirkte', 'hieß'], a: 1 },
            { type: 'mc', q: '3', options: ['sodass', 'obwohl', 'indem', 'falls'], a: 0 },
            { type: 'mc', q: '4', options: ['Wegen', 'Trotz', 'Statt', 'Dank'], a: 1 },
            { type: 'mc', q: '5', options: ['abgenommen', 'zugenommen', 'aufgehört', 'abgelehnt'], a: 0 },
            { type: 'mc', q: '6', options: ['was', 'der', 'den', 'dem'], a: 1 },
            { type: 'mc', q: '7', options: ['gelangt', 'kommt', 'führt', 'zeigt'], a: 1 },
            { type: 'mc', q: '8', options: ['sorgfältig', 'sorgfältigen', 'Sorgfalt', 'sorgen'], a: 0 },
            { type: 'mc', q: '9', options: ['einfach', 'einfache', 'einfachen', 'Einfachheit'], a: 0 },
            { type: 'mc', q: '10', options: ['welche', 'welcher', 'welches', 'welchen'], a: 0 },
            { type: 'mc', q: '11', options: ['welche', 'die', 'was', 'wer'], a: 0 },
            { type: 'mc', q: '12', options: ['davon', 'dafür', 'damit', 'darauf'], a: 1 },
            { type: 'mc', q: '13', options: ['der', 'die', 'dem', 'den'], a: 0 },
            { type: 'mc', q: '14', options: ['vernachlässigt', 'vernachlässigen', 'vernachlässigte', 'Vernachlässigung'], a: 0 },
            { type: 'mc', q: '15', options: ['weitgehend', 'weitgehenden', 'weitergehend', 'weithin'], a: 0 },
            { type: 'mc', q: '16', options: ['Betrachtet', 'Betrachten', 'Betrachtung', 'Betrachtend'], a: 0 },
            { type: 'mc', q: '17', options: ['als', 'wie', 'wenn', 'denn'], a: 1 },
            { type: 'mc', q: '18', options: ['zu', 'um', 'für', 'damit'], a: 0 },
            { type: 'mc', q: '19', options: ['deren', 'dessen', 'die', 'der'], a: 0 },
            { type: 'mc', q: '20', options: ['davon', 'darauf', 'daran', 'dafür'], a: 0 },
            { type: 'mc', q: '21', options: ['zur', 'zum', 'in', 'zu'], a: 0 },
            { type: 'mc', q: '22', options: ['geben', 'gibt', 'gegeben', 'gab'], a: 0 }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hörverstehen', en: 'Listening', kind: 'items', minutes: 40, points: 48,
      intro: 'Three parts with 28 questions: short interviews, a longer interview and a lecture with notes.',
      parts: [
        {
          title: 'Teil 1: Globalverstehen', instructions: 'Sie hören acht Studierende zum Thema „Nebenjob im Studium“. Sie hören jede Äußerung einmal. Welche Aussage (a–j) passt? Zwei Aussagen bleiben übrig.',
          choices: [['a', 'Der Job hilft bei der Berufsorientierung.'], ['b', 'Ohne Job könnte die Person nicht studieren.'], ['c', 'Der Job verlängert das Studium.'], ['d', 'Die Person arbeitet an der Hochschule.'], ['e', 'Die Person hat den Job wegen des Stresses aufgegeben.'], ['f', 'Der Job bringt soziale Kontakte.'], ['g', 'Die Person arbeitet nur in den Semesterferien.'], ['h', 'Die Person verdient online Geld.'], ['i', 'Die Person arbeitet mehr als 30 Stunden pro Woche.'], ['j', 'Die Eltern finanzieren das ganze Studium.']],
          items: [
            { type: 'match', audio: [['Student 1', 'Ich arbeite als Hilfskraft am Lehrstuhl für Soziologie. Das ist praktisch, weil ich keine Wege habe und die Arbeitszeiten flexibel sind.']], q: 'Person 1', a: 'd' },
            { type: 'match', audio: [['Studentin 2', 'Meine Eltern können mich nicht unterstützen, und BAföG reicht nicht für die Miete. Ohne meinen Job im Café müsste ich das Studium abbrechen.']], q: 'Person 2', a: 'b' },
            { type: 'match', audio: [['Student 3', 'Während des Semesters habe ich gar keine Zeit. Dafür arbeite ich im Sommer drei Monate in einer Fabrik und spare das Geld.']], q: 'Person 3', a: 'g' },
            { type: 'match', audio: [['Studentin 4', 'Ich gebe Nachhilfe über eine Videoplattform. Ich kann von zu Hause aus arbeiten und mir die Zeit selbst einteilen.']], q: 'Person 4', a: 'h' },
            { type: 'match', audio: [['Student 5', 'Ehrlich gesagt arbeite ich so viel, dass ich mehrere Prüfungen verschieben musste. Ich brauche jetzt wohl zwei Semester länger.']], q: 'Person 5', a: 'c' },
            { type: 'match', audio: [['Studentin 6', 'Durch mein Praktikum in einer Agentur habe ich gemerkt, dass Marketing genau das ist, was ich später machen will.']], q: 'Person 6', a: 'a' },
            { type: 'match', audio: [['Student 7', 'Ich hatte einen Job im Callcenter, aber der Druck war enorm. Nach drei Monaten habe ich gekündigt, weil ich nicht mehr schlafen konnte.']], q: 'Person 7', a: 'e' },
            { type: 'match', audio: [['Studentin 8', 'Ich bin neu in der Stadt, und im Supermarkt habe ich viele nette Kolleginnen kennengelernt. Mit zweien bin ich inzwischen befreundet.']], q: 'Person 8', a: 'f' }
          ]
        },
        {
          title: 'Teil 2: Detailverstehen', instructions: 'Sie hören ein Interview. Sie hören es zweimal. Wählen Sie a, b oder c.',
          audio: [
            ['Moderatorin', 'Professor Adeyemi, Sie leiten ein Forschungsprojekt zur Landflucht in Ostdeutschland. Verlassen junge Menschen die Dörfer immer noch?'],
            ['Prof. Adeyemi', 'Der Trend hat sich abgeschwächt. Nach der Wende sind besonders viele junge Frauen in den Westen oder in die Städte gezogen. Heute beobachten wir in manchen Regionen sogar einen leichten Zuzug.'],
            ['Moderatorin', 'Woran liegt das?'],
            ['Prof. Adeyemi', 'Zum einen an den hohen Mieten in den Großstädten. Zum anderen ermöglicht das Homeoffice vielen, auf dem Land zu leben und trotzdem für ein Unternehmen in der Stadt zu arbeiten.'],
            ['Moderatorin', 'Wer zieht aufs Land?'],
            ['Prof. Adeyemi', 'Vor allem Familien mit kleinen Kindern, die sich mehr Platz und Natur wünschen. Interessanterweise sind auch viele Rückkehrer darunter, also Menschen, die in der Region aufgewachsen sind.'],
            ['Moderatorin', 'Ist damit das Problem gelöst?'],
            ['Prof. Adeyemi', 'Leider nein. Die Infrastruktur ist vielerorts ausgedünnt: Arztpraxen schließen, Busse fahren selten, und das Internet ist oft zu langsam. Ohne Investitionen bleibt der Zuzug eine Ausnahme.'],
            ['Moderatorin', 'Was spielt für die Menschen, die bleiben, die größte Rolle?'],
            ['Prof. Adeyemi', 'Unsere Befragungen zeigen, dass die emotionale Bindung an den Ort sehr wichtig ist: Familie, Freundeskreis, Vereine. Viele bleiben bewusst, auch wenn sie anderswo mehr verdienen könnten.'],
            ['Moderatorin', 'Und was empfehlen Sie der Politik?'],
            ['Prof. Adeyemi', 'Die Menschen vor Ort stärker einzubeziehen. Projekte, die von Bürgerinnen und Bürgern selbst getragen werden, etwa Dorfläden oder Gemeinschaftsräume, sind oft nachhaltiger als Programme, die von oben geplant werden.']
          ],
          plays: 2,
          items: [
            { type: 'mc', q: 'Die Abwanderung aus den Dörfern …', options: ['hat sich verstärkt.', 'ist schwächer geworden.', 'ist unverändert.'], a: 1 },
            { type: 'mc', q: 'Nach der Wende gingen vor allem …', options: ['ältere Menschen.', 'junge Frauen.', 'Familien mit Kindern.'], a: 1 },
            { type: 'mc', q: 'Ein Grund für den Zuzug aufs Land ist …', options: ['die Möglichkeit, von zu Hause zu arbeiten.', 'die gute Infrastruktur.', 'niedrige Steuern.'], a: 0 },
            { type: 'mc', q: 'Wer zieht vor allem aufs Land?', options: ['Studierende.', 'Rentner.', 'Familien mit kleinen Kindern.'], a: 2 },
            { type: 'mc', q: 'Unter den Zugezogenen sind viele …', options: ['Menschen, die früher in der Region gelebt haben.', 'Menschen aus dem Ausland.', 'Selbstständige aus dem Westen.'], a: 0 },
            { type: 'mc', q: 'Ein Problem auf dem Land ist …', options: ['die hohe Kriminalität.', 'die schlechte Versorgung mit Ärzten und Internet.', 'der Mangel an Wohnraum.'], a: 1 },
            { type: 'mc', q: 'Ohne Investitionen …', options: ['wird der Zuzug weiter steigen.', 'bleibt der Zuzug eine Ausnahme.', 'werden die Städte leerer.'], a: 1 },
            { type: 'mc', q: 'Für Menschen, die bleiben, ist besonders wichtig …', options: ['ein hohes Gehalt.', 'die Bindung an Familie und Gemeinschaft.', 'die Nähe zur Autobahn.'], a: 1 },
            { type: 'mc', q: 'Viele bleiben, obwohl sie …', options: ['anderswo mehr verdienen könnten.', 'keine Arbeit finden.', 'krank sind.'], a: 0 },
            { type: 'mc', q: 'Der Experte empfiehlt, …', options: ['große Förderprogramme von oben zu planen.', 'die Bewohner aktiv zu beteiligen.', 'Dörfer zusammenzulegen.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3: Informationstransfer', instructions: 'Sie hören einen Vortrag. Sie hören ihn zweimal. Ergänzen Sie die Notizen mit einem Wort oder einer Zahl.',
          audio: [['Dozentin', 'Ich begrüße Sie zu meinem Vortrag über die Geschichte des Fahrrads. Das erste fahrradähnliche Gerät wurde 1817 von Karl Drais in Mannheim vorgestellt. Es hatte noch keine Pedale, man stieß sich mit den Füßen vom Boden ab, daher der Name Laufmaschine. Drais wollte damit eine Alternative zum Pferd schaffen, denn nach einer Missernte waren viele Pferde verhungert. Pedale kamen erst etwa vierzig Jahre später in Frankreich hinzu. In den 1870er-Jahren war dann das Hochrad in Mode, ein Rad mit einem riesigen Vorderrad, das schnell, aber sehr gefährlich war. Den Durchbruch brachte schließlich das sogenannte Sicherheitsniederrad mit zwei gleich großen Rädern und Kettenantrieb, das ab 1885 in England gebaut wurde. Besonders wichtig war das Fahrrad für die Emanzipation der Frauen: Es gab ihnen Bewegungsfreiheit, und es veränderte sogar die Mode, weil lange Röcke beim Radfahren hinderlich waren. Heute erlebt das Fahrrad mit dem Elektroantrieb eine Renaissance. In Deutschland werden inzwischen jedes Jahr mehr E-Bikes als herkömmliche Fahrräder verkauft.']],
          plays: 2,
          items: [
            { type: 'gap', q: 'Jahr der ersten Laufmaschine: ___', a: ['1817'] },
            { type: 'gap', q: 'Erfinder: Karl ___', a: ['Drais'] },
            { type: 'gap', q: 'Stadt der Erfindung: ___', a: ['Mannheim'] },
            { type: 'gap', q: 'Antrieb der Laufmaschine: mit den ___', a: ['Füßen', 'Füssen', 'Fuessen'] },
            { type: 'gap', q: 'Hintergrund: Viele ___ waren nach einer Missernte verhungert.', a: ['Pferde'] },
            { type: 'gap', q: 'Pedale kamen später in ___ hinzu.', a: ['Frankreich'] },
            { type: 'gap', q: 'Nachteil des Hochrads: sehr ___', a: ['gefährlich'] },
            { type: 'gap', q: 'Sicherheitsniederrad: zwei gleich große Räder und ___-antrieb', a: ['Ketten', 'Kette', 'Kettenantrieb'] },
            { type: 'gap', q: 'Gesellschaftliche Bedeutung: wichtig für die Emanzipation der ___', a: ['Frauen'] },
            { type: 'gap', q: 'Heute: In Deutschland werden mehr ___ als herkömmliche Räder verkauft.', a: ['E-Bikes', 'EBikes', 'E Bikes'] }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schriftlicher Ausdruck', en: 'Writing', kind: 'writing', minutes: 70, points: 48, choose: true,
      intro: 'Choose one of two tasks and write an argumentative text (Erörterung) in academic style.',
      tasks: [
        {
          title: 'Aufgabe A: Anwesenheitspflicht in Lehrveranstaltungen', weight: 48, register: 'neutral', minWords: 200,
          situation: '<p>An Ihrer Hochschule wird diskutiert, ob in Seminaren wieder eine Anwesenheitspflicht eingeführt werden soll. Die Hochschulzeitung bittet um Beiträge. Die folgende Grafik zeigt: 62 % der Lehrenden sind dafür, 71 % der Studierenden dagegen.</p><p>Schreiben Sie eine Erörterung.</p>',
          points: ['Beschreiben Sie die Ausgangslage und die Grafik.', 'Erörtern Sie Argumente für eine Anwesenheitspflicht.', 'Erörtern Sie Argumente dagegen.', 'Nehmen Sie begründet Stellung.'],
          keywords: [['grafik', 'prozent', 'lehrende', 'studierende', 'umfrage', 'mehrheit'], ['für eine', 'befürworter', 'diskussion', 'lernerfolg', 'beteiligung', 'austausch'], ['dagegen', 'gegner', 'eigenverantwortung', 'nebenjob', 'pflege', 'kinder', 'flexibilität', 'selbstbestimmt'], ['meines erachtens', 'meiner ansicht', 'ich vertrete', 'abschließend', 'fazit', 'zusammenfassend']],
          instructions: 'Gliedern Sie den Text in Einleitung, Hauptteil und Schluss. Schreiben Sie mindestens 200 Wörter.',
          model: 'Kaum eine hochschulpolitische Frage polarisiert derzeit so stark wie die Anwesenheitspflicht in Seminaren. Die Zahlen der vorliegenden Grafik verdeutlichen die unterschiedlichen Perspektiven: Während 62 Prozent der Lehrenden eine Pflicht befürworten, lehnen 71 Prozent der Studierenden sie ab.\nFür eine Anwesenheitspflicht spricht zunächst, dass Seminare vom Austausch leben. Diskussionen, Referate und Gruppenarbeiten können nur gelingen, wenn ein Großteil der Teilnehmenden regelmäßig anwesend ist. Lehrende berichten zudem, dass ohne Pflicht viele Studierende erst kurz vor der Prüfung wieder erscheinen und dann wesentliche Inhalte verpasst haben.\nDem lässt sich jedoch entgegenhalten, dass Studierende erwachsen sind und selbst entscheiden sollten, wie sie lernen. Viele müssen neben dem Studium arbeiten, Angehörige pflegen oder Kinder betreuen. Für sie würde eine starre Pflicht eine erhebliche zusätzliche Belastung bedeuten und könnte im schlimmsten Fall zum Studienabbruch führen. Hinzu kommt, dass bloße Anwesenheit noch keine aktive Beteiligung garantiert.\nMeines Erachtens wäre eine generelle Anwesenheitspflicht der falsche Weg. Überzeugender erscheint mir ein Modell, das Präsenz durch attraktive Lehrformen fördert, etwa durch kleine Gruppen, praxisnahe Aufgaben und Leistungen, die während des Semesters erbracht werden. Wo Anwesenheit für den Lernerfolg unverzichtbar ist, wie bei Laborpraktika, ist eine Pflicht hingegen gerechtfertigt. Entscheidend sollte nicht die Kontrolle, sondern die Qualität der Lehre sein.'
        },
        {
          title: 'Aufgabe B: Künstliche Intelligenz bei Hausarbeiten', weight: 48, register: 'neutral', minWords: 200,
          situation: '<p>Immer mehr Studierende nutzen KI-Programme beim Schreiben von Hausarbeiten. Einige Hochschulen verbieten dies, andere erlauben es unter Bedingungen.</p><p>Schreiben Sie eine Erörterung zu der Frage, wie Hochschulen mit KI-Programmen umgehen sollten.</p>',
          points: ['Beschreiben Sie die aktuelle Situation.', 'Erörtern Sie Chancen von KI im Studium.', 'Erörtern Sie Risiken.', 'Nehmen Sie begründet Stellung und machen Sie einen Vorschlag.'],
          keywords: [['immer mehr', 'derzeit', 'situation', 'hochschulen', 'verbieten', 'erlauben'], ['chance', 'vorteil', 'unterstützung', 'recherche', 'feedback', 'effizient'], ['risiko', 'gefahr', 'täuschung', 'plagiat', 'fehler', 'abhängigkeit', 'eigenständig'], ['meines erachtens', 'meiner ansicht', 'vorschlag', 'plädiere', 'sollten', 'fazit']],
          instructions: 'Gliedern Sie den Text in Einleitung, Hauptteil und Schluss. Schreiben Sie mindestens 200 Wörter.',
          model: 'Seit KI-Programme in der Lage sind, in Sekunden ganze Textabschnitte zu formulieren, stehen Hochschulen vor einer neuen Herausforderung. Während einige Universitäten ihren Einsatz bei Hausarbeiten grundsätzlich untersagen, erlauben andere ihn unter der Bedingung, dass er offengelegt wird.\nUnbestreitbar bieten solche Programme Chancen. Sie können beim Strukturieren von Gedanken helfen, Feedback zu Formulierungen geben und Studierenden mit einer anderen Erstsprache den Zugang zum wissenschaftlichen Schreiben erleichtern. Richtig eingesetzt, könnten sie Lernende also gezielt unterstützen.\nDem stehen jedoch erhebliche Risiken gegenüber. Wer Texte vollständig von einer KI erstellen lässt, erwirbt gerade die Fähigkeiten nicht, die eine Hausarbeit fördern soll: eigenständiges Argumentieren und kritisches Prüfen von Quellen. Hinzu kommt, dass KI-Programme Fakten und sogar Literaturangaben erfinden können, was ohne sorgfältige Kontrolle zu schwerwiegenden Fehlern führt.\nMeines Erachtens ist ein generelles Verbot weder durchsetzbar noch sinnvoll, da die Programme in der Berufswelt längst selbstverständlich sind. Ich plädiere vielmehr dafür, klare Regeln zu formulieren und den kompetenten Umgang mit KI zu lehren. Studierende sollten offenlegen, wofür sie die Programme genutzt haben, und Prüfungsformen sollten stärker die eigene Denkleistung sichtbar machen, etwa durch mündliche Verteidigungen der Hausarbeit.'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Mündlicher Ausdruck', en: 'Speaking', kind: 'speaking', minutes: 20, points: 48, prep: 20,
      intro: 'In pairs: each person gives a presentation, the partner summarises it and asks questions, then you discuss a topic together.',
      tasks: [
        { title: 'Teil 1A: Präsentation (about 3–4 minutes)', seconds: 240, html: '<p>Halten Sie eine Präsentation zum Thema <strong>„Sollten Hochschulen Studiengebühren für internationale Studierende erheben?“</strong> Sie haben dazu eine kurze Notiz mit einer Statistik erhalten. Führen Sie ins Thema ein, stellen Sie verschiedene Positionen dar, bewerten Sie diese und ziehen Sie ein Fazit.</p>', tips: '<p>In meiner Präsentation geht es um … / Die Statistik zeigt, dass … / Befürworter argumentieren … , Kritiker hingegen … / Abwägend komme ich zu dem Schluss, dass …</p>' },
        { title: 'Teil 1B: Zusammenfassung und Anschlussfragen (about 2 minutes)', seconds: 120, html: '<p>Fassen Sie die Präsentation Ihres Partners in wenigen Sätzen zusammen und stellen Sie ihm zwei Fragen. (Zum Üben: Fassen Sie eine Nachrichtensendung oder einen Podcast zusammen, den Sie heute gehört haben.)</p>', tips: '<p>Wenn ich dich richtig verstanden habe, … / Du hast vor allem betont, dass … / Mich würde noch interessieren, … / Wie erklärst du dir, dass …?</p>' },
        { title: 'Teil 2: Diskussion (about 6 minutes)', seconds: 360, html: '<p>Diskutieren Sie: <strong>„Sollte ein Auslandssemester für alle Studierenden verpflichtend sein?“</strong> Vertreten Sie Ihren Standpunkt, gehen Sie auf die Argumente Ihres Partners ein und versuchen Sie, gemeinsam zu einem Ergebnis zu kommen.</p>', tips: '<p>Ich sehe das etwas anders, denn … / Das ist ein berechtigter Einwand, aber … / Könnten wir uns darauf einigen, dass …? / Ein Kompromiss könnte sein, …</p>' }
      ]
    }
  ]
};
