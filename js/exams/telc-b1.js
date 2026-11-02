EXAMS['telc-b1'] = {
  id: 'telc-b1', provider: 'telc', level: 'B1', name: 'telc Deutsch B1 (Zertifikat Deutsch)',
  about: 'Written exam of 150 minutes: Leseverstehen and Sprachbausteine (90 min together), Hörverstehen (about 30 min) and Schriftlicher Ausdruck (30 min). Oral exam in pairs of about 15 minutes. 300 points in total.',
  passText: 'You need at least 60 percent in the written exam (135 of 225 points) and 60 percent in the oral exam (45 of 75 points). A strong written result does not make up for a weak oral one.',
  pass: { type: 'groups', groups: [{ name: 'Schriftliche Prüfung', modules: ['lesen', 'sprachbausteine', 'hoeren', 'schreiben'], min: 0.6 }, { name: 'Mündliche Prüfung', modules: ['sprechen'], min: 0.6 }] },
  rubric: ['Aufgabenbewältigung (all four points covered)', 'Kommunikative Gestaltung (structure, register)', 'Formale Richtigkeit (grammar and spelling)'],
  rubricHelp: 'telc rates the B1 letter on three criteria. Every guiding point should get at least one or two sentences.',
  speakRubric: ['Ausdrucksfähigkeit (range of expression)', 'Aufgabenbewältigung (task completion and interaction)', 'Formale Richtigkeit (correctness)', 'Aussprache und Intonation'],
  modules: [
    {
      id: 'lesen', name: 'Leseverstehen', en: 'Reading', kind: 'items', minutes: 70, points: 75,
      intro: 'Three parts with 20 questions. In the real exam Leseverstehen and Sprachbausteine share 90 minutes; here they are split into 70 and 20 minutes.',
      parts: [
        {
          title: 'Teil 1: Globalverstehen', instructions: 'Lesen Sie die Überschriften a–j und die Texte 1–5. Welche Überschrift passt am besten zu welchem Text?',
          text: `<p><strong>1</strong> Nach einem Jahr Pause öffnet das Freibad am Stadtrand am kommenden Samstag wieder. Die Becken wurden saniert, und es gibt nun auch einen neuen Spielplatz für Kinder. Der Eintritt bleibt gleich.</p>
<p><strong>2</strong> Immer mehr Menschen teilen sich ein Auto, statt selbst eines zu besitzen. Der größte Anbieter der Stadt meldet für das vergangene Jahr einen Zuwachs von 40 Prozent bei den Nutzern.</p>
<p><strong>3</strong> Eine Grundschule hat die Hausaufgaben abgeschafft. Stattdessen üben die Kinder in zusätzlichen Lernzeiten in der Schule. Lehrer und Eltern sind bisher zufrieden.</p>
<p><strong>4</strong> Wegen des Fachkräftemangels suchen viele Handwerksbetriebe Auszubildende im Ausland. Ein Projekt unterstützt junge Menschen aus Spanien beim Start in Deutschland.</p>
<p><strong>5</strong> Die Stadtbibliothek verleiht seit Kurzem nicht nur Bücher, sondern auch Werkzeuge, Spiele und sogar Nähmaschinen. Das Angebot wird gut angenommen.</p>`,
          choices: [['a', 'Mehr Lernen in der Schule, weniger zu Hause'], ['b', 'Schwimmbad schließt für immer'], ['c', 'Ausländische Jugendliche als Lehrlinge'], ['d', 'Bohrmaschine statt Roman'], ['e', 'Gemeinsam mobil'], ['f', 'Badesaison mit Neuheiten'], ['g', 'Bibliothek kürzt Öffnungszeiten'], ['h', 'Weniger Autos in der Innenstadt verboten'], ['i', 'Eltern gegen neue Regeln'], ['j', 'Studium im Ausland immer beliebter']],
          items: [{ type: 'match', q: 'Text 1', a: 'f' }, { type: 'match', q: 'Text 2', a: 'e' }, { type: 'match', q: 'Text 3', a: 'a' }, { type: 'match', q: 'Text 4', a: 'c' }, { type: 'match', q: 'Text 5', a: 'd' }]
        },
        {
          title: 'Teil 2: Detailverstehen', instructions: 'Lesen Sie den Text und die Aufgaben. Wählen Sie a, b oder c.',
          text: `<h3>Ein Laden, der allen gehört</h3>
<p>In dem kleinen Dorf Steinbach gab es zehn Jahre lang keinen Laden mehr. Wer Brot oder Milch kaufen wollte, musste mit dem Auto in die nächste Stadt fahren, für ältere Menschen ohne Auto ein großes Problem. Vor zwei Jahren haben sich deshalb über hundert Bewohnerinnen und Bewohner zusammengetan und einen eigenen Dorfladen gegründet. Jedes Mitglied hat einen Anteil von 100 Euro gekauft.</p>
<p>Heute verkauft der Laden vor allem Produkte von Bauernhöfen aus der Region, aber auch Dinge des täglichen Bedarfs wie Waschmittel oder Zahnpasta. Zwei Verkäuferinnen sind fest angestellt, an den Wochenenden helfen Freiwillige. Gewinn macht der Laden kaum, doch das ist auch nicht das Ziel. „Es geht darum, dass das Dorf lebendig bleibt“, sagt Vorsitzender Klaus Merz.</p>
<p>Inzwischen ist der Laden auch ein Treffpunkt geworden. In einer kleinen Ecke gibt es Kaffee und Kuchen, und einmal im Monat findet ein Spieleabend statt. Andere Dörfer haben schon Interesse an dem Modell gezeigt.</p>`,
          items: [
            { type: 'mc', q: 'Vor der Gründung des Ladens …', options: ['gab es im Dorf einen Supermarkt.', 'mussten die Menschen zum Einkaufen in die Stadt fahren.', 'kam jeden Tag ein Verkaufswagen.'], a: 1 },
            { type: 'mc', q: 'Die Bewohner …', options: ['haben Anteile am Laden gekauft.', 'bekommen im Laden Rabatt.', 'arbeiten alle im Laden.'], a: 0 },
            { type: 'mc', q: 'Der Laden verkauft vor allem …', options: ['Produkte aus anderen Ländern.', 'regionale Lebensmittel.', 'Kleidung.'], a: 1 },
            { type: 'mc', q: 'Das Hauptziel des Ladens ist, …', options: ['viel Geld zu verdienen.', 'das Dorfleben zu erhalten.', 'Arbeitsplätze für Jugendliche zu schaffen.'], a: 1 },
            { type: 'mc', q: 'Im Laden …', options: ['kann man auch Kaffee trinken.', 'gibt es jeden Abend Veranstaltungen.', 'darf man keine Zeit verbringen.'], a: 0 }
          ]
        },
        {
          title: 'Teil 3: Selektives Verstehen', instructions: 'Lesen Sie die Situationen 1–10 und die Anzeigen a–l. Welche Anzeige passt? Für zwei Situationen gibt es keine passende Anzeige: Wählen Sie dann x.',
          choices: [
            ['a', 'Gebrauchtwagen-Markt: jeden Sonntag 10–16 Uhr auf dem Messegelände.'],
            ['b', 'Schreibkurs: Bewerbungen richtig formulieren, 2 Abende, Volkshochschule.'],
            ['c', 'Wohnung zu vermieten: 3 Zimmer, Altbau, Balkon, Nähe Uni, ab 1.10.'],
            ['d', 'Hundesitter gesucht: Gassi gehen mittags, Mo–Fr, 10 € pro Tag.'],
            ['e', 'Online-Sprachkurs Englisch für Berufstätige, flexible Zeiten.'],
            ['f', 'Repair-Café: Wir reparieren Elektrogeräte, Kleidung und Fahrräder, jeden 1. Samstag.'],
            ['g', 'Kinderturnen für 3- bis 6-Jährige, Mittwoch 16 Uhr, Sporthalle Ost.'],
            ['h', 'Zimmer in WG frei, 18 m², für Studentin, 350 € warm.'],
            ['i', 'Erste-Hilfe-Kurs für Führerschein-Bewerber, jeden Samstag.'],
            ['j', 'Steuerberatung für Arbeitnehmer, erste Beratung kostenlos.'],
            ['k', 'Fotokurs für Senioren: Digitale Fotos bearbeiten am Computer.'],
            ['l', 'Café „Gemeinsam“: Frühstück für Alleinerziehende mit Kinderbetreuung, sonntags.'],
            ['x', 'Keine passende Anzeige']
          ],
          items: [
            { type: 'match', q: 'Ihre Freundin studiert und sucht ein günstiges Zimmer.', a: 'h' },
            { type: 'match', q: 'Ihr Nachbar hat eine neue Stelle bekommen und braucht jemanden, der tagsüber seinen Hund ausführt.', a: 'd' },
            { type: 'match', q: 'Sie möchten Ihre Bewerbungsunterlagen verbessern.', a: 'b' },
            { type: 'match', q: 'Ihr Bruder macht den Führerschein und braucht noch einen Kurs.', a: 'i' },
            { type: 'match', q: 'Ihre Großmutter möchte lernen, wie man Bilder am Computer verändert.', a: 'k' },
            { type: 'match', q: 'Sie möchten ein günstiges gebrauchtes Auto kaufen.', a: 'a' },
            { type: 'match', q: 'Eine Kollegin erzieht ihr Kind allein und möchte andere Eltern kennenlernen.', a: 'l' },
            { type: 'match', q: 'Ihr Toaster funktioniert nicht mehr.', a: 'f' },
            { type: 'match', q: 'Sie suchen einen Schwimmkurs für Ihre Tochter.', a: 'x' },
            { type: 'match', q: 'Sie möchten Italienisch lernen.', a: 'x' }
          ]
        }
      ]
    },
    {
      id: 'sprachbausteine', name: 'Sprachbausteine', en: 'Grammar and vocabulary', kind: 'items', minutes: 20, points: 30,
      intro: 'Two gap texts with 20 gaps.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Brief. Welches Wort passt in die Lücke? Wählen Sie a, b oder c.',
          text: `<p>Liebe Nora,</p>
<p>vielen Dank für deinen Brief! Ich habe mich sehr (1) ___ gefreut. Entschuldige, dass ich erst jetzt antworte, (2) ___ in den letzten Wochen hatte ich viel Stress. Ich habe nämlich eine neue Stelle (3) ___ einer Reiseagentur. Die Arbeit gefällt mir gut, (4) ___ die Kollegen sind sehr nett. Leider muss ich jeden Tag eine Stunde fahren, (5) ___ ins Büro zu kommen.</p>
<p>Du hast geschrieben, dass du im Sommer nach Deutschland kommst. Das ist toll! Du kannst natürlich (6) ___ mir wohnen. Mein Gästezimmer ist zwar klein, (7) ___ gemütlich. Weißt du schon, (8) ___ du ankommst? Ich hole dich gern vom Bahnhof ab. Wir könnten zusammen an den See fahren, (9) ___ das Wetter schön ist.</p>
<p>Schreib mir bald, ich freue mich (10) ___ deinen Besuch!</p>
<p>Liebe Grüße<br>Elena</p>`,
          items: [
            { type: 'mc', q: '1', options: ['darüber', 'dafür', 'davon'], a: 0 },
            { type: 'mc', q: '2', options: ['weil', 'denn', 'deshalb'], a: 1 },
            { type: 'mc', q: '3', options: ['bei', 'mit', 'an'], a: 0 },
            { type: 'mc', q: '4', options: ['aber', 'und', 'oder'], a: 1 },
            { type: 'mc', q: '5', options: ['damit', 'um', 'für'], a: 1 },
            { type: 'mc', q: '6', options: ['zu', 'bei', 'von'], a: 1 },
            { type: 'mc', q: '7', options: ['aber', 'denn', 'sondern'], a: 0 },
            { type: 'mc', q: '8', options: ['wann', 'wenn', 'als'], a: 0 },
            { type: 'mc', q: '9', options: ['ob', 'wenn', 'dass'], a: 1 },
            { type: 'mc', q: '10', options: ['über', 'auf', 'für'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text. Welches Wort (a–o) passt in die Lücke? Jedes Wort passt nur einmal.',
          text: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich habe Ihre (11) ___ in der Zeitung gelesen und interessiere mich (12) ___ den Platz im Abendkurs „Buchhaltung“. Ich arbeite zurzeit als Verkäuferin, möchte mich aber beruflich (13) ___. Deshalb hätte ich noch einige (14) ___.</p>
<p>Wie viele Teilnehmer sind in einem Kurs? Gibt es am Ende eine (15) ___ und bekommt man ein Zertifikat? Außerdem möchte ich wissen, ob ich die Kursgebühr in (16) ___ bezahlen kann.</p>
<p>Leider kann ich nur dienstags und donnerstags, weil ich am (17) ___ arbeiten muss. Ich würde mich freuen, (18) ___ Sie mir weitere Informationen schicken (19) ___.</p>
<p>Vielen Dank im (20) ___.<br>Mit freundlichen Grüßen<br>Petra Lang</p>`,
          choices: [['a', 'Anzeige'], ['b', 'für'], ['c', 'weiterbilden'], ['d', 'Fragen'], ['e', 'Prüfung'], ['f', 'Raten'], ['g', 'Wochenende'], ['h', 'wenn'], ['i', 'könnten'], ['j', 'Voraus'], ['k', 'Sprache'], ['l', 'über'], ['m', 'ob'], ['n', 'Urlaub'], ['o', 'müssen']],
          items: [
            { type: 'match', q: '11', a: 'a' }, { type: 'match', q: '12', a: 'b' }, { type: 'match', q: '13', a: 'c' }, { type: 'match', q: '14', a: 'd' }, { type: 'match', q: '15', a: 'e' },
            { type: 'match', q: '16', a: 'f' }, { type: 'match', q: '17', a: 'g' }, { type: 'match', q: '18', a: 'h' }, { type: 'match', q: '19', a: 'i' }, { type: 'match', q: '20', a: 'j' }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hörverstehen', en: 'Listening', kind: 'items', minutes: 30, points: 75,
      intro: 'Three parts with 20 questions.',
      parts: [
        {
          title: 'Teil 1: Globalverstehen', instructions: 'Sie hören fünf kurze Nachrichten. Sie hören sie einmal. Sind die Aussagen richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Nachrichten', 'Berlin. Die Bundesregierung will den Ausbau von Radwegen in den nächsten fünf Jahren mit zwei Milliarden Euro fördern. Das Geld soll vor allem in Städte und Gemeinden fließen.']], q: 'Die Regierung investiert in Radwege.', a: 'r' },
            { type: 'tf', audio: [['Nachrichten', 'Hamburg. Der Hafen meldet für das vergangene Jahr weniger Containerumschlag als im Jahr davor. Als Grund werden die schwache Weltwirtschaft und Streiks genannt.']], q: 'Im Hamburger Hafen wurden mehr Container umgeschlagen.', a: 'f' },
            { type: 'tf', audio: [['Nachrichten', 'München. Wegen der großen Nachfrage verlängert das Deutsche Museum seine Ausstellung über Raumfahrt bis Ende des Jahres.']], q: 'Die Ausstellung endet früher als geplant.', a: 'f' },
            { type: 'tf', audio: [['Nachrichten', 'Sport. Die deutsche Handballmannschaft der Frauen hat gestern das Spiel gegen Norwegen knapp mit 27 zu 26 gewonnen und steht damit im Halbfinale.']], q: 'Die Handballerinnen haben gewonnen.', a: 'r' },
            { type: 'tf', audio: [['Nachrichten', 'Das Wetter: Am Wochenende wird es im ganzen Land sonnig und warm. Nur im Norden kann es am Sonntagabend regnen.']], q: 'Am Wochenende regnet es im ganzen Land.', a: 'f' }
          ]
        },
        {
          title: 'Teil 2: Detailverstehen', instructions: 'Sie hören ein Interview. Sie hören es zweimal. Sind die Aussagen richtig oder falsch?',
          audio: [
            ['Moderatorin', 'Bei uns im Studio ist heute Herr Okafor. Sie sind vor sechs Jahren aus Nigeria nach Deutschland gekommen und haben inzwischen ein eigenes Restaurant. Wie kam es dazu?'],
            ['Herr Okafor', 'Ich habe in Lagos Betriebswirtschaft studiert, aber Kochen war immer meine Leidenschaft. In Deutschland habe ich zuerst als Küchenhilfe in einem Hotel gearbeitet und dort viel gelernt.'],
            ['Moderatorin', 'War es schwer, Deutsch zu lernen?'],
            ['Herr Okafor', 'Am Anfang sehr. Ich habe abends einen Kurs besucht und mit meinen Kollegen in der Küche geübt. Die Fachwörter aus der Küche kannte ich schnell, die Grammatik war schwieriger.'],
            ['Moderatorin', 'Und dann haben Sie sich selbstständig gemacht?'],
            ['Herr Okafor', 'Ja, vor zwei Jahren. Ein Bekannter hat mir geholfen, einen Kredit zu bekommen. Ohne seine Unterstützung hätte ich das nicht geschafft.'],
            ['Moderatorin', 'Was kann man bei Ihnen essen?'],
            ['Herr Okafor', 'Westafrikanische Küche, aber mit Zutaten aus der Region. Unser bekanntestes Gericht ist Jollof-Reis. Viele Gäste kommen, weil sie etwas Neues probieren möchten.'],
            ['Moderatorin', 'Haben Sie Pläne für die Zukunft?'],
            ['Herr Okafor', 'Ich möchte einen Kochkurs anbieten, damit die Leute die Gerichte auch zu Hause kochen können. Und vielleicht irgendwann ein zweites Restaurant in Leipzig.']
          ],
          plays: 2,
          items: [
            { type: 'tf', q: 'Herr Okafor lebt seit sechs Jahren in Deutschland.', a: 'r' },
            { type: 'tf', q: 'Er hat in Nigeria Kochen studiert.', a: 'f' },
            { type: 'tf', q: 'Seine erste Arbeit in Deutschland war in einem Hotel.', a: 'r' },
            { type: 'tf', q: 'Er hat Deutsch nur im Kurs gelernt.', a: 'f' },
            { type: 'tf', q: 'Die Grammatik fand er leichter als den Wortschatz.', a: 'f' },
            { type: 'tf', q: 'Er hat sein Restaurant vor zwei Jahren eröffnet.', a: 'r' },
            { type: 'tf', q: 'Ein Bekannter hat ihm bei der Finanzierung geholfen.', a: 'r' },
            { type: 'tf', q: 'Im Restaurant werden nur importierte Zutaten verwendet.', a: 'f' },
            { type: 'tf', q: 'Viele Gäste möchten neue Gerichte kennenlernen.', a: 'r' },
            { type: 'tf', q: 'Er plant, Kochkurse anzubieten.', a: 'r' }
          ]
        },
        {
          title: 'Teil 3: Selektives Verstehen', instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Sind die Aussagen richtig oder falsch?',
          items: [
            { type: 'tf', audio: [['Ansage', 'Sie haben die Nummer der Zahnarztpraxis Dr. Schröder gewählt. Wir sind bis zum 5. Januar im Urlaub. In dringenden Fällen rufen Sie bitte den zahnärztlichen Notdienst an.']], plays: 2, q: 'Die Praxis ist bis Anfang Januar geschlossen.', a: 'r' },
            { type: 'tf', audio: [['Durchsage', 'Liebe Reisende, der Regionalexpress nach Erfurt fällt heute wegen einer Störung aus. Bitte nutzen Sie den Ersatzverkehr mit Bussen vor dem Bahnhof.']], plays: 2, q: 'Statt des Zuges fahren Busse.', a: 'r' },
            { type: 'tf', audio: [['Nachricht', 'Hallo Frau Ilić, hier ist das Bürgeramt. Ihr neuer Reisepass ist da. Sie können ihn ohne Termin abholen, bitte bringen Sie den alten Pass mit.']], plays: 2, q: 'Frau Ilić braucht einen Termin, um den Pass abzuholen.', a: 'f' },
            { type: 'tf', audio: [['Radio', 'Am Samstag findet in der Innenstadt ein Stadtlauf statt. Zwischen 8 und 14 Uhr sind mehrere Straßen gesperrt. Autofahrer sollten das Zentrum umfahren.']], plays: 2, q: 'Am Samstag sind den ganzen Tag Straßen gesperrt.', a: 'f' },
            { type: 'tf', audio: [['Durchsage', 'Liebe Kundinnen und Kunden, heute erhalten Sie in unserer Elektroabteilung beim Kauf eines Fernsehers eine kostenlose Lieferung nach Hause.']], plays: 2, q: 'Beim Kauf eines Fernsehers ist die Lieferung gratis.', a: 'r' }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schriftlicher Ausdruck', en: 'Writing', kind: 'writing', minutes: 30, points: 45,
      intro: 'One letter or e-mail about four guiding points.',
      tasks: [
        {
          title: 'Aufgabe: Brief an einen Freund', weight: 45, register: 'informal', minWords: 100,
          situation: '<p>Ihr Freund Lukas hat Ihnen geschrieben, dass er nächstes Jahr in Ihrer Stadt ein Praktikum machen möchte. Er bittet Sie um Tipps.</p><p>Schreiben Sie Lukas einen Brief. Schreiben Sie etwas zu allen vier Punkten. Überlegen Sie sich eine passende Reihenfolge und einen passenden Schluss.</p>',
          points: ['Wohnungssuche in Ihrer Stadt', 'Verkehrsmittel', 'Freizeitmöglichkeiten', 'Ihr Angebot, ihm zu helfen'],
          keywords: [['wohnung', 'zimmer', 'wg', 'miete', 'wohnen'], ['bus', 'bahn', 'straßenbahn', 'fahrrad', 'auto', 'ticket', 'verkehr'], ['freizeit', 'park', 'kino', 'sport', 'konzert', 'see', 'museum', 'ausgehen', 'kneipe'], ['helfen', 'hilfe', 'kannst bei mir', 'abholen', 'zeigen', 'unterstützen', 'gern']],
          instructions: 'Schreiben Sie zu allen vier Punkten. Achten Sie auf Anrede, Einleitung und Gruß.',
          model: 'Lieber Lukas,\nvielen Dank für deinen Brief! Ich freue mich sehr, dass du nächstes Jahr dein Praktikum in Leipzig machst.\nDie Wohnungssuche ist hier leider nicht ganz einfach, vor allem im Herbst, wenn die Studenten kommen. Am besten suchst du ein Zimmer in einer WG, das ist günstiger. Ich kann dir ein paar gute Webseiten schicken.\nMit den Verkehrsmitteln hast du hier keine Probleme. Die Straßenbahnen fahren sehr oft, aber die meisten Leute fahren Fahrrad, weil die Stadt nicht so groß ist.\nIn der Freizeit kann man viel machen. Im Sommer fahren wir oft an die Seen im Süden der Stadt, und abends gibt es viele Konzerte und Kneipen.\nWenn du möchtest, kannst du in der ersten Woche bei mir wohnen, bis du ein Zimmer gefunden hast. Ich zeige dir auch gern die Stadt.\nSchreib mir bald, wann du kommst!\nViele Grüße\nMaria'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Mündlicher Ausdruck', en: 'Speaking', kind: 'speaking', minutes: 15, points: 75, prep: 20,
      intro: 'Three parts in pairs: getting to know each other, talking about a topic, and planning something together.',
      tasks: [
        { title: 'Teil 1: Kontaktaufnahme (about 3–4 minutes)', seconds: 210, html: '<p>Lernen Sie Ihre Partnerin / Ihren Partner kennen. Sprechen Sie zum Beispiel über: <em>Name, Herkunft, Wohnort, Familie, Beruf, Sprachen, Hobbys, Reisen.</em> Erzählen Sie auch von sich.</p>', tips: '<p>Woher kommst du? / Was machst du beruflich? / Seit wann lernst du Deutsch? / Das ist ja interessant! Erzähl mal mehr …</p>' },
        { title: 'Teil 2: Gespräch über ein Thema (about 5–6 minutes)', seconds: 330, html: '<p>Sie haben einen kurzen Text zum Thema <strong>„Immer mehr junge Erwachsene wohnen lange bei ihren Eltern“</strong> gelesen. Ihre Partnerin / Ihr Partner hat einen anderen Text zum selben Thema. Berichten Sie kurz, was in Ihrem Text steht, erzählen Sie von Ihren Erfahrungen und wie es in Ihrem Heimatland ist. Sprechen Sie dann über Ihre Meinungen.</p><p><em>Ihr Text: Laut einer Umfrage wohnen 30 Prozent der 25-Jährigen noch bei den Eltern. Hauptgrund sind die hohen Mieten. Viele genießen aber auch die Bequemlichkeit.</em></p>', tips: '<p>In meinem Text geht es um … / Laut einer Umfrage … / In meinem Heimatland ist es üblich, dass … / Ich persönlich finde … / Wie siehst du das?</p>' },
        { title: 'Teil 3: Gemeinsam etwas planen (about 5–6 minutes)', seconds: 330, html: '<p>Ihr Deutschkurs endet bald. Sie möchten zusammen mit Ihrer Partnerin / Ihrem Partner ein Abschiedsfest für den Kurs organisieren. Überlegen Sie: <em>Wann? Wo? Essen und Getränke? Wer macht was? Geschenk für die Lehrerin?</em></p>', tips: '<p>Ich schlage vor, dass wir … / Wie wäre es mit …? / Das ist eine gute Idee, aber … / Dann übernehme ich … / Gut, dann machen wir es so.</p>' }
      ]
    }
  ]
};
