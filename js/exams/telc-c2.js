EXAMS['telc-c2'] = {
  id: 'telc-c2', provider: 'telc', level: 'C2', name: 'telc Deutsch C2',
  about: 'Written exam of about 230 minutes: Leseverstehen (80 min), Hörverstehen und Schreiben (a lecture summary, 60 min) and Schriftlicher Ausdruck (an essay, 90 min). Oral exam of about 15 minutes after 20 minutes of preparation. 160 points in total.',
  passText: 'You need at least 60 percent in the written exam (72 of 120 points) and 60 percent in the oral exam (24 of 40 points).',
  pass: { type: 'groups', groups: [{ name: 'Schriftliche Prüfung', modules: ['lesen', 'hoerenschreiben', 'schreiben'], min: 0.6 }, { name: 'Mündliche Prüfung', modules: ['sprechen'], min: 0.6 }] },
  rubric: ['Inhalt (Vollständigkeit, Argumentation)', 'Textaufbau und Kohärenz', 'Wortschatz und Stil', 'Formale Richtigkeit'],
  rubricHelp: 'At C2 the text must be complete, precisely argued and stylistically confident, with almost no errors. Opinions from sources must be marked as such.',
  speakRubric: ['Präsentation (Inhalt und Aufbau)', 'Diskussion (Argumentation, Reaktion)', 'Flüssigkeit und Spektrum', 'Grammatische Korrektheit', 'Aussprache und Intonation'],
  modules: [
    {
      id: 'lesen', name: 'Leseverstehen', en: 'Reading', kind: 'items', minutes: 80, points: 40,
      intro: 'Three parts with 25 questions.',
      parts: [
        {
          title: 'Teil 1: Textlogik', instructions: 'Die Absätze des Textes sind durcheinandergeraten. Absatz A ist der Anfang. Bringen Sie die übrigen Absätze in die richtige Reihenfolge: Welcher Absatz folgt an Position 2, 3, 4, 5 und 6?',
          text: `<p><strong>A</strong> Wer heute über Städte spricht, spricht fast zwangsläufig über Verdichtung. Bauland ist knapp, die Bevölkerung in den Metropolen wächst, und die Versiegelung neuer Flächen gilt aus ökologischen Gründen als problematisch.</p>
<p><strong>B</strong> Genau hier setzt die Kritik an. Wer jeden Hinterhof bebaut, opfert jene Freiräume, die das Stadtklima regulieren und Begegnung ermöglichen. Verdichtung ohne Qualität erzeuge, so die Kritiker, lediglich Enge.</p>
<p><strong>C</strong> Die Antwort vieler Stadtplaner lautet daher: nach innen wachsen. Brachflächen, Dachgeschosse und Baulücken sollen genutzt werden, bevor auf der grünen Wiese gebaut wird.</p>
<p><strong>D</strong> Ein vielversprechender Ansatz liegt deshalb darin, Dichte und Grün nicht als Gegensätze zu begreifen. Begrünte Fassaden, gemeinschaftlich genutzte Dachgärten und autofreie Quartiere zeigen, dass beides zusammengehen kann.</p>
<p><strong>E</strong> Tatsächlich hat diese Strategie Vorteile: Bestehende Infrastruktur wird besser ausgelastet, Wege werden kürzer, und der öffentliche Nahverkehr lohnt sich eher.</p>
<p><strong>F</strong> Ob solche Modelle sich durchsetzen, hängt freilich weniger von der Architektur ab als von politischen Entscheidungen, etwa darüber, wie viel Raum dem Auto künftig noch zugestanden wird.</p>`,
          choices: [['B', 'Absatz B'], ['C', 'Absatz C'], ['D', 'Absatz D'], ['E', 'Absatz E'], ['F', 'Absatz F']],
          items: [{ type: 'match', q: 'Position 2', a: 'C' }, { type: 'match', q: 'Position 3', a: 'E' }, { type: 'match', q: 'Position 4', a: 'B' }, { type: 'match', q: 'Position 5', a: 'D' }, { type: 'match', q: 'Position 6', a: 'F' }]
        },
        {
          title: 'Teil 2: Detailverstehen', instructions: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          text: `<h3>Das Ende der Gewissheit</h3>
<p>Kaum ein Begriff hat in den vergangenen Jahren eine so steile Karriere gemacht wie der des „postfaktischen Zeitalters“. Er unterstellt, dass Tatsachen in der öffentlichen Debatte an Bedeutung verloren hätten und Gefühle an ihre Stelle getreten seien. Doch diese Diagnose ist selbst nicht frei von Vereinfachungen.</p>
<p>Historiker erinnern daran, dass Propaganda, Gerüchte und gezielte Falschmeldungen keine Erfindung des Internets sind. Neu ist vielmehr die Geschwindigkeit, mit der sie sich verbreiten, und die Möglichkeit, sie auf einzelne Zielgruppen zuzuschneiden. Was früher Wochen brauchte, um eine Stadt zu erreichen, erreicht heute in Stunden Millionen.</p>
<p>Zugleich wäre es verfehlt, die Ursachen allein in der Technik zu suchen. Studien zeigen, dass Menschen Informationen vor allem dann glauben, wenn sie ihr bestehendes Weltbild bestätigen, und zwar unabhängig vom Bildungsgrad. Wer gebildet ist, findet lediglich geschicktere Argumente, um an einer einmal gefassten Überzeugung festzuhalten.</p>
<p>Was folgt daraus? Faktenchecks allein, so die Forschung, verändern Meinungen kaum, mitunter verstärken sie sogar den Widerstand. Wirksamer scheint es, Menschen frühzeitig mit typischen Manipulationstechniken vertraut zu machen, gewissermaßen eine geistige Impfung. Wer weiß, wie Desinformation funktioniert, erkennt sie eher.</p>
<p>Das Vertrauen in Institutionen lässt sich auf diese Weise allerdings nicht wiederherstellen. Dafür bedarf es Transparenz, auch über eigene Irrtümer. Gerade Wissenschaft und Journalismus gewinnen an Glaubwürdigkeit, wenn sie offenlegen, wie ihre Erkenntnisse zustande kommen und wo deren Grenzen liegen.</p>`,
          items: [
            { type: 'mc', q: 'Der Autor hält die These vom „postfaktischen Zeitalter“ für …', options: ['zutreffend.', 'zu vereinfachend.', 'völlig falsch.'], a: 1 },
            { type: 'mc', q: 'Falschmeldungen …', options: ['entstanden erst mit dem Internet.', 'gab es schon früher.', 'sind heute seltener.'], a: 1 },
            { type: 'mc', q: 'Neu ist laut Historikern vor allem …', options: ['die Verbreitungsgeschwindigkeit.', 'die Zahl der Lügner.', 'das Interesse an Politik.'], a: 0 },
            { type: 'mc', q: 'Menschen glauben Informationen eher, wenn diese …', options: ['von Experten stammen.', 'ihre Überzeugungen bestätigen.', 'gut belegt sind.'], a: 1 },
            { type: 'mc', q: 'Bildung schützt laut Text …', options: ['zuverlässig vor Falschinformationen.', 'kaum vor Bestätigungsdenken.', 'nur in jungen Jahren.'], a: 1 },
            { type: 'mc', q: 'Gebildete Menschen …', options: ['ändern ihre Meinung schneller.', 'verteidigen ihre Meinung oft geschickter.', 'meiden soziale Medien.'], a: 1 },
            { type: 'mc', q: 'Faktenchecks …', options: ['ändern Meinungen zuverlässig.', 'haben nur geringe Wirkung.', 'sind gesetzlich vorgeschrieben.'], a: 1 },
            { type: 'mc', q: 'Die „geistige Impfung“ bedeutet, …', options: ['Menschen über Manipulationstechniken aufzuklären.', 'soziale Medien zu verbieten.', 'nur seriöse Zeitungen zu lesen.'], a: 0 },
            { type: 'mc', q: 'Vertrauen in Institutionen entsteht laut Autor vor allem durch …', options: ['Werbung.', 'Transparenz.', 'strengere Gesetze.'], a: 1 },
            { type: 'mc', q: 'Wissenschaft und Journalismus sollten …', options: ['Fehler verschweigen.', 'ihre Methoden und Grenzen offenlegen.', 'nur sichere Ergebnisse veröffentlichen.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3: Selektives Verstehen', instructions: 'Lesen Sie die Stellungnahmen a–f zum Thema „Bedingungsloses Grundeinkommen“. Zu welcher Stellungnahme passt die Aussage? Wenn keine passt, wählen Sie x.',
          text: `<p><strong>a) Ökonomin:</strong> Die Finanzierung ist der entscheidende Punkt. Ein auskömmliches Grundeinkommen würde Steuererhöhungen in einem Ausmaß erfordern, das politisch kaum durchsetzbar wäre.</p>
<p><strong>b) Sozialarbeiter:</strong> Viele meiner Klienten scheitern an der Bürokratie des heutigen Systems. Ein Grundeinkommen würde sie von entwürdigenden Kontrollen befreien.</p>
<p><strong>c) Unternehmer:</strong> Ich befürchte, dass gerade in schlecht bezahlten Branchen niemand mehr arbeiten würde. Wer soll dann Regale einräumen oder Pakete ausliefern?</p>
<p><strong>d) Philosophin:</strong> Die Debatte zwingt uns, neu zu definieren, was wir unter Arbeit verstehen. Pflege, Ehrenamt und Kindererziehung werden bisher nicht entlohnt, obwohl die Gesellschaft auf sie angewiesen ist.</p>
<p><strong>e) Soziologe:</strong> Die bisherigen Modellversuche sind zu klein und zu kurz, um verlässliche Aussagen über langfristige Folgen zu treffen.</p>
<p><strong>f) Gewerkschafterin:</strong> Ich sehe die Gefahr, dass ein Grundeinkommen als Vorwand dient, den Sozialstaat abzubauen und Löhne zu drücken.</p>`,
          choices: [['a', 'a) Ökonomin'], ['b', 'b) Sozialarbeiter'], ['c', 'c) Unternehmer'], ['d', 'd) Philosophin'], ['e', 'e) Soziologe'], ['f', 'f) Gewerkschafterin'], ['x', 'keine Stellungnahme']],
          items: [
            { type: 'match', q: 'Die Datenlage reicht für ein Urteil nicht aus.', a: 'e' },
            { type: 'match', q: 'Unbezahlte Tätigkeiten würden aufgewertet.', a: 'd' },
            { type: 'match', q: 'Die Kosten wären kaum zu tragen.', a: 'a' },
            { type: 'match', q: 'Bedürftige würden von Kontrollen entlastet.', a: 'b' },
            { type: 'match', q: 'Es könnte an Arbeitskräften für einfache Tätigkeiten fehlen.', a: 'c' },
            { type: 'match', q: 'Das Grundeinkommen könnte soziale Leistungen ersetzen und Arbeitnehmern schaden.', a: 'f' },
            { type: 'match', q: 'Ein Grundeinkommen würde die Geburtenrate erhöhen.', a: 'x' },
            { type: 'match', q: 'Das Verständnis von Arbeit muss überdacht werden.', a: 'd' },
            { type: 'match', q: 'Die Akzeptanz in der Politik wäre gering.', a: 'a' },
            { type: 'match', q: 'Ein Grundeinkommen würde die Digitalisierung beschleunigen.', a: 'x' }
          ]
        }
      ]
    },
    {
      id: 'hoerenschreiben', name: 'Hörverstehen und Schreiben', en: 'Listening and summary writing', kind: 'writing', minutes: 60, points: 40,
      intro: 'Listen to a lecture, take notes, then write a summary: title, the five main points and their key details.',
      tasks: [
        {
          title: 'Zusammenfassung eines Vortrags', weight: 40, register: 'neutral', minWords: 150,
          audio: [['Dozent', 'Meine Damen und Herren, mein Vortrag trägt den Titel „Die Zukunft des Wassers in Mitteleuropa“. Ich möchte fünf Aspekte beleuchten. Erstens: die Ausgangslage. Lange galt Mitteleuropa als wasserreich. Seit 2018 haben jedoch mehrere Dürresommer gezeigt, dass auch hier das Grundwasser sinkt, in manchen Regionen um mehr als einen Meter. Zweitens: die Ursachen. Neben dem Klimawandel mit weniger Niederschlag im Sommer spielen die Versiegelung von Böden und die Trockenlegung von Mooren eine Rolle, weil Regenwasser so schneller abfließt, statt zu versickern. Drittens: die Folgen. Betroffen sind die Landwirtschaft mit Ernteausfällen, die Wälder, in denen geschwächte Bäume Schädlingen zum Opfer fallen, und die Schifffahrt, wenn Flüsse zu wenig Wasser führen. Viertens: Nutzungskonflikte. Industrie, Landwirtschaft und private Haushalte konkurrieren zunehmend um dieselben Ressourcen. In einigen Gemeinden mussten bereits Verbote für das Bewässern von Gärten erlassen werden. Fünftens: Lösungsansätze. Dazu gehören die Wiedervernässung von Mooren, das Prinzip der Schwammstadt, in der Regenwasser gespeichert statt abgeleitet wird, effizientere Bewässerungstechniken in der Landwirtschaft sowie klare Regeln, wer im Krisenfall Vorrang hat. Mein Fazit: Wasser wird auch in Mitteleuropa zu einer knappen Ressource, und der Umgang damit ist eine der zentralen politischen Aufgaben der kommenden Jahrzehnte.']],
          plays: 2,
          situation: '<p>Sie hören einen Vortrag. Machen Sie sich Notizen. Schreiben Sie dann eine Zusammenfassung, die den Titel des Vortrags, die fünf Hauptpunkte und die wichtigsten Unterpunkte enthält. Die Zusammenfassung soll für Personen verständlich sein, die den Vortrag nicht gehört haben.</p>',
          points: ['Titel des Vortrags', 'Ausgangslage', 'Ursachen', 'Folgen', 'Nutzungskonflikte', 'Lösungsansätze und Fazit'],
          keywords: [['zukunft des wassers'], ['grundwasser', 'dürre', 'wasserreich', 'sinkt'], ['ursache', 'klimawandel', 'versiegelung', 'moore', 'niederschlag'], ['folge', 'landwirtschaft', 'wälder', 'wald', 'schifffahrt', 'ernte'], ['konflikt', 'konkurr', 'industrie', 'haushalte', 'verbot', 'gärten'], ['lösung', 'schwammstadt', 'wiedervernässung', 'bewässerung', 'vorrang', 'fazit']],
          instructions: 'Schreiben Sie in vollständigen Sätzen und mit eigenen Worten.',
          model: 'Der Vortrag „Die Zukunft des Wassers in Mitteleuropa“ behandelt in fünf Schritten die zunehmende Wasserknappheit in der Region.\nZunächst beschreibt der Referent die Ausgangslage: Obwohl Mitteleuropa lange als wasserreich galt, haben die Dürresommer seit 2018 zu einem deutlichen Absinken des Grundwassers geführt, regional um über einen Meter.\nAls Ursachen nennt er neben dem Klimawandel, der zu weniger Sommerniederschlag führt, die Versiegelung von Böden sowie die Trockenlegung von Mooren. Beides bewirkt, dass Regenwasser abfließt, anstatt zu versickern.\nDie Folgen betreffen mehrere Bereiche: In der Landwirtschaft kommt es zu Ernteausfällen, geschwächte Wälder werden anfälliger für Schädlinge, und bei niedrigen Pegeln ist die Schifffahrt beeinträchtigt.\nDarüber hinaus verschärfen sich Nutzungskonflikte zwischen Industrie, Landwirtschaft und Privathaushalten. Manche Gemeinden haben bereits verboten, Gärten zu bewässern.\nAbschließend stellt der Referent Lösungsansätze vor: die Wiedervernässung von Mooren, das Konzept der Schwammstadt, effizientere Bewässerung in der Landwirtschaft und klare Regeln für die Verteilung im Krisenfall. Sein Fazit lautet, dass Wasser auch in Mitteleuropa knapp wird und der Umgang damit zu den wichtigsten politischen Aufgaben der nächsten Jahrzehnte gehört.'
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schriftlicher Ausdruck', en: 'Writing', kind: 'writing', minutes: 90, points: 40, choose: true,
      intro: 'Write an essay on one of the topics. Use facts and arguments from at least three of the short texts and mark other people\'s opinions as such.',
      tasks: [
        {
          title: 'Thema A: Sollte Sterbehilfe gesetzlich erleichtert werden?', weight: 40, register: 'neutral', minWords: 250,
          situation: '<p>Schreiben Sie eine Stellungnahme. Nutzen Sie mindestens drei der folgenden Aussagen und kennzeichnen Sie fremde Meinungen.</p><ul><li><em>Ein Palliativmediziner:</em> „Mit guter Schmerztherapie wünschen sich die meisten Patienten keinen vorzeitigen Tod.“</li><li><em>Eine Juristin:</em> „Das Recht auf ein selbstbestimmtes Leben umfasst auch das Recht auf ein selbstbestimmtes Sterben.“</li><li><em>Ein Theologe:</em> „Es besteht die Gefahr, dass alte und kranke Menschen sich unter Druck gesetzt fühlen.“</li><li><em>Eine Umfrage:</em> Rund drei Viertel der Befragten befürworten eine Liberalisierung.</li></ul>',
          points: ['Einleitung mit Problemstellung', 'Argumente und Quellen (mindestens drei, als fremde Meinung gekennzeichnet)', 'Abwägung', 'Begründete eigene Position'],
          keywords: [['frage', 'debatte', 'diskussion', 'sterbehilfe', 'gesetz'], ['palliativ', 'juristin', 'theologe', 'umfrage', 'zufolge', 'laut', 'betont', 'warnt', 'sei', 'habe'], ['einerseits', 'andererseits', 'jedoch', 'dem steht', 'zwar', 'gleichwohl'], ['meines erachtens', 'ich vertrete', 'meiner auffassung', 'abschließend', 'fazit', 'plädiere']],
          instructions: 'Schreiben Sie mindestens 250 Wörter.',
          model: 'Kaum eine ethische Frage wird so leidenschaftlich diskutiert wie die nach der Zulässigkeit der Sterbehilfe. Im Kern geht es darum, wie weit die Selbstbestimmung eines Menschen reicht und wo der Staat eine Schutzpflicht hat.\nBefürworter einer Liberalisierung berufen sich vor allem auf das Prinzip der Autonomie. Eine Juristin bringt es auf den Punkt: Das Recht auf ein selbstbestimmtes Leben umfasse auch das Recht auf ein selbstbestimmtes Sterben. Diese Haltung scheint in der Bevölkerung weit verbreitet zu sein, denn einer Umfrage zufolge sprechen sich rund drei Viertel der Befragten für eine Lockerung der Regeln aus.\nDem stehen gewichtige Einwände gegenüber. Ein Palliativmediziner gibt zu bedenken, dass sich die meisten Patienten bei guter Schmerztherapie keinen vorzeitigen Tod wünschten. Daraus ließe sich folgern, dass der Ausbau der Palliativversorgung Vorrang haben müsse. Noch schwerer wiegt die Sorge eines Theologen, alte und kranke Menschen könnten sich unter Druck gesetzt fühlen, ihren Angehörigen oder der Gesellschaft nicht länger „zur Last zu fallen“. Diese Gefahr ist nicht von der Hand zu weisen, zumal Pflege teuer ist und Familien häufig überfordert sind.\nWägt man die Argumente gegeneinander ab, so zeigt sich, dass beide Seiten ein berechtigtes Anliegen vertreten: die Achtung des individuellen Willens einerseits, den Schutz verletzlicher Menschen andererseits. Ein Widerspruch muss darin jedoch nicht bestehen.\nMeines Erachtens sollte der Gesetzgeber Sterbehilfe für schwer und unheilbar erkrankte Menschen unter strengen Voraussetzungen ermöglichen. Dazu gehören eine umfassende ärztliche und psychologische Beratung, eine angemessene Bedenkzeit sowie die Prüfung durch unabhängige Dritte. Gleichzeitig muss die Palliativversorgung flächendeckend ausgebaut werden, damit niemand aus Angst vor Schmerzen oder Einsamkeit einen Weg wählt, den er bei guter Betreuung nicht gehen würde. Nur wenn beides zusammenkommt, wird das Gesetz der Würde des Menschen am Lebensende gerecht.'
        },
        {
          title: 'Thema B: Brauchen wir eine Quote für Frauen in Führungspositionen?', weight: 40, register: 'neutral', minWords: 250,
          situation: '<p>Schreiben Sie eine Stellungnahme. Nutzen Sie mindestens drei der folgenden Aussagen und kennzeichnen Sie fremde Meinungen.</p><ul><li><em>Eine Studie:</em> Unternehmen mit gemischten Vorständen erzielen im Durchschnitt bessere Ergebnisse.</li><li><em>Ein Arbeitgeberverband:</em> „Eine Quote greift unzulässig in die unternehmerische Freiheit ein.“</li><li><em>Eine Managerin:</em> „Ohne Quote hätte sich in den letzten zwanzig Jahren kaum etwas bewegt.“</li><li><em>Ein Personalberater:</em> „Frauen in Quotenpositionen kämpfen oft mit dem Vorurteil, nicht wegen ihrer Leistung ausgewählt worden zu sein.“</li></ul>',
          points: ['Einleitung mit Problemstellung', 'Argumente und Quellen (mindestens drei, als fremde Meinung gekennzeichnet)', 'Abwägung', 'Begründete eigene Position'],
          keywords: [['frage', 'debatte', 'quote', 'führung', 'vorstand'], ['studie', 'arbeitgeberverband', 'managerin', 'personalberater', 'zufolge', 'laut', 'sei', 'habe', 'betont'], ['einerseits', 'andererseits', 'jedoch', 'dem steht', 'zwar', 'gleichwohl'], ['meines erachtens', 'ich vertrete', 'meiner auffassung', 'abschließend', 'fazit', 'plädiere']],
          instructions: 'Schreiben Sie mindestens 250 Wörter.',
          model: 'Obwohl Frauen inzwischen ebenso gut ausgebildet sind wie Männer, sind sie in den Führungsetagen großer Unternehmen nach wie vor deutlich unterrepräsentiert. Ob eine gesetzliche Quote das richtige Mittel ist, um dies zu ändern, ist umstritten.\nFür eine Quote spricht zunächst die Erfahrung der vergangenen Jahrzehnte. Eine Managerin stellt fest, ohne Quote hätte sich in zwanzig Jahren kaum etwas bewegt. Freiwillige Selbstverpflichtungen der Wirtschaft haben tatsächlich nur bescheidene Fortschritte gebracht. Hinzu kommt ein ökonomisches Argument: Einer Studie zufolge erzielen Unternehmen mit gemischt besetzten Vorständen im Durchschnitt bessere Ergebnisse, was auf den Nutzen vielfältiger Perspektiven hindeutet.\nKritiker halten dagegen, eine Quote greife unzulässig in die unternehmerische Freiheit ein, wie ein Arbeitgeberverband betont. Ernster zu nehmen ist meines Erachtens der Hinweis eines Personalberaters, Frauen in Quotenpositionen hätten oft mit dem Vorurteil zu kämpfen, nicht aufgrund ihrer Leistung ausgewählt worden zu sein. Eine Maßnahme, die Gleichberechtigung fördern soll, könnte so paradoxerweise neue Zweifel an der Kompetenz von Frauen schüren.\nWägt man diese Positionen ab, so erscheint die Quote weniger als ideale Lösung denn als notwendiges Übergangsinstrument. Das Argument der unternehmerischen Freiheit überzeugt nur bedingt, da gerade börsennotierte Unternehmen eine gesellschaftliche Verantwortung tragen. Das Vorurteil gegenüber „Quotenfrauen“ wiederum dürfte in dem Maße verschwinden, in dem weibliche Führungskräfte zur Normalität werden.\nIch vertrete daher die Auffassung, dass eine befristete Quote für große Unternehmen sinnvoll ist. Sie sollte jedoch von Maßnahmen begleitet werden, die an den Ursachen ansetzen: flexible Arbeitszeitmodelle für Führungskräfte, eine verlässliche Kinderbetreuung und transparente Auswahlverfahren. Erst wenn diese Bedingungen erfüllt sind, wird sich die Quote eines Tages selbst überflüssig machen.'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Mündlicher Ausdruck', en: 'Speaking', kind: 'speaking', minutes: 15, points: 40, prep: 20,
      intro: 'Two parts: a presentation of 6 to 8 minutes and a follow-up discussion with the examiners.',
      tasks: [
        { title: 'Teil 1: Präsentation (6–8 minutes)', seconds: 420, html: '<p>Wählen Sie eines von zwei Themen und halten Sie eine strukturierte Präsentation:</p><p><strong>A) „Sollten Museen für alle kostenlos sein?“</strong><br><strong>B) „Ist Sprache ein Spiegel gesellschaftlicher Veränderungen? Das Beispiel gendergerechter Sprache.“</strong></p><p>Gliedern Sie Ihre Präsentation, stellen Sie verschiedene Positionen differenziert dar, belegen Sie sie mit Beispielen und ziehen Sie ein begründetes Fazit.</p>', tips: '<p>Ich möchte meine Ausführungen in drei Abschnitte gliedern. / Zunächst gilt es zu klären, … / Hier lohnt sich ein Blick auf … / Dieses Argument greift insofern zu kurz, als … / Lassen Sie mich abschließend festhalten, …</p>' },
        { title: 'Teil 2: Anschlussdiskussion (7–9 minutes)', seconds: 480, html: '<p>Die Prüfenden stellen Ihnen Fragen zu Aspekten, die Sie noch nicht angesprochen haben, und widersprechen Ihnen gezielt. Verteidigen Sie Ihre Position, gehen Sie auf Einwände ein und differenzieren Sie. Zum Üben: Notieren Sie drei mögliche Gegenargumente zu Ihrem Thema und antworten Sie auf jedes etwa eine Minute lang.</p>', tips: '<p>Das ist ein berechtigter Einwand, den ich allerdings relativieren möchte. / Da muss man unterscheiden zwischen … / Ich räume ein, dass …, halte aber daran fest, dass … / Darauf gibt es keine einfache Antwort, jedoch …</p>' }
      ]
    }
  ]
};
