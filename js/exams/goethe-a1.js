EXAMS['goethe-a1'] = {
  id: 'goethe-a1', provider: 'goethe', level: 'A1', name: 'Goethe-Zertifikat A1: Start Deutsch 1',
  about: 'Written exam of about 65 minutes (Hören, Lesen, Schreiben) plus a group speaking test of about 15 minutes. In this simulation each part counts 25 points.',
  passText: 'You pass with at least 60 of 100 points in total.',
  pass: { type: 'total', min: 0.6 },
  rubric: ['Aufgabenerfüllung (task completion)', 'Kommunikative Gestaltung (clear message)', 'Formale Richtigkeit (correctness)'],
  rubricHelp: 'At A1 the message counts most: did you write about all three points so that the reader understands?',
  speakRubric: ['Aufgabenerfüllung (task completion)', 'Verständlichkeit (easy to understand)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 20, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören sechs kurze Gespräche. Sie hören jedes Gespräch zweimal. Kreuzen Sie an: a, b oder c.',
          items: [
            { type: 'mc', audio: [['Frau', 'Entschuldigung, wie spät ist es?'], ['Mann', 'Es ist halb drei.'], ['Frau', 'Halb drei? Oh, dann muss ich schnell gehen. Danke!']], plays: 2, q: 'Wie spät ist es?', options: ['2:30 Uhr', '3:30 Uhr', '3:00 Uhr'], a: 0 },
            { type: 'mc', audio: [['Verkäufer', 'Guten Tag, was möchten Sie?'], ['Kundin', 'Ich möchte ein Kilo Äpfel und zwei Bananen, bitte.'], ['Verkäufer', 'Das macht drei Euro zwanzig.']], plays: 2, q: 'Was kostet das?', options: ['2,30 €', '3,20 €', '3,02 €'], a: 1 },
            { type: 'mc', audio: [['Mann', 'Wo ist hier die Toilette, bitte?'], ['Frau', 'Gehen Sie geradeaus und dann links. Die Toilette ist neben dem Café.']], plays: 2, q: 'Wo ist die Toilette?', options: ['Rechts.', 'Neben dem Café.', 'Im ersten Stock.'], a: 1 },
            { type: 'mc', audio: [['Frau', 'Was machst du am Wochenende?'], ['Mann', 'Am Samstag spiele ich Fußball, und am Sonntag besuche ich meine Eltern.']], plays: 2, q: 'Was macht der Mann am Sonntag?', options: ['Er spielt Fußball.', 'Er besucht seine Eltern.', 'Er arbeitet.'], a: 1 },
            { type: 'mc', audio: [['Mann', 'Ich hätte gern eine Fahrkarte nach Dresden.'], ['Frau', 'Einfach oder hin und zurück?'], ['Mann', 'Hin und zurück, bitte. Der Zug fährt um zehn Uhr fünfzehn, oder?'], ['Frau', 'Ja, von Gleis sieben.']], plays: 2, q: 'Von welchem Gleis fährt der Zug?', options: ['Gleis 10', 'Gleis 15', 'Gleis 7'], a: 2 },
            { type: 'mc', audio: [['Frau', 'Hast du meine Brille gesehen?'], ['Mann', 'Ja, sie liegt auf dem Tisch in der Küche.']], plays: 2, q: 'Wo ist die Brille?', options: ['Im Bad.', 'In der Küche.', 'Im Auto.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören vier Durchsagen. Sie hören jeden Text einmal. Richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Durchsage', 'Achtung am Gleis drei: Der Zug nach München hat heute zwanzig Minuten Verspätung.']], q: 'Der Zug nach München kommt pünktlich.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Liebe Kunden, unser Supermarkt schließt in zehn Minuten. Bitte gehen Sie jetzt zur Kasse.']], q: 'Der Supermarkt schließt bald.', a: 'r' },
            { type: 'tf', audio: [['Durchsage', 'Der kleine Paul sucht seine Mama. Er wartet an der Information im Erdgeschoss.']], q: 'Paul wartet im ersten Stock.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Sehr geehrte Fluggäste, der Flug nach Wien startet heute von Ausgang B zwölf.']], q: 'Der Flug nach Wien startet von Ausgang B12.', a: 'r' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören fünf Nachrichten auf dem Anrufbeantworter. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.',
          items: [
            { type: 'mc', audio: [['Anna', 'Hallo Maria, hier ist Anna. Wir treffen uns morgen nicht um sieben, sondern um acht Uhr im Kino. Bis morgen!']], plays: 2, q: 'Wann treffen sich Anna und Maria?', options: ['Um 7 Uhr.', 'Um 8 Uhr.', 'Um 18 Uhr.'], a: 1 },
            { type: 'mc', audio: [['Praxis', 'Guten Tag, Herr Kaya, hier ist die Praxis Dr. Berger. Ihr Termin ist am Dienstag, nicht am Montag. Auf Wiederhören.']], plays: 2, q: 'Wann hat Herr Kaya einen Termin?', options: ['Am Montag.', 'Am Dienstag.', 'Am Mittwoch.'], a: 1 },
            { type: 'mc', audio: [['Papa', 'Hallo Lisa, hier ist Papa. Kannst du bitte Brot und Milch kaufen? Ich komme heute spät nach Hause.']], plays: 2, q: 'Was soll Lisa kaufen?', options: ['Brot und Milch.', 'Brot und Käse.', 'Milch und Eier.'], a: 0 },
            { type: 'mc', audio: [['Herr Wolf', 'Hallo, hier ist Peter Wolf. Meine neue Telefonnummer ist null eins sieben eins, vier fünf sechs, acht neun null.']], plays: 2, q: 'Wie ist die neue Nummer?', options: ['0171 456 890', '0171 465 890', '0171 456 980'], a: 0 },
            { type: 'mc', audio: [['Sara', 'Hi Tom, hier ist Sara. Das Wetter ist schlecht, wir gehen heute nicht schwimmen. Wir spielen lieber Karten bei mir. Kommst du?']], plays: 2, q: 'Was machen Sara und ihre Freunde heute?', options: ['Sie gehen schwimmen.', 'Sie spielen Karten.', 'Sie gehen ins Kino.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 25, points: 25,
      intro: 'Three parts with 15 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie die zwei Texte. Sind die Sätze richtig oder falsch?',
          text: `<p><strong>Hallo Julia,</strong><br>ich bin jetzt in Hamburg. Das Wetter ist schön, aber kalt. Mein Hotel ist klein und liegt direkt am Hafen. Morgen besuche ich ein Museum, und am Abend esse ich Fisch in einem Restaurant. Am Freitag fahre ich mit dem Zug zurück nach Köln.<br>Liebe Grüße, Ben</p>
<p><strong>Liebe Frau Schulz,</strong><br>am Montag bin ich leider krank und kann nicht zum Deutschkurs kommen. Am Mittwoch komme ich wieder. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?<br>Viele Grüße, Ahmed Rahimi</p>`,
          items: [
            { type: 'tf', q: 'Ben ist in Hamburg.', a: 'r' },
            { type: 'tf', q: 'In Hamburg ist es warm.', a: 'f' },
            { type: 'tf', q: 'Ben fährt am Freitag mit dem Auto nach Köln.', a: 'f' },
            { type: 'tf', q: 'Ahmed kommt am Montag nicht zum Kurs.', a: 'r' },
            { type: 'tf', q: 'Ahmed möchte die Hausaufgaben per E-Mail.', a: 'r' }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie die Situationen und die Anzeigen. Wo finden Sie die Information? Wählen Sie a oder b.',
          items: [
            { type: 'mc', q: 'Sie möchten am Sonntag schwimmen gehen.', options: ['Hallenbad Mitte: Mo–Sa 7–21 Uhr, Sonntag geschlossen.', 'Freizeitbad Nord: täglich 9–20 Uhr, auch sonntags.'], a: 1 },
            { type: 'mc', q: 'Sie suchen eine Wohnung mit Balkon.', options: ['2-Zimmer-Wohnung, 55 m², Balkon, ab 1. Mai.', '2-Zimmer-Wohnung, 60 m², Garten, ab sofort.'], a: 0 },
            { type: 'mc', q: 'Sie möchten Deutsch am Abend lernen.', options: ['Deutschkurs A1: Montag bis Freitag, 9–12 Uhr.', 'Deutschkurs A1: Dienstag und Donnerstag, 18–21 Uhr.'], a: 1 },
            { type: 'mc', q: 'Sie möchten ein Fahrrad kaufen.', options: ['Fahrradverleih: 10 Euro pro Tag.', 'Verkaufe Damenfahrrad, fast neu, 120 Euro.'], a: 1 },
            { type: 'mc', q: 'Ihr Kind ist krank. Sie brauchen am Samstag einen Arzt.', options: ['Kinderarzt Dr. Neumann: Mo–Fr 8–17 Uhr.', 'Ärztlicher Notdienst: Samstag und Sonntag, Tel. 116 117.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die Schilder und Notizen. Richtig oder falsch?',
          items: [
            { type: 'tf', q: '<em>Bäckerei Sonne: Heute wegen Krankheit geschlossen.</em><br>Man kann heute in der Bäckerei Brot kaufen.', a: 'f' },
            { type: 'tf', q: '<em>Bitte Schuhe ausziehen!</em> (an der Tür einer Turnhalle)<br>In der Turnhalle soll man keine Schuhe tragen.', a: 'r' },
            { type: 'tf', q: '<em>Rauchen verboten.</em> (im Bahnhof)<br>Im Bahnhof darf man rauchen.', a: 'f' },
            { type: 'tf', q: '<em>Sprechstunde Frau Klein: Mittwoch 14–15 Uhr, Raum 204.</em><br>Frau Klein hat am Mittwochnachmittag Sprechstunde.', a: 'r' },
            { type: 'tf', q: '<em>Aufzug außer Betrieb. Bitte die Treppe benutzen.</em><br>Man kann heute den Aufzug benutzen.', a: 'f' }
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
          situation: '<p>Ihre Freundin Elena Petrova möchte einen Deutschkurs machen. Sie füllen für Elena das Anmeldeformular aus.</p><p><em>Elena ist 28 Jahre alt und kommt aus Bulgarien. Sie wohnt in der Gartenstraße 12 in 04109 Leipzig. Sie möchte einen Abendkurs machen und mit Kreditkarte bezahlen.</em></p>',
          instructions: 'Schreiben Sie die fehlenden Informationen in das Formular.',
          form: [
            { label: 'Herkunftsland:', a: ['Bulgarien'] },
            { label: 'Alter:', a: ['28', '28 Jahre', 'achtundzwanzig'] },
            { label: 'Postleitzahl, Wohnort:', a: ['04109 Leipzig', '04109, Leipzig'] },
            { label: 'Kurszeit (Vormittag oder Abend):', a: ['Abend', 'Abendkurs', 'am Abend'] },
            { label: 'Zahlungsart:', a: ['Kreditkarte', 'mit Kreditkarte'] }
          ]
        },
        {
          title: 'Teil 2: Eine kurze Mitteilung', weight: 15, register: 'formal', minWords: 30,
          situation: '<p>Sie möchten bei der Sprachschule „Deutsch Plus“ einen Kurs machen. Schreiben Sie an die Sprachschule.</p>',
          points: ['Warum schreiben Sie?', 'Wann haben Sie Zeit?', 'Fragen Sie nach dem Preis.'],
          keywords: [['kurs', 'deutsch lernen', 'anmelden', 'interesse', 'möchte'], ['zeit', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'abend', 'morgen', 'uhr', 'vormittag', 'nachmittag'], ['preis', 'kostet', 'kosten', 'wie viel', 'euro']],
          instructions: 'Schreiben Sie zu jedem Punkt ein bis zwei Sätze. Vergessen Sie Anrede und Gruß nicht.',
          model: 'Sehr geehrte Damen und Herren,\nich möchte bei Ihnen einen Deutschkurs A1 machen. Ich habe am Dienstag und am Donnerstag am Abend Zeit. Wie viel kostet der Kurs? Bitte schreiben Sie mir.\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 25,
      intro: 'In the real exam you sit in a small group. Practise each part aloud and record yourself.',
      tasks: [
        { title: 'Teil 1: Sich vorstellen', seconds: 60, html: '<p>Stellen Sie sich vor. Sprechen Sie über: <strong>Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.</strong> Buchstabieren Sie danach Ihren Namen und sagen Sie Ihre Telefonnummer.</p>', tips: '<p>Ich heiße … / Ich bin … Jahre alt. / Ich komme aus … / Ich wohne in … / Ich spreche … / Ich bin … von Beruf. / Mein Hobby ist …</p>' },
        { title: 'Teil 2: Um Informationen bitten und Informationen geben', seconds: 90, html: '<p>Thema: <strong>Essen und Trinken</strong>. Stellen Sie mit jedem Wort eine Frage und beantworten Sie sie auch selbst:</p><p><strong>Frühstück · Lieblingsessen · Restaurant · Getränk</strong></p>', tips: '<p>Was isst du zum Frühstück? – Ich esse Brot mit Käse. / Was ist dein Lieblingsessen? / Gehst du gern ins Restaurant? / Was trinkst du gern?</p>' },
        { title: 'Teil 3: Bitten formulieren und darauf reagieren', seconds: 90, html: '<p>Formulieren Sie zu jeder Situation eine Bitte und reagieren Sie darauf:</p><ul><li>Fenster (es ist sehr warm)</li><li>Stift (Sie haben keinen)</li><li>langsam sprechen (Sie verstehen nicht)</li><li>Wasser (Sie haben Durst)</li></ul>', tips: '<p>Kannst du bitte das Fenster öffnen? – Ja, gern. / Können Sie mir bitte einen Stift geben? – Natürlich, hier bitte.</p>' }
      ]
    }
  ]
};
