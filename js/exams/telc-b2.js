EXAMS['telc-b2'] = {
  id: 'telc-b2', provider: 'telc', level: 'B2', name: 'telc Deutsch B2',
  about: 'Written exam of 140 minutes: Leseverstehen and Sprachbausteine (90 min together), Hörverstehen (about 20 min, each text heard once) and Schriftlicher Ausdruck (30 min). Oral exam in pairs of about 15 minutes after 20 minutes of preparation. 300 points in total.',
  passText: 'You need at least 60 percent in the written exam (135 of 225 points) and 60 percent in the oral exam (45 of 75 points).',
  pass: { type: 'groups', groups: [{ name: 'Schriftliche Prüfung', modules: ['lesen', 'sprachbausteine', 'hoeren', 'schreiben'], min: 0.6 }, { name: 'Mündliche Prüfung', modules: ['sprechen'], min: 0.6 }] },
  rubric: ['Aufgabenbewältigung (three of four points, developed)', 'Kommunikative Gestaltung (structure, register, linking)', 'Formale Richtigkeit (grammar and spelling)'],
  rubricHelp: 'At telc B2 you choose one of two tasks, write at least 150 words and develop three of the four points with more than one sentence each.',
  speakRubric: ['Ausdrucksfähigkeit (range of expression)', 'Aufgabenbewältigung (task and interaction)', 'Formale Richtigkeit (correctness)', 'Aussprache und Intonation'],
  modules: [
    {
      id: 'lesen', name: 'Leseverstehen', en: 'Reading', kind: 'items', minutes: 70, points: 75,
      intro: 'Three parts with 20 questions. In the real exam Leseverstehen and Sprachbausteine share 90 minutes.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie die Überschriften a–j und die Texte 1–5. Welche Überschrift passt am besten zu welchem Text?',
          text: `<p><strong>1</strong> Eine Studie der Universität Mannheim zeigt, dass Menschen, die regelmäßig ehrenamtlich tätig sind, zufriedener mit ihrem Leben sind. Besonders deutlich ist der Effekt bei Rentnerinnen und Rentnern, die durch das Engagement neue soziale Kontakte finden.</p>
<p><strong>2</strong> Nach heftiger Kritik von Anwohnern hat der Stadtrat beschlossen, das geplante Einkaufszentrum am Fluss nicht zu bauen. Stattdessen soll dort ein Park mit Spielflächen entstehen.</p>
<p><strong>3</strong> Immer mehr Unternehmen verzichten bei Bewerbungen auf Fotos und Angaben zu Alter oder Herkunft. Sie wollen so verhindern, dass Vorurteile die Auswahl beeinflussen.</p>
<p><strong>4</strong> Ein Start-up aus Dresden hat einen Akku entwickelt, der aus Salz statt aus seltenen Metallen besteht. Er soll günstiger und umweltfreundlicher sein, ist allerdings noch deutlich schwerer als herkömmliche Modelle.</p>
<p><strong>5</strong> Die Zahl der Auszubildenden im Handwerk ist erstmals seit Jahren wieder gestiegen. Experten führen das auf bessere Bezahlung und gezielte Werbung in sozialen Medien zurück.</p>`,
          choices: [['a', 'Grün statt Konsum'], ['b', 'Neue Energiespeicher mit Schwächen'], ['c', 'Helfen macht glücklich'], ['d', 'Faire Chancen für alle Bewerber'], ['e', 'Handwerk wieder gefragt'], ['f', 'Rentner arbeiten länger'], ['g', 'Stadtrat plant neues Einkaufszentrum'], ['h', 'Fotos in Bewerbungen wichtiger denn je'], ['i', 'Elektroautos werden billiger'], ['j', 'Weniger Ausbildungsplätze in Sachsen']],
          items: [{ type: 'match', q: 'Text 1', a: 'c' }, { type: 'match', q: 'Text 2', a: 'a' }, { type: 'match', q: 'Text 3', a: 'd' }, { type: 'match', q: 'Text 4', a: 'b' }, { type: 'match', q: 'Text 5', a: 'e' }]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text und die Aufgaben. Wählen Sie a, b oder c.',
          text: `<h3>Wenn der Chef ein Algorithmus ist</h3>
<p>Für viele Fahrradkuriere und Lieferfahrer ist es Alltag: Aufträge, Routen und sogar die Bewertung ihrer Arbeit kommen nicht von einem Menschen, sondern von einer App. Was Unternehmen als effiziente Organisation beschreiben, empfinden viele Beschäftigte als Kontrollverlust. „Man weiß nie genau, warum man weniger Aufträge bekommt“, berichtet ein Kurier aus Köln. „Es gibt niemanden, mit dem man darüber reden kann.“</p>
<p>Arbeitsrechtler sehen hier eine Lücke. Zwar gelten für Angestellte dieselben Schutzrechte wie in anderen Branchen, doch viele Fahrer sind als Selbstständige registriert und haben damit weder Anspruch auf Urlaub noch auf Lohnfortzahlung im Krankheitsfall. Die Europäische Union hat deshalb eine Richtlinie beschlossen, nach der Plattformbeschäftigte künftig leichter als Arbeitnehmer anerkannt werden sollen.</p>
<p>Die Unternehmen warnen, dass dadurch Flexibilität verloren gehe, die viele Fahrer schätzten, etwa Studierende, die nur gelegentlich arbeiten wollen. Gewerkschaften halten dagegen, dass Flexibilität kein Grund sein dürfe, auf grundlegende Rechte zu verzichten. Wie die Richtlinie in deutsches Recht umgesetzt wird, ist noch offen.</p>`,
          items: [
            { type: 'mc', q: 'Viele Lieferfahrer …', options: ['bekommen ihre Aufträge über eine App.', 'arbeiten direkt mit ihrem Chef zusammen.', 'planen ihre Routen selbst.'], a: 0 },
            { type: 'mc', q: 'Der Kurier aus Köln kritisiert, dass …', options: ['er zu viele Aufträge bekommt.', 'Entscheidungen nicht nachvollziehbar sind.', 'die App zu kompliziert ist.'], a: 1 },
            { type: 'mc', q: 'Fahrer, die als Selbstständige arbeiten, …', options: ['haben mehr Urlaub als Angestellte.', 'bekommen im Krankheitsfall kein Gehalt.', 'verdienen grundsätzlich mehr.'], a: 1 },
            { type: 'mc', q: 'Die EU-Richtlinie soll …', options: ['Lieferdienste verbieten.', 'die Anerkennung als Arbeitnehmer erleichtern.', 'die Preise für Lieferungen senken.'], a: 1 },
            { type: 'mc', q: 'Die Gewerkschaften meinen, dass …', options: ['Flexibilität wichtiger ist als Rechte.', 'Studierende nicht als Fahrer arbeiten sollten.', 'Flexibilität Grundrechte nicht ersetzen darf.'], a: 2 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die Situationen 1–10 und die Anzeigen a–l. Welche Anzeige passt? Für zwei Situationen gibt es keine passende Anzeige: Wählen Sie dann x.',
          choices: [
            ['a', 'Coaching für Führungskräfte: Konflikte im Team lösen, Wochenendseminar.'],
            ['b', 'Mietrechtsberatung für Mitglieder, Termine nach Vereinbarung.'],
            ['c', 'Sprachtandem gesucht: Spanisch gegen Deutsch, gern auch online.'],
            ['d', 'Bürogemeinschaft vermietet Schreibtischplätze, flexibel ab einem Tag.'],
            ['e', 'Kurs „Excel für Fortgeschrittene“, berufsbegleitend, abends.'],
            ['f', 'Familienhotel an der Nordsee, Kinderbetreuung inklusive, Hunde willkommen.'],
            ['g', 'Lastenrad zu verleihen, stundenweise, Abholung im Stadtzentrum.'],
            ['h', 'Rhetorikkurs: Sicher vor Publikum sprechen, Kleingruppe.'],
            ['i', 'Nachhilfe-Plattform: Studierende helfen Schülern, alle Fächer.'],
            ['j', 'Wanderreise in den Alpen für Singles, 7 Tage, Hüttenübernachtung.'],
            ['k', 'Beratung zur Existenzgründung, kostenloser Erstkontakt, IHK.'],
            ['l', 'Chor sucht Männerstimmen, Proben donnerstags, keine Vorkenntnisse nötig.'],
            ['x', 'Keine passende Anzeige']
          ],
          items: [
            { type: 'match', q: 'Ihre Kollegin muss bald eine Präsentation vor 200 Leuten halten und ist sehr nervös.', a: 'h' },
            { type: 'match', q: 'Ihr Vermieter will die Miete stark erhöhen. Sie möchten wissen, ob das erlaubt ist.', a: 'b' },
            { type: 'match', q: 'Ein Freund möchte ein eigenes Café eröffnen und braucht Rat.', a: 'k' },
            { type: 'match', q: 'Sie arbeiten freiberuflich und suchen einen Arbeitsplatz außerhalb Ihrer Wohnung.', a: 'd' },
            { type: 'match', q: 'Sie möchten für den Beruf Ihre Tabellenkalkulation verbessern.', a: 'e' },
            { type: 'match', q: 'Ihr Nachbar singt gern und sucht ein Hobby mit anderen Menschen.', a: 'l' },
            { type: 'match', q: 'Sie möchten einen Umzug mit wenigen Kisten selbst erledigen, ohne Auto.', a: 'g' },
            { type: 'match', q: 'Eine Bekannte möchte ihr Spanisch verbessern.', a: 'c' },
            { type: 'match', q: 'Sie suchen eine Unterkunft für einen Städtetrip nach Wien.', a: 'x' },
            { type: 'match', q: 'Ihr Chef sucht ein Seminar zum Thema Zeitmanagement.', a: 'x' }
          ]
        }
      ]
    },
    {
      id: 'sprachbausteine', name: 'Sprachbausteine', en: 'Grammar and vocabulary', kind: 'items', minutes: 20, points: 30,
      intro: 'Two gap texts with 20 gaps.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Text. Welches Wort passt in die Lücke? Wählen Sie a, b oder c.',
          text: `<p>Sehr geehrte Frau Dr. Hartmann,</p>
<p>(1) ___ Ihrer Anzeige in der „Leipziger Zeitung“ bewerbe ich mich um die Stelle als Projektassistentin. Nach meinem Studium der Wirtschaftswissenschaften habe ich drei Jahre in einem Forschungsinstitut gearbeitet, (2) ___ ich für die Organisation von Konferenzen zuständig war. Dabei habe ich gelernt, auch unter Zeitdruck den Überblick zu (3) ___.</p>
<p>Besonders reizt mich an Ihrer Stelle, (4) ___ ich eng mit internationalen Partnern zusammenarbeiten würde. (5) ___ Deutsch und Englisch spreche ich fließend Spanisch. Ich bin es gewohnt, sowohl selbstständig (6) ___ auch im Team zu arbeiten.</p>
<p>Über eine Einladung zu einem Vorstellungsgespräch (7) ___ ich mich sehr freuen. Für Rückfragen stehe ich Ihnen gern zur (8) ___. Meine Unterlagen (9) ___ Sie im Anhang.</p>
<p>Mit freundlichen (10) ___<br>Maria Schulz</p>`,
          items: [
            { type: 'mc', q: '1', options: ['Aufgrund', 'Wegen', 'Trotz'], a: 0 },
            { type: 'mc', q: '2', options: ['wo', 'wohin', 'woher'], a: 0 },
            { type: 'mc', q: '3', options: ['bleiben', 'behalten', 'halten'], a: 1 },
            { type: 'mc', q: '4', options: ['ob', 'dass', 'damit'], a: 1 },
            { type: 'mc', q: '5', options: ['Außer', 'Neben', 'Statt'], a: 1 },
            { type: 'mc', q: '6', options: ['wie', 'als', 'und'], a: 1 },
            { type: 'mc', q: '7', options: ['würde', 'werde', 'wäre'], a: 0 },
            { type: 'mc', q: '8', options: ['Verfügung', 'Hilfe', 'Seite'], a: 0 },
            { type: 'mc', q: '9', options: ['finden', 'sehen', 'lesen'], a: 0 },
            { type: 'mc', q: '10', options: ['Grüßen', 'Wünschen', 'Gruß'], a: 0 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text. Welches Wort (a–o) passt in die Lücke? Jedes Wort passt nur einmal.',
          text: `<h3>Digital entgiften</h3>
<p>Immer mehr Menschen (11) ___ sich bewusst Auszeiten vom Smartphone. Beim sogenannten Digital Detox (12) ___ man für eine bestimmte Zeit auf digitale Geräte. Anbieter von Hotels und Reisen haben den Trend längst (13) ___: Es gibt Urlaubsangebote, bei denen die Gäste ihr Handy bei der (14) ___ abgeben. Psychologen begrüßen grundsätzlich, dass Menschen ihr Nutzungsverhalten (15) ___. Sie warnen jedoch davor, zu viel von einer kurzen Pause zu (16) ___. Wichtiger sei es, im Alltag feste Regeln (17) ___ einzuführen, zum Beispiel kein Handy beim Essen oder im (18) ___. Nur so ließen sich Gewohnheiten (19) ___ ändern. Wer es schafft, gewinnt oft mehr Zeit für Dinge, die ihm wirklich (20) ___ sind.</p>`,
          choices: [['a', 'gönnen'], ['b', 'verzichtet'], ['c', 'erkannt'], ['d', 'Ankunft'], ['e', 'hinterfragen'], ['f', 'erwarten'], ['g', 'dafür'], ['h', 'Schlafzimmer'], ['i', 'dauerhaft'], ['j', 'wichtig'], ['k', 'Abreise'], ['l', 'verboten'], ['m', 'davon'], ['n', 'ersetzt'], ['o', 'selten']],
          items: [
            { type: 'match', q: '11', a: 'a' }, { type: 'match', q: '12', a: 'b' }, { type: 'match', q: '13', a: 'c' }, { type: 'match', q: '14', a: 'd' }, { type: 'match', q: '15', a: 'e' },
            { type: 'match', q: '16', a: 'f' }, { type: 'match', q: '17', a: 'g' }, { type: 'match', q: '18', a: 'h' }, { type: 'match', q: '19', a: 'i' }, { type: 'match', q: '20', a: 'j' }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hörverstehen', en: 'Listening', kind: 'items', minutes: 20, points: 75,
      intro: 'Three parts with 20 questions. Each text is heard only once.',
      parts: [
        {
          title: 'Teil 1: Nachrichten', instructions: 'Sie hören fünf kurze Nachrichten. Sie hören sie einmal. Richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Nachrichten', 'Die Inflation in Deutschland ist im vergangenen Monat leicht gesunken. Vor allem Energie wurde günstiger, Lebensmittel kosteten dagegen etwas mehr als im Vormonat.']], q: 'Lebensmittel sind billiger geworden.', a: 'f' },
            { type: 'tf', audio: [['Nachrichten', 'In Niedersachsen beginnen die Schulferien in diesem Jahr eine Woche später als geplant. Grund sind Bauarbeiten an mehreren Schulgebäuden.']], q: 'Die Ferien in Niedersachsen beginnen später.', a: 'r' },
            { type: 'tf', audio: [['Nachrichten', 'Der Flughafen Frankfurt meldet einen neuen Rekord bei den Passagierzahlen. Besonders stark gestiegen ist die Zahl der Reisenden nach Asien.']], q: 'In Frankfurt sind weniger Menschen geflogen.', a: 'f' },
            { type: 'tf', audio: [['Nachrichten', 'Ein Gericht in Karlsruhe hat entschieden, dass Vermieter Haustiere nicht generell verbieten dürfen. Es müsse immer im Einzelfall entschieden werden.']], q: 'Vermieter dürfen Haustiere nicht pauschal verbieten.', a: 'r' },
            { type: 'tf', audio: [['Nachrichten', 'Im Fußball hat der FC Union sein Heimspiel gegen Bochum mit null zu zwei verloren und steht nun auf dem vorletzten Tabellenplatz.']], q: 'Union hat das Spiel gewonnen.', a: 'f' }
          ]
        },
        {
          title: 'Teil 2: Interview', instructions: 'Sie hören ein Interview. Sie hören es einmal. Richtig oder falsch?',
          audio: [
            ['Moderator', 'Frau Hennig, Sie haben ein Buch über das Leben ohne eigenes Auto geschrieben. Wie lange leben Sie schon so?'],
            ['Frau Hennig', 'Seit acht Jahren. Damals ist unser altes Auto kaputtgegangen, und wir wollten ausprobieren, ob es auch ohne geht. Mit zwei Kindern auf dem Land war das ein Experiment.'],
            ['Moderator', 'Und, war es schwierig?'],
            ['Frau Hennig', 'Am Anfang schon. Der Bus fährt bei uns nur jede Stunde, am Wochenende noch seltener. Wir haben gelernt, unsere Wege besser zu planen.'],
            ['Moderator', 'Wie kaufen Sie ein?'],
            ['Frau Hennig', 'Einmal pro Woche mit dem Lastenrad im Nachbarort. Und für größere Sachen leihen wir uns ein Auto über eine Plattform, auf der Privatleute ihre Autos verleihen.'],
            ['Moderator', 'Sparen Sie dadurch Geld?'],
            ['Frau Hennig', 'Deutlich. Wir haben ausgerechnet, dass uns ein eigenes Auto mit allen Kosten etwa 400 Euro im Monat gekostet hat. Heute geben wir für Mobilität weniger als die Hälfte aus.'],
            ['Moderator', 'Gibt es etwas, das Sie vermissen?'],
            ['Frau Hennig', 'Spontane Ausflüge. Wenn das Wetter schön ist und man einfach ans Meer fahren möchte, ist das ohne Auto kompliziert. Aber die Vorteile überwiegen für uns klar.'],
            ['Moderator', 'Würden Sie das jedem empfehlen?'],
            ['Frau Hennig', 'Nein, das wäre unfair. Wer zum Beispiel im Schichtdienst arbeitet oder Angehörige pflegt, ist auf dem Land oft auf ein Auto angewiesen. Da muss die Politik erst bessere Angebote schaffen.']
          ],
          plays: 1,
          items: [
            { type: 'tf', q: 'Frau Hennig lebt seit acht Jahren ohne eigenes Auto.', a: 'r' },
            { type: 'tf', q: 'Die Familie wohnt in einer Großstadt.', a: 'f' },
            { type: 'tf', q: 'Am Wochenende fährt der Bus häufiger.', a: 'f' },
            { type: 'tf', q: 'Sie kaufen einmal pro Woche mit dem Lastenrad ein.', a: 'r' },
            { type: 'tf', q: 'Für große Einkäufe leihen sie ein Auto von Privatleuten.', a: 'r' },
            { type: 'tf', q: 'Ihr eigenes Auto hat etwa 400 Euro im Monat gekostet.', a: 'r' },
            { type: 'tf', q: 'Heute geben sie mehr Geld für Mobilität aus.', a: 'f' },
            { type: 'tf', q: 'Spontane Ausflüge sind ohne Auto schwieriger.', a: 'r' },
            { type: 'tf', q: 'Sie empfiehlt allen Menschen, ohne Auto zu leben.', a: 'f' },
            { type: 'tf', q: 'Sie sieht die Politik in der Verantwortung.', a: 'r' }
          ]
        },
        {
          title: 'Teil 3: Durchsagen und Ansagen', instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Ansage', 'Willkommen beim Kundenservice Ihrer Krankenkasse. Für Fragen zu Ihrer Versichertenkarte drücken Sie die Eins, für Fragen zu Rechnungen die Zwei.']], q: 'Bei Fragen zu Rechnungen drückt man die Eins.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Sehr geehrte Fluggäste, wegen dichten Nebels verzögern sich heute alle Abflüge um etwa eine Stunde. Bitte achten Sie auf die Anzeigetafeln.']], q: 'Die Flüge starten wegen Nebels später.', a: 'r' },
            { type: 'tf', audio: [['Ansage', 'Hallo, hier ist die Autovermietung Mobil. Das von Ihnen reservierte Fahrzeug ist leider nicht verfügbar. Wir bieten Ihnen ohne Aufpreis ein größeres Modell an.']], q: 'Der Kunde muss für das größere Auto mehr bezahlen.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Liebe Besucherinnen und Besucher, die Führung durch die Ausstellung beginnt in zehn Minuten am Eingang zu Saal drei.']], q: 'Die Führung beginnt am Eingang zu Saal drei.', a: 'r' },
            { type: 'tf', audio: [['Ansage', 'Hier ist die Mailbox von Dr. Kessler. Ich bin bis Ende der Woche auf einer Konferenz. In dringenden Fällen wenden Sie sich bitte an meine Kollegin Frau Yıldız.']], q: 'Dr. Kessler ist diese Woche im Büro.', a: 'f' }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schriftlicher Ausdruck', en: 'Writing', kind: 'writing', minutes: 30, points: 45, choose: true,
      intro: 'Choose one of two tasks. Write at least 150 words and develop three of the four points (or two points plus one of your own).',
      tasks: [
        {
          title: 'Aufgabe A: Beschwerde an ein Reiseunternehmen', weight: 45, register: 'formal', minWords: 150, needPoints: 3,
          situation: '<p>Sie haben bei „Sonnenreisen“ eine einwöchige Busreise nach Prag gebucht. Leider gab es viele Probleme. Schreiben Sie an das Reiseunternehmen.</p>',
          points: ['Grund für Ihr Schreiben', 'Beschreibung der Probleme (Hotel, Programm, Reiseleitung)', 'Ihre Forderung (Erstattung, Gutschein)', 'Was Sie tun, wenn Sie keine Antwort erhalten'],
          keywords: [['buchung', 'gebucht', 'reise', 'beschwerde', 'beschweren', 'wende mich'], ['hotel', 'zimmer', 'programm', 'reiseleit', 'bus', 'schmutzig', 'laut', 'ausgefallen'], ['erstattung', 'zurück', 'gutschein', 'entschädigung', 'fordere', 'erwarte'], ['keine antwort', 'anwalt', 'verbraucherzentrale', 'rechtliche', 'frist', 'bis zum']],
          instructions: 'Wählen Sie drei der vier Punkte (oder zwei plus einen eigenen Aspekt) und schreiben Sie zu jedem mehr als einen Satz. Betreff, Anrede, Einleitung und Schluss nicht vergessen.',
          model: 'Betreff: Beschwerde über die Busreise nach Prag vom 3. bis 10. Mai\nSehr geehrte Damen und Herren,\nvom 3. bis 10. Mai habe ich an Ihrer Busreise nach Prag teilgenommen, die ich im Februar über Ihre Website gebucht hatte. Leider entsprach die Reise in vielen Punkten nicht Ihrer Beschreibung, weshalb ich mich heute an Sie wende.\nIn Ihrem Katalog wurde ein ruhiges Hotel in der Altstadt versprochen. Tatsächlich lag das Hotel an einer stark befahrenen Straße am Stadtrand, und das Zimmer war so laut, dass ich kaum schlafen konnte. Außerdem fielen zwei der vier angekündigten Ausflüge ohne Erklärung aus. Die Reiseleiterin war zwar freundlich, konnte aber auf unsere Fragen häufig keine Antwort geben.\nAus diesen Gründen erwarte ich eine Erstattung von 30 Prozent des Reisepreises. Alternativ wäre ich auch mit einem Gutschein in gleicher Höhe für eine andere Reise einverstanden.\nSollte ich bis zum 15. Juni keine Antwort von Ihnen erhalten, werde ich mich an die Verbraucherzentrale wenden.\nMit freundlichen Grüßen\nMaria Schulz'
        },
        {
          title: 'Aufgabe B: Anfrage an eine Sprachschule', weight: 45, register: 'formal', minWords: 150, needPoints: 3,
          situation: '<p>Sie möchten im Sommer einen vierwöchigen Intensivkurs Deutsch an der Sprachschule „Lingua Plus“ in Freiburg machen. Schreiben Sie an die Sprachschule.</p>',
          points: ['Grund für Ihr Schreiben und Ihr Sprachniveau', 'Fragen zu Kursinhalten und Gruppengröße', 'Fragen zu Unterkunft und Freizeitprogramm', 'Preise und Zahlungsbedingungen'],
          keywords: [['interesse', 'intensivkurs', 'niveau', 'b1', 'b2', 'lerne', 'kenntnisse'], ['inhalt', 'gruppe', 'teilnehmer', 'unterricht', 'prüfung', 'stunden'], ['unterkunft', 'gastfamilie', 'wohnheim', 'zimmer', 'freizeit', 'ausflüge', 'programm'], ['preis', 'kosten', 'kostet', 'zahlung', 'ermäßigung', 'anzahlung', 'überweisung']],
          instructions: 'Wählen Sie drei der vier Punkte (oder zwei plus einen eigenen Aspekt) und schreiben Sie zu jedem mehr als einen Satz.',
          model: 'Betreff: Anfrage zum Intensivkurs Deutsch im Juli\nSehr geehrte Damen und Herren,\nauf Ihrer Website habe ich gelesen, dass Sie im Sommer Intensivkurse anbieten. Ich lerne seit zwei Jahren Deutsch und habe vor Kurzem die B1-Prüfung bestanden. Nun möchte ich im Juli vier Wochen lang an einem Kurs auf dem Niveau B2 teilnehmen.\nZunächst würde mich interessieren, wie viele Teilnehmende in einer Gruppe sind und wie viele Unterrichtsstunden pro Woche stattfinden. Bereitet der Kurs auch auf die telc-Prüfung B2 vor?\nAußerdem bräuchte ich eine Unterkunft. Vermitteln Sie Zimmer in Gastfamilien, oder gibt es ein Wohnheim? Ich würde gern bei einer Familie wohnen, um möglichst viel Deutsch zu sprechen.\nSchließlich möchte ich wissen, wie viel der Kurs insgesamt kostet und ob man eine Anzahlung leisten muss. Gibt es eine Ermäßigung für Studierende?\nÜber eine baldige Antwort würde ich mich sehr freuen.\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Mündlicher Ausdruck', en: 'Speaking', kind: 'speaking', minutes: 15, points: 75, prep: 20,
      intro: 'Three parts in pairs: a short presentation about experiences, a discussion, and planning something together.',
      tasks: [
        { title: 'Teil 1: Präsentation (about 2–3 minutes each)', seconds: 180, html: '<p>Sprechen Sie über das Thema <strong>„Ein Ereignis, das Ihr Leben verändert hat“</strong>. Beschreiben Sie, was passiert ist, wie Sie sich gefühlt haben und was sich dadurch verändert hat. Reagieren Sie danach auf die Präsentation Ihres Partners mit Fragen.</p>', tips: '<p>Ich möchte über … erzählen. / Damals war ich … / Das hat mich sehr geprägt, weil … / Seitdem … / Hast du etwas Ähnliches erlebt?</p>' },
        { title: 'Teil 2: Diskussion (about 5 minutes)', seconds: 300, html: '<p>Diskutieren Sie die Frage: <strong>„Sollten Supermärkte am Sonntag öffnen dürfen?“</strong> Sie haben dazu einen kurzen Text gelesen. Tauschen Sie Argumente aus, gehen Sie auf die Argumente Ihres Partners ein und begründen Sie Ihre Meinung.</p>', tips: '<p>Ich bin der Ansicht, dass … / Ein wichtiges Argument dafür ist … / Da muss ich widersprechen: … / Da hast du recht, allerdings … / Wie siehst du das?</p>' },
        { title: 'Teil 3: Gemeinsam etwas planen (about 5 minutes)', seconds: 300, html: '<p>Ihre Abteilung möchte ein Wochenendseminar zum Thema Teamarbeit für zwölf Kollegen organisieren. Planen Sie gemeinsam: <em>Ort und Termin · Programm · Unterkunft und Verpflegung · Kosten · Wer übernimmt welche Aufgaben?</em></p>', tips: '<p>Was hältst du davon, wenn wir …? / Ich würde vorschlagen, … / Das könnte schwierig werden, weil … / Dann kümmere ich mich um … / Fassen wir zusammen: …</p>' }
      ]
    }
  ]
};
