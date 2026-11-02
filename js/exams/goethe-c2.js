EXAMS['goethe-c2'] = {
  id: 'goethe-c2', provider: 'goethe', level: 'C2', name: 'Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom',
  about: 'Four separate modules: Lesen (80 min), Hören (about 35 min), Schreiben (80 min) and Sprechen (about 15 min plus 15 min preparation). Each module has 100 points.',
  passText: 'Each module is passed with at least 60 of 100 points.',
  pass: { type: 'module', min: 0.6 },
  rubric: ['Inhalt und Aufgabenerfüllung', 'Textaufbau und Kohärenz', 'Ausdruck und Wortschatz', 'Stil und Register', 'Grammatische Korrektheit'],
  rubricHelp: 'Goethe rates the C2 text on five criteria. Expect precise, idiomatic language, a consistent register and an almost error-free text.',
  speakRubric: ['Inhalt und Argumentation', 'Interaktion', 'Flüssigkeit und Kohärenz', 'Wortschatz und Ausdruck', 'Korrektheit', 'Aussprache und Intonation'],
  modules: [
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 80, points: 100,
      intro: 'Four parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Lesen Sie den Text. Welches Wort passt in die Lücke? Wählen Sie a, b, c oder d.',
          text: `<h3>Vom Wert des Vergessens</h3>
<p>In einer Kultur, die das Speichern zur Tugend erhoben hat, wirkt das Vergessen wie ein Makel. Dabei ist es, (1) ___ man der Gedächtnisforschung, keineswegs ein Versagen des Gehirns, sondern eine seiner klügsten Leistungen. Wer alles behielte, wäre (2) ___ Stande, Wichtiges von Unwichtigem zu unterscheiden. Das Vergessen (3) ___ gewissermaßen als Filter, der Raum für Neues schafft. Bemerkenswert ist zudem, dass Erinnerungen bei jedem Abruf neu (4) ___ werden; sie sind also weniger ein Archiv als eine fortwährende Erzählung. Dieser Befund hat weitreichende Folgen, etwa für die Beurteilung von Zeugenaussagen vor Gericht, die lange als (5) ___ Beweismittel galten. Auch im digitalen Raum gewinnt die Frage an Gewicht: Das „Recht auf Vergessenwerden“ trägt dem Umstand (6) ___, dass Menschen sich ändern und nicht ein Leben lang an früheren Fehlern gemessen werden sollten. Vergessen zu können ist somit nicht nur eine Voraussetzung für Lernen, (7) ___ auch für Verzeihen, und damit für ein menschliches (8) ___.</p>`,
          items: [
            { type: 'mc', q: 'Lücke 1', options: ['glaubt', 'glaubend', 'geglaubt', 'zu glauben'], a: 0 },
            { type: 'mc', q: 'Lücke 2', options: ['außer', 'auf', 'im', 'zu'], a: 0 },
            { type: 'mc', q: 'Lücke 3', options: ['fungiert', 'verhält', 'ergibt', 'bewirkt'], a: 0 },
            { type: 'mc', q: 'Lücke 4', options: ['zusammengesetzt', 'aufgehoben', 'abgesetzt', 'eingestellt'], a: 0 },
            { type: 'mc', q: 'Lücke 5', options: ['unumstößliche', 'unumgängliche', 'unverbindliche', 'unauffällige'], a: 0 },
            { type: 'mc', q: 'Lücke 6', options: ['Rechnung', 'Beachtung', 'Bedeutung', 'Aufmerksamkeit'], a: 0 },
            { type: 'mc', q: 'Lücke 7', options: ['sondern', 'aber', 'doch', 'jedoch'], a: 0 },
            { type: 'mc', q: 'Lücke 8', options: ['Miteinander', 'Gegeneinander', 'Durcheinander', 'Nebeneinander'], a: 0 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          text: `<h3>Die Ökonomie der Aufmerksamkeit</h3>
<p>Als der Wirtschaftswissenschaftler Herbert Simon in den 1970er-Jahren schrieb, ein Reichtum an Information erzeuge eine Armut an Aufmerksamkeit, konnte er die heutige Medienlandschaft nicht vorhersehen. Und doch beschreibt sein Satz präzise, worum es in der digitalen Ökonomie geht: Nicht Information ist knapp, sondern die Zeit und Konzentration, die Menschen ihr widmen können.</p>
<p>Plattformen, deren Geschäftsmodell auf Werbung beruht, haben folglich ein Interesse daran, Nutzerinnen und Nutzer möglichst lange zu binden. Unendliches Scrollen, automatisch startende Videos und personalisierte Benachrichtigungen sind keine zufälligen Gestaltungsentscheidungen, sondern das Ergebnis systematischer Tests. Kritiker sprechen von einer „Aufmerksamkeitsindustrie“, die menschliche Schwächen gezielt ausnutze.</p>
<p>Die Gegenposition verweist darauf, dass Menschen schon immer anfällig für Ablenkung waren und dass jede neue Technik, vom Roman bis zum Fernsehen, ähnliche Ängste ausgelöst habe. Zudem könnten Nutzer frei entscheiden, wie viel Zeit sie online verbringen.</p>
<p>Diese Argumentation greift jedoch insofern zu kurz, als sie die Asymmetrie zwischen Individuum und Konzern ausblendet: Einem einzelnen Menschen stehen Teams gegenüber, die mit großen Datenmengen erforschen, wie sich Verhalten lenken lässt. Erste Gesetze in der EU versuchen deshalb, besonders manipulative Designmuster zu verbieten. Ob Regulierung mit der Geschwindigkeit der Technik Schritt halten kann, bleibt allerdings offen.</p>`,
          items: [
            { type: 'mc', q: 'Herbert Simons Aussage …', options: ['bezog sich auf soziale Netzwerke.', 'trifft auf die heutige Situation erstaunlich gut zu.', 'wurde inzwischen widerlegt.'], a: 1 },
            { type: 'mc', q: 'Knapp ist laut Text vor allem …', options: ['Information.', 'menschliche Aufmerksamkeit.', 'Werbefläche.'], a: 1 },
            { type: 'mc', q: 'Funktionen wie unendliches Scrollen …', options: ['entstehen zufällig.', 'sind gezielt entwickelt und getestet.', 'wurden von Nutzern gewünscht.'], a: 1 },
            { type: 'mc', q: 'Die Gegenposition betont, dass …', options: ['neue Medien schon früher Befürchtungen auslösten.', 'Plattformen keine Werbung zeigen.', 'Ablenkung ein neues Phänomen ist.'], a: 0 },
            { type: 'mc', q: 'Der Autor hält die Gegenposition für unzureichend, weil sie …', options: ['die ungleichen Machtverhältnisse übersieht.', 'zu emotional argumentiert.', 'nur Jugendliche betrachtet.'], a: 0 },
            { type: 'mc', q: 'Die EU …', options: ['hat alle Plattformen reguliert.', 'versucht, bestimmte manipulative Gestaltungen zu untersagen.', 'lehnt eine Regulierung ab.'], a: 1 },
            { type: 'mc', q: 'Am Ende des Textes äußert der Autor …', options: ['Gewissheit über den Erfolg der Gesetze.', 'Zweifel, ob Gesetze schnell genug sind.', 'die Forderung, Werbung zu verbieten.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie den Essay. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          text: `<h3>Über das Übersetzen</h3>
<p>Jede Übersetzung ist ein Kompromiss. (1) ___ Das gilt nicht nur für Lyrik, wo Klang und Rhythmus kaum zu retten sind, sondern auch für scheinbar nüchterne Texte.</p>
<p>Man denke an Wörter wie „Heimat“ oder „Gemütlichkeit“. (2) ___ Ein Übersetzer muss also entscheiden, ob er eine Umschreibung wählt oder das Wort im Original belässt.</p>
<p>Lange galt das Ideal der Unsichtbarkeit. (3) ___ Inzwischen setzt sich die Auffassung durch, dass Übersetzerinnen und Übersetzer eigenständige Autoren sind, deren Name auf das Titelblatt gehört.</p>
<p>Die maschinelle Übersetzung hat diese Debatte neu belebt. (4) ___ Bei literarischen Texten jedoch stoßen die Programme an Grenzen, weil Ironie, Mehrdeutigkeit und Anspielungen kontextuelles Wissen erfordern.</p>
<p>(5) ___ Wer übersetzt, liest genauer als jeder andere Leser, weil er jede Entscheidung des Autors nachvollziehen muss.</p>
<p>(6) ___ Gerade dadurch eröffnen Übersetzungen einen Raum, in dem Kulturen einander begegnen. (7) ___</p>`,
          choices: [
            ['a', 'Was im Original mitschwingt, geht im neuen Text unweigerlich teilweise verloren.'],
            ['b', 'Sie lassen sich in vielen Sprachen nur annähernd wiedergeben.'],
            ['c', 'Eine gute Übersetzung sollte sich lesen, als sei sie nie übersetzt worden.'],
            ['d', 'Für Gebrauchstexte liefern die Systeme inzwischen erstaunlich brauchbare Ergebnisse.'],
            ['e', 'Übersetzen ist zudem eine besonders intensive Form des Lesens.'],
            ['f', 'Kein Text kann vollständig in eine andere Sprache übertragen werden.'],
            ['g', 'Insofern ist die Unübersetzbarkeit kein Mangel, sondern eine Einladung.'],
            ['h', 'Die meisten Romane werden heute nur noch maschinell übersetzt.'],
            ['i', 'Übersetzer verdienen in Deutschland überdurchschnittlich gut.']
          ],
          items: [
            { type: 'match', q: 'Lücke 1', a: 'a' }, { type: 'match', q: 'Lücke 2', a: 'b' }, { type: 'match', q: 'Lücke 3', a: 'c' }, { type: 'match', q: 'Lücke 4', a: 'd' },
            { type: 'match', q: 'Lücke 5', a: 'e' }, { type: 'match', q: 'Lücke 6', a: 'f' }, { type: 'match', q: 'Lücke 7', a: 'g' }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Lesen Sie die vier Rezensionen des Romans „Das stille Haus“. In welcher Rezension (a–d) finden Sie die Aussage? Die Rezensionen können mehrmals gewählt werden.',
          text: `<p><strong>a)</strong> Selten hat ein Debüt die Atmosphäre einer Kleinstadt so beklemmend eingefangen. Die Autorin verzichtet auf jede Effekthascherei; die Spannung entsteht allein aus dem Ungesagten. Einzig das Ende wirkt überhastet, als habe der Verlag auf Abgabe gedrängt.</p>
<p><strong>b)</strong> Wer einen klassischen Kriminalroman erwartet, wird enttäuscht. Der Roman ist vielmehr eine Studie über Schuld und Schweigen in einer Familie. Die zahlreichen Zeitsprünge verlangen allerdings eine aufmerksame Lektüre, die nicht jeder Leser aufbringen wird.</p>
<p><strong>c)</strong> Sprachlich ist das Buch ein Ereignis: knapp, präzise, mit Sätzen, die man sich anstreichen möchte. Inhaltlich hingegen bleibt es hinter seinen Möglichkeiten zurück, weil die Nebenfiguren blass und austauschbar wirken.</p>
<p><strong>d)</strong> Bemerkenswert ist, wie aktuell der Stoff ist, obwohl der Roman in den 1980er-Jahren spielt. Die Frage, wie Gemeinschaften mit unbequemen Wahrheiten umgehen, stellt sich heute dringlicher denn je. Eine Verfilmung ist bereits in Planung.</p>`,
          choices: [['a', 'Rezension a'], ['b', 'Rezension b'], ['c', 'Rezension c'], ['d', 'Rezension d']],
          items: [
            { type: 'match', q: 'Der Schluss des Romans überzeugt nicht.', a: 'a' },
            { type: 'match', q: 'Der Roman entspricht nicht den Erwartungen an ein bestimmtes Genre.', a: 'b' },
            { type: 'match', q: 'Die Sprache wird ausdrücklich gelobt.', a: 'c' },
            { type: 'match', q: 'Das Thema hat Bezug zur Gegenwart.', a: 'd' },
            { type: 'match', q: 'Der Aufbau stellt Anforderungen an die Lesenden.', a: 'b' },
            { type: 'match', q: 'Die Figuren neben der Hauptfigur sind schwach gezeichnet.', a: 'c' },
            { type: 'match', q: 'Es handelt sich um das erste Buch der Autorin.', a: 'a' },
            { type: 'match', q: 'Der Stoff soll für das Kino adaptiert werden.', a: 'd' }
          ]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 35, points: 100,
      intro: 'Three parts: a radio report, an informal conversation and an expert interview.',
      parts: [
        {
          title: 'Teil 1: Radiobericht', instructions: 'Sie hören einen Bericht. Sie hören den Text einmal. Sind die Aussagen richtig oder falsch?',
          audio: [['Reporterin', 'In der Lausitz, wo bis vor wenigen Jahren noch Braunkohle abgebaut wurde, entsteht derzeit eine der größten künstlichen Seenlandschaften Europas. Die ehemaligen Tagebaue werden mit Wasser geflutet, ein Prozess, der Jahrzehnte dauern kann, weil in trockenen Sommern kaum Wasser zur Verfügung steht. Für die Region ist der Wandel eine Chance und eine Herausforderung zugleich. Tourismusunternehmen investieren in Hotels und Bootsverleihe, und erste Strände ziehen bereits Badegäste an. Gleichzeitig haben viele Menschen ihre Arbeit im Bergbau verloren, und nicht alle finden im Tourismus eine neue Stelle, zumal die Löhne dort deutlich niedriger sind. Hinzu kommen ökologische Probleme: In manchen Seen ist das Wasser durch Eisen und Sulfat stark belastet und muss aufwendig behandelt werden. Der Bürgermeister einer Nachbargemeinde formuliert es so: Die Landschaft ist schöner geworden, aber die Wunden sind noch nicht verheilt.']],
          plays: 1,
          items: [
            { type: 'tf', q: 'In der Lausitz wird heute noch in großem Umfang Braunkohle abgebaut.', a: 'f' },
            { type: 'tf', q: 'Das Fluten der Tagebaue kann Jahrzehnte dauern.', a: 'r' },
            { type: 'tf', q: 'Wassermangel verlangsamt den Prozess.', a: 'r' },
            { type: 'tf', q: 'Es gibt noch keine touristischen Angebote.', a: 'f' },
            { type: 'tf', q: 'Ehemalige Bergleute finden problemlos Arbeit im Tourismus.', a: 'f' },
            { type: 'tf', q: 'Im Tourismus wird schlechter bezahlt als im Bergbau.', a: 'r' },
            { type: 'tf', q: 'Die Wasserqualität ist in allen Seen hervorragend.', a: 'f' },
            { type: 'tf', q: 'Der Bürgermeister sieht den Wandel ausschließlich positiv.', a: 'f' }
          ]
        },
        {
          title: 'Teil 2: Gespräch', instructions: 'Sie hören ein Gespräch zwischen zwei Freunden. Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [
            ['Jakob', 'Sag mal, Miriam, stimmt es, dass du deine Stelle in der Kanzlei gekündigt hast?'],
            ['Miriam', 'Ja, tatsächlich. Ich hab lange mit mir gerungen, aber nach acht Jahren war einfach die Luft raus. Ich hab nur noch funktioniert.'],
            ['Jakob', 'Und was machst du jetzt? Du warst doch so erfolgreich.'],
            ['Miriam', 'Erfolgreich auf dem Papier, ja. Ich mache jetzt eine Ausbildung zur Tischlerin. Ich wollte immer schon etwas mit den Händen machen, hab mich aber nie getraut.'],
            ['Jakob', 'Wow. Und wie reagiert dein Umfeld? Deine Eltern waren doch so stolz auf die Juristin.'],
            ['Miriam', 'Mein Vater hat erst mal zwei Wochen nicht mit mir geredet. Inzwischen hat er sich beruhigt, er hat sogar gefragt, ob ich ihm ein Bücherregal baue.'],
            ['Jakob', 'Und finanziell? Eine Ausbildung bringt ja kaum etwas ein.'],
            ['Miriam', 'Das ist der Haken. Ich hab mir ein Polster angespart und bin in eine kleinere Wohnung gezogen. Es ist knapp, aber machbar. Und ehrlich gesagt hab ich seit Jahren nicht mehr so gut geschlafen.'],
            ['Jakob', 'Das klingt, als hättest du alles richtig gemacht.'],
            ['Miriam', 'Frag mich in drei Jahren noch mal. Aber bereut habe ich es bisher keine Sekunde.']
          ],
          plays: 1,
          items: [
            { type: 'mc', q: 'Miriam hat gekündigt, weil sie …', options: ['entlassen werden sollte.', 'innerlich ausgebrannt war.', 'eine bessere Stelle gefunden hatte.'], a: 1 },
            { type: 'mc', q: 'Sie macht jetzt …', options: ['ein Studium.', 'eine handwerkliche Ausbildung.', 'eine Weltreise.'], a: 1 },
            { type: 'mc', q: 'Den Wunsch, handwerklich zu arbeiten, …', options: ['hatte sie schon lange.', 'hat sie erst kürzlich entdeckt.', 'hat ihr Vater geweckt.'], a: 0 },
            { type: 'mc', q: 'Ihr Vater …', options: ['hat die Entscheidung sofort unterstützt.', 'hat zunächst verärgert reagiert.', 'spricht bis heute nicht mit ihr.'], a: 1 },
            { type: 'mc', q: 'Finanziell …', options: ['hat sie keine Probleme.', 'muss sie sich einschränken.', 'wird sie von den Eltern unterstützt.'], a: 1 },
            { type: 'mc', q: 'Seit der Entscheidung …', options: ['schläft sie besser.', 'ist sie oft unsicher.', 'arbeitet sie mehr als vorher.'], a: 0 },
            { type: 'mc', q: 'Wie bewertet Miriam ihre Entscheidung?', options: ['Sie bereut sie bereits.', 'Sie ist bisher zufrieden, bleibt aber vorsichtig.', 'Sie will bald zurück in die Kanzlei.'], a: 1 }
          ]
        },
        {
          title: 'Teil 3: Experteninterview', instructions: 'Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [
            ['Moderator', 'Frau Professor Lindqvist, Sie erforschen, wie Städte auf Hitzewellen reagieren können. Wie dringlich ist das Problem?'],
            ['Prof. Lindqvist', 'Sehr dringlich. Hitze ist in Europa mittlerweile das Wetterphänomen mit den meisten Todesopfern, mehr als Stürme oder Hochwasser zusammen. Betroffen sind vor allem ältere und alleinlebende Menschen.'],
            ['Moderator', 'Was können Städte tun?'],
            ['Prof. Lindqvist', 'Kurzfristig helfen Hitzeschutzpläne: Man identifiziert gefährdete Personen und organisiert, dass jemand bei ihnen vorbeischaut. Langfristig muss die Stadt selbst umgebaut werden: mehr Bäume, weniger versiegelte Flächen, helle Fassaden, die Sonnenlicht reflektieren.'],
            ['Moderator', 'Das klingt teuer.'],
            ['Prof. Lindqvist', 'Es ist eine Investition, aber Untätigkeit ist teurer. Hinzu kommt, dass Grünflächen zugleich Regenwasser speichern und damit vor Überschwemmungen schützen. Man löst also mehrere Probleme auf einmal.'],
            ['Moderator', 'Wo sehen Sie die größten Hindernisse?'],
            ['Prof. Lindqvist', 'Weniger im Geld als in den Zuständigkeiten. Für Bäume ist ein Amt zuständig, für Straßen ein anderes, für Gesundheit ein drittes. Solange diese Bereiche nicht zusammenarbeiten, bleiben viele gute Ideen auf dem Papier.']
          ],
          plays: 2,
          items: [
            { type: 'mc', q: 'Hitze fordert in Europa …', options: ['weniger Opfer als Stürme.', 'mehr Todesopfer als andere Wetterereignisse.', 'vor allem Opfer unter Kindern.'], a: 1 },
            { type: 'mc', q: 'Hitzeschutzpläne sehen vor, dass …', options: ['gefährdete Menschen besucht werden.', 'alle Menschen Klimaanlagen bekommen.', 'Schulen geschlossen werden.'], a: 0 },
            { type: 'mc', q: 'Langfristig empfiehlt die Expertin …', options: ['mehr Parkplätze.', 'mehr Grün und weniger versiegelte Flächen.', 'dunkle Fassaden.'], a: 1 },
            { type: 'mc', q: 'Grünflächen haben den zusätzlichen Vorteil, dass sie …', options: ['Touristen anziehen.', 'Regenwasser aufnehmen.', 'Lärm reduzieren.'], a: 1 },
            { type: 'mc', q: 'Nach Ansicht der Expertin ist Nichtstun …', options: ['kostengünstiger.', 'teurer als Handeln.', 'die beste Lösung.'], a: 1 },
            { type: 'mc', q: 'Das größte Hindernis sieht sie in …', options: ['fehlendem Geld.', 'mangelnder Zusammenarbeit der Behörden.', 'dem Widerstand der Bevölkerung.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 80, points: 100,
      intro: 'Two parts: reformulate ten sentences from a presentation, then write a longer text on one topic.',
      tasks: [
        {
          title: 'Teil 1: Umformulieren (about 20 minutes)', weight: 20,
          situation: '<p>Sie bereiten eine Präsentation vor und möchten einige Sätze stilistisch verändern. Ergänzen Sie die Sätze so, dass die Bedeutung gleich bleibt.</p>',
          instructions: 'Schreiben Sie nur die fehlenden Wörter.',
          form: [
            { label: 'Man muss die Anträge bis Freitag einreichen. → Die Anträge sind bis Freitag ___.', a: ['einzureichen'] },
            { label: 'Nachdem die Studie veröffentlicht worden war, … → Nach ___ der Studie …', a: ['der Veröffentlichung'] },
            { label: 'Weil die Nachfrage stark gestiegen ist, … → Aufgrund des starken ___ der Nachfrage …', a: ['Anstiegs', 'Anstieges'] },
            { label: 'Wenn man die Regeln nicht einhält, … → Bei ___ der Regeln …', a: ['Nichteinhaltung'] },
            { label: 'Das Problem kann gelöst werden. → Das Problem lässt sich ___.', a: ['lösen'] },
            { label: 'Es ist möglich, dass er den Termin vergessen hat. → Er ___ den Termin vergessen haben.', a: ['könnte', 'kann'] },
            { label: 'Man sagt, dass die Firma verkauft wird. → Die Firma ___ verkauft werden.', a: ['soll'] },
            { label: 'Um die Qualität zu sichern, … → Zur ___ der Qualität …', a: ['Sicherung'] },
            { label: 'Die Ergebnisse, die im Mai erhoben wurden, … → Die im Mai ___ Ergebnisse …', a: ['erhobenen'] },
            { label: 'Er behauptet, dass er nichts gewusst hat. → Er will nichts ___ haben.', a: ['gewusst'] }
          ]
        },
        {
          title: 'Teil 2: Text verfassen (about 60 minutes)', weight: 80, register: 'neutral', minWords: 250,
          situation: '<p>Wählen Sie <strong>eines</strong> der beiden Themen:</p><p><strong>A) Leserbrief:</strong> Eine überregionale Zeitung hat einen Artikel mit dem Titel „Bargeld ist ein Auslaufmodell“ veröffentlicht. Schreiben Sie einen Leserbrief, in dem Sie sich differenziert mit der These auseinandersetzen.</p><p><strong>B) Rezension:</strong> Schreiben Sie für ein Kulturmagazin eine Rezension eines Buches oder Films, das oder der Sie nachhaltig beschäftigt hat.</p>',
          points: ['Klare Einleitung mit Bezug auf den Anlass', 'Differenzierte Argumentation bzw. Analyse mit Beispielen', 'Eigene, begründete Bewertung', 'Abrundender Schluss'],
          keywords: [['artikel', 'beitrag', 'these', 'roman', 'film', 'buch', 'anlass'], ['einerseits', 'andererseits', 'zwar', 'beispielsweise', 'etwa', 'zum beispiel', 'hingegen', 'erstens', 'zweitens', 'zweifellos', 'jedoch', 'dagegen'], ['meines erachtens', 'ich bin der auffassung', 'überzeugt', 'halte', 'meiner ansicht', 'bewertung', 'gelungen'], ['abschließend', 'zusammenfassend', 'letztlich', 'alles in allem', 'insgesamt', 'fazit', 'daher', 'folglich', 'unterm strich']],
          instructions: 'Achten Sie auf einen klaren Aufbau, ein einheitliches Register und präzisen Ausdruck.',
          model: 'Sehr geehrte Redaktion,\nmit Interesse habe ich Ihren Artikel „Bargeld ist ein Auslaufmodell“ gelesen. So schlüssig die darin angeführten Zahlen zur wachsenden Beliebtheit des kontaktlosen Bezahlens auch sein mögen, die Schlussfolgerung, Bargeld habe ausgedient, halte ich für vorschnell.\nZweifellos bietet das digitale Bezahlen Vorteile: Es ist bequem, beschleunigt Abläufe an der Kasse und erleichtert die Buchhaltung kleiner Betriebe. Wer im Ausland unterwegs ist, erspart sich zudem den Umtausch. Insofern ist es nachvollziehbar, dass gerade jüngere Menschen kaum noch Münzen bei sich tragen.\nDoch der Artikel blendet wesentliche Aspekte aus. Erstens ist Bargeld das einzige Zahlungsmittel, das keine Datenspuren hinterlässt. In einer Zeit, in der nahezu jede Handlung erfasst und ausgewertet wird, ist diese Anonymität kein Relikt, sondern ein Stück Freiheit. Zweitens sind nicht alle Menschen gleichermaßen digital versiert. Für viele Ältere, aber auch für Menschen ohne eigenes Konto, wäre eine Abschaffung des Bargelds gleichbedeutend mit einem Ausschluss vom wirtschaftlichen Leben. Drittens erweist sich Bargeld in Krisen als robust: Fällt das Netz oder der Strom aus, funktioniert es weiterhin.\nBemerkenswert finde ich zudem, dass die Debatte häufig so geführt wird, als müsse man sich zwischen zwei Systemen entscheiden. Dabei spricht nichts dagegen, beide nebeneinander bestehen zu lassen und den Menschen die Wahl zu überlassen.\nMeines Erachtens sollte der Gesetzgeber daher sicherstellen, dass Bargeld als gesetzliches Zahlungsmittel überall akzeptiert wird. Fortschritt bemisst sich nicht daran, wie schnell wir Bewährtes abschaffen, sondern daran, ob niemand dabei zurückgelassen wird.\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 100, prep: 15,
      intro: 'Two parts: a presentation with follow-up questions, and a pro/contra discussion with the examiner.',
      tasks: [
        {
          title: 'Teil 1: Vortrag (about 5 minutes, then 2–3 minutes of questions)', seconds: 300,
          html: '<p>Wählen Sie ein Thema und halten Sie einen frei gesprochenen Vortrag auf Grundlage kurzer Notizen:</p><p><strong>A) „Brauchen wir eine Pflicht zur Organspende?“</strong><br><strong>B) „Welche Verantwortung tragen Museen für Objekte aus der Kolonialzeit?“</strong></p><p>Strukturieren Sie Ihren Vortrag, beleuchten Sie verschiedene Perspektiven, beziehen Sie Stellung und beantworten Sie anschließend Rückfragen.</p>',
          tips: '<p>Lassen Sie mich mit einer Beobachtung beginnen: … / Hierbei gilt es zu unterscheiden zwischen … und … / Dem lässt sich entgegenhalten, dass … / Nicht zu unterschätzen ist … / Unterm Strich komme ich zu dem Schluss, dass …</p>'
        },
        {
          title: 'Teil 2: Diskussion Pro und Contra (about 5 minutes)', seconds: 300,
          html: '<p>Wählen Sie ein Thema und eine Position (Pro oder Contra). Eröffnen Sie die Diskussion mit einer kurzen Darstellung Ihres Standpunkts. Ihr Gegenüber vertritt die Gegenposition.</p><p><strong>A) „Sollte das Wahlrecht ab Geburt gelten und bis zur Volljährigkeit von den Eltern ausgeübt werden?“</strong><br><strong>B) „Sollten Flüge unter 500 km verboten werden?“</strong></p>',
          tips: '<p>Ich vertrete die Auffassung, dass … / Ihr Argument hat einiges für sich, doch … / Lassen Sie mich darauf eingehen: … / Gestatten Sie mir einen Einwand. / Das mag im Einzelfall zutreffen, verallgemeinern lässt es sich jedoch nicht.</p>'
        }
      ]
    }
  ]
};
