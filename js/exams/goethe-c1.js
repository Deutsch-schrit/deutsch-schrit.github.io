EXAMS['goethe-c1'] = {
  id: 'goethe-c1', provider: 'goethe', level: 'C1', name: 'Goethe-Zertifikat C1',
  about: 'The current modular format (since 2024): Lesen (65 min), Hören (about 40 min), Schreiben (75 min) and Sprechen (about 20 min). Each module has 100 points.',
  passText: 'Each module is passed with at least 60 of 100 points.',
  pass: { type: 'module', min: 0.6 },
  rubric: ['Inhalt und Aufgabenerfüllung', 'Kohärenz und Textaufbau', 'Wortschatz und Ausdruck', 'Grammatische Korrektheit'],
  rubricHelp: 'At C1 the examiners expect a well-structured, nuanced text in the right register, with precise vocabulary and very few errors.',
  speakRubric: ['Inhalt und Aufgabenerfüllung', 'Flüssigkeit und Kohärenz', 'Wortschatz', 'Grammatische Korrektheit', 'Aussprache und Intonation'],
  modules: [
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 65, points: 100,
      intro: 'Four parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Text. Welches Wort passt in die Lücke? Wählen Sie a, b, c oder d.',
          text: `<h3>Warum wir Musik lieben</h3>
<p>Musik begleitet die Menschheit seit Jahrtausenden, (1) ___ sie keinen unmittelbaren Nutzen für das Überleben hat. Neurowissenschaftler haben inzwischen (2) ___, was im Gehirn passiert, wenn wir ein Lieblingslied hören: Das Belohnungssystem schüttet Dopamin aus, (3) ___ Botenstoff, der auch beim Essen oder bei Verliebtheit eine Rolle spielt. Besonders stark ist die Reaktion, wenn ein Musikstück unsere Erwartungen zunächst (4) ___ und dann doch erfüllt. Diese Spannung zwischen Vorhersage und Überraschung (5) ___ offenbar einen wesentlichen Teil des Genusses aus. Dass Menschen unterschiedliche Musik mögen, lässt sich (6) ___ auf ihre Hörgewohnheiten zurückführen: Was wir in der Jugend häufig gehört haben, prägt unseren Geschmack ein Leben (7) ___. Musik ist demnach nicht nur Kunst, sondern auch ein Spiegel unserer (8) ___.</p>`,
          items: [
            { type: 'mc', q: 'Lücke 1', options: ['obwohl', 'weil', 'damit', 'sodass'], a: 0 },
            { type: 'mc', q: 'Lücke 2', options: ['ergeben', 'herausgefunden', 'erfahren', 'vorgestellt'], a: 1 },
            { type: 'mc', q: 'Lücke 3', options: ['ein', 'eines', 'einen', 'einem'], a: 0 },
            { type: 'mc', q: 'Lücke 4', options: ['erfüllt', 'enttäuscht', 'verzögert', 'beschleunigt'], a: 2 },
            { type: 'mc', q: 'Lücke 5', options: ['macht', 'stellt', 'bringt', 'gibt'], a: 0 },
            { type: 'mc', q: 'Lücke 6', options: ['teilweise', 'teilen', 'geteilt', 'teilend'], a: 0 },
            { type: 'mc', q: 'Lücke 7', options: ['lang', 'langes', 'länger', 'lange'], a: 0 },
            { type: 'mc', q: 'Lücke 8', options: ['Biografie', 'Geografie', 'Biologie', 'Fotografie'], a: 0 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          text: `<h3>Die stille Revolution der Wärmepumpe</h3>
<p>Noch vor zehn Jahren galt die Wärmepumpe in Deutschland als Nischenprodukt für Neubauten mit Fußbodenheizung. Inzwischen wird sie in mehr als der Hälfte aller neu gebauten Wohnhäuser eingesetzt, und auch im Altbau steigt ihr Anteil. Das Prinzip ist einfach: Die Pumpe entzieht der Umgebungsluft, dem Erdreich oder dem Grundwasser Wärme und hebt sie mithilfe von Strom auf ein höheres Temperaturniveau. Aus einer Kilowattstunde Strom entstehen so drei bis vier Kilowattstunden Wärme.</p>
<p>Kritiker bemängeln die hohen Anschaffungskosten, die trotz staatlicher Förderung oft deutlich über denen einer Gasheizung liegen. Hinzu kommt, dass ältere Gebäude häufig erst gedämmt werden müssen, damit die Wärmepumpe effizient arbeitet. Befürworter halten dagegen, dass sich die Mehrkosten über die Lebensdauer der Anlage amortisieren, zumal die Preise für fossile Brennstoffe durch die CO₂-Abgabe steigen werden.</p>
<p>Ein oft unterschätzter Engpass ist das Handwerk. Es fehlen Installateurinnen und Installateure, die mit der Technik vertraut sind; Wartezeiten von mehreren Monaten sind keine Seltenheit. Die Branche reagiert mit Weiterbildungsprogrammen, doch der Fachkräftemangel lässt sich nicht kurzfristig beheben.</p>
<p>Für Energieexperten ist die Wärmepumpe dennoch alternativlos, sofern der Strom zunehmend aus erneuerbaren Quellen stammt. Nur dann, so ihr Argument, sei der Umstieg ein echter Gewinn für das Klima.</p>`,
          items: [
            { type: 'mc', q: 'Früher wurden Wärmepumpen vor allem …', options: ['in Neubauten eingesetzt.', 'in Altbauten eingesetzt.', 'in Bürogebäuden eingesetzt.'], a: 0 },
            { type: 'mc', q: 'Eine Wärmepumpe …', options: ['erzeugt Wärme ganz ohne Strom.', 'gewinnt aus wenig Strom ein Vielfaches an Wärme.', 'funktioniert nur mit Grundwasser.'], a: 1 },
            { type: 'mc', q: 'Kritisiert werden vor allem …', options: ['die hohen Kosten beim Kauf.', 'die hohen Stromkosten im Betrieb.', 'die Lautstärke der Geräte.'], a: 0 },
            { type: 'mc', q: 'Bei älteren Häusern …', options: ['lohnt sich eine Wärmepumpe nie.', 'ist oft zusätzlich eine Dämmung nötig.', 'wird keine Förderung gezahlt.'], a: 1 },
            { type: 'mc', q: 'Befürworter argumentieren, dass …', options: ['fossile Energien billiger werden.', 'sich die höheren Kosten langfristig auszahlen.', 'Gasheizungen bald verboten sind.'], a: 1 },
            { type: 'mc', q: 'Im Handwerk …', options: ['gibt es zu wenig qualifizierte Fachkräfte.', 'sind die Preise stark gesunken.', 'werden keine Weiterbildungen angeboten.'], a: 0 },
            { type: 'mc', q: 'Experten zufolge nützt die Wärmepumpe dem Klima nur, wenn …', options: ['alle Häuser gedämmt sind.', 'der Strom aus erneuerbaren Quellen kommt.', 'sie mit Gas kombiniert wird.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie den Kommentar. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          text: `<h3>Kommentar: Die Vier-Tage-Woche ist kein Allheilmittel</h3>
<p>Kaum ein arbeitsmarktpolitisches Thema wird derzeit so leidenschaftlich diskutiert wie die Vier-Tage-Woche. (1) ___ Doch so verlockend die Idee klingt, sie wirft mehr Fragen auf, als ihre Anhänger zugeben.</p>
<p>Zunächst ist da die Frage der Branchen. (2) ___ Eine Pflegekraft kann ihre Patienten nicht einfach einen Tag allein lassen, und auch im Einzelhandel müssen Öffnungszeiten abgedeckt werden.</p>
<p>Hinzu kommt der Fachkräftemangel. (3) ___ Wer weniger arbeitet, hinterlässt eine Lücke, die gerade in Zeiten knapper Arbeitskräfte kaum zu füllen ist.</p>
<p>Befürworter verweisen gern auf Pilotprojekte, in denen die Produktivität gestiegen sei. (4) ___ Teilgenommen haben meist Unternehmen, die von vornherein gute Voraussetzungen mitbrachten.</p>
<p>Das heißt nicht, dass alles beim Alten bleiben sollte. (5) ___ Flexible Modelle, die sich an den Bedürfnissen von Beschäftigten und Betrieben orientieren, dürften mehr bewirken als eine starre Regel für alle.</p>
<p>(6) ___ Die Debatte um die Vier-Tage-Woche hat immerhin gezeigt, wie groß der Wunsch nach mehr Selbstbestimmung ist, und vielleicht ist genau das ihr größtes Verdienst. (7) ___ (8) ___</p>`,
          choices: [
            ['a', 'Was im Büro funktionieren mag, ist in vielen anderen Berufen schlicht nicht umsetzbar.'],
            ['b', 'Die Ergebnisse sind jedoch nur begrenzt übertragbar.'],
            ['c', 'Gewerkschaften fordern sie, Start-ups werben damit um Talente.'],
            ['d', 'Schon heute bleiben in vielen Betrieben Stellen unbesetzt.'],
            ['e', 'Die Arbeitswelt braucht zweifellos neue Antworten.'],
            ['f', 'Trotz aller Kritik sollte man eines nicht übersehen.'],
            ['g', 'Arbeitgeber täten gut daran, diesen Wunsch ernst zu nehmen.'],
            ['h', 'Am Ende entscheidet nicht die Zahl der Tage, sondern die Qualität der Arbeit.'],
            ['i', 'Die Vier-Tage-Woche wurde bereits im 19. Jahrhundert eingeführt.'],
            ['j', 'Pflegekräfte arbeiten ohnehin nur vier Tage pro Woche.']
          ],
          items: [
            { type: 'match', q: 'Lücke 1', a: 'c' }, { type: 'match', q: 'Lücke 2', a: 'a' }, { type: 'match', q: 'Lücke 3', a: 'd' }, { type: 'match', q: 'Lücke 4', a: 'b' },
            { type: 'match', q: 'Lücke 5', a: 'e' }, { type: 'match', q: 'Lücke 6', a: 'f' }, { type: 'match', q: 'Lücke 7', a: 'g' }, { type: 'match', q: 'Lücke 8', a: 'h' }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Lesen Sie die vier Texte zum Thema „Langes Sitzen“. In welchem Text (a–d) finden Sie die Aussage? Die Texte können mehrmals gewählt werden.',
          text: `<p><strong>a)</strong> Eine Langzeitstudie mit über 100.000 Teilnehmenden belegt, dass Menschen, die mehr als acht Stunden täglich sitzen, ein deutlich erhöhtes Risiko für Herz-Kreislauf-Erkrankungen haben. Bemerkenswert ist, dass regelmäßiger Sport dieses Risiko zwar senkt, aber nicht vollständig ausgleicht.</p>
<p><strong>b)</strong> Höhenverstellbare Schreibtische gelten als Lösung, doch Ergonomen warnen: Wer stundenlang steht, belastet Venen und Gelenke. Entscheidend sei der Wechsel zwischen Sitzen, Stehen und Gehen, idealerweise alle 30 Minuten.</p>
<p><strong>c)</strong> In Schulen bewegen sich Kinder heute deutlich weniger als vor zwanzig Jahren. Einige Bundesländer haben deshalb „bewegte Pausen“ und kurze Bewegungseinheiten im Unterricht eingeführt, mit messbar positiven Effekten auf die Konzentration.</p>
<p><strong>d)</strong> Arbeitgeber, die in Bewegungsangebote investieren, profitieren nachweislich von weniger Krankheitstagen. Allerdings nehmen gerade die Beschäftigten, die am meisten sitzen, solche Angebote am seltensten wahr.</p>`,
          choices: [['a', 'Text a'], ['b', 'Text b'], ['c', 'Text c'], ['d', 'Text d']],
          items: [
            { type: 'match', q: 'Sport gleicht die Folgen langen Sitzens nicht ganz aus.', a: 'a' },
            { type: 'match', q: 'Auch zu viel Stehen ist ungesund.', a: 'b' },
            { type: 'match', q: 'Bewegung kann die Aufmerksamkeit verbessern.', a: 'c' },
            { type: 'match', q: 'Angebote erreichen die wichtigste Zielgruppe kaum.', a: 'd' },
            { type: 'match', q: 'Ein regelmäßiger Positionswechsel wird empfohlen.', a: 'b' },
            { type: 'match', q: 'Eine große Untersuchung zeigt ein höheres Krankheitsrisiko.', a: 'a' },
            { type: 'match', q: 'Unternehmen haben einen wirtschaftlichen Vorteil.', a: 'd' }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 40, points: 100,
      intro: 'Four parts with 30 questions: a podcast, expert statements, a discussion and a lecture.',
      parts: [
        {
          title: 'Teil 1: Podcast', instructions: 'Sie hören einen Podcast. Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [
            ['Moderatorin', 'Willkommen zu „Wissen kompakt“. Heute geht es um das Thema Lernen im Schlaf. Bei mir ist der Schlafforscher Dr. Lukas Behrendt. Herr Behrendt, kann man im Schlaf lernen?'],
            ['Dr. Behrendt', 'Neue Vokabeln über Kopfhörer im Schlaf zu lernen, das funktioniert leider nicht. Aber der Schlaf ist entscheidend dafür, dass wir behalten, was wir tagsüber gelernt haben. Im Tiefschlaf werden Erinnerungen gefestigt und mit vorhandenem Wissen verknüpft.'],
            ['Moderatorin', 'Was bedeutet das für Studierende vor einer Prüfung?'],
            ['Dr. Behrendt', 'Dass eine durchgearbeitete Nacht der schlechteste Plan ist. Wer nach dem Lernen ausreichend schläft, erinnert sich am nächsten Tag deutlich besser. Ein kurzer Mittagsschlaf von zwanzig Minuten kann übrigens ebenfalls helfen.'],
            ['Moderatorin', 'Spielt es eine Rolle, wann man lernt?'],
            ['Dr. Behrendt', 'Interessanterweise ja. Inhalte, die man kurz vor dem Schlafengehen wiederholt, werden besonders gut gespeichert. Allerdings sollte man danach nicht mehr aufs Handy schauen, weil das Licht und die Reize den Schlaf verzögern.'],
            ['Moderatorin', 'Und wie viel Schlaf braucht man?'],
            ['Dr. Behrendt', 'Das ist individuell. Die meisten Erwachsenen brauchen zwischen sieben und neun Stunden. Wichtiger als die genaue Zahl ist ein regelmäßiger Rhythmus, auch am Wochenende.']
          ],
          plays: 1,
          items: [
            { type: 'mc', q: 'Vokabeln im Schlaf über Kopfhörer zu lernen, …', options: ['ist sehr effektiv.', 'funktioniert nicht.', 'klappt nur bei Kindern.'], a: 1 },
            { type: 'mc', q: 'Im Tiefschlaf …', options: ['vergessen wir unwichtige Informationen.', 'werden Erinnerungen gefestigt.', 'träumen wir besonders viel.'], a: 1 },
            { type: 'mc', q: 'Vor einer Prüfung sollte man …', options: ['die Nacht durchlernen.', 'nach dem Lernen genug schlafen.', 'gar nicht mehr lernen.'], a: 1 },
            { type: 'mc', q: 'Ein kurzer Mittagsschlaf …', options: ['schadet dem Nachtschlaf.', 'kann beim Lernen helfen.', 'sollte mindestens eine Stunde dauern.'], a: 1 },
            { type: 'mc', q: 'Was man kurz vor dem Schlafen wiederholt, …', options: ['wird besonders gut behalten.', 'stört den Schlaf.', 'vergisst man schnell.'], a: 0 },
            { type: 'mc', q: 'Nach dem Lernen am Abend sollte man …', options: ['noch Nachrichten lesen.', 'das Handy nicht mehr benutzen.', 'Sport treiben.'], a: 1 },
            { type: 'mc', q: 'Wichtiger als die genaue Schlafdauer ist …', options: ['ein regelmäßiger Rhythmus.', 'ein dunkles Zimmer.', 'ein Mittagsschlaf.'], a: 0 },
            { type: 'mc', q: 'Die meisten Erwachsenen brauchen …', options: ['fünf bis sechs Stunden Schlaf.', 'sieben bis neun Stunden Schlaf.', 'mehr als zehn Stunden Schlaf.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2: Fachleute äußern sich', instructions: 'Sie hören Aussagen von Fachleuten zum Thema „Künstliche Intelligenz in der Medizin“. Sie hören jeden Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          items: [
            { type: 'mc', audio: [['Radiologin', 'In der Radiologie nutzen wir KI-Systeme schon seit einigen Jahren. Sie markieren auffällige Stellen auf Röntgenbildern, und wir Ärztinnen entscheiden dann. Das spart Zeit, aber die Verantwortung bleibt bei uns.']], q: 'Wer trifft laut der Radiologin die Entscheidung?', options: ['Das KI-System.', 'Die Ärztin.', 'Der Patient.'], a: 1 },
            { type: 'mc', q: 'Der Vorteil der KI ist für sie vor allem …', options: ['eine Zeitersparnis.', 'eine Kostensenkung.', 'eine bessere Bezahlung.'], a: 0 },
            { type: 'mc', audio: [['Datenschützer', 'Damit KI gut funktioniert, braucht sie riesige Mengen an Patientendaten. Ich sehe die Gefahr, dass diese Daten in falsche Hände geraten. Patienten müssen genau wissen, wofür ihre Daten verwendet werden.']], q: 'Der Datenschützer fordert vor allem …', options: ['mehr Daten für die Forschung.', 'Transparenz für Patienten.', 'ein Verbot von KI.'], a: 1 },
            { type: 'mc', q: 'Das Problem sieht er darin, dass …', options: ['Daten missbraucht werden könnten.', 'die Systeme zu langsam sind.', 'Ärzte die Technik ablehnen.'], a: 0 },
            { type: 'mc', audio: [['Hausarzt', 'Ich befürchte, dass die persönliche Beziehung zwischen Arzt und Patient leidet. Viele Menschen kommen nicht nur wegen einer Diagnose zu mir, sondern weil sie jemanden brauchen, der zuhört.']], q: 'Der Hausarzt befürchtet, dass …', options: ['die Diagnosen schlechter werden.', 'das persönliche Verhältnis leidet.', 'er seinen Job verliert.'], a: 1 },
            { type: 'mc', audio: [['Forscherin', 'Ein großes Problem ist, dass viele Systeme vor allem mit Daten von Männern mittleren Alters trainiert wurden. Bei Frauen oder älteren Menschen sind die Ergebnisse deshalb manchmal weniger zuverlässig.']], q: 'Die Forscherin kritisiert, dass …', options: ['die Daten zu einseitig sind.', 'die Systeme zu teuer sind.', 'es zu wenig Forschung gibt.'], a: 0 },
            { type: 'mc', q: 'Bei welchen Gruppen sind die Ergebnisse manchmal ungenauer?', options: ['Bei jungen Männern.', 'Bei Frauen und Älteren.', 'Bei Kindern.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3: Diskussion', instructions: 'Sie hören eine Diskussion zum Thema „Tempolimit auf Autobahnen“. Sie hören den Text zweimal. Wer vertritt welche Aussage? a = Moderator, b = Frau Wiese (Verkehrsforscherin), c = Herr Hartmann (Automobilclub).',
          audio: [
            ['Moderator', 'Deutschland ist eines der wenigen Länder ohne generelles Tempolimit auf Autobahnen. Ich möchte heute klären, ob sich das ändern sollte.'],
            ['Frau Wiese', 'Aus wissenschaftlicher Sicht spricht viel dafür. Ein Limit von 130 würde jedes Jahr mehrere Millionen Tonnen CO₂ einsparen, und das praktisch ohne Kosten.'],
            ['Herr Hartmann', 'Die Einsparung ist im Vergleich zu den Gesamtemissionen gering. Und auf vielen Abschnitten gibt es ohnehin schon Begrenzungen.'],
            ['Moderator', 'Was ist mit der Sicherheit?'],
            ['Frau Wiese', 'Studien zeigen, dass auf Strecken mit Tempolimit weniger schwere Unfälle passieren. Hohe Geschwindigkeitsunterschiede sind besonders gefährlich.'],
            ['Herr Hartmann', 'Unsere Autobahnen gehören trotzdem zu den sichersten Straßen in Europa. Ich halte flexible Anzeigen, die sich nach Verkehr und Wetter richten, für sinnvoller als ein starres Limit.'],
            ['Moderator', 'Viele Hörer haben uns geschrieben, dass sie ein Tempolimit entspannter finden würden.'],
            ['Frau Wiese', 'Das deckt sich mit Umfragen: Inzwischen ist eine Mehrheit der Bevölkerung dafür.'],
            ['Herr Hartmann', 'Umfragen hängen stark von der Fragestellung ab. Für unsere Mitglieder ist die freie Fahrt nach wie vor ein Stück Lebensqualität.']
          ],
          plays: 2,
          choices: [['a', 'Moderator'], ['b', 'Frau Wiese'], ['c', 'Herr Hartmann']],
          items: [
            { type: 'match', q: 'Deutschland ist international eine Ausnahme.', a: 'a' },
            { type: 'match', q: 'Ein Tempolimit wäre eine kostengünstige Klimaschutzmaßnahme.', a: 'b' },
            { type: 'match', q: 'Der Klimaeffekt wäre eher klein.', a: 'c' },
            { type: 'match', q: 'Große Unterschiede bei der Geschwindigkeit erhöhen das Risiko.', a: 'b' },
            { type: 'match', q: 'Variable Geschwindigkeitsregeln sind besser als feste.', a: 'c' },
            { type: 'match', q: 'Viele Zuhörende wünschen sich entspannteres Fahren.', a: 'a' },
            { type: 'match', q: 'Die Mehrheit der Menschen unterstützt ein Limit.', a: 'b' },
            { type: 'match', q: 'Ergebnisse von Befragungen sind mit Vorsicht zu genießen.', a: 'c' }
          ]
        },
        {
          title: 'Teil 4: Vortrag', instructions: 'Sie hören einen Vortrag. Sie hören den Text zweimal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [['Referent', 'Guten Tag. Mein Thema ist die Frage, warum wir Entscheidungen aufschieben, obwohl wir wissen, dass es uns schadet. Die Psychologie spricht von Prokrastination. Entgegen der verbreiteten Meinung hat sie wenig mit Faulheit zu tun. Prokrastination ist vielmehr ein Problem der Gefühlsregulation: Wir schieben Aufgaben auf, die unangenehme Gefühle auslösen, etwa Angst zu scheitern oder Langeweile. Kurzfristig fühlen wir uns dadurch besser, langfristig steigt jedoch der Stress. Besonders betroffen sind Menschen mit hohen Ansprüchen an sich selbst, denn für sie ist ein unvollkommenes Ergebnis kaum auszuhalten. Was hilft? Erstens: Aufgaben in sehr kleine Schritte zerlegen, sodass der Anfang leichtfällt. Zweitens: sich selbst mit Verständnis begegnen. Studien zeigen, dass Studierende, die sich nach einem aufgeschobenen Lernabend nicht verurteilten, beim nächsten Mal seltener aufschoben. Drittens: Ablenkungen bewusst reduzieren, etwa indem man das Handy in einen anderen Raum legt. Abschließend möchte ich betonen, dass gelegentliches Aufschieben völlig normal ist. Problematisch wird es erst, wenn es dauerhaft Lebensbereiche wie Studium, Beruf oder Gesundheit beeinträchtigt.']],
          plays: 2,
          items: [
            { type: 'mc', q: 'Prokrastination hat laut Referent vor allem mit … zu tun.', options: ['Faulheit', 'dem Umgang mit Gefühlen', 'Zeitmangel'], a: 1 },
            { type: 'mc', q: 'Wir schieben besonders Aufgaben auf, die …', options: ['unangenehme Gefühle auslösen.', 'sehr kurz sind.', 'wir gut können.'], a: 0 },
            { type: 'mc', q: 'Langfristig führt Aufschieben zu …', options: ['mehr Stress.', 'mehr Kreativität.', 'besseren Ergebnissen.'], a: 0 },
            { type: 'mc', q: 'Besonders betroffen sind Menschen, die …', options: ['wenig Arbeit haben.', 'hohe Erwartungen an sich stellen.', 'im Team arbeiten.'], a: 1 },
            { type: 'mc', q: 'Der erste Tipp lautet, …', options: ['Aufgaben in kleine Schritte aufzuteilen.', 'feste Belohnungen zu planen.', 'nur morgens zu arbeiten.'], a: 0 },
            { type: 'mc', q: 'Studierende, die sich selbst nicht verurteilten, …', options: ['schoben beim nächsten Mal seltener auf.', 'hatten schlechtere Noten.', 'lernten nur noch nachts.'], a: 0 },
            { type: 'mc', q: 'Problematisch ist Aufschieben, wenn es …', options: ['ab und zu vorkommt.', 'dauerhaft wichtige Lebensbereiche beeinträchtigt.', 'nur das Studium betrifft.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 75, points: 100,
      intro: 'Two tasks: a contribution to an online discussion and a semi-formal e-mail.',
      tasks: [
        {
          title: 'Teil 1: Diskussionsbeitrag in einem Forum (about 45 minutes)', weight: 60, register: 'neutral', minWords: 200,
          situation: '<p>In einem Online-Forum einer Wochenzeitung wird diskutiert: <strong>„Sollen Universitäten Studiengebühren erheben, um die Qualität der Lehre zu verbessern?“</strong></p><p>Schreiben Sie einen Diskussionsbeitrag.</p>',
          points: ['Stellen Sie die Situation in Ihrem Land oder in Deutschland kurz dar.', 'Erörtern Sie Vor- und Nachteile von Studiengebühren.', 'Gehen Sie auf mögliche Folgen für die Chancengleichheit ein.', 'Nehmen Sie begründet Stellung und machen Sie einen Vorschlag.'],
          keywords: [['in deutschland', 'in meinem land', 'derzeit', 'bundesländer', 'gebührenfrei', 'kostenlos'], ['vorteil', 'nachteil', 'einerseits', 'andererseits', 'qualität', 'finanzierung'], ['chancengleichheit', 'sozial', 'familien', 'herkunft', 'abschrecken', 'stipendien', 'gerecht'], ['meines erachtens', 'meiner meinung', 'ich plädiere', 'vorschlag', 'schlage vor', 'sollte', 'halte']],
          instructions: 'Gliedern Sie Ihren Text klar und behandeln Sie alle vier Punkte.',
          model: 'In Deutschland ist das Erststudium an staatlichen Hochschulen seit einigen Jahren in fast allen Bundesländern gebührenfrei. Gleichzeitig klagen viele Studierende über überfüllte Hörsäle und eine schlechte Betreuung. Es liegt daher nahe, über Studiengebühren als zusätzliche Einnahmequelle nachzudenken.\nEinerseits könnten Gebühren die finanzielle Lage der Hochschulen verbessern. Mit den Einnahmen ließen sich zusätzliche Lehrkräfte einstellen, Bibliotheken länger öffnen oder Tutorien anbieten. Befürworter argumentieren außerdem, dass Studierende, die selbst etwas bezahlen, ihr Studium zielstrebiger verfolgen. Andererseits zeigen Erfahrungen aus den Jahren, in denen Gebühren erhoben wurden, dass die Gelder nicht immer bei der Lehre ankamen, sondern teilweise in die Verwaltung flossen.\nSchwerer wiegt aus meiner Sicht die Frage der Chancengleichheit. Schon heute studieren Kinder aus Akademikerfamilien deutlich häufiger als Kinder aus Arbeiterfamilien. Zusätzliche Kosten würden gerade diejenigen abschrecken, die ohnehin zögern, ein Studium zu beginnen. Stipendien können dies nur teilweise ausgleichen, da sie oft an sehr gute Noten geknüpft sind.\nMeines Erachtens sollte Bildung deshalb gebührenfrei bleiben. Ich plädiere stattdessen dafür, die Grundfinanzierung der Hochschulen durch den Staat deutlich zu erhöhen und die Verteilung der Mittel stärker an die Qualität der Lehre zu koppeln. Nur so lässt sich verhindern, dass der Geldbeutel der Eltern über die Bildungschancen entscheidet.'
        },
        {
          title: 'Teil 2: Halbformelle E-Mail (about 30 minutes)', weight: 40, register: 'formal', minWords: 120,
          situation: '<p>Sie haben an einem dreitägigen Weiterbildungsseminar zum Thema „Projektmanagement“ teilgenommen. Die Organisatorin, Frau Dr. Roth, bittet alle Teilnehmenden um eine Rückmeldung.</p><p>Schreiben Sie Frau Dr. Roth eine E-Mail.</p>',
          points: ['Bedanken Sie sich und loben Sie einen Aspekt.', 'Kritisieren Sie höflich einen organisatorischen Punkt.', 'Machen Sie einen Verbesserungsvorschlag.', 'Fragen Sie nach einem Folgeangebot.'],
          keywords: [['danke', 'bedanken', 'gefallen', 'besonders', 'gelungen', 'hilfreich'], ['allerdings', 'leider', 'jedoch', 'kritik', 'raum', 'pausen', 'zeit', 'technik', 'verpflegung'], ['vorschlag', 'vorschlagen', 'wäre', 'könnte', 'würde', 'empfehlen'], ['folge', 'aufbau', 'fortsetzung', 'weitere', 'geplant', 'angebot']],
          instructions: 'Achten Sie auf einen höflichen, sachlichen Ton.',
          model: 'Sehr geehrte Frau Dr. Roth,\nvielen Dank für die Organisation des Seminars „Projektmanagement“. Besonders gelungen fand ich die praktischen Übungen am zweiten Tag, in denen wir mit echten Fallbeispielen gearbeitet haben. Davon kann ich vieles direkt in meinem Arbeitsalltag anwenden.\nKritisch anmerken möchte ich allerdings die Raumsituation. Der Seminarraum war für zwanzig Personen recht klein, und die Technik hat am ersten Tag mehrmals nicht funktioniert, sodass wertvolle Zeit verloren ging.\nFür künftige Veranstaltungen würde ich vorschlagen, einen größeren Raum zu buchen und die Technik vorab zu testen. Außerdem wären etwas längere Pausen für den Austausch zwischen den Teilnehmenden wünschenswert.\nAbschließend würde mich interessieren, ob ein Aufbauseminar geplant ist. Ich würde gern daran teilnehmen.\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 20, points: 100, prep: 20,
      intro: 'Two parts: a presentation with questions, and a discussion where you defend a position.',
      tasks: [
        {
          title: 'Teil 1: Präsentation (about 4 minutes, then questions)', seconds: 240,
          html: '<p>Wählen Sie ein Thema: <strong>A) „Sollte ein soziales Jahr nach der Schule Pflicht sein?“</strong> oder <strong>B) „Wie verändert Homeoffice unsere Städte?“</strong></p><ul><li>Führen Sie in das Thema ein und gliedern Sie Ihre Präsentation.</li><li>Stellen Sie verschiedene Positionen dar und gewichten Sie sie.</li><li>Nennen Sie Beispiele, auch aus Ihrem Heimatland.</li><li>Ziehen Sie ein Fazit.</li></ul><p>Beantworten Sie danach Fragen Ihres Gegenübers.</p>',
          tips: '<p>Ich möchte zunächst darauf eingehen, … / Ein Aspekt, der oft übersehen wird, ist … / Daraus lässt sich ableiten, dass … / Vergleicht man …, so zeigt sich … / Mein Fazit lautet: …</p>'
        },
        {
          title: 'Teil 2: Diskussion (about 6 minutes)', seconds: 360,
          html: '<p>Diskutieren Sie: <strong>„Sollte Werbung für ungesunde Lebensmittel, die sich an Kinder richtet, verboten werden?“</strong> Vertreten Sie Ihren Standpunkt, gehen Sie auf Gegenargumente ein und versuchen Sie, zu einem Ergebnis zu kommen.</p>',
          tips: '<p>Ich verstehe Ihren Einwand, möchte aber zu bedenken geben, dass … / Das greift meiner Ansicht nach zu kurz. / Darf ich kurz einhaken? / Lassen Sie uns festhalten, dass …</p>'
        }
      ]
    }
  ]
};
