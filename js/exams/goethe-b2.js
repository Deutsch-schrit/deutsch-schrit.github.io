EXAMS['goethe-b2'] = {
  id: 'goethe-b2', provider: 'goethe', level: 'B2', name: 'Goethe-Zertifikat B2',
  about: 'Four separate modules: Lesen (65 min), Hören (about 40 min), Schreiben (75 min) and Sprechen (about 15 min). Each module has 100 points.',
  passText: 'Each module is passed with at least 60 of 100 points.',
  pass: { type: 'module', min: 0.6 },
  rubric: ['Erfüllung (task completion)', 'Kohärenz (structure and linking)', 'Wortschatz (vocabulary)', 'Strukturen (grammar)'],
  rubricHelp: 'At B2 the examiners expect a clear structure, varied linking words, precise vocabulary and complex sentences with few errors.',
  speakRubric: ['Erfüllung (task completion)', 'Kohärenz (fluency and structure)', 'Wortschatz (vocabulary)', 'Strukturen (grammar)', 'Aussprache (pronunciation)'],
  modules: [
    {
      id: 'lesen', name: 'Lesen', en: 'Reading', kind: 'items', minutes: 65, points: 100,
      intro: 'Five parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie lesen in einem Forum, wie Menschen über ihr Arbeiten im Homeoffice denken. Auf welche Person (a–d) treffen die Aussagen zu? Die Personen können mehrmals gewählt werden.',
          text: `<p><strong>a) Elif:</strong> Seit drei Jahren arbeite ich fast nur von zu Hause. Am Anfang habe ich den Kontakt zu den Kollegen sehr vermisst, inzwischen treffen wir uns aber einmal pro Woche im Büro. Mein größtes Problem ist, dass ich abends schwer abschalten kann, weil der Laptop immer auf dem Esstisch steht.</p>
<p><strong>b) Robert:</strong> Für mich ist das Homeoffice ein Segen. Ich spare jeden Tag fast zwei Stunden Fahrzeit, die ich jetzt mit meinen Kindern verbringe. Meine Firma hat mir sogar einen Schreibtisch und einen guten Bürostuhl bezahlt.</p>
<p><strong>c) Hanna:</strong> Ich habe es ein Jahr lang probiert und bin dann freiwillig ins Büro zurückgegangen. In meiner kleinen Wohnung konnte ich mich nicht konzentrieren, und ich habe gemerkt, dass mir die spontanen Gespräche in der Kaffeeküche viele gute Ideen gebracht haben.</p>
<p><strong>d) Paul:</strong> Ich arbeite abwechselnd zu Hause und im Büro. Das passt mir gut. Was mich stört, ist, dass manche Vorgesetzte glauben, man arbeite zu Hause weniger. Deshalb schreibe ich jetzt jeden Abend auf, was ich erledigt habe.</p>`,
          choices: [['a', 'Elif'], ['b', 'Robert'], ['c', 'Hanna'], ['d', 'Paul']],
          items: [
            { type: 'match', q: 'Wer hat das Homeoffice wieder aufgegeben?', a: 'c' },
            { type: 'match', q: 'Wer hat Möbel vom Arbeitgeber bekommen?', a: 'b' },
            { type: 'match', q: 'Wer trennt Arbeit und Freizeit nur schwer?', a: 'a' },
            { type: 'match', q: 'Wer fühlt sich nicht genug anerkannt?', a: 'd' },
            { type: 'match', q: 'Wer nutzt die gewonnene Zeit für die Familie?', a: 'b' },
            { type: 'match', q: 'Wer fand informelle Gespräche im Büro wichtig?', a: 'c' },
            { type: 'match', q: 'Wer dokumentiert die eigene Arbeit?', a: 'd' },
            { type: 'match', q: 'Wer sieht die Kollegen regelmäßig im Büro?', a: 'a' },
            { type: 'match', q: 'Wer hatte zu Hause zu wenig Platz?', a: 'c' }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          text: `<h3>Wenn die Stadt zum Garten wird</h3>
<p>Auf Dächern, in Hinterhöfen und auf ehemaligen Parkplätzen wachsen in deutschen Städten immer häufiger Tomaten, Bohnen und Kräuter. (1) ___ Viele Projekte entstehen aus der Initiative von Nachbarn, die eine ungenutzte Fläche gemeinsam bepflanzen.</p>
<p>Die Gründe dafür sind vielfältig. (2) ___ Andere schätzen vor allem den sozialen Aspekt: Beim Gärtnern lernt man Menschen kennen, mit denen man sonst kaum Kontakt hätte.</p>
<p>Auch die Städte haben das Potenzial erkannt. (3) ___ So stellt etwa die Stadt Leipzig Flächen kostenlos zur Verfügung, wenn sich eine Gruppe verpflichtet, sie zu pflegen.</p>
<p>Ganz ohne Probleme läuft es allerdings nicht. (4) ___ Außerdem ist der Boden in manchen Stadtteilen belastet, sodass Gemüse dort nur in Hochbeeten angebaut werden darf.</p>
<p>Fachleute sind sich dennoch einig, dass Stadtgärten einen wichtigen Beitrag leisten. (5) ___ Gleichzeitig kühlen bepflanzte Flächen die Umgebung an heißen Sommertagen spürbar ab.</p>
<p>Ob die Gärten langfristig bestehen, hängt vor allem vom Engagement der Beteiligten ab. (6) ___</p>`,
          choices: [
            ['a', 'Manche Menschen möchten wissen, woher ihr Essen kommt.'],
            ['b', 'Sie bieten Insekten Nahrung und verbessern so die Artenvielfalt.'],
            ['c', 'Der Trend wird als „Urban Gardening“ bezeichnet.'],
            ['d', 'Denn viele Gruppen lösen sich nach wenigen Jahren wieder auf.'],
            ['e', 'Immer wieder kommt es zu Streit darüber, wer die Ernte bekommt.'],
            ['f', 'Einige Verwaltungen unterstützen die Gärten inzwischen aktiv.'],
            ['g', 'Tomaten wachsen am besten in warmen Regionen.'],
            ['h', 'Die meisten Supermärkte verkaufen inzwischen regionales Gemüse.']
          ],
          items: [
            { type: 'match', q: 'Lücke 1', a: 'c' }, { type: 'match', q: 'Lücke 2', a: 'a' }, { type: 'match', q: 'Lücke 3', a: 'f' },
            { type: 'match', q: 'Lücke 4', a: 'e' }, { type: 'match', q: 'Lücke 5', a: 'b' }, { type: 'match', q: 'Lücke 6', a: 'd' }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Lesen Sie den Text und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          text: `<h3>Die Kunst, nein zu sagen</h3>
<p>Wer im Beruf erfolgreich sein will, muss flexibel sein, so lautet eine weit verbreitete Annahme. Doch Arbeitspsychologin Dr. Miriam Kraus warnt davor, jede zusätzliche Aufgabe anzunehmen. „Viele Beschäftigte haben Angst, als unkollegial zu gelten, wenn sie eine Bitte ablehnen“, erklärt sie. Die Folge seien Überstunden, Stress und auf Dauer sogar gesundheitliche Probleme.</p>
<p>Kraus empfiehlt, vor einer Zusage kurz innezuhalten. Statt spontan zuzustimmen, solle man um Bedenkzeit bitten und prüfen, ob die Aufgabe tatsächlich zu den eigenen Prioritäten passt. Ein Nein müsse dabei nicht unhöflich klingen: Wer begründet, warum er gerade keine Kapazitäten hat, und eventuell eine Alternative anbietet, werde in der Regel verstanden.</p>
<p>Besonders schwer fällt das Neinsagen Berufseinsteigern. Sie möchten sich beweisen und unterschätzen oft, wie viel Zeit eine Aufgabe tatsächlich kostet. Hier sieht Kraus auch die Führungskräfte in der Verantwortung: Gute Vorgesetzte fragen regelmäßig nach der Arbeitsbelastung ihres Teams und verteilen Aufgaben gerecht.</p>
<p>Dass sich ein klares Nein lohnen kann, zeigt eine Umfrage unter 1.200 Angestellten: Wer gelegentlich Aufgaben ablehnte, war im Durchschnitt zufriedener mit seiner Arbeit und wurde von Kollegen keineswegs negativer beurteilt.</p>`,
          items: [
            { type: 'mc', q: 'Viele Beschäftigte sagen nicht nein, weil sie …', options: ['mehr Geld verdienen möchten.', 'befürchten, als unkollegial zu gelten.', 'gern Überstunden machen.'], a: 1 },
            { type: 'mc', q: 'Langfristig kann ständiges Zustimmen …', options: ['der Gesundheit schaden.', 'die Karriere fördern.', 'zu einer Beförderung führen.'], a: 0 },
            { type: 'mc', q: 'Dr. Kraus rät, …', options: ['jede Bitte sofort abzulehnen.', 'sich vor einer Zusage Zeit zum Nachdenken zu nehmen.', 'den Vorgesetzten zu fragen.'], a: 1 },
            { type: 'mc', q: 'Ein Nein wird eher akzeptiert, wenn man …', options: ['es kurz und ohne Erklärung sagt.', 'es per E-Mail schreibt.', 'es begründet und eine Alternative anbietet.'], a: 2 },
            { type: 'mc', q: 'Berufseinsteiger …', options: ['können besonders gut nein sagen.', 'schätzen den Zeitaufwand oft falsch ein.', 'bekommen weniger Aufgaben.'], a: 1 },
            { type: 'mc', q: 'Die Umfrage zeigt, dass Menschen, die manchmal nein sagen, …', options: ['von Kollegen schlechter bewertet werden.', 'häufiger krank sind.', 'mit ihrer Arbeit zufriedener sind.'], a: 2 }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Lesen Sie die Meinungen zum Thema „Sollte das Wahlalter auf 16 Jahre gesenkt werden?“. Welche Überschrift passt zu welchem Text? Eine Überschrift passt nicht.',
          text: `<p><strong>Text 1:</strong> Jugendliche sind von politischen Entscheidungen oft am längsten betroffen, etwa beim Klimaschutz oder bei der Rente. Es ist nur fair, dass sie mitbestimmen dürfen.</p>
<p><strong>Text 2:</strong> Mit 16 interessieren sich viele noch kaum für Politik. Ich fürchte, dass sie sich von einfachen Parolen in sozialen Medien beeinflussen lassen.</p>
<p><strong>Text 3:</strong> Wenn man früher wählen darf, beschäftigt man sich auch früher mit Politik. Die Schulen könnten das Thema im Unterricht gezielt vorbereiten.</p>
<p><strong>Text 4:</strong> Mit 16 darf man weder Verträge allein unterschreiben noch Auto fahren. Warum sollte man dann über die Regierung entscheiden?</p>
<p><strong>Text 5:</strong> In einigen Bundesländern dürfen 16-Jährige bei Kommunalwahlen schon wählen. Die Erfahrungen sind positiv: Die Wahlbeteiligung junger Menschen ist dort nicht niedriger als bei anderen Altersgruppen.</p>
<p><strong>Text 6:</strong> Statt über das Wahlalter zu streiten, sollten Politiker lieber Themen ansprechen, die junge Menschen wirklich interessieren. Dann gehen sie später auch wählen.</p>`,
          choices: [
            ['a', 'Wer betroffen ist, soll mitentscheiden'], ['b', 'Gefahr der Manipulation'], ['c', 'Politische Bildung profitiert'],
            ['d', 'Widerspruch zu anderen Altersgrenzen'], ['e', 'Gute Erfahrungen in der Praxis'], ['f', 'Die Politik muss sich ändern, nicht das Gesetz'], ['g', 'Wählen sollte Pflicht werden']
          ],
          items: [
            { type: 'match', q: 'Text 1', a: 'a' }, { type: 'match', q: 'Text 2', a: 'b' }, { type: 'match', q: 'Text 3', a: 'c' },
            { type: 'match', q: 'Text 4', a: 'd' }, { type: 'match', q: 'Text 5', a: 'e' }, { type: 'match', q: 'Text 6', a: 'f' }
          ]
        },
        {
          title: 'Teil 5', instructions: 'Lesen Sie den Text. Welche Überschrift passt zu welchem Abschnitt? Eine Überschrift passt nicht.',
          text: `<h3>Hinweise für Teilnehmende am Firmenlauf</h3>
<p><strong>Abschnitt 1:</strong> Die Startnummern werden am Veranstaltungstag ab 15 Uhr am Infozelt ausgegeben. Bitte bringen Sie Ihre Anmeldebestätigung mit.</p>
<p><strong>Abschnitt 2:</strong> An der Strecke gibt es zwei Stationen mit Wasser. Im Zielbereich erhalten alle Läuferinnen und Läufer kostenlos Obst und Getränke.</p>
<p><strong>Abschnitt 3:</strong> Bei Unwetter kann der Lauf kurzfristig abgesagt werden. Informationen dazu finden Sie ab 12 Uhr auf unserer Website. Eine Erstattung der Startgebühr ist in diesem Fall nicht möglich.</p>`,
          choices: [['a', 'Abholung der Unterlagen'], ['b', 'Versorgung während und nach dem Lauf'], ['c', 'Absage wegen schlechten Wetters'], ['d', 'Preise für die Sieger']],
          items: [{ type: 'match', q: 'Abschnitt 1', a: 'a' }, { type: 'match', q: 'Abschnitt 2', a: 'b' }, { type: 'match', q: 'Abschnitt 3', a: 'c' }]
        }
      ]
    },
    {
      id: 'hoeren', name: 'Hören', en: 'Listening', kind: 'items', minutes: 40, points: 100,
      intro: 'Four parts with 30 questions.',
      parts: [
        {
          title: 'Teil 1', instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben.',
          items: [
            { type: 'tf', audio: [['Sprecherin', 'Ich wollte eigentlich nur ein Semester in Lissabon bleiben, aber dann habe ich dort eine Stelle in einem Start-up gefunden. Inzwischen lebe ich seit vier Jahren hier. Am schwierigsten war am Anfang die Sprache, denn Portugiesisch klingt ganz anders, als es geschrieben wird.']], q: 'Die Sprecherin lebt schon länger in Lissabon als geplant.', a: 'r' },
            { type: 'mc', q: 'Was war für sie am Anfang besonders schwierig?', options: ['Eine Arbeit zu finden.', 'Die Aussprache des Portugiesischen.', 'Eine Wohnung zu bekommen.'], a: 1 },
            { type: 'tf', audio: [['Sprecher', 'Unser Repair-Café hat jeden zweiten Samstag geöffnet. Die Reparatur ist kostenlos, wir freuen uns aber über eine Spende. Am häufigsten bringen die Leute Kaffeemaschinen und Lampen. Wichtig: Wir reparieren nur gemeinsam mit den Besitzern, damit sie selbst etwas lernen.']], q: 'Im Repair-Café muss man für die Reparatur bezahlen.', a: 'f' },
            { type: 'mc', q: 'Was ist dem Repair-Café wichtig?', options: ['Dass die Besitzer bei der Reparatur mitmachen.', 'Dass nur Elektrogeräte gebracht werden.', 'Dass man vorher einen Termin macht.'], a: 0 },
            { type: 'tf', audio: [['Sprecherin', 'Liebe Hörerinnen und Hörer, in unserer nächsten Sendung geht es um Schlaf. Wir sprechen mit einem Mediziner darüber, warum Bildschirme am Abend den Schlaf stören und was man dagegen tun kann. Schicken Sie uns gern vorher Ihre Fragen per E-Mail.']], q: 'In der nächsten Sendung geht es um gesunde Ernährung.', a: 'f' },
            { type: 'mc', q: 'Die Hörer können …', options: ['in der Sendung anrufen.', 'vorab Fragen schicken.', 'einen Arzt besuchen.'], a: 1 },
            { type: 'tf', audio: [['Sprecher', 'Seit ich vor einem Jahr mit dem Klettern angefangen habe, hat sich meine Angst vor der Höhe fast ganz gelegt. Ich klettere zweimal pro Woche in einer Halle, im Sommer manchmal auch draußen in der Sächsischen Schweiz.']], q: 'Der Sprecher hatte früher Höhenangst.', a: 'r' },
            { type: 'mc', q: 'Wo klettert er normalerweise?', options: ['Nur draußen.', 'In einer Halle.', 'In den Alpen.'], a: 1 },
            { type: 'tf', audio: [['Sprecherin', 'Ich arbeite als Hebamme und mache oft Nachtdienste. Der Beruf ist anstrengend, aber es gibt nichts Schöneres, als ein Kind auf die Welt kommen zu sehen. Was mich ärgert, ist der Personalmangel: Oft betreue ich drei Geburten gleichzeitig.']], q: 'Die Sprecherin ist mit ihrem Beruf grundsätzlich zufrieden.', a: 'r' },
            { type: 'mc', q: 'Was kritisiert sie?', options: ['Die Bezahlung.', 'Dass es zu wenig Personal gibt.', 'Die langen Wege zur Arbeit.'], a: 1 }
          ]
        },
        {
          title: 'Teil 2', instructions: 'Sie hören ein Interview. Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [
            ['Moderatorin', 'Herr Albers, Sie haben vor zwei Jahren einen Unverpackt-Laden eröffnet. Wie kam es dazu?'],
            ['Herr Albers', 'Ich habe jahrelang als Ingenieur gearbeitet und mich immer über die Plastikberge in meinem Mülleimer geärgert. Irgendwann dachte ich: Jemand muss etwas ändern, warum nicht ich?'],
            ['Moderatorin', 'Wie funktioniert das Einkaufen bei Ihnen?'],
            ['Herr Albers', 'Die Kunden bringen eigene Gläser oder Dosen mit, wiegen sie leer und füllen dann Nudeln, Reis oder Nüsse ab. Wer nichts dabeihat, kann bei uns Pfandgläser bekommen.'],
            ['Moderatorin', 'Sind Ihre Produkte nicht teurer als im Supermarkt?'],
            ['Herr Albers', 'Manche ja, weil wir nur Bioware verkaufen. Aber man kauft genau die Menge, die man braucht, und wirft am Ende weniger weg. Viele Kunden sagen mir, dass sie dadurch insgesamt sogar sparen.'],
            ['Moderatorin', 'Was war die größte Herausforderung?'],
            ['Herr Albers', 'Ehrlich gesagt die Lieferanten. Viele liefern nur in Plastik verpackt. Wir mussten lange suchen, bis wir Partner gefunden haben, die Großgebinde aus Papier oder Mehrwegbehältern anbieten.'],
            ['Moderatorin', 'Und wie geht es weiter?'],
            ['Herr Albers', 'Wir planen einen Lieferservice mit Lastenrädern für ältere Menschen, die nicht mehr selbst kommen können.']
          ],
          plays: 1,
          items: [
            { type: 'mc', q: 'Herr Albers hat den Laden eröffnet, weil …', options: ['er als Ingenieur keine Stelle mehr fand.', 'ihn der viele Verpackungsmüll störte.', 'seine Familie schon einen Laden hatte.'], a: 1 },
            { type: 'mc', q: 'Kunden ohne eigene Behälter …', options: ['können Pfandgläser benutzen.', 'dürfen nichts kaufen.', 'bekommen Plastiktüten.'], a: 0 },
            { type: 'mc', q: 'Die Produkte sind manchmal teurer, weil …', options: ['der Laden klein ist.', 'es nur Bioprodukte gibt.', 'die Miete hoch ist.'], a: 1 },
            { type: 'mc', q: 'Viele Kunden sparen, weil sie …', options: ['Rabatte bekommen.', 'weniger Lebensmittel wegwerfen.', 'größere Mengen kaufen.'], a: 1 },
            { type: 'mc', q: 'Schwierig war es, …', options: ['geeignete Lieferanten zu finden.', 'Mitarbeiter zu finden.', 'einen Laden zu mieten.'], a: 0 },
            { type: 'mc', q: 'Der geplante Lieferservice ist vor allem für …', options: ['Familien mit Kindern.', 'Restaurants.', 'ältere Menschen.'], a: 2 }
          ]
        },
        {
          title: 'Teil 3', instructions: 'Sie hören eine Diskussion. Sie hören den Text zweimal. Wer sagt was? a = Moderator, b = Frau Dr. Sanchez (Ärztin), c = Herr Koch (Fitnesstrainer).',
          audio: [
            ['Moderator', 'Fitness-Apps und Smartwatches zählen heute unsere Schritte, unseren Puls und unseren Schlaf. Ich frage mich, ob uns das wirklich gesünder macht.'],
            ['Frau Dr. Sanchez', 'Für manche Patienten ist das eine große Hilfe. Wer sieht, dass er nur zweitausend Schritte am Tag geht, bewegt sich oft mehr.'],
            ['Herr Koch', 'Das sehe ich auch so. Aber viele meiner Kunden werden fast süchtig nach den Zahlen und vergessen, auf ihren Körper zu hören.'],
            ['Moderator', 'Was ist mit dem Datenschutz? Die Daten landen ja bei großen Firmen.'],
            ['Frau Dr. Sanchez', 'Das ist ein ernstes Problem. Gesundheitsdaten sind sehr sensibel, und man sollte genau prüfen, wem man sie gibt.'],
            ['Herr Koch', 'Ich empfehle meinen Kunden, die Apps nur ein paar Wochen zu nutzen, um ihre Gewohnheiten kennenzulernen, und dann wieder ohne zu trainieren.'],
            ['Moderator', 'Also eher ein Werkzeug für den Anfang?'],
            ['Frau Dr. Sanchez', 'Genau. Und bei echten Beschwerden ersetzt keine Uhr den Besuch beim Arzt.']
          ],
          plays: 2,
          choices: [['a', 'Moderator'], ['b', 'Frau Dr. Sanchez'], ['c', 'Herr Koch']],
          items: [
            { type: 'match', q: 'Es ist unklar, ob digitale Messungen der Gesundheit nützen.', a: 'a' },
            { type: 'match', q: 'Die Zahlen können Menschen motivieren, aktiver zu sein.', a: 'b' },
            { type: 'match', q: 'Manche Menschen verlassen sich zu sehr auf die Daten.', a: 'c' },
            { type: 'match', q: 'Man sollte vorsichtig sein, wem man seine Daten gibt.', a: 'b' },
            { type: 'match', q: 'Apps sollte man nur für eine begrenzte Zeit nutzen.', a: 'c' },
            { type: 'match', q: 'Bei Krankheit sollte man trotzdem einen Arzt aufsuchen.', a: 'b' }
          ]
        },
        {
          title: 'Teil 4', instructions: 'Sie hören einen Vortrag. Sie hören den Text zweimal. Wählen Sie die richtige Lösung a, b oder c.',
          audio: [['Referentin', 'Meine Damen und Herren, ich spreche heute über das Thema Mehrsprachigkeit bei Kindern. Lange Zeit glaubte man, dass Kinder durch zwei Sprachen verwirrt würden und keine Sprache richtig lernten. Heute wissen wir, dass das nicht stimmt. Mehrsprachige Kinder mischen zwar manchmal die Sprachen, das ist aber eine normale Phase und kein Zeichen für ein Problem. Studien zeigen sogar, dass mehrsprachige Kinder Vorteile haben: Sie können sich oft besser konzentrieren und zwischen Aufgaben wechseln. Wichtig ist allerdings, dass Kinder in beiden Sprachen genug Kontakt haben. Eltern sollten mit ihren Kindern die Sprache sprechen, in der sie sich selbst am wohlsten fühlen, denn nur so entsteht eine natürliche Kommunikation. Ein häufiger Fehler ist es, aus Angst vor schlechten Schulnoten die Familiensprache aufzugeben. Damit verlieren Kinder nicht nur eine Sprache, sondern oft auch die Verbindung zu Großeltern und zur Herkunftskultur. Kindergärten und Schulen können helfen, indem sie die Familiensprachen sichtbar machen, zum Beispiel mit Büchern in verschiedenen Sprachen. Zum Schluss möchte ich betonen: Mehrsprachigkeit ist keine Belastung, sondern eine Ressource, für die Kinder und für unsere Gesellschaft.']],
          plays: 2,
          items: [
            { type: 'mc', q: 'Früher dachte man, dass Kinder mit zwei Sprachen …', options: ['schneller lernen.', 'durcheinanderkommen.', 'besser in der Schule sind.'], a: 1 },
            { type: 'mc', q: 'Wenn Kinder Sprachen mischen, ist das …', options: ['ein Grund zur Sorge.', 'eine normale Entwicklungsphase.', 'ein Zeichen für wenig Kontakt.'], a: 1 },
            { type: 'mc', q: 'Mehrsprachige Kinder können oft besser …', options: ['rechnen.', 'zwischen Aufgaben wechseln.', 'Musik machen.'], a: 1 },
            { type: 'mc', q: 'Eltern sollten mit ihren Kindern …', options: ['nur die Landessprache sprechen.', 'die Sprache sprechen, in der sie sich wohlfühlen.', 'jeden Tag die Sprache wechseln.'], a: 1 },
            { type: 'mc', q: 'Ein häufiger Fehler ist, …', options: ['die Familiensprache aus Sorge um die Schule aufzugeben.', 'zu viele Bücher zu kaufen.', 'die Kinder zu früh in den Kindergarten zu schicken.'], a: 0 },
            { type: 'mc', q: 'Wenn die Familiensprache verloren geht, …', options: ['werden die Noten besser.', 'leidet oft der Kontakt zu den Großeltern.', 'lernen Kinder schneller Deutsch.'], a: 1 },
            { type: 'mc', q: 'Schulen können helfen, indem sie …', options: ['Bücher in verschiedenen Sprachen anbieten.', 'mehr Deutschunterricht geben.', 'Elternabende verbieten.'], a: 0 },
            { type: 'mc', q: 'Die Referentin sieht Mehrsprachigkeit als …', options: ['Belastung.', 'Ressource.', 'Ausnahme.'], a: 1 }
          ]
        }
      ]
    },
    {
      id: 'schreiben', name: 'Schreiben', en: 'Writing', kind: 'writing', minutes: 75, points: 100,
      intro: 'Two tasks: a forum post with your opinion (about 150 words) and a formal message (about 100 words).',
      tasks: [
        {
          title: 'Teil 1: Forumsbeitrag (about 50 minutes)', weight: 60, register: 'neutral', minWords: 150,
          situation: '<p>Sie schreiben einen Beitrag in einem Online-Forum zum Thema <strong>„Sollten Supermärkte unverkaufte Lebensmittel verschenken müssen?“</strong></p>',
          points: ['Äußern Sie Ihre Meinung zu einer gesetzlichen Pflicht.', 'Nennen Sie Gründe für Ihre Meinung.', 'Nennen Sie andere Möglichkeiten gegen Lebensmittelverschwendung.', 'Beschreiben Sie, wie Sie selbst mit Lebensmitteln umgehen.'],
          keywords: [['meinung', 'finde', 'bin der ansicht', 'halte', 'gesetz', 'pflicht'], ['weil', 'denn', 'deshalb', 'grund', 'da '], ['möglichkeit', 'könnte', 'sollte', 'app', 'tafel', 'foodsharing', 'einkaufsliste', 'aufklärung', 'verbraucher'], ['ich selbst', 'bei mir', 'ich kaufe', 'meine', 'reste', 'einfrieren', 'ich versuche']],
          instructions: 'Schreiben Sie zu allen vier Punkten. Achten Sie auf einen passenden Textaufbau und Verbindungswörter.',
          model: 'Ich halte eine gesetzliche Pflicht für sinnvoll, denn es ist kaum zu rechtfertigen, dass gute Lebensmittel im Müll landen, während viele Menschen sparen müssen. In Frankreich gibt es ein solches Gesetz bereits, und es zeigt, dass die Umsetzung möglich ist.\nAllerdings reicht ein Gesetz allein nicht aus. Ein großer Teil der Verschwendung entsteht nicht im Handel, sondern in privaten Haushalten. Deshalb sollte man Verbraucher besser informieren, zum Beispiel darüber, dass das Mindesthaltbarkeitsdatum kein Verfallsdatum ist. Auch Apps, über die Restaurants übrig gebliebenes Essen günstig verkaufen, halte ich für eine gute Idee.\nIch selbst versuche, mit einer Einkaufsliste einzukaufen und nur so viel zu kochen, wie wir essen. Reste friere ich ein oder verwende sie am nächsten Tag für eine Suppe. Trotzdem werfe ich manchmal noch Brot weg, und daran möchte ich arbeiten.\nInsgesamt bin ich überzeugt, dass Gesetze und persönliches Verhalten zusammenwirken müssen.'
        },
        {
          title: 'Teil 2: Formelle Nachricht (about 25 minutes)', weight: 40, register: 'formal', minWords: 100,
          situation: '<p>Sie sind Mitglied in einem Sportverein. Der Vorsitzende, Herr Engel, hat alle Mitglieder gebeten, beim Sommerfest am 12. Juli zu helfen. Sie haben am Vormittag Zeit, am Nachmittag aber nicht.</p><p>Schreiben Sie Herrn Engel eine Nachricht.</p>',
          points: ['Bieten Sie Ihre Hilfe für den Vormittag an.', 'Erklären Sie, warum Sie am Nachmittag nicht können.', 'Machen Sie einen Vorschlag, wie Sie helfen könnten.', 'Bitten Sie um weitere Informationen.'],
          keywords: [['vormittag', 'morgens', 'helfen', 'unterstützen'], ['nachmittag', 'leider', 'weil', 'da ', 'termin'], ['vorschlag', 'könnte', 'würde', 'aufbau', 'kuchen', 'stand', 'anmeldung'], ['information', 'mitteilen', 'wann', 'wo', 'frage', 'bitte']],
          instructions: 'Schreiben Sie zu allen vier Punkten. Achten Sie auf Anrede, Gruß und einen höflichen Ton.',
          model: 'Sehr geehrter Herr Engel,\nvielen Dank für Ihre Nachricht zum Sommerfest. Ich helfe gern mit und habe am 12. Juli am Vormittag Zeit.\nAm Nachmittag kann ich leider nicht, weil ich zur Hochzeit einer Freundin eingeladen bin.\nIch könnte zum Beispiel beim Aufbau der Stände und Bänke helfen oder einen Kuchen für den Verkauf backen. Gern übernehme ich auch die Anmeldung der Gäste bis 13 Uhr, da ich so etwas schon beim letzten Fest gemacht habe.\nKönnten Sie mir bitte mitteilen, wann ich am Vereinsheim sein soll und wer für den Aufbau verantwortlich ist?\nMit freundlichen Grüßen\nMaria Schulz'
        }
      ]
    },
    {
      id: 'sprechen', name: 'Sprechen', en: 'Speaking', kind: 'speaking', minutes: 15, points: 100, prep: 15,
      intro: 'Two parts: a short presentation and a discussion with your partner.',
      tasks: [
        {
          title: 'Teil 1: Vortrag halten (about 4 minutes)', seconds: 240,
          html: '<p>Wählen Sie ein Thema: <strong>A) „Soziale Medien: Fluch oder Segen für Jugendliche?“</strong> oder <strong>B) „Sollte der öffentliche Nahverkehr kostenlos sein?“</strong></p><ul><li>Beschreiben Sie mehrere Möglichkeiten oder Sichtweisen.</li><li>Erläutern Sie eine davon genauer.</li><li>Nennen Sie Vor- und Nachteile.</li><li>Sagen Sie Ihre Meinung und begründen Sie sie.</li></ul><p>Danach stellt Ihnen Ihr Partner eine Frage, und Sie geben ihm zu seinem Vortrag eine Rückmeldung.</p>',
          tips: '<p>Ich möchte heute über … sprechen. / Zunächst … , anschließend … , zum Schluss … / Ein wichtiger Aspekt ist … / Einerseits …, andererseits … / Ich bin davon überzeugt, dass … / Zusammenfassend lässt sich sagen …</p>'
        },
        {
          title: 'Teil 2: Diskussion führen (about 5 minutes)', seconds: 300,
          html: '<p>Diskutieren Sie die Frage: <strong>„Sollten alle Schülerinnen und Schüler ein Pflichtpraktikum in einem sozialen Beruf machen?“</strong> Tauschen Sie Argumente aus, reagieren Sie auf Ihr Gegenüber und fassen Sie am Ende zusammen, ob Sie sich einig sind.</p>',
          tips: '<p>Da bin ich anderer Meinung, denn … / Das ist ein gutes Argument, aber … / Was hältst du von dem Vorschlag, …? / Wir sind uns einig, dass … / Ich würde einen Kompromiss vorschlagen: …</p>'
        }
      ]
    }
  ]
};
