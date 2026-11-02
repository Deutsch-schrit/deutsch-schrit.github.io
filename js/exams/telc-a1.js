EXAMS['telc-a1'] = {
  id: 'telc-a1', provider: 'telc', level: 'A1', name: 'telc Deutsch A1 (Start Deutsch 1)',
  about: 'Start Deutsch 1 was developed jointly by telc and the Goethe-Institut, so the format is the same: Hören, Lesen and Schreiben (about 65 minutes together) plus a group speaking test. In this simulation each part counts 25 points.',
  passText: 'You pass with at least 60 percent of the points in total.',
  pass: { type: 'total', min: 0.6 },
  rubric: ['Aufgabenbewältigung (task completion)', 'Kommunikative Gestaltung (clear message)', 'Formale Richtigkeit (correctness)'],
  rubricHelp: 'At A1 the message counts most: did you write about all three points so that the reader understands?',
  speakRubric: ['Aufgabenbewältigung (task completion)', 'Verständlichkeit (easy to understand)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 20, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören sechs kurze Gespräche. Sie hören jedes Gespräch zweimal. Wählen Sie a, b oder c.',
          items: [
            { type: 'mc', audio: [['Mann', 'Wie komme ich zur Post?'], ['Frau', 'Fahren Sie mit dem Bus Nummer zwölf bis zur Haltestelle Marktplatz. Die Post ist dann direkt gegenüber.']], plays: 2, q: 'Welchen Bus nimmt der Mann?', options: ['Bus 2', 'Bus 12', 'Bus 20'], a: 1 },
            { type: 'mc', audio: [['Frau', 'Wann beginnt der Film?'], ['Mann', 'Um Viertel nach acht. Wir treffen uns um acht vor dem Kino, okay?']], plays: 2, q: 'Wann beginnt der Film?', options: ['Um 20:00 Uhr.', 'Um 20:15 Uhr.', 'Um 20:45 Uhr.'], a: 1 },
            { type: 'mc', audio: [['Mann', 'Was möchten Sie trinken?'], ['Frau', 'Einen Orangensaft, bitte. Keinen Kaffee, danke.']], plays: 2, q: 'Was trinkt die Frau?', options: ['Kaffee.', 'Tee.', 'Orangensaft.'], a: 2 },
            { type: 'mc', audio: [['Frau', 'Wie viele Kinder hast du?'], ['Mann', 'Ich habe drei: zwei Söhne und eine Tochter.']], plays: 2, q: 'Wie viele Töchter hat der Mann?', options: ['Eine.', 'Zwei.', 'Drei.'], a: 0 },
            { type: 'mc', audio: [['Mann', 'Entschuldigung, wo finde ich Brot?'], ['Verkäuferin', 'Das Brot ist ganz hinten, neben dem Käse.']], plays: 2, q: 'Wo ist das Brot?', options: ['Vorne bei der Kasse.', 'Hinten neben dem Käse.', 'Neben dem Obst.'], a: 1 },
            { type: 'mc', audio: [['Frau', 'Hast du am Freitag Zeit?'], ['Mann', 'Am Freitag arbeite ich. Aber am Samstag habe ich frei.']], plays: 2, q: 'Wann hat der Mann frei?', options: ['Am Freitag.', 'Am Samstag.', 'Am Sonntag.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören vier Durchsagen. Sie hören jeden Text einmal. Richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Durchsage', 'Liebe Fahrgäste, der Bus nach Halle fährt heute nicht von Haltestelle A, sondern von Haltestelle C.']], q: 'Der Bus nach Halle fährt heute von Haltestelle A.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Achtung, liebe Kunden: Heute gibt es Tomaten für nur ein Euro das Kilo. Das Angebot gilt bis 18 Uhr.']], q: 'Die Tomaten sind heute billig.', a: 'r' },
            { type: 'tf', audio: [['Durchsage', 'Der ICE nach Berlin, planmäßige Abfahrt zehn Uhr dreißig, fährt heute von Gleis neun.']], q: 'Der Zug nach Berlin fährt von Gleis 9.', a: 'r' },
            { type: 'tf', audio: [['Durchsage', 'Die Bibliothek schließt heute schon um 16 Uhr. Morgen sind wir wieder ab 9 Uhr für Sie da.']], q: 'Die Bibliothek ist heute bis 18 Uhr offen.', a: 'f' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören fünf Ansagen am Telefon. Sie hören jeden Text zweimal. Wählen Sie a, b oder c.',
          items: [
            { type: 'mc', audio: [['Tom', 'Hallo Sabine, hier ist Tom. Ich habe zwei Karten für das Konzert am Sonntag. Kommst du mit? Ruf mich bitte an.']], plays: 2, q: 'Wann ist das Konzert?', options: ['Am Freitag.', 'Am Samstag.', 'Am Sonntag.'], a: 2 },
            { type: 'mc', audio: [['Autowerkstatt', 'Guten Tag, Frau Novak, hier ist die Autowerkstatt Klein. Ihr Auto ist fertig. Sie können es heute bis 18 Uhr abholen.']], plays: 2, q: 'Was soll Frau Novak tun?', options: ['Das Auto abholen.', 'Die Werkstatt anrufen.', 'Morgen kommen.'], a: 0 },
            { type: 'mc', audio: [['Mama', 'Hallo Jan, hier ist Mama. Wir essen heute um sieben, nicht um sechs. Bitte bring Wasser mit.']], plays: 2, q: 'Wann essen sie heute?', options: ['Um 6 Uhr.', 'Um 7 Uhr.', 'Um 8 Uhr.'], a: 1 },
            { type: 'mc', audio: [['Hotel', 'Guten Tag, hier ist das Hotel am See. Ihr Zimmer ist frei, aber nur für zwei Nächte, nicht für drei. Bitte rufen Sie uns zurück.']], plays: 2, q: 'Wie lange ist das Zimmer frei?', options: ['Eine Nacht.', 'Zwei Nächte.', 'Drei Nächte.'], a: 1 },
            { type: 'mc', audio: [['Lehrerin', 'Hallo, hier ist Frau Brandt von der Sprachschule. Der Kurs morgen ist nicht in Raum 5, sondern in Raum 8.']], plays: 2, q: 'In welchem Raum ist der Kurs morgen?', options: ['Raum 5.', 'Raum 8.', 'Raum 18.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 25, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie die zwei Texte. Richtig oder falsch?',
          text: `<p><strong>Hallo Mia,</strong><br>vielen Dank für deine Einladung! Ich komme gern zu deiner Party am Samstag. Ich bringe einen Salat mit. Mein Freund Paul kann leider nicht kommen, er muss arbeiten. Bis Samstag!<br>Lena</p>
<p><strong>Sehr geehrter Herr Wagner,</strong><br>Ihre Brille ist fertig. Sie können sie ab Dienstag bei uns abholen. Wir haben Montag bis Freitag von 9 bis 18 Uhr geöffnet.<br>Optik Sonnenschein</p>`,
          items: [
            { type: 'tf', q: 'Lena kommt zur Party.', a: 'r' },
            { type: 'tf', q: 'Lena bringt einen Kuchen mit.', a: 'f' },
            { type: 'tf', q: 'Paul kommt auch zur Party.', a: 'f' },
            { type: 'tf', q: 'Herr Wagner kann seine Brille ab Dienstag abholen.', a: 'r' },
            { type: 'tf', q: 'Das Geschäft ist am Samstag geöffnet.', a: 'f' }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Wählen Sie a oder b.',
          items: [
            { type: 'mc', q: 'Sie möchten am Abend Pizza essen.', options: ['Pizzeria Roma: täglich 11–23 Uhr.', 'Café Morgen: Frühstück 7–12 Uhr.'], a: 0 },
            { type: 'mc', q: 'Sie suchen einen Job am Wochenende.', options: ['Bäckerei sucht Verkäuferin, Samstag und Sonntag.', 'Büro sucht Sekretärin, Montag bis Freitag.'], a: 0 },
            { type: 'mc', q: 'Sie möchten ein Zimmer für eine Woche mieten.', options: ['Ferienzimmer in Rostock, ab 3 Nächten.', 'Wohnung in Rostock, ab 1 Jahr.'], a: 0 },
            { type: 'mc', q: 'Sie möchten Englisch lernen.', options: ['Sprachschule: Spanisch und Italienisch.', 'Volkshochschule: Englisch für Anfänger.'], a: 1 },
            { type: 'mc', q: 'Ihr Computer ist kaputt.', options: ['PC-Hilfe: Reparatur in 24 Stunden.', 'Elektro Markt: neue Fernseher im Angebot.'], a: 0 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die Schilder. Richtig oder falsch?',
          items: [
            { type: 'tf', q: '<em>Arztpraxis: Mittwochnachmittag geschlossen.</em><br>Am Mittwochnachmittag kann man zum Arzt gehen.', a: 'f' },
            { type: 'tf', q: '<em>Hunde bitte draußen lassen.</em> (am Supermarkt)<br>Hunde dürfen nicht in den Supermarkt.', a: 'r' },
            { type: 'tf', q: '<em>Kasse 3: nur Kartenzahlung.</em><br>An Kasse 3 kann man bar bezahlen.', a: 'f' },
            { type: 'tf', q: '<em>Deutschkurs A1: neuer Raum 112, 1. Stock.</em><br>Der Deutschkurs ist jetzt im ersten Stock.', a: 'r' },
            { type: 'tf', q: '<em>Heute frischer Fisch!</em> (am Markt)<br>Am Markt gibt es heute Fisch.', a: 'r' }
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
          situation: '<p>Ihr Freund Karim Haddad möchte im Fitnessstudio Mitglied werden. Sie füllen das Formular für ihn aus.</p><p><em>Karim kommt aus Syrien und ist 31 Jahre alt. Er wohnt in der Lindenstraße 4 in 06108 Halle. Er möchte morgens trainieren und monatlich bezahlen.</em></p>',
          instructions: 'Schreiben Sie die fehlenden Informationen in das Formular.',
          form: [
            { label: 'Vorname:', a: ['Karim'] },
            { label: 'Herkunftsland:', a: ['Syrien'] },
            { label: 'Straße, Hausnummer:', a: ['Lindenstraße 4', 'Lindenstr. 4'] },
            { label: 'Trainingszeit (morgens oder abends):', a: ['morgens', 'am Morgen'] },
            { label: 'Zahlung (monatlich oder jährlich):', a: ['monatlich'] }
          ]
        },
        {
          title: 'Teil 2: Eine kurze Mitteilung', weight: 15, register: 'informal', minWords: 30,
          situation: '<p>Sie haben am Samstag Geburtstag und möchten Ihre Freundin Sara einladen. Schreiben Sie Sara eine kurze Nachricht.</p>',
          points: ['Wann und wo ist die Feier?', 'Wer kommt noch?', 'Was soll Sara mitbringen?'],
          keywords: [['samstag', 'uhr', 'bei mir', 'wohnung', 'garten', 'café', 'restaurant', 'um '], ['kommt', 'kommen', 'freunde', 'familie', 'auch', 'kollegen'], ['mitbringen', 'bring', 'getränke', 'salat', 'kuchen', 'musik']],
          instructions: 'Schreiben Sie zu jedem Punkt ein bis zwei Sätze. Vergessen Sie Anrede und Gruß nicht.',
          model: 'Liebe Sara,\nich habe am Samstag Geburtstag und mache eine kleine Party. Die Feier ist um 19 Uhr bei mir zu Hause. Meine Schwester und ein paar Freunde aus dem Deutschkurs kommen auch. Kannst du bitte einen Salat mitbringen?\nViele Grüße\nMaria'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 25,
      intro: 'In the real exam you sit in a small group. Practise each part aloud and record yourself.',
      tasks: [
        { title: 'Teil 1: Sich vorstellen', seconds: 60, html: '<p>Stellen Sie sich vor: <strong>Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.</strong> Buchstabieren Sie Ihren Familiennamen und nennen Sie eine Telefonnummer.</p>', tips: '<p>Mein Name ist … / Ich bin … / Ich komme aus … / Ich lebe in … / Ich spreche … / Ich arbeite als … / In meiner Freizeit …</p>' },
        { title: 'Teil 2: Um Informationen bitten und Informationen geben', seconds: 90, html: '<p>Thema: <strong>Freizeit</strong>. Stellen Sie mit jedem Wort eine Frage und beantworten Sie sie selbst:</p><p><strong>Sport · Wochenende · Kino · Urlaub</strong></p>', tips: '<p>Machst du gern Sport? – Ja, ich schwimme gern. / Was machst du am Wochenende? / Gehst du oft ins Kino? / Wohin fährst du im Urlaub?</p>' },
        { title: 'Teil 3: Bitten formulieren und darauf reagieren', seconds: 90, html: '<p>Formulieren Sie Bitten und reagieren Sie darauf:</p><ul><li>Tür (Sie tragen schwere Taschen)</li><li>Telefon (Ihr Handy ist leer)</li><li>Weg zum Bahnhof (Sie sind fremd hier)</li><li>Licht (es ist dunkel)</li></ul>', tips: '<p>Können Sie bitte die Tür aufmachen? – Ja, natürlich. / Darf ich bitte Ihr Telefon benutzen? / Wie komme ich zum Bahnhof? / Kannst du bitte das Licht anmachen?</p>' }
      ]
    }
  ]
};
