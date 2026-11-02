EXAMS['goethe-a2'] = {
  id: 'goethe-a2', provider: 'goethe', level: 'A2', name: 'Goethe-Zertifikat A2',
  about: 'Written exam of about 90 minutes (Lesen, Hören, Schreiben) plus a pair speaking test of about 15 minutes. In this simulation each part counts 25 points.',
  passText: 'You pass with at least 60 of 100 points in total.',
  pass: { type: 'total', min: 0.6 },
  rubric: ['Aufgabenerfüllung (task completion)', 'Kommunikative Gestaltung (clear and linked)', 'Formale Richtigkeit (correctness)'],
  rubricHelp: 'At A2 your text should cover every point, be easy to follow and use simple linking words like und, aber, weil.',
  speakRubric: ['Aufgabenerfüllung (task completion)', 'Kommunikative Gestaltung (interaction)', 'Formale Richtigkeit (correctness)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 30, points: 25,
      intro: 'Four parts with 20 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Zeitungstext. Wählen Sie für jede Aufgabe die richtige Lösung a, b oder c.',
          text: `<h3>Ein Café für Menschen mit Hund</h3>
<p>In der Leipziger Südvorstadt gibt es seit März ein besonderes Café: Im „Café Pfote“ sind Hunde nicht nur erlaubt, sie sind herzlich willkommen. Die Besitzerin Katrin Weber hat selbst zwei Hunde und hatte die Idee nach einem Urlaub in Spanien. Dort hat sie viele Cafés gesehen, in denen Hunde mit ihren Besitzern sitzen dürfen.</p>
<p>Für die Hunde gibt es frisches Wasser und spezielle Kekse ohne Zucker. Für die Menschen bietet das Café Kuchen, Suppen und Salate an. Am Wochenende ist das Café oft so voll, dass man einen Tisch reservieren sollte. Jeden ersten Samstag im Monat kommt eine Hundetrainerin und gibt kostenlose Tipps.</p>`,
          items: [
            { type: 'mc', q: 'Das Café gibt es …', options: ['seit einem Jahr.', 'seit März.', 'seit dem Urlaub in Spanien.'], a: 1 },
            { type: 'mc', q: 'Katrin Weber …', options: ['hat keinen Hund.', 'hat zwei Hunde.', 'arbeitet als Hundetrainerin.'], a: 1 },
            { type: 'mc', q: 'Die Idee für das Café hatte sie …', options: ['in Spanien.', 'in Leipzig.', 'in einem anderen Café in Deutschland.'], a: 0 },
            { type: 'mc', q: 'Am Wochenende …', options: ['ist das Café geschlossen.', 'sollte man einen Tisch reservieren.', 'gibt es keine Suppe.'], a: 1 },
            { type: 'mc', q: 'Die Hundetrainerin kommt …', options: ['jeden Samstag.', 'einmal im Monat.', 'jeden Tag.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie sind im Kaufhaus. Lesen Sie die Informationstafel. In welchen Stock gehen Sie? Wählen Sie a, b oder c.',
          text: `<p><strong>UG:</strong> Lebensmittel, Getränke, Bäckerei<br><strong>EG:</strong> Information, Kosmetik, Taschen, Schmuck<br><strong>1. Stock:</strong> Damenmode, Schuhe<br><strong>2. Stock:</strong> Herrenmode, Sportartikel, Fahrräder<br><strong>3. Stock:</strong> Spielwaren, Bücher, Schreibwaren, Kindermode<br><strong>4. Stock:</strong> Elektronik, Handys, Haushaltsgeräte, Restaurant</p>`,
          items: [
            { type: 'mc', q: 'Sie möchten ein Geschenk für Ihren Neffen (6 Jahre) kaufen: ein Spiel.', options: ['2. Stock', '3. Stock', 'anderer Stock'], a: 1 },
            { type: 'mc', q: 'Sie brauchen neue Laufschuhe für den Sport.', options: ['1. Stock', '2. Stock', 'anderer Stock'], a: 1 },
            { type: 'mc', q: 'Sie möchten zu Mittag essen.', options: ['UG', '4. Stock', 'anderer Stock'], a: 1 },
            { type: 'mc', q: 'Ihr Handy-Ladekabel ist kaputt.', options: ['EG', '3. Stock', 'anderer Stock'], a: 2 },
            { type: 'mc', q: 'Sie suchen eine Halskette für Ihre Mutter.', options: ['EG', '1. Stock', 'anderer Stock'], a: 0 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die E-Mail. Wählen Sie für jede Aufgabe die richtige Lösung a, b oder c.',
          text: `<p>Liebe Sofia,</p>
<p>vielen Dank für deine Einladung zur Hochzeit im Juni! Ich freue mich sehr und komme natürlich. Leider kann mein Mann Jonas nicht mitkommen, weil er an diesem Wochenende auf einer Konferenz in Wien ist. Er ist sehr traurig darüber.</p>
<p>Ich komme mit dem Zug und bin am Freitagabend gegen 19 Uhr in Freiburg. Kannst du mir ein günstiges Hotel in der Nähe der Kirche empfehlen? Am Sonntagnachmittag fahre ich wieder nach Hause.</p>
<p>Was wünscht ihr euch zur Hochzeit? Ich möchte euch etwas Schönes schenken.</p>
<p>Bis bald und liebe Grüße<br>Clara</p>`,
          items: [
            { type: 'mc', q: 'Clara …', options: ['kommt zur Hochzeit.', 'kann nicht zur Hochzeit kommen.', 'weiß noch nicht, ob sie kommt.'], a: 0 },
            { type: 'mc', q: 'Jonas kommt nicht, weil er …', options: ['krank ist.', 'auf einer Konferenz ist.', 'keine Zeit für die Reise hat.'], a: 1 },
            { type: 'mc', q: 'Clara fährt …', options: ['mit dem Auto.', 'mit dem Zug.', 'mit dem Flugzeug.'], a: 1 },
            { type: 'mc', q: 'Clara sucht …', options: ['ein Restaurant.', 'ein Hotel.', 'eine Kirche.'], a: 1 },
            { type: 'mc', q: 'Clara möchte wissen, …', options: ['was sie schenken soll.', 'wann die Hochzeit beginnt.', 'wer noch kommt.'], a: 0 }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Fünf Personen suchen im Internet nach Angeboten. Lesen Sie die Aufgaben und die Anzeigen. Welche Anzeige passt? Für eine Person gibt es keine passende Anzeige: Wählen Sie dann 0.',
          choices: [
            ['a', 'Gebrauchte Kinderbücher und Spiele, alles 1 Euro. Flohmarkt am Sonntag in der Grundschule am Park.'],
            ['b', 'Italienisch kochen lernen: Abendkurs an 4 Donnerstagen, kleine Gruppe, mit Essen.'],
            ['c', 'Tanzschule Rhythmus: Salsa für Anfänger, ohne Partner möglich, samstags 17 Uhr.'],
            ['d', 'Gartenhilfe gesucht: Rasen mähen und Blumen gießen, 2 Stunden pro Woche, 12 Euro/Std.'],
            ['e', 'Ferienwohnung an der Ostsee, 3 Zimmer, für Familien, ab 80 Euro pro Nacht, Hunde erlaubt.'],
            ['0', 'Keine passende Anzeige']
          ],
          items: [
            { type: 'match', q: 'Lukas möchte tanzen lernen, hat aber keine Partnerin.', a: 'c' },
            { type: 'match', q: 'Familie Öztürk sucht für den Sommer eine Unterkunft am Meer und möchte den Hund mitnehmen.', a: 'e' },
            { type: 'match', q: 'Petra sucht günstige Bücher für ihre Kinder.', a: 'a' },
            { type: 'match', q: 'Herr Kim möchte neben dem Studium etwas Geld verdienen und arbeitet gern draußen.', a: 'd' },
            { type: 'match', q: 'Nadia möchte einen Kurs für Computerprogramme machen.', a: '0' }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 30, points: 25,
      intro: 'Four parts with 20 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören fünf kurze Texte im Radio. Sie hören jeden Text zweimal. Wählen Sie a, b oder c.',
          items: [
            { type: 'mc', audio: [['Radio', 'Und jetzt das Wetter für Sachsen: Heute Vormittag regnet es noch, ab Mittag scheint dann die Sonne. Die Temperaturen steigen auf 18 Grad.']], plays: 2, q: 'Wie ist das Wetter am Nachmittag?', options: ['Es regnet.', 'Es ist sonnig.', 'Es schneit.'], a: 1 },
            { type: 'mc', audio: [['Radio', 'Verkehrsmeldung: Auf der A9 zwischen Leipzig und Halle gibt es nach einem Unfall fünf Kilometer Stau. Bitte fahren Sie über die Bundesstraße 6.']], plays: 2, q: 'Wo gibt es einen Stau?', options: ['Auf der B6.', 'In der Innenstadt.', 'Auf der A9.'], a: 2 },
            { type: 'mc', audio: [['Radio', 'Heute Abend um 20 Uhr spielt die Band „Nordlicht“ im Stadtpark. Der Eintritt ist frei. Bei Regen findet das Konzert in der Stadthalle statt.']], plays: 2, q: 'Was kostet das Konzert?', options: ['Nichts.', '20 Euro.', 'Das sagt der Text nicht.'], a: 0 },
            { type: 'mc', audio: [['Radio', 'Gewinnspiel! Rufen Sie jetzt an und gewinnen Sie zwei Karten für das Fußballspiel am Samstag. Unsere Nummer ist null drei vier eins, fünf null fünf null.']], plays: 2, q: 'Was kann man gewinnen?', options: ['Ein Fußballtrikot.', 'Zwei Eintrittskarten.', 'Eine Reise.'], a: 1 },
            { type: 'mc', audio: [['Radio', 'Die Stadtbibliothek ist ab Montag wieder geöffnet. Neu sind die Öffnungszeiten am Samstag: von 10 bis 16 Uhr.']], plays: 2, q: 'Was ist neu?', options: ['Die Bibliothek hat einen neuen Ort.', 'Die Öffnungszeiten am Samstag.', 'Die Bibliothek ist am Montag geschlossen.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören ein Gespräch. Sie hören den Text einmal. Was macht Jana an welchem Tag? Wählen Sie für jeden Tag die passende Aktivität.',
          audio: [
            ['Mann', 'Jana, wollen wir diese Woche mal zusammen essen gehen?'],
            ['Jana', 'Gern, aber die Woche ist voll. Am Montag habe ich meinen Yogakurs.'],
            ['Mann', 'Und am Dienstag?'],
            ['Jana', 'Da muss ich lange arbeiten, wir haben ein großes Projekt. Am Mittwoch besuche ich meine Oma im Krankenhaus.'],
            ['Mann', 'Oh, hoffentlich geht es ihr bald besser. Und Donnerstag?'],
            ['Jana', 'Am Donnerstag gehe ich mit Kolleginnen ins Theater. Aber Freitag habe ich Zeit! Dann können wir essen gehen.'],
            ['Mann', 'Super, und am Samstag?'],
            ['Jana', 'Am Samstag fahre ich mit dem Fahrrad an den See, wenn das Wetter schön ist.']
          ],
          plays: 1,
          choices: [['a', 'Yoga'], ['b', 'lange arbeiten'], ['c', 'Oma besuchen'], ['d', 'Theater'], ['e', 'essen gehen'], ['f', 'Fahrradtour'], ['g', 'einkaufen']],
          items: [
            { type: 'match', q: 'Dienstag', a: 'b' },
            { type: 'match', q: 'Mittwoch', a: 'c' },
            { type: 'match', q: 'Donnerstag', a: 'd' },
            { type: 'match', q: 'Freitag', a: 'e' },
            { type: 'match', q: 'Samstag', a: 'f' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie a, b oder c.',
          items: [
            { type: 'mc', audio: [['Frau', 'Was hast du deinem Bruder zum Geburtstag geschenkt?'], ['Mann', 'Ich wollte ihm ein Buch kaufen, aber er hat schon so viele. Jetzt bekommt er eine Uhr.']], q: 'Was schenkt der Mann seinem Bruder?', options: ['Ein Buch.', 'Eine Uhr.', 'Ein Hemd.'], a: 1 },
            { type: 'mc', audio: [['Mann', 'Wie bist du heute zur Arbeit gekommen? Dein Auto ist doch kaputt.'], ['Frau', 'Ich wollte den Bus nehmen, aber er kam nicht. Dann bin ich mit dem Fahrrad gefahren.']], q: 'Wie ist die Frau zur Arbeit gekommen?', options: ['Mit dem Auto.', 'Mit dem Bus.', 'Mit dem Fahrrad.'], a: 2 },
            { type: 'mc', audio: [['Frau', 'Wann ist der Elternabend in der Schule?'], ['Mann', 'Nicht am Dienstag, sondern am Mittwoch um halb acht.']], q: 'Wann ist der Elternabend?', options: ['Am Dienstag.', 'Am Mittwoch um 19:30 Uhr.', 'Am Mittwoch um 18:30 Uhr.'], a: 1 },
            { type: 'mc', audio: [['Mann', 'Was möchtest du trinken? Kaffee?'], ['Frau', 'Nein danke, am Abend trinke ich keinen Kaffee mehr. Ich nehme einen Tee.']], q: 'Was trinkt die Frau?', options: ['Kaffee.', 'Tee.', 'Wasser.'], a: 1 },
            { type: 'mc', audio: [['Frau', 'Wo warst du im Urlaub?'], ['Mann', 'Eigentlich wollten wir nach Italien, aber dann waren wir in Österreich in den Bergen. Es war wunderschön.']], q: 'Wo war der Mann im Urlaub?', options: ['In Italien.', 'In Österreich.', 'An der Nordsee.'], a: 1 }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Sie hören ein Interview. Sie hören den Text zweimal. Ja oder Nein? (Ja = Richtig, Nein = Falsch)',
          audio: [
            ['Moderator', 'Heute ist Frau Bauer bei uns. Frau Bauer, Sie fahren jeden Tag mit dem Fahrrad zur Arbeit. Wie weit ist das?'],
            ['Frau Bauer', 'Ungefähr zwölf Kilometer. Ich brauche etwa vierzig Minuten.'],
            ['Moderator', 'Fahren Sie auch im Winter?'],
            ['Frau Bauer', 'Ja, außer wenn es Schnee oder Eis gibt. Dann nehme ich die Straßenbahn.'],
            ['Moderator', 'Warum fahren Sie Fahrrad und nicht mit dem Auto?'],
            ['Frau Bauer', 'Ich habe gar kein Auto. Und ich möchte mich gern bewegen. Nach der Arbeit bin ich nicht mehr so gestresst.'],
            ['Moderator', 'Gibt es bei Ihrer Firma eine Dusche?'],
            ['Frau Bauer', 'Ja, zum Glück! Die Firma hat sie letztes Jahr eingebaut, weil viele Kollegen mit dem Rad kommen.']
          ],
          plays: 2,
          items: [
            { type: 'tf', q: 'Frau Bauer fährt ungefähr zwölf Kilometer zur Arbeit.', a: 'r' },
            { type: 'tf', q: 'Bei Schnee fährt sie mit dem Fahrrad.', a: 'f' },
            { type: 'tf', q: 'Frau Bauer hat ein Auto.', a: 'f' },
            { type: 'tf', q: 'Nach der Arbeit fühlt sie sich entspannter.', a: 'r' },
            { type: 'tf', q: 'In der Firma gibt es eine Dusche.', a: 'r' }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 30, points: 25,
      intro: 'Two short texts: a text message to a friend and an e-mail.',
      tasks: [
        {
          title: 'Teil 1: SMS', weight: 10, register: 'neutral', minWords: 20, maxWords: 30,
          situation: '<p>Sie sind mit Ihrem Freund Max zum Kino verabredet, aber Sie kommen zu spät. Schreiben Sie Max eine SMS.</p>',
          points: ['Entschuldigen Sie sich.', 'Warum kommen Sie zu spät?', 'Wann sind Sie da?'],
          keywords: [['sorry', 'tut mir leid', 'entschuldig', 'leider'], ['weil', 'bus', 'bahn', 'arbeit', 'stau', 'verpasst', 'denn'], ['uhr', 'minuten', 'um ', 'gleich', 'bin da', 'komme']],
          instructions: 'Schreiben Sie 20 bis 30 Wörter zu allen drei Punkten.',
          model: 'Hallo Max, sorry, ich komme leider zu spät! Mein Bus hatte eine Panne und ich muss jetzt laufen. Ich bin in 15 Minuten am Kino. Kauf schon mal die Karten! Bis gleich'
        },
        {
          title: 'Teil 2: E-Mail', weight: 15, register: 'semiformal', minWords: 30, maxWords: 40,
          situation: '<p>Ihre Nachbarin, Frau Lehmann, hat Sie zu ihrem 70. Geburtstag am Samstag eingeladen. Schreiben Sie Frau Lehmann eine E-Mail.</p>',
          points: ['Bedanken Sie sich für die Einladung.', 'Sagen Sie, ob Sie kommen.', 'Fragen Sie, was Sie mitbringen können.'],
          keywords: [['danke', 'vielen dank', 'bedanke'], ['komme', 'kann', 'gern', 'leider', 'dabei'], ['mitbringen', 'bringen', 'kuchen', 'salat', 'helfen']],
          instructions: 'Schreiben Sie 30 bis 40 Wörter zu allen drei Punkten. Vergessen Sie Anrede und Gruß nicht.',
          model: 'Liebe Frau Lehmann,\nvielen Dank für Ihre Einladung zu Ihrem Geburtstag! Ich komme sehr gern am Samstag. Soll ich etwas mitbringen? Ich kann zum Beispiel einen Kuchen backen oder einen Salat machen.\nViele Grüße\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 25,
      intro: 'In the real exam you speak with a partner. Practise each part aloud.',
      tasks: [
        { title: 'Teil 1: Fragen zur Person', seconds: 120, html: '<p>Stellen Sie Fragen zu den Themen und beantworten Sie sie über sich selbst: <strong>Geburtstag · Wohnung · Arbeit / Schule · Freizeit</strong>.</p>', tips: '<p>Wann hast du Geburtstag? Wie feierst du? / Wo wohnst du? Wie viele Zimmer hat deine Wohnung? / Was machst du beruflich? / Was machst du in deiner Freizeit?</p>' },
        { title: 'Teil 2: Über das eigene Leben sprechen', seconds: 120, html: '<p>Erzählen Sie etwas über sich. Thema: <strong>Was machen Sie am Wochenende?</strong> Die Stichworte helfen Ihnen: <em>Sport · Familie · Freunde · Essen</em>.</p>', tips: '<p>Am Wochenende schlafe ich lange. / Samstags gehe ich oft … / Am Sonntag besuche ich … / Mit Freunden … / Am liebsten …</p>' },
        { title: 'Teil 3: Gemeinsam etwas planen', seconds: 150, html: '<p>Sie möchten mit Ihrer Partnerin / Ihrem Partner am Samstag zusammen in die Stadt gehen und ein Geschenk für einen Freund kaufen. Wann haben Sie beide Zeit? Ihr Kalender: Samstag 9–11 Uhr Fitnessstudio, 13 Uhr Mittagessen bei den Eltern, ab 16 Uhr frei. Machen Sie Vorschläge und finden Sie einen Termin.</p>', tips: '<p>Hast du am Samstag um … Zeit? / Da kann ich leider nicht, da … / Wie wäre es um …? / Gut, dann treffen wir uns um … am …</p>' }
      ]
    }
  ]
};
