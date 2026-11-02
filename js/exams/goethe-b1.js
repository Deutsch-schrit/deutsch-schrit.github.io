EXAMS['goethe-b1'] = {
  id: 'goethe-b1', provider: 'goethe', level: 'B1', name: 'Goethe-Zertifikat B1',
  about: 'Four separate modules: Lesen (65 min), Hören (about 40 min), Schreiben (60 min) and Sprechen (about 15 min). Each module has 100 points.',
  passText: 'Each module is passed with at least 60 of 100 points. You can pass and repeat modules separately.',
  pass: { type: 'module', min: 0.6 },
  rubric: ['Erfüllung (task completion)', 'Kohärenz (structure and linking)', 'Wortschatz (vocabulary)', 'Strukturen (grammar)'],
  rubricHelp: 'Goethe rates B1 writing on these four criteria. 4 means fully at B1 level, 2 means partly.',
  speakRubric: ['Erfüllung (task completion)', 'Kohärenz (fluency and linking)', 'Wortschatz (vocabulary)', 'Strukturen (grammar)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 65, points: 100,
      intro: 'Five parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Text und die Aufgaben. Sind die Aussagen richtig oder falsch?',
          text: `<h3>Mein erstes Jahr im Kleingarten</h3>
<p>Liebe Leserinnen und Leser, vor einem Jahr habe ich etwas getan, was ich nie für möglich gehalten hätte: Ich habe einen Kleingarten gepachtet. Meine Freunde haben gelacht, weil ich früher nicht einmal eine Zimmerpflanze am Leben halten konnte. Aber nach zwei Jahren im Homeoffice wollte ich unbedingt mehr Zeit draußen verbringen.</p>
<p>Der Anfang war schwieriger als gedacht. Der Garten war seit Jahren nicht gepflegt worden, überall wuchs Unkraut, und das kleine Gartenhaus hatte ein Loch im Dach. Zum Glück ist mein Nachbar Herr Brandt seit über dreißig Jahren im Verein. Er hat mir nicht nur sein Werkzeug geliehen, sondern mir auch erklärt, welches Gemüse für Anfänger geeignet ist: Zucchini, Salat und Radieschen.</p>
<p>Was ich nicht wusste: In einem Kleingartenverein gibt es viele Regeln. Mindestens ein Drittel der Fläche muss für Obst und Gemüse genutzt werden, und in der Mittagszeit darf man keinen Rasen mähen. Außerdem muss jedes Mitglied pro Jahr zehn Stunden Gemeinschaftsarbeit leisten, zum Beispiel die Wege sauber halten.</p>
<p>Inzwischen habe ich meine erste Ernte hinter mir. Die Zucchini waren so viele, dass ich sie im ganzen Haus verschenkt habe. Nächstes Jahr möchte ich Tomaten probieren, auch wenn Herr Brandt meint, dass sie in unserem Klima viel Arbeit machen.</p>`,
          items: [
            { type: 'tf', q: 'Die Autorin hatte schon immer viel Erfahrung mit Pflanzen.', a: 'f' },
            { type: 'tf', q: 'Sie wollte nach der Zeit im Homeoffice öfter an der frischen Luft sein.', a: 'r' },
            { type: 'tf', q: 'Der Garten war in einem guten Zustand, als sie ihn übernahm.', a: 'f' },
            { type: 'tf', q: 'Ihr Nachbar hat ihr Werkzeug zur Verfügung gestellt.', a: 'r' },
            { type: 'tf', q: 'Im Verein darf man den Rasen zu jeder Tageszeit mähen.', a: 'f' },
            { type: 'tf', q: 'Herr Brandt findet, dass Tomaten leicht anzubauen sind.', a: 'f' }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie die beiden Texte aus der Presse. Wählen Sie für jede Aufgabe die richtige Lösung a, b oder c.',
          text: `<h3>Text 1: Stadt testet Lastenräder zum Ausleihen</h3>
<p>Seit Anfang Mai können Bürgerinnen und Bürger in Neustadt kostenlos Lastenräder ausleihen. An fünf Stationen in der Innenstadt stehen insgesamt zwanzig Räder bereit, zwölf davon mit Elektromotor. Wer ein Rad nutzen möchte, muss sich vorher online registrieren und kann es dann bis zu drei Tage behalten. Die Stadt möchte so den Autoverkehr in der Innenstadt verringern. „Viele Menschen fahren nur mit dem Auto, weil sie Einkäufe oder Kinder transportieren müssen“, sagt Projektleiterin Sandra Kühn. Das Projekt läuft zunächst ein Jahr. Danach entscheidet der Stadtrat, ob es weitergeht.</p>
<h3>Text 2: Weniger Lebensmittel im Müll</h3>
<p>Ein Supermarkt in Bremen hat ein Regal eingerichtet, in dem Lebensmittel kurz vor dem Ablaufdatum zum halben Preis verkauft werden. Am Abend werden die übrigen Produkte an eine örtliche Tafel weitergegeben. Filialleiter Murat Demir ist zufrieden: In den ersten drei Monaten musste der Markt fast keine Lebensmittel mehr wegwerfen. Einige Kunden kommen inzwischen gezielt kurz vor Ladenschluss, um günstig einzukaufen. Kritik gibt es trotzdem: Manche Kunden meinen, die Produkte sähen nicht mehr frisch aus.</p>`,
          items: [
            { type: 'mc', q: 'In Neustadt …', options: ['muss man für die Lastenräder eine Gebühr bezahlen.', 'kann man ein Lastenrad bis zu drei Tage behalten.', 'haben alle Lastenräder einen Motor.'], a: 1 },
            { type: 'mc', q: 'Mit dem Projekt möchte die Stadt erreichen, dass …', options: ['weniger Menschen mit dem Auto in die Innenstadt fahren.', 'mehr Touristen nach Neustadt kommen.', 'die Geschäfte länger geöffnet haben.'], a: 0 },
            { type: 'mc', q: 'Nach einem Jahr …', options: ['werden mehr Stationen gebaut.', 'endet das Projekt auf jeden Fall.', 'wird entschieden, ob das Projekt weitergeführt wird.'], a: 2 },
            { type: 'mc', q: 'Im Supermarkt in Bremen …', options: ['werden Lebensmittel nach dem Ablaufdatum verschenkt.', 'gibt es Produkte kurz vor dem Ablaufdatum günstiger.', 'kann man nur abends einkaufen.'], a: 1 },
            { type: 'mc', q: 'Was passiert mit Lebensmitteln, die abends übrig sind?', options: ['Sie werden weggeworfen.', 'Die Mitarbeiter nehmen sie mit nach Hause.', 'Sie gehen an eine Tafel.'], a: 2 },
            { type: 'mc', q: 'Manche Kunden kritisieren, dass …', options: ['die Produkte nicht mehr frisch aussehen.', 'die Preise zu hoch sind.', 'der Markt zu früh schließt.'], a: 0 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige: Wählen Sie dann 0.',
          choices: [
            ['a', 'Gitarrenunterricht für Erwachsene, auch für absolute Anfänger. Kleine Gruppen, dienstags und donnerstags 19 Uhr, Musikschule Klang.'],
            ['b', 'Verkaufe gut erhaltenes Kinderfahrrad, 20 Zoll, blau, 60 Euro. Abholung in Leipzig-Gohlis.'],
            ['c', 'Sprachcafé im Stadtteilzentrum: Jeden Mittwoch Deutsch sprechen mit Muttersprachlern. Kostenlos, ohne Anmeldung.'],
            ['d', 'Wochenendkurs Fotografie: Bessere Bilder mit dem Smartphone. Samstag 10–16 Uhr, 45 Euro inkl. Mittagessen.'],
            ['e', 'Suche Nachhilfe in Mathematik für meinen Sohn (9. Klasse), zweimal pro Woche, gute Bezahlung.'],
            ['f', 'Yoga im Park: Jeden Sonntag 9 Uhr, bei jedem Wetter. Matte bitte mitbringen. Spende erwünscht.'],
            ['g', 'Umzugshelfer gesucht! Samstag, 3 Stunden, 15 Euro pro Stunde. Kräftige Studierende bevorzugt.'],
            ['h', 'Kochkurs „Afrikanische Küche“ für Paare, Freitagabend, 70 Euro pro Paar.'],
            ['i', 'Fahrradwerkstatt zum Selbermachen: Werkzeug und Hilfe kostenlos, Ersatzteile zum Einkaufspreis. Mo–Fr 15–19 Uhr.'],
            ['j', 'Schwimmkurs für Erwachsene ohne Vorkenntnisse, 10 Termine, abends im Hallenbad Süd.'],
            ['0', 'Keine passende Anzeige']
          ],
          items: [
            { type: 'match', q: 'Ihre Kollegin möchte endlich schwimmen lernen, kann aber nur nach der Arbeit.', a: 'j' },
            { type: 'match', q: 'Ein Freund möchte sein Deutsch üben, hat aber wenig Geld.', a: 'c' },
            { type: 'match', q: 'Ihr Nachbar sucht einen Job für einen Tag, um etwas Geld zu verdienen.', a: 'g' },
            { type: 'match', q: 'Bei Ihrem Fahrrad ist die Kette kaputt. Sie möchten es selbst reparieren.', a: 'i' },
            { type: 'match', q: 'Sie möchten am Wochenende lernen, wie man mit dem Handy gut fotografiert.', a: 'd' },
            { type: 'match', q: 'Ihre Schwester sucht einen gebrauchten Kinderwagen.', a: '0' },
            { type: 'match', q: 'Ein Bekannter hat schon immer davon geträumt, ein Instrument zu spielen.', a: 'a' }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Lesen Sie die Kommentare zum Thema „Sollte man in Schulen das Smartphone verbieten?“. Ist die Person für ein Verbot? Wählen Sie Ja oder Nein (Ja = Richtig, Nein = Falsch).',
          text: `<p><strong>1. Laura, 34:</strong> Als Mutter sehe ich jeden Tag, wie viel Zeit meine Kinder am Handy verbringen. In der Schule sollten sie sich auf den Unterricht und ihre Freunde konzentrieren. Deshalb finde ich ein Verbot richtig.</p>
<p><strong>2. Jonas, 17:</strong> Wir benutzen das Handy im Unterricht oft zum Recherchieren oder für Lern-Apps. Ohne Smartphone wäre der Unterricht altmodisch. Ein Verbot wäre ein Schritt zurück.</p>
<p><strong>3. Herr Sommer, Lehrer:</strong> In den Pausen spielen die Schüler kaum noch zusammen. Seit wir die Handys morgens einsammeln, reden sie wieder miteinander. Ich kann ein Verbot nur empfehlen.</p>
<p><strong>4. Fatma, 41:</strong> Mein Sohn hat einen langen Schulweg. Ich möchte, dass er mich jederzeit erreichen kann. Ein komplettes Verbot kommt für mich nicht in Frage.</p>
<p><strong>5. Dieter, 66:</strong> Zu meiner Zeit gab es keine Handys, und wir haben trotzdem viel gelernt. Kinder brauchen Phasen ohne Bildschirm. In der Schule haben Smartphones nichts zu suchen.</p>
<p><strong>6. Mia, 15:</strong> Ehrlich gesagt lenkt mich das Handy oft ab. Aber statt eines Verbots sollten wir lernen, vernünftig damit umzugehen. Das ist wichtiger für das Leben.</p>
<p><strong>7. Frau Lange, Schulleiterin:</strong> Wir haben klare Regeln eingeführt: Im Unterricht bleiben Handys in der Tasche, außer die Lehrkraft erlaubt es. Ein allgemeines Verbot halte ich für übertrieben.</p>`,
          items: [
            { type: 'tf', q: 'Laura', a: 'r' }, { type: 'tf', q: 'Jonas', a: 'f' }, { type: 'tf', q: 'Herr Sommer', a: 'r' }, { type: 'tf', q: 'Fatma', a: 'f' },
            { type: 'tf', q: 'Dieter', a: 'r' }, { type: 'tf', q: 'Mia', a: 'f' }, { type: 'tf', q: 'Frau Lange', a: 'f' }
          ]
        },
        {
          title: 'Teil 5', instructions: 'Lesen Sie die Aufgaben und den Text. Wählen Sie für jede Aufgabe die richtige Lösung a, b oder c.',
          text: `<h3>Benutzungsordnung der Stadtbibliothek</h3>
<p><strong>Ausweis:</strong> Für die Ausleihe benötigen Sie einen Bibliotheksausweis. Er wird gegen Vorlage eines Personalausweises ausgestellt und kostet 12 Euro pro Jahr. Für Kinder und Jugendliche bis 18 Jahre ist er kostenlos.</p>
<p><strong>Leihfrist:</strong> Bücher können vier Wochen ausgeliehen werden, DVDs und Zeitschriften eine Woche. Die Leihfrist kann zweimal online verlängert werden, wenn keine Vormerkung vorliegt.</p>
<p><strong>Gebühren:</strong> Bei Überschreitung der Leihfrist werden pro Medium und Öffnungstag 0,50 Euro berechnet. Für verlorene oder beschädigte Medien muss Ersatz geleistet werden.</p>
<p><strong>Aufenthalt:</strong> Speisen dürfen in den Lesesälen nicht verzehrt werden. Getränke in verschließbaren Flaschen sind erlaubt. Bitte schalten Sie Ihr Telefon auf lautlos.</p>`,
          items: [
            { type: 'mc', q: 'Einen Bibliotheksausweis …', options: ['bekommen Jugendliche unter 18 Jahren gratis.', 'kann man ohne Ausweis bekommen.', 'kostet für alle 12 Euro.'], a: 0 },
            { type: 'mc', q: 'Eine DVD …', options: ['kann man vier Wochen behalten.', 'darf man eine Woche ausleihen.', 'kann man nicht verlängern.'], a: 1 },
            { type: 'mc', q: 'Wenn man ein Buch zu spät zurückbringt, …', options: ['muss man ein neues Buch kaufen.', 'bezahlt man für jeden Öffnungstag eine Gebühr.', 'darf man nichts mehr ausleihen.'], a: 1 },
            { type: 'mc', q: 'Im Lesesaal …', options: ['darf man etwas essen.', 'darf man aus einer geschlossenen Flasche trinken.', 'darf man telefonieren.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 40, points: 100,
      intro: 'Four parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben.',
          items: [
            { type: 'tf', audio: [['Ansage', 'Liebe Fahrgäste, wegen Bauarbeiten fährt die Straßenbahnlinie 4 heute ab 20 Uhr nur bis zum Hauptbahnhof. Bitte nutzen Sie ab dort den Ersatzbus vor dem Haupteingang. Wir bitten um Ihr Verständnis.']], plays: 2, q: 'Die Linie 4 fährt heute Abend nicht bis zur Endstation.', a: 'r' },
            { type: 'mc', q: 'Wo fährt der Ersatzbus ab?', options: ['An der Endstation.', 'Vor dem Haupteingang des Bahnhofs.', 'Am Rathaus.'], a: 1 },
            { type: 'tf', audio: [['Frau Keller', 'Hallo Jana, hier ist Monika aus dem Büro. Unser Treffen morgen um zehn muss leider ausfallen, weil Herr Ahrens krank ist. Wir machen es stattdessen am Donnerstag um elf. Kannst du bitte die Präsentation bis Mittwoch fertig machen? Danke dir!']], plays: 2, q: 'Das Treffen findet morgen statt.', a: 'f' },
            { type: 'mc', q: 'Was soll Jana tun?', options: ['Herrn Ahrens anrufen.', 'Die Präsentation bis Mittwoch vorbereiten.', 'Einen Raum reservieren.'], a: 1 },
            { type: 'tf', audio: [['Radio', 'Und nun das Wetter für morgen: Im Norden bleibt es den ganzen Tag bewölkt mit gelegentlichem Regen. Im Süden scheint dagegen meistens die Sonne bei Temperaturen bis zu 24 Grad. Am Abend können im Süden einzelne Gewitter auftreten.']], plays: 2, q: 'Im Süden ist es morgen überwiegend sonnig.', a: 'r' },
            { type: 'mc', q: 'Was kann am Abend im Süden passieren?', options: ['Es kann schneien.', 'Es kann Gewitter geben.', 'Es wird sehr kalt.'], a: 1 },
            { type: 'tf', audio: [['Praxis', 'Sie sind mit der Praxis Dr. Wagner verbunden. Unsere Praxis ist vom 12. bis 23. August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an unsere Vertretung, die Praxis Dr. Yilmaz in der Bahnhofstraße 8. Ab dem 26. August sind wir wieder für Sie da.']], plays: 2, q: 'Die Praxis ist im August zwei Wochen geschlossen.', a: 'r' },
            { type: 'mc', q: 'Wohin soll man in dringenden Fällen gehen?', options: ['Ins Krankenhaus.', 'Zu Dr. Yilmaz.', 'Zum Notdienst am Bahnhof.'], a: 1 },
            { type: 'tf', audio: [['Kaufhaus', 'Liebe Kundinnen und Kunden, nur heute: Alle Sommerjacken in unserer Sportabteilung im zweiten Stock sind um 30 Prozent reduziert. Außerdem erhalten Sie beim Kauf von zwei Paar Laufschuhen ein Paar Socken gratis.']], plays: 2, q: 'Das Angebot gilt die ganze Woche.', a: 'f' },
            { type: 'mc', q: 'Was bekommt man beim Kauf von zwei Paar Laufschuhen?', options: ['30 Prozent Rabatt.', 'Eine Sommerjacke.', 'Ein Paar Socken.'], a: 2 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören einen Text. Sie hören den Text einmal. Wählen Sie für jede Aufgabe die richtige Lösung a, b oder c. Sie nehmen an einer Führung durch ein Museum teil.',
          audio: [['Führerin', 'Herzlich willkommen im Museum für Stadtgeschichte. Mein Name ist Petra Lindner, und ich begleite Sie in der nächsten Stunde. Bevor wir anfangen, ein paar Hinweise: Fotografieren ist erlaubt, aber bitte ohne Blitz. Ihre Jacken und Taschen können Sie kostenlos in den Schließfächern im Erdgeschoss lassen. Wir beginnen im ersten Stock mit der Ausstellung über das Mittelalter. Dort sehen Sie ein Modell der Stadt, wie sie vor etwa 600 Jahren aussah. Danach gehen wir in den zweiten Stock, wo die Zeit der Industrialisierung gezeigt wird. Besonders beliebt ist dort die alte Druckmaschine, die wir um 15 Uhr in Betrieb nehmen. Zum Schluss kommen wir zur neuen Sonderausstellung über die Geschichte des Fahrrads, die erst letzte Woche eröffnet wurde. Nach der Führung können Sie gern im Museumscafé im Erdgeschoss etwas trinken. Mit Ihrer Eintrittskarte bekommen Sie dort zehn Prozent Rabatt.']],
          plays: 1,
          items: [
            { type: 'mc', q: 'Im Museum darf man …', options: ['nicht fotografieren.', 'ohne Blitz fotografieren.', 'nur im Erdgeschoss fotografieren.'], a: 1 },
            { type: 'mc', q: 'Die Schließfächer …', options: ['kosten einen Euro.', 'sind im ersten Stock.', 'kann man kostenlos benutzen.'], a: 2 },
            { type: 'mc', q: 'Im ersten Stock sieht man …', options: ['ein Modell der Stadt im Mittelalter.', 'eine alte Druckmaschine.', 'alte Fahrräder.'], a: 0 },
            { type: 'mc', q: 'Die Sonderausstellung …', options: ['ist schon seit einem Jahr zu sehen.', 'wurde letzte Woche eröffnet.', 'zeigt die Industrialisierung.'], a: 1 },
            { type: 'mc', q: 'Im Museumscafé …', options: ['bekommt man mit der Eintrittskarte einen Rabatt.', 'ist der Kaffee kostenlos.', 'muss man vorher reservieren.'], a: 0 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch? Sie sitzen im Zug und hören, wie sich zwei Freunde unterhalten.',
          audio: [
            ['Lena', 'Hey Tim, was für ein Zufall! Fährst du auch nach Hamburg?'],
            ['Tim', 'Hallo Lena! Ja, ich besuche meine Schwester. Sie hat gerade ein Baby bekommen, einen kleinen Jungen.'],
            ['Lena', 'Oh, herzlichen Glückwunsch! Dann bist du jetzt Onkel. Bleibst du lange?'],
            ['Tim', 'Nur bis Sonntag. Am Montag muss ich wieder arbeiten. Und du?'],
            ['Lena', 'Ich habe ein Vorstellungsgespräch bei einer Werbeagentur. Ich bin ziemlich nervös.'],
            ['Tim', 'Das schaffst du! Du hast doch schon so viel Erfahrung. Wann ist das Gespräch?'],
            ['Lena', 'Morgen früh um neun. Deshalb fahre ich schon heute und übernachte in einem Hotel in der Nähe.'],
            ['Tim', 'Gute Idee. Wenn du willst, können wir morgen Abend zusammen essen gehen und du erzählst mir, wie es war.'],
            ['Lena', 'Sehr gern, aber ich fahre morgen Nachmittag schon wieder zurück. Vielleicht nächste Woche in Leipzig?'],
            ['Tim', 'Klar, ich melde mich, wenn ich wieder da bin.']
          ],
          plays: 1,
          items: [
            { type: 'tf', q: 'Tim fährt nach Hamburg, um seine Schwester zu besuchen.', a: 'r' },
            { type: 'tf', q: 'Tims Schwester hat eine Tochter bekommen.', a: 'f' },
            { type: 'tf', q: 'Tim bleibt eine Woche in Hamburg.', a: 'f' },
            { type: 'tf', q: 'Lena hat ein Vorstellungsgespräch.', a: 'r' },
            { type: 'tf', q: 'Das Gespräch ist am Nachmittag.', a: 'f' },
            { type: 'tf', q: 'Lena übernachtet bei Freunden.', a: 'f' },
            { type: 'tf', q: 'Die beiden wollen sich vielleicht in Leipzig treffen.', a: 'r' }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Wer sagt was? Wählen Sie a (Moderatorin), b (Herr Neumann) oder c (Frau Schmitt). Die Moderatorin diskutiert mit Herrn Neumann, Lehrer, und Frau Schmitt, Unternehmerin, über das Thema „Vier-Tage-Woche“.',
          audio: [
            ['Moderatorin', 'Willkommen zu unserer Sendung. Heute geht es um die Vier-Tage-Woche. Ich selbst frage mich, ob die Arbeit an vier Tagen überhaupt zu schaffen ist. Herr Neumann, was meinen Sie?'],
            ['Herr Neumann', 'Ich finde die Idee sehr gut. Viele Menschen sind erschöpft, und ein zusätzlicher freier Tag würde ihnen helfen, sich zu erholen. In Schulen ist das allerdings schwer umzusetzen, denn die Kinder brauchen ja an fünf Tagen Unterricht.'],
            ['Frau Schmitt', 'In meiner Firma haben wir es vor einem Jahr ausprobiert. Die Mitarbeiter arbeiten jetzt vier Tage, aber dafür etwas länger. Seitdem ist kaum noch jemand krank.'],
            ['Moderatorin', 'Das klingt beeindruckend. Aber haben Ihre Kunden das akzeptiert?'],
            ['Frau Schmitt', 'Am Anfang gab es Beschwerden, weil wir freitags nicht erreichbar waren. Deshalb arbeitet jetzt immer ein kleines Team auch am Freitag.'],
            ['Herr Neumann', 'Ich glaube trotzdem, dass zehn Stunden am Tag für viele Berufe zu lang sind. Wer körperlich arbeitet, ist nach acht Stunden einfach müde.'],
            ['Moderatorin', 'Unsere Zuhörer haben uns viele Nachrichten geschickt. Die meisten wünschen sich mehr Freizeit, aber nicht weniger Gehalt.'],
            ['Frau Schmitt', 'Das verstehe ich. Bei uns verdienen alle dasselbe wie vorher, und die Produktivität ist sogar gestiegen.'],
            ['Herr Neumann', 'Ich wünsche mir, dass die Politik solche Modelle unterstützt, zum Beispiel mit Förderprogrammen für kleine Betriebe.'],
            ['Moderatorin', 'Vielen Dank Ihnen beiden. Ich bin gespannt, wie sich das Thema in den nächsten Jahren entwickelt.']
          ],
          plays: 2,
          choices: [['a', 'Moderatorin'], ['b', 'Herr Neumann'], ['c', 'Frau Schmitt']],
          items: [
            { type: 'match', q: 'Es ist fraglich, ob man die Arbeit in vier Tagen schaffen kann.', a: 'a' },
            { type: 'match', q: 'Ein freier Tag mehr ist gut für die Erholung.', a: 'b' },
            { type: 'match', q: 'Seit der Umstellung gibt es weniger Krankheitstage.', a: 'c' },
            { type: 'match', q: 'Nicht alle Kunden waren am Anfang zufrieden.', a: 'c' },
            { type: 'match', q: 'Lange Arbeitstage sind für manche Berufe ungeeignet.', a: 'b' },
            { type: 'match', q: 'Viele Menschen wollen mehr Freizeit, aber gleich viel verdienen.', a: 'a' },
            { type: 'match', q: 'Die Mitarbeiter arbeiten jetzt effektiver.', a: 'c' },
            { type: 'match', q: 'Der Staat sollte kleinen Firmen helfen.', a: 'b' }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 60, points: 100,
      intro: 'Three tasks: an informal e-mail, a forum post with your opinion and a short formal message.',
      tasks: [
        {
          title: 'Aufgabe 1 (about 20 minutes)', weight: 40, register: 'informal', minWords: 80,
          situation: '<p>Sie haben am Wochenende bei einem Stadtfest als freiwillige Helferin / freiwilliger Helfer mitgearbeitet. Ein Freund, Daniel, konnte nicht kommen. Schreiben Sie Daniel eine E-Mail.</p>',
          points: ['Beschreiben Sie: Was haben Sie beim Fest gemacht?', 'Begründen Sie: Was hat Ihnen besonders gut gefallen?', 'Machen Sie einen Vorschlag für das nächste Fest im Herbst.'],
          keywords: [['geholfen', 'gearbeitet', 'verkauft', 'aufgebaut', 'stand', 'helfer', 'gemacht'], ['gefallen', 'toll', 'schön', 'super', 'weil', 'besonders'], ['herbst', 'nächste', 'naechste', 'vorschlag', 'zusammen', 'mitkommen', 'wollen wir', 'lass uns', 'hast du lust']],
          instructions: 'Schreiben Sie zu allen drei Punkten. Achten Sie auf Anrede und Gruß.',
          model: 'Lieber Daniel,\nschade, dass du am Samstag nicht beim Stadtfest sein konntest! Ich habe dort als Helferin am Getränkestand gearbeitet. Morgens haben wir zuerst die Tische aufgebaut, und danach habe ich fünf Stunden lang Saft und Kaffee verkauft.\nAm besten hat mir die Stimmung gefallen. Alle waren freundlich, und abends hat eine Band auf dem Marktplatz gespielt. Außerdem habe ich viele nette Leute aus unserem Viertel kennengelernt.\nIm Herbst gibt es wieder ein Fest. Wollen wir uns zusammen als Helfer anmelden? Dann können wir am selben Stand arbeiten. Was meinst du?\nViele Grüße\nMaria'
        },
        {
          title: 'Aufgabe 2 (about 25 minutes)', weight: 40, register: 'neutral', minWords: 80,
          situation: '<p>Sie haben in einer Fernsehsendung eine Diskussion zum Thema „Online-Unterricht statt Präsenzunterricht an Universitäten“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:</p><p><em>„Online-Vorlesungen sind viel praktischer. Man spart Zeit und kann lernen, wann man will.“ (Klaus)</em></p><p>Schreiben Sie nun Ihre Meinung (circa 80 Wörter).</p>',
          points: ['Ihre Meinung zum Thema', 'Vorteile oder Nachteile mit Begründung', 'Ihre eigenen Erfahrungen oder ein Beispiel'],
          keywords: [['meinung', 'finde', 'denke', 'glaube', 'meiner ansicht'], ['vorteil', 'nachteil', 'weil', 'deshalb', 'denn', 'praktisch', 'kontakt'], ['ich selbst', 'erfahrung', 'bei mir', 'zum beispiel', 'mein studium', 'ich habe']],
          instructions: 'Nehmen Sie Stellung zu Klaus\' Meinung.',
          model: 'Ich verstehe Klaus, aber ich sehe das nur teilweise so. Natürlich ist es praktisch, wenn man nicht jeden Tag zur Universität fahren muss. Man spart Zeit und Geld, und man kann Vorlesungen noch einmal ansehen.\nTrotzdem finde ich Präsenzunterricht wichtiger, weil man dort direkt Fragen stellen und mit anderen Studierenden diskutieren kann. Ich habe während meines Studiums ein Semester nur online gelernt. Ich habe mich oft allein gefühlt und konnte mich zu Hause schlecht konzentrieren. Deshalb wäre für mich eine Mischung aus beidem die beste Lösung.'
        },
        {
          title: 'Aufgabe 3 (about 15 minutes)', weight: 20, register: 'formal', minWords: 40,
          situation: '<p>Ihre Kursleiterin, Frau Hoffmann, hat Sie zu einem Treffen der Kursgruppe am Freitag eingeladen. Sie können aber nicht kommen.</p><p>Schreiben Sie an Frau Hoffmann. Entschuldigen Sie sich höflich und berichten Sie, warum Sie nicht kommen können.</p>',
          points: ['Höfliche Entschuldigung', 'Grund für die Absage'],
          keywords: [['leider', 'entschuldig', 'tut mir leid', 'bedauer'], ['weil', 'da ', 'denn', 'arbeit', 'termin', 'krank', 'muss']],
          instructions: 'Vergessen Sie Anrede und Gruß nicht.',
          model: 'Sehr geehrte Frau Hoffmann,\nvielen Dank für Ihre Einladung zum Treffen am Freitag. Leider kann ich nicht kommen, weil ich an diesem Abend arbeiten muss. Ein Kollege ist krank, und ich muss seine Schicht übernehmen. Das tut mir sehr leid. Ich hoffe, dass ich beim nächsten Treffen dabei sein kann.\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 100, prep: 15,
      intro: 'In the real exam you speak with a partner. Here you can practise alone: use the timers, record yourself, then rate yourself.',
      tasks: [
        {
          title: 'Teil 1: Gemeinsam etwas planen (about 3 minutes)', seconds: 180,
          html: '<p>Eine Freundin aus Ihrem Deutschkurs hat bald Geburtstag. Sie möchten mit Ihrer Gesprächspartnerin / Ihrem Gesprächspartner eine kleine Überraschungsparty planen.</p><ul><li>Wann und wo feiern?</li><li>Wen einladen?</li><li>Essen und Getränke?</li><li>Geschenk?</li></ul><p>Machen Sie Vorschläge, reagieren Sie auf die Vorschläge Ihres Partners und einigen Sie sich.</p>',
          tips: '<p>Wie wäre es, wenn wir …? / Was hältst du davon, …? / Das ist eine gute Idee, aber … / Ich schlage vor, dass … / Einverstanden. / Dann machen wir es so: …</p>'
        },
        {
          title: 'Teil 2: Ein Thema präsentieren (about 3 minutes)', seconds: 180,
          html: '<p>Präsentieren Sie das Thema <strong>„Sollten alle Menschen ehrenamtlich arbeiten?“</strong> Gehen Sie so vor:</p><ol><li>Stellen Sie Ihr Thema vor und erklären Sie den Inhalt Ihrer Präsentation.</li><li>Berichten Sie von Ihrer Situation oder einem Erlebnis.</li><li>Berichten Sie von der Situation in Ihrem Heimatland.</li><li>Nennen Sie Vor- und Nachteile und sagen Sie Ihre Meinung.</li><li>Beenden Sie die Präsentation und bedanken Sie sich.</li></ol>',
          tips: '<p>Mein Thema heute ist … / Ich habe meine Präsentation in drei Teile gegliedert. / In meinem Heimatland ist es so, dass … / Ein Vorteil ist …, ein Nachteil ist … / Meiner Meinung nach … / Vielen Dank für Ihre Aufmerksamkeit.</p>'
        },
        {
          title: 'Teil 3: Über ein Thema sprechen (about 2 minutes)', seconds: 120,
          html: '<p>Nach der Präsentation Ihres Partners: Geben Sie eine Rückmeldung (Was hat Ihnen gefallen?) und stellen Sie eine Frage. Beantworten Sie danach selbst eine Frage zu Ihrer Präsentation, zum Beispiel: <em>„Haben Sie selbst schon einmal ehrenamtlich gearbeitet?“</em></p>',
          tips: '<p>Deine Präsentation war sehr interessant, besonders … / Ich habe eine Frage: … / Das ist eine gute Frage. Ich denke, …</p>'
        }
      ]
    }
  ]
};
