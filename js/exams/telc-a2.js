EXAMS['telc-a2'] = {
  id: 'telc-a2', provider: 'telc', level: 'A2', name: 'telc Deutsch A2 (Start Deutsch 2)',
  about: 'Hören (about 20 min), Lesen (about 30 min) and Schreiben (about 20 min) plus a pair speaking test of about 15 minutes. In this simulation each part counts 25 points.',
  passText: 'You pass with at least 60 percent of the points in total.',
  pass: { type: 'total', min: 0.6 },
  rubric: ['Aufgabenbewältigung (task completion)', 'Kommunikative Gestaltung (clear and linked)', 'Formale Richtigkeit (correctness)'],
  rubricHelp: 'At A2 your text should cover every point, be easy to follow and use simple linking words like und, aber, weil.',
  speakRubric: ['Aufgabenbewältigung (task completion)', 'Interaktion (reacting to your partner)', 'Formale Richtigkeit (correctness)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 20, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie a, b oder c.',
          items: [
            { type: 'mc', audio: [['Ansage', 'Sie sind mit dem Kundenservice der Stadtwerke verbunden. Unser Büro ist von Montag bis Donnerstag von 8 bis 16 Uhr geöffnet, am Freitag bis 13 Uhr.']], plays: 2, q: 'Wann ist das Büro am Freitag geöffnet?', options: ['Bis 13 Uhr.', 'Bis 16 Uhr.', 'Gar nicht.'], a: 0 },
            { type: 'mc', audio: [['Nachricht', 'Hallo Herr Peters, hier ist Ihre Vermieterin. Der Handwerker kommt am Donnerstag um zehn, um die Heizung zu reparieren. Bitte sind Sie dann zu Hause.']], plays: 2, q: 'Was wird repariert?', options: ['Die Heizung.', 'Das Fenster.', 'Die Dusche.'], a: 0 },
            { type: 'mc', audio: [['Radio', 'Ab Montag fährt die Straßenbahnlinie 3 wegen Bauarbeiten zwei Wochen lang nur bis zum Rathaus.']], plays: 2, q: 'Wie lange dauern die Bauarbeiten?', options: ['Zwei Tage.', 'Eine Woche.', 'Zwei Wochen.'], a: 2 },
            { type: 'mc', audio: [['Nachricht', 'Hi Lea, hier ist Ben. Das Fußballtraining ist heute nicht um fünf, sondern schon um vier Uhr. Bring bitte den Ball mit!']], plays: 2, q: 'Wann ist das Training heute?', options: ['Um 4 Uhr.', 'Um 5 Uhr.', 'Um 6 Uhr.'], a: 0 },
            { type: 'mc', audio: [['Durchsage', 'Liebe Besucher, das Museum schließt in einer halben Stunde. Der Museumsshop bleibt bis 18 Uhr geöffnet.']], plays: 2, q: 'Was ist bis 18 Uhr offen?', options: ['Das Museum.', 'Der Shop.', 'Das Café.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Richtig oder falsch?',
          audio: [
            ['Ayşe', 'Hallo Markus, du siehst müde aus. Alles in Ordnung?'],
            ['Markus', 'Ach, wir sind gerade umgezogen. Die neue Wohnung ist größer, aber es gibt noch so viel zu tun.'],
            ['Ayşe', 'Wo wohnt ihr jetzt?'],
            ['Markus', 'In der Nähe vom Park. Die Kinder haben jetzt endlich jedes ein eigenes Zimmer.'],
            ['Ayşe', 'Schön! Und wie kommst du jetzt zur Arbeit?'],
            ['Markus', 'Mit dem Fahrrad, das sind nur zehn Minuten. Früher bin ich eine halbe Stunde mit dem Bus gefahren.'],
            ['Ayşe', 'Braucht ihr noch Hilfe beim Einrichten?'],
            ['Markus', 'Ja, gern! Am Samstag bauen wir die Küche auf. Kannst du kommen?'],
            ['Ayşe', 'Am Samstag arbeite ich bis zwei, aber danach komme ich gern.']
          ],
          plays: 1,
          items: [
            { type: 'tf', q: 'Markus ist in eine kleinere Wohnung gezogen.', a: 'f' },
            { type: 'tf', q: 'Die neue Wohnung ist in der Nähe von einem Park.', a: 'r' },
            { type: 'tf', q: 'Markus fährt jetzt mit dem Bus zur Arbeit.', a: 'f' },
            { type: 'tf', q: 'Am Samstag wird die Küche aufgebaut.', a: 'r' },
            { type: 'tf', q: 'Ayşe kann am Samstagnachmittag helfen.', a: 'r' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören fünf kurze Gespräche. Sie hören jedes Gespräch zweimal. Wo sind die Personen? Wählen Sie den passenden Ort.',
          choices: [['a', 'in der Apotheke'], ['b', 'im Restaurant'], ['c', 'am Bahnhof'], ['d', 'in der Bank'], ['e', 'beim Friseur'], ['f', 'in der Schule']],
          items: [
            { type: 'match', audio: [['Kunde', 'Ich hätte gern etwas gegen Kopfschmerzen.'], ['Frau', 'Nehmen Sie diese Tabletten, dreimal am Tag nach dem Essen.']], plays: 2, q: 'Gespräch 1', a: 'a' },
            { type: 'match', audio: [['Kellner', 'Möchten Sie schon bestellen?'], ['Gast', 'Ja, ich nehme die Tomatensuppe und danach den Fisch.']], plays: 2, q: 'Gespräch 2', a: 'b' },
            { type: 'match', audio: [['Frau', 'Wie möchten Sie die Haare? Kürzer?'], ['Mann', 'Ja, bitte, an den Seiten ganz kurz.']], plays: 2, q: 'Gespräch 3', a: 'e' },
            { type: 'match', audio: [['Mann', 'Ich möchte ein Konto eröffnen.'], ['Frau', 'Gern. Haben Sie Ihren Ausweis dabei?']], plays: 2, q: 'Gespräch 4', a: 'd' },
            { type: 'match', audio: [['Frau', 'Fährt der Zug nach Dresden von Gleis zwei?'], ['Mann', 'Nein, heute von Gleis fünf. Er hat zehn Minuten Verspätung.']], plays: 2, q: 'Gespräch 5', a: 'c' }
          ]
        }
      ]
    },
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 30, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Text aus der Zeitung. Richtig oder falsch?',
          text: `<h3>Jung und Alt kochen zusammen</h3>
<p>Im Stadtteilzentrum Nord gibt es seit Januar ein neues Angebot: Jeden Donnerstag kochen Seniorinnen und Senioren zusammen mit Jugendlichen. Die Idee hatte die Sozialarbeiterin Jana Kurz. „Viele ältere Menschen leben allein und haben wenig Kontakt“, sagt sie. „Und die Jugendlichen lernen hier, wie man ohne Fertigprodukte kocht.“</p>
<p>Die Teilnahme ist kostenlos, nur für die Lebensmittel bezahlt jeder zwei Euro. Nach dem Kochen essen alle zusammen. Inzwischen kommen jede Woche etwa fünfzehn Personen. Im Sommer möchte die Gruppe ein Kochbuch mit ihren Lieblingsrezepten herausgeben.</p>`,
          items: [
            { type: 'tf', q: 'Das Angebot gibt es seit einem Jahr.', a: 'f' },
            { type: 'tf', q: 'Die Gruppe trifft sich jeden Donnerstag.', a: 'r' },
            { type: 'tf', q: 'Die Teilnehmer bezahlen etwas für das Essen.', a: 'r' },
            { type: 'tf', q: 'Nach dem Kochen gehen alle nach Hause und essen dort.', a: 'f' },
            { type: 'tf', q: 'Die Gruppe plant ein Kochbuch.', a: 'r' }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige: Wählen Sie dann 0.',
          choices: [
            ['a', 'Umzugskartons gratis abzugeben, ca. 30 Stück, Abholung bis Freitag.'],
            ['b', 'Babysitterin (Studentin) sucht Familien, abends und am Wochenende.'],
            ['c', 'Gebrauchte Waschmaschine, 2 Jahre alt, 150 €, mit Lieferung.'],
            ['d', 'Lauftreff für alle: Dienstag 18 Uhr am Stadion, kostenlos.'],
            ['e', 'Nachhilfe in Deutsch für Schüler der Klassen 5–10, günstig.'],
            ['0', 'Keine passende Anzeige']
          ],
          items: [
            { type: 'match', q: 'Familie Kowalski möchte am Samstagabend ins Theater gehen. Wer passt auf die Kinder auf?', a: 'b' },
            { type: 'match', q: 'Sie ziehen bald um und brauchen Kartons.', a: 'a' },
            { type: 'match', q: 'Ihr Nachbar möchte regelmäßig mit anderen Leuten joggen.', a: 'd' },
            { type: 'match', q: 'Sie suchen einen gebrauchten Kühlschrank.', a: '0' },
            { type: 'match', q: 'Ihre Waschmaschine ist kaputt. Sie brauchen schnell eine neue.', a: 'c' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die E-Mail. Wählen Sie a, b oder c.',
          text: `<p>Liebe Kolleginnen und Kollegen,</p>
<p>unser Betriebsausflug findet dieses Jahr am Freitag, den 14. Juni, statt. Wir fahren mit dem Bus an den Cospudener See. Treffpunkt ist um 9 Uhr vor dem Haupteingang. Bitte denkt an bequeme Schuhe, denn wir machen am Vormittag eine Wanderung um den See.</p>
<p>Mittagessen gibt es in einem Restaurant am Hafen, die Firma bezahlt. Am Nachmittag können alle, die möchten, Tretboot fahren oder schwimmen. Wir sind gegen 18 Uhr zurück.</p>
<p>Bitte meldet euch bis zum 31. Mai bei mir an.</p>
<p>Viele Grüße<br>Doris aus der Personalabteilung</p>`,
          items: [
            { type: 'mc', q: 'Wie fahren die Kollegen zum See?', options: ['Mit dem Zug.', 'Mit dem Bus.', 'Mit dem Fahrrad.'], a: 1 },
            { type: 'mc', q: 'Was machen sie am Vormittag?', options: ['Sie wandern.', 'Sie schwimmen.', 'Sie fahren Tretboot.'], a: 0 },
            { type: 'mc', q: 'Das Mittagessen …', options: ['muss jeder selbst bezahlen.', 'bezahlt die Firma.', 'bringt jeder mit.'], a: 1 },
            { type: 'mc', q: 'Wann kommen sie zurück?', options: ['Um 9 Uhr.', 'Um 14 Uhr.', 'Gegen 18 Uhr.'], a: 2 },
            { type: 'mc', q: 'Bis wann soll man sich anmelden?', options: ['Bis zum 31. Mai.', 'Bis zum 14. Juni.', 'Bis Freitag.'], a: 0 }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 20, points: 25,
      intro: 'Two parts: fill in a form, then write a short message.',
      tasks: [
        {
          title: 'Teil 1: Formular', weight: 10,
          situation: '<p>Sie möchten einen Erste-Hilfe-Kurs machen. Lesen Sie Ihre Notizen und füllen Sie das Formular aus.</p><p><em>Kurs: Samstag, 8. März · Teilnehmer: ich und mein Bruder (2 Personen) · Bezahlung: Überweisung · Grund: Führerschein · Ich habe keine Vorkenntnisse.</em></p>',
          instructions: 'Schreiben Sie die fehlenden Informationen.',
          form: [
            { label: 'Kurstag:', a: ['Samstag, 8. März', 'Samstag', '8. März', 'Samstag 8. März'] },
            { label: 'Anzahl der Personen:', a: ['2', 'zwei', '2 Personen', 'zwei Personen'] },
            { label: 'Zahlungsart:', a: ['Überweisung', 'per Überweisung'] },
            { label: 'Grund für den Kurs:', a: ['Führerschein', 'für den Führerschein'] },
            { label: 'Vorkenntnisse (ja / nein):', a: ['nein', 'keine'] }
          ]
        },
        {
          title: 'Teil 2: Eine Mitteilung schreiben', weight: 15, register: 'formal', minWords: 30, maxWords: 50,
          situation: '<p>Sie haben in einem Online-Shop eine Jacke bestellt. Die Jacke ist zu klein. Schreiben Sie an den Kundenservice.</p>',
          points: ['Was ist das Problem?', 'Was möchten Sie: eine andere Größe oder Ihr Geld zurück?', 'Fragen Sie, wie Sie die Jacke zurückschicken können.'],
          keywords: [['zu klein', 'passt nicht', 'problem', 'größe'], ['größe', 'umtauschen', 'geld zurück', 'zurückerstatten', 'möchte'], ['zurückschicken', 'zurücksenden', 'wie kann', 'paket', 'rücksendung', 'adresse']],
          instructions: 'Schreiben Sie 30 bis 50 Wörter zu allen drei Punkten. Vergessen Sie Anrede und Gruß nicht.',
          model: 'Sehr geehrte Damen und Herren,\nich habe bei Ihnen eine blaue Jacke in Größe M bestellt. Leider ist sie zu klein. Ich möchte sie gern gegen eine Jacke in Größe L umtauschen. Wie kann ich die Jacke zurückschicken? Bekomme ich ein Rücksendeetikett?\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 25,
      intro: 'In the real exam you speak with a partner. Practise each part aloud.',
      tasks: [
        { title: 'Teil 1: Fragen zur Person', seconds: 120, html: '<p>Stellen Sie Fragen und antworten Sie selbst: <strong>Familie · Sprachen · Lieblingsessen · Wohnort</strong>.</p>', tips: '<p>Hast du Geschwister? / Welche Sprachen sprichst du? / Was isst du am liebsten? / Wie gefällt dir deine Stadt?</p>' },
        { title: 'Teil 2: Über Erfahrungen sprechen', seconds: 120, html: '<p>Erzählen Sie: <strong>Ein schöner Tag in Ihrem Leben.</strong> Was haben Sie gemacht? Mit wem? Warum war der Tag schön?</p>', tips: '<p>Letzten Sommer war ich … / Zuerst haben wir … , danach … / Das war schön, weil … / Ich erinnere mich gern an …</p>' },
        { title: 'Teil 3: Gemeinsam etwas planen', seconds: 150, html: '<p>Sie möchten mit Ihrer Partnerin / Ihrem Partner einen Ausflug am Sonntag planen. Sprechen Sie über: <em>Ziel · Abfahrt · Verkehrsmittel · Essen · Kosten</em>. Einigen Sie sich.</p>', tips: '<p>Wollen wir nach … fahren? / Lieber mit dem Zug oder mit dem Auto? / Wir können ein Picknick machen. / Einverstanden! / Dann treffen wir uns um … am …</p>' }
      ]
    }
  ]
};
