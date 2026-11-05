/*
  Vocabulary data. One entry per line:
  N|article|word|plural|English        (article: der, die, das, or pl for plural-only nouns; plural — = none)
  V|infinitive|Präteritum (er/sie/es)|Perfekt (er/sie/es)|English
  A|adjective|Komparativ|Superlativ|English   (— = normally not compared)
  D|adverb|type|German example sentence|English   (adverbs are in js/vocab-adverbs.js)
*/
window.VOCAB_RAW = {
A1: `
N|der|Mann|Männer|man; husband
N|die|Frau|Frauen|woman; wife
N|das|Kind|Kinder|child
N|die|Familie|Familien|family
N|der|Vater|Väter|father
N|die|Mutter|Mütter|mother
N|der|Bruder|Brüder|brother
N|die|Schwester|Schwestern|sister
N|der|Freund|Freunde|friend; boyfriend
N|die|Freundin|Freundinnen|friend; girlfriend
N|der|Name|Namen|name
N|das|Haus|Häuser|house
N|die|Wohnung|Wohnungen|flat, apartment
N|das|Zimmer|Zimmer|room
N|die|Küche|Küchen|kitchen
N|das|Bad|Bäder|bathroom; bath
N|der|Tisch|Tische|table
N|der|Stuhl|Stühle|chair
N|das|Bett|Betten|bed
N|die|Tür|Türen|door
N|das|Fenster|Fenster|window
N|die|Stadt|Städte|city, town
N|die|Straße|Straßen|street
N|der|Bahnhof|Bahnhöfe|train station
N|der|Bus|Busse|bus
N|der|Zug|Züge|train
N|das|Auto|Autos|car
N|das|Fahrrad|Fahrräder|bicycle
N|die|Schule|Schulen|school
N|der|Lehrer|Lehrer|teacher (male)
N|die|Lehrerin|Lehrerinnen|teacher (female)
N|der|Arzt|Ärzte|doctor (male)
N|die|Ärztin|Ärztinnen|doctor (female)
N|die|Arbeit|Arbeiten|work; job
N|der|Beruf|Berufe|profession, occupation
N|das|Geld|Gelder|money
N|das|Buch|Bücher|book
N|die|Sprache|Sprachen|language
N|das|Land|Länder|country; countryside
N|der|Tag|Tage|day
N|die|Woche|Wochen|week
N|der|Monat|Monate|month
N|das|Jahr|Jahre|year
N|die|Uhr|Uhren|clock, watch; o'clock
N|die|Zeit|Zeiten|time
N|das|Wetter|—|weather
N|das|Essen|—|food; meal
N|das|Wasser|—|water
N|das|Brot|Brote|bread
N|der|Kaffee|—|coffee
N|der|Tee|Tees|tea
N|die|Milch|—|milk
N|das|Ei|Eier|egg
N|der|Apfel|Äpfel|apple
N|das|Fleisch|—|meat
N|der|Kopf|Köpfe|head
N|die|Hand|Hände|hand
V|sein|war|ist gewesen|to be
V|haben|hatte|hat gehabt|to have
V|werden|wurde|ist geworden|to become
V|heißen|hieß|hat geheißen|to be called
V|wohnen|wohnte|hat gewohnt|to live (reside)
V|kommen|kam|ist gekommen|to come
V|gehen|ging|ist gegangen|to go, to walk
V|fahren|fuhr|ist gefahren|to drive, to travel
V|machen|machte|hat gemacht|to do, to make
V|arbeiten|arbeitete|hat gearbeitet|to work
V|lernen|lernte|hat gelernt|to learn, to study
V|sprechen|sprach|hat gesprochen|to speak
V|lesen|las|hat gelesen|to read
V|schreiben|schrieb|hat geschrieben|to write
V|hören|hörte|hat gehört|to hear, to listen
V|sehen|sah|hat gesehen|to see
V|essen|aß|hat gegessen|to eat
V|trinken|trank|hat getrunken|to drink
V|schlafen|schlief|hat geschlafen|to sleep
V|kaufen|kaufte|hat gekauft|to buy
V|brauchen|brauchte|hat gebraucht|to need
V|spielen|spielte|hat gespielt|to play
V|kochen|kochte|hat gekocht|to cook
V|fragen|fragte|hat gefragt|to ask
V|antworten|antwortete|hat geantwortet|to answer
V|verstehen|verstand|hat verstanden|to understand
V|finden|fand|hat gefunden|to find; to think (opinion)
V|geben|gab|hat gegeben|to give
V|nehmen|nahm|hat genommen|to take
V|bleiben|blieb|ist geblieben|to stay
V|wissen|wusste|hat gewusst|to know (a fact)
V|kennen|kannte|hat gekannt|to know (be familiar with)
V|können|konnte|hat gekonnt|can, to be able to
V|müssen|musste|hat gemusst|must, to have to
V|wollen|wollte|hat gewollt|to want
V|mögen|mochte|hat gemocht|to like
V|aufstehen|stand auf|ist aufgestanden|to get up
V|anrufen|rief an|hat angerufen|to call (phone)
V|einkaufen|kaufte ein|hat eingekauft|to go shopping
V|beginnen|begann|hat begonnen|to begin
V|öffnen|öffnete|hat geöffnet|to open
V|schließen|schloss|hat geschlossen|to close
V|bezahlen|bezahlte|hat bezahlt|to pay
V|suchen|suchte|hat gesucht|to look for
A|gut|besser|am besten|good
A|schlecht|schlechter|am schlechtesten|bad
A|groß|größer|am größten|big, tall
A|klein|kleiner|am kleinsten|small
A|alt|älter|am ältesten|old
A|jung|jünger|am jüngsten|young
A|neu|neuer|am neuesten|new
A|lang|länger|am längsten|long
A|kurz|kürzer|am kürzesten|short
A|hoch|höher|am höchsten|high
A|nah|näher|am nächsten|near
A|viel|mehr|am meisten|much, a lot
A|wenig|weniger|am wenigsten|little, few
A|gern|lieber|am liebsten|gladly, like to (adverb)
A|schön|schöner|am schönsten|beautiful, nice
A|teuer|teurer|am teuersten|expensive
A|billig|billiger|am billigsten|cheap
A|warm|wärmer|am wärmsten|warm
A|kalt|kälter|am kältesten|cold
A|heiß|heißer|am heißesten|hot
A|schnell|schneller|am schnellsten|fast
A|langsam|langsamer|am langsamsten|slow
A|früh|früher|am frühesten|early
A|spät|später|am spätesten|late
A|leicht|leichter|am leichtesten|easy; light
A|schwer|schwerer|am schwersten|difficult; heavy
A|richtig|—|—|correct, right
A|falsch|—|—|wrong
A|müde|müder|am müdesten|tired
A|krank|kränker|am kränksten|ill, sick
A|glücklich|glücklicher|am glücklichsten|happy
N|die|Polizei|—|police
V|telefonieren|telefonierte|hat telefoniert|to make a phone call
V|reservieren|reservierte|hat reserviert|to book, to reserve
V|lächeln|lächelte|hat gelächelt|to smile
N|der|Kunde|Kunden|customer (male)
`,
A2: `
N|der|Urlaub|Urlaube|holiday, vacation
N|die|Reise|Reisen|trip, journey
N|das|Hotel|Hotels|hotel
N|der|Flughafen|Flughäfen|airport
N|die|Fahrkarte|Fahrkarten|ticket (transport)
N|der|Koffer|Koffer|suitcase
N|das|Wochenende|Wochenenden|weekend
N|der|Geburtstag|Geburtstage|birthday
N|das|Geschenk|Geschenke|present, gift
N|das|Fest|Feste|celebration, festival
N|das|Hobby|Hobbys|hobby
N|die|Freizeit|—|free time
N|der|Verein|Vereine|club, association
N|das|Gesicht|Gesichter|face
N|der|Körper|Körper|body
N|der|Bauch|Bäuche|stomach, belly
N|der|Rücken|Rücken|back
N|die|Gesundheit|—|health
N|die|Apotheke|Apotheken|pharmacy
N|das|Krankenhaus|Krankenhäuser|hospital
N|der|Termin|Termine|appointment
N|die|Kleidung|—|clothing
N|die|Hose|Hosen|trousers
N|das|Hemd|Hemden|shirt
N|der|Schuh|Schuhe|shoe
N|die|Größe|Größen|size
N|das|Geschäft|Geschäfte|shop; business
N|der|Supermarkt|Supermärkte|supermarket
N|das|Angebot|Angebote|offer
N|der|Preis|Preise|price; prize
N|die|Kasse|Kassen|checkout, till
N|die|Firma|Firmen|company
N|der|Kollege|Kollegen|colleague (male)
N|die|Kollegin|Kolleginnen|colleague (female)
N|der|Chef|Chefs|boss (male)
N|die|Chefin|Chefinnen|boss (female)
N|die|Ausbildung|Ausbildungen|vocational training
N|die|Erfahrung|Erfahrungen|experience
N|die|Nachricht|Nachrichten|message; (pl.) the news
N|das|Handy|Handys|mobile phone
N|die|Umwelt|—|environment
N|der|Müll|—|rubbish, waste
N|die|Heizung|Heizungen|heating
N|die|Miete|Mieten|rent
N|der|Vermieter|Vermieter|landlord
N|der|Nachbar|Nachbarn|neighbour (male)
N|die|Nachbarin|Nachbarinnen|neighbour (female)
N|die|Meinung|Meinungen|opinion
N|der|Wunsch|Wünsche|wish
N|das|Problem|Probleme|problem
N|die|Hilfe|Hilfen|help
V|besuchen|besuchte|hat besucht|to visit
V|treffen|traf|hat getroffen|to meet
V|helfen|half|hat geholfen|to help
V|vergessen|vergaß|hat vergessen|to forget
V|verlieren|verlor|hat verloren|to lose
V|gewinnen|gewann|hat gewonnen|to win
V|bringen|brachte|hat gebracht|to bring
V|denken|dachte|hat gedacht|to think
V|erzählen|erzählte|hat erzählt|to tell (a story)
V|erklären|erklärte|hat erklärt|to explain
V|empfehlen|empfahl|hat empfohlen|to recommend
V|waschen|wusch|hat gewaschen|to wash
V|sich freuen|freute sich|hat sich gefreut|to be happy, to look forward
V|sich anziehen|zog sich an|hat sich angezogen|to get dressed
V|umziehen|zog um|ist umgezogen|to move (house)
V|ankommen|kam an|ist angekommen|to arrive
V|abfahren|fuhr ab|ist abgefahren|to depart
V|einladen|lud ein|hat eingeladen|to invite
V|mitbringen|brachte mit|hat mitgebracht|to bring along
V|passieren|passierte|ist passiert|to happen
V|gefallen|gefiel|hat gefallen|to please, to like
V|gehören|gehörte|hat gehört|to belong
V|schmecken|schmeckte|hat geschmeckt|to taste
V|tragen|trug|hat getragen|to carry; to wear
V|liegen|lag|hat gelegen|to lie, to be located
V|stehen|stand|hat gestanden|to stand
V|sitzen|saß|hat gesessen|to sit
V|legen|legte|hat gelegt|to lay, to put (flat)
V|stellen|stellte|hat gestellt|to put (upright)
V|laufen|lief|ist gelaufen|to run, to walk
V|schwimmen|schwamm|ist geschwommen|to swim
V|fliegen|flog|ist geflogen|to fly
V|bestellen|bestellte|hat bestellt|to order
A|freundlich|freundlicher|am freundlichsten|friendly
A|nett|netter|am nettesten|nice, kind
A|höflich|höflicher|am höflichsten|polite
A|lustig|lustiger|am lustigsten|funny
A|langweilig|langweiliger|am langweiligsten|boring
A|interessant|interessanter|am interessantesten|interesting
A|wichtig|wichtiger|am wichtigsten|important
A|einfach|einfacher|am einfachsten|simple, easy
A|schwierig|schwieriger|am schwierigsten|difficult
A|gesund|gesünder|am gesündesten|healthy
A|stark|stärker|am stärksten|strong
A|schwach|schwächer|am schwächsten|weak
A|dick|dicker|am dicksten|thick; fat
A|dünn|dünner|am dünnsten|thin
A|hell|heller|am hellsten|bright, light
A|dunkel|dunkler|am dunkelsten|dark
A|laut|lauter|am lautesten|loud
A|leise|leiser|am leisesten|quiet (sound)
A|ruhig|ruhiger|am ruhigsten|calm, quiet
A|voll|voller|am vollsten|full
A|leer|leerer|am leersten|empty
A|sauber|sauberer|am saubersten|clean
A|schmutzig|schmutziger|am schmutzigsten|dirty
A|bequem|bequemer|am bequemsten|comfortable
A|praktisch|praktischer|am praktischsten|practical
A|modern|moderner|am modernsten|modern
A|günstig|günstiger|am günstigsten|inexpensive; favourable
A|sicher|sicherer|am sichersten|safe; sure
A|gefährlich|gefährlicher|am gefährlichsten|dangerous
A|traurig|trauriger|am traurigsten|sad
A|zufrieden|zufriedener|am zufriedensten|satisfied
A|pünktlich|pünktlicher|am pünktlichsten|punctual
A|fleißig|fleißiger|am fleißigsten|hard-working
N|die|Feuerwehr|Feuerwehren|fire brigade
N|der|Krankenwagen|Krankenwagen|ambulance
N|die|Werkstatt|Werkstätten|(car) repair shop, workshop
N|die|Kita|Kitas|day-care centre, nursery
N|die|Entschuldigung|Entschuldigungen|apology; excuse me
V|sich vorstellen|stellte sich vor|hat sich vorgestellt|to introduce oneself
V|sich bedanken|bedankte sich|hat sich bedankt|to say thank you
N|das|Telefongespräch|Telefongespräche|phone call
N|der|Arbeitsplatz|Arbeitsplätze|workplace; job
N|das|Heimatland|Heimatländer|home country
`,
B1: `
N|die|Gesellschaft|Gesellschaften|society; company
N|die|Politik|—|politics; policy
N|die|Regierung|Regierungen|government
N|das|Gesetz|Gesetze|law
N|die|Wirtschaft|—|economy
N|die|Bildung|—|education
N|das|Studium|Studien|(university) studies
N|die|Prüfung|Prüfungen|exam
N|die|Bewerbung|Bewerbungen|(job) application
N|das|Vorstellungsgespräch|Vorstellungsgespräche|job interview
N|der|Lebenslauf|Lebensläufe|CV, résumé
N|das|Gehalt|Gehälter|salary
N|der|Vertrag|Verträge|contract
N|die|Versicherung|Versicherungen|insurance
N|die|Steuer|Steuern|tax
N|die|Behörde|Behörden|public authority, office
N|das|Formular|Formulare|form
N|die|Ursache|Ursachen|cause
N|die|Folge|Folgen|consequence
N|der|Grund|Gründe|reason; ground
N|der|Vorteil|Vorteile|advantage
N|der|Nachteil|Nachteile|disadvantage
N|die|Möglichkeit|Möglichkeiten|possibility
N|die|Entscheidung|Entscheidungen|decision
N|die|Lösung|Lösungen|solution
N|das|Ziel|Ziele|goal, aim
N|der|Erfolg|Erfolge|success
N|die|Beziehung|Beziehungen|relationship
N|das|Verhältnis|Verhältnisse|relationship; ratio
N|das|Gefühl|Gefühle|feeling
N|die|Angst|Ängste|fear
N|die|Erinnerung|Erinnerungen|memory
N|die|Gewohnheit|Gewohnheiten|habit
N|die|Verantwortung|Verantwortungen|responsibility
N|das|Verhalten|—|behaviour
N|die|Werbung|Werbungen|advertising
N|die|Zeitschrift|Zeitschriften|magazine
N|der|Bericht|Berichte|report
N|die|Veranstaltung|Veranstaltungen|event
N|die|Ausstellung|Ausstellungen|exhibition
N|die|Natur|—|nature
N|das|Klima|Klimas|climate
N|die|Energie|Energien|energy
N|der|Verkehr|—|traffic
N|die|Gegend|Gegenden|area, region
N|die|Unterkunft|Unterkünfte|accommodation
N|die|Ernährung|—|nutrition, diet
N|die|Krankheit|Krankheiten|illness
N|der|Unfall|Unfälle|accident
N|die|Gefahr|Gefahren|danger
V|sich bewerben|bewarb sich|hat sich beworben|to apply (for a job)
V|entscheiden|entschied|hat entschieden|to decide
V|erreichen|erreichte|hat erreicht|to reach, to achieve
V|entwickeln|entwickelte|hat entwickelt|to develop
V|vergleichen|verglich|hat verglichen|to compare
V|verbieten|verbot|hat verboten|to forbid
V|erlauben|erlaubte|hat erlaubt|to allow
V|bitten|bat|hat gebeten|to ask, to request
V|beschreiben|beschrieb|hat beschrieben|to describe
V|erhalten|erhielt|hat erhalten|to receive
V|enthalten|enthielt|hat enthalten|to contain
V|entstehen|entstand|ist entstanden|to arise, to come into being
V|geschehen|geschah|ist geschehen|to happen, to occur
V|gelingen|gelang|ist gelungen|to succeed (es gelingt mir)
V|scheinen|schien|hat geschienen|to seem; to shine
V|raten|riet|hat geraten|to advise; to guess
V|verlassen|verließ|hat verlassen|to leave (a place)
V|sterben|starb|ist gestorben|to die
V|wachsen|wuchs|ist gewachsen|to grow
V|ziehen|zog|hat gezogen|to pull
V|leihen|lieh|hat geliehen|to lend, to borrow
V|streiten|stritt|hat gestritten|to argue
V|sich beschweren|beschwerte sich|hat sich beschwert|to complain
V|sich verhalten|verhielt sich|hat sich verhalten|to behave, to act
V|sich benehmen|benahm sich|hat sich benommen|to behave
V|überzeugen|überzeugte|hat überzeugt|to convince
V|vorschlagen|schlug vor|hat vorgeschlagen|to suggest, to propose
V|sich kümmern (um)|kümmerte sich|hat sich gekümmert|to take care (of)
V|sich gewöhnen (an)|gewöhnte sich|hat sich gewöhnt|to get used (to)
V|teilnehmen (an)|nahm teil|hat teilgenommen|to take part (in)
V|unterstützen|unterstützte|hat unterstützt|to support
V|verbessern|verbesserte|hat verbessert|to improve
V|verzichten (auf)|verzichtete|hat verzichtet|to do without
A|ehrlich|ehrlicher|am ehrlichsten|honest
A|geduldig|geduldiger|am geduldigsten|patient
A|neugierig|neugieriger|am neugierigsten|curious
A|selbstständig|selbstständiger|am selbstständigsten|independent; self-employed
A|zuverlässig|zuverlässiger|am zuverlässigsten|reliable
A|vorsichtig|vorsichtiger|am vorsichtigsten|careful
A|erfolgreich|erfolgreicher|am erfolgreichsten|successful
A|abhängig|abhängiger|am abhängigsten|dependent
A|ähnlich|ähnlicher|am ähnlichsten|similar
A|aktuell|aktueller|am aktuellsten|current, up to date
A|deutlich|deutlicher|am deutlichsten|clear, distinct
A|genau|genauer|am genauesten|exact, precise
A|offen|offener|am offensten|open
A|nervös|nervöser|am nervösesten|nervous
A|wütend|wütender|am wütendsten|angry
A|stolz|stolzer|am stolzesten|proud
A|fremd|fremder|am fremdesten|foreign, unfamiliar
A|regelmäßig|regelmäßiger|am regelmäßigsten|regular
A|umweltfreundlich|umweltfreundlicher|am umweltfreundlichsten|environmentally friendly
A|verantwortlich|—|—|responsible (for)
A|notwendig|—|—|necessary
A|möglich|—|—|possible
A|unmöglich|—|—|impossible
A|öffentlich|—|—|public
A|privat|—|—|private
A|gemeinsam|—|—|common, joint
A|verschieden|—|—|different, various
A|ständig|—|—|constant
A|überrascht|—|—|surprised
A|enttäuscht|—|—|disappointed
N|die|Ausländerbehörde|Ausländerbehörden|immigration office
N|der|Aufenthaltstitel|Aufenthaltstitel|residence permit
V|ablaufen|lief ab|ist abgelaufen|to expire; to take place
N|die|Rückmeldung|Rückmeldungen|feedback, reply
N|der|Ratschlag|Ratschläge|piece of advice
V|vorbereiten|bereitete vor|hat vorbereitet|to prepare
N|die|Vorbereitung|Vorbereitungen|preparation
V|auflegen|legte auf|hat aufgelegt|to hang up (the phone)
V|zusammenfassen|fasste zusammen|hat zusammengefasst|to summarise
A|unhöflich|unhöflicher|am unhöflichsten|rude, impolite
A|entspannt|entspannter|am entspanntesten|relaxed
N|der|Gesprächspartner|Gesprächspartner|person you are talking to
N|die|Lieferung|Lieferungen|delivery
V|zurückschicken|schickte zurück|hat zurückgeschickt|to send back, to return
N|die|Bescheinigung|Bescheinigungen|certificate, written confirmation
N|der|Notfalldienst|Notfalldienste|emergency service
V|erwarten|erwartete|hat erwartet|to expect
N|das|Team|Teams|team
N|der|Partner|Partner|partner (male)
A|teamfähig|—|—|able to work in a team
`,
B2: `
N|die|Voraussetzung|Voraussetzungen|prerequisite, requirement
N|die|Herausforderung|Herausforderungen|challenge
N|die|Entwicklung|Entwicklungen|development
N|der|Zusammenhang|Zusammenhänge|connection, context
N|die|Forschung|Forschungen|research
N|die|Untersuchung|Untersuchungen|investigation, study
N|das|Ergebnis|Ergebnisse|result
N|die|Umfrage|Umfragen|survey
N|der|Anteil|Anteile|share, proportion
N|der|Rückgang|Rückgänge|decline, decrease
N|die|Zunahme|Zunahmen|increase
N|die|Maßnahme|Maßnahmen|measure (action)
N|die|Bedingung|Bedingungen|condition
N|die|Einstellung|Einstellungen|attitude; hiring
N|die|Vorstellung|Vorstellungen|idea, notion; performance
N|der|Eindruck|Eindrücke|impression
N|die|Fähigkeit|Fähigkeiten|ability, skill
N|die|Kenntnis|Kenntnisse|knowledge (often pl.)
N|der|Fortschritt|Fortschritte|progress
N|die|Gleichberechtigung|—|equal rights, equality
N|die|Armut|—|poverty
N|der|Reichtum|Reichtümer|wealth, riches
N|die|Gewalt|Gewalten|violence; power
N|die|Integration|Integrationen|integration
N|die|Herkunft|—|origin, background
N|das|Vorurteil|Vorurteile|prejudice
N|der|Konflikt|Konflikte|conflict
N|die|Auseinandersetzung|Auseinandersetzungen|dispute; engagement with
N|der|Kompromiss|Kompromisse|compromise
N|die|Kritik|Kritiken|criticism; review
N|die|Stellungnahme|Stellungnahmen|statement, position
N|der|Standpunkt|Standpunkte|point of view
N|die|Bedeutung|Bedeutungen|meaning; significance
N|die|Wirkung|Wirkungen|effect
N|die|Nachhaltigkeit|—|sustainability
N|der|Klimawandel|—|climate change
N|die|Digitalisierung|—|digitalisation
N|die|Arbeitslosigkeit|—|unemployment
N|der|Wettbewerb|Wettbewerbe|competition
N|die|Nachfrage|Nachfragen|demand
N|die|Verpflichtung|Verpflichtungen|obligation, commitment
N|der|Zweck|Zwecke|purpose
N|die|Absicht|Absichten|intention
N|das|Bewusstsein|—|awareness, consciousness
N|der|Wohlstand|—|prosperity
N|das|Ereignis|Ereignisse|event, occurrence
N|der|Irrtum|Irrtümer|error, mistake
N|die|Auswahl|—|selection, choice
N|die|Bequemlichkeit|Bequemlichkeiten|convenience
N|das|Benutzerkonto|Benutzerkonten|user account
N|der|Datenschutz|—|data protection
N|pl|Kontodaten|—|bank account details
N|der|Kreditkartenbetrug|—|credit card fraud
N|die|Lieferzeit|Lieferzeiten|delivery time
N|der|Mindestbestellwert|Mindestbestellwerte|minimum order value
N|das|Passwort|Passwörter|password
N|der|Preisvergleich|Preisvergleiche|price comparison
N|der|Rechnungsbetrag|Rechnungsbeträge|invoice amount
N|pl|Versandkosten|—|shipping costs
N|die|Verschlüsselung|Verschlüsselungen|encryption
N|die|Reklamation|Reklamationen|complaint (about goods)
N|die|Durchwahl|Durchwahlen|direct extension number
N|das|Hintergrundgeräusch|Hintergrundgeräusche|background noise
N|das|Arbeitsklima|—|working atmosphere
N|die|Auswirkung|Auswirkungen|effect, impact
N|die|Wertschätzung|—|appreciation, esteem
N|die|Teamfähigkeit|—|ability to work in a team
N|die|Kritikfähigkeit|—|ability to take criticism
N|die|Prüfungsangst|Prüfungsängste|exam anxiety
N|der|Stoff|Stoffe|(course) material; fabric
V|widerrufen|widerrief|hat widerrufen|to revoke, to cancel (a contract)
V|erstatten|erstattete|hat erstattet|to refund, to reimburse
V|sich vergewissern|vergewisserte sich|hat sich vergewissert|to make sure
V|vermeiden|vermied|hat vermieden|to avoid
V|meiden|mied|hat gemieden|to avoid, to shun
V|hinterlassen|hinterließ|hat hinterlassen|to leave (a message)
V|befehlen|befahl|hat befohlen|to order, to command
V|bewirken|bewirkte|hat bewirkt|to bring about
V|gestalten|gestaltete|hat gestaltet|to shape, to design
V|hervorheben|hob hervor|hat hervorgehoben|to emphasise
V|würdigen|würdigte|hat gewürdigt|to acknowledge, to give credit for
V|angeben|gab an|hat angegeben|to state, to give (information)
V|bestehen|bestand|hat bestanden|to pass (an exam); to exist
V|eingrenzen|grenzte ein|hat eingegrenzt|to narrow down
V|verunsichern|verunsicherte|hat verunsichert|to unsettle
V|beschädigen|beschädigte|hat beschädigt|to damage
V|verschicken|verschickte|hat verschickt|to send, to ship
V|überweisen|überwies|hat überwiesen|to transfer (money)
V|umtauschen|tauschte um|hat umgetauscht|to exchange (goods)
V|beseitigen|beseitigte|hat beseitigt|to remove, to eliminate
V|gründen|gründete|hat gegründet|to found
V|berücksichtigen|berücksichtigte|hat berücksichtigt|to take into account
V|beeinflussen|beeinflusste|hat beeinflusst|to influence
V|behaupten|behauptete|hat behauptet|to claim
V|beitragen (zu)|trug bei|hat beigetragen|to contribute (to)
V|betreffen|betraf|hat betroffen|to concern, to affect
V|darstellen|stellte dar|hat dargestellt|to depict, to represent
V|sich durchsetzen|setzte sich durch|hat sich durchgesetzt|to prevail, to assert oneself
V|ermöglichen|ermöglichte|hat ermöglicht|to make possible
V|fördern|förderte|hat gefördert|to promote, to fund
V|verursachen|verursachte|hat verursacht|to cause
V|verhindern|verhinderte|hat verhindert|to prevent
V|zunehmen|nahm zu|hat zugenommen|to increase
V|sich einsetzen (für)|setzte sich ein|hat sich eingesetzt|to stand up (for)
A|anspruchsvoll|anspruchsvoller|am anspruchsvollsten|demanding
A|bedeutend|bedeutender|am bedeutendsten|significant, important
A|bewusst|bewusster|am bewusstesten|conscious, aware
A|eindeutig|eindeutiger|am eindeutigsten|unambiguous, clear
A|gerecht|gerechter|am gerechtesten|fair, just
A|nachhaltig|nachhaltiger|am nachhaltigsten|sustainable
A|selbstbewusst|selbstbewusster|am selbstbewusstesten|self-confident
A|sinnvoll|sinnvoller|am sinnvollsten|meaningful, sensible
A|skeptisch|skeptischer|am skeptischsten|sceptical
A|tolerant|toleranter|am tolerantesten|tolerant
A|überzeugend|überzeugender|am überzeugendsten|convincing
A|unabhängig|unabhängiger|am unabhängigsten|independent
A|vielfältig|vielfältiger|am vielfältigsten|diverse, varied
A|wirksam|wirksamer|am wirksamsten|effective
A|ausführlich|ausführlicher|am ausführlichsten|detailed
A|unverbindlich|—|—|non-binding, without obligation
A|unangemessen|—|—|inappropriate
A|wohlwollend|—|—|benevolent, well-meaning
A|ausreichend|—|—|sufficient
A|berechtigt|—|—|justified; entitled
A|dauerhaft|—|—|lasting, permanent
A|entscheidend|—|—|decisive
A|erheblich|—|—|considerable
A|grundsätzlich|—|—|fundamental; in principle
A|offensichtlich|—|—|obvious
A|umstritten|—|—|controversial
A|vergleichbar|—|—|comparable
A|vorübergehend|—|—|temporary
A|wesentlich|—|—|essential, substantial
A|widersprüchlich|—|—|contradictory
A|zahlreich|—|—|numerous
A|zuständig|—|—|responsible, in charge
N|die|Höflichkeit|—|politeness
N|die|Verabschiedung|Verabschiedungen|saying goodbye; farewell
A|undeutlich|undeutlicher|am undeutlichsten|unclear, indistinct
V|nuscheln|nuschelte|hat genuschelt|to mumble
N|die|Körperhaltung|Körperhaltungen|posture, body language
N|das|Missverständnis|Missverständnisse|misunderstanding
N|das|Fazit|Fazits|conclusion, summary (ein Fazit ziehen)
N|der|Umgang|—|dealing with, handling (der Umgang mit Kollegen)
N|der|Ratgeber|Ratgeber|guide, adviser
N|der|Interneteinkauf|Interneteinkäufe|online purchase
N|die|Rücksendung|Rücksendungen|return (of goods)
N|der|Befragte|Befragten|respondent in a survey (female: die Befragte)
N|die|Sprachhandlung|Sprachhandlungen|speech act, communicative task
V|lösen|löste|hat gelöst|to solve; to resolve (a conflict)
N|das|Betriebsklima|—|working atmosphere
V|sich einleben|lebte sich ein|hat sich eingelebt|to settle in
V|sich verstehen (mit)|verstand sich|hat sich verstanden|to get along (with)
A|gleichberechtigt|—|—|equal, having equal rights
A|wertschätzend|—|—|appreciative, respectful
A|belehrend|—|—|lecturing, condescending
`,
C1: `
N|die|Annahme|Annahmen|assumption
N|der|Ansatz|Ansätze|approach
N|die|Auffassung|Auffassungen|view, opinion
N|der|Befund|Befunde|finding
N|die|Belastung|Belastungen|burden, strain
N|der|Beitrag|Beiträge|contribution
N|die|Erkenntnis|Erkenntnisse|insight, finding
N|die|Abwägung|Abwägungen|weighing up
N|die|Begründung|Begründungen|justification
N|die|Gegebenheit|Gegebenheiten|circumstance
N|das|Gefälle|Gefälle|gap, disparity
N|die|Hypothese|Hypothesen|hypothesis
N|die|Kluft|Klüfte|gap, divide
N|die|Tragweite|—|scope, implications
N|die|Wechselwirkung|Wechselwirkungen|interaction
N|der|Widerspruch|Widersprüche|contradiction; objection
N|die|Zielsetzung|Zielsetzungen|objective
N|die|Rahmenbedingung|Rahmenbedingungen|framework condition
N|der|Stellenwert|Stellenwerte|importance, status
N|das|Spannungsfeld|Spannungsfelder|area of tension
N|die|Verteilung|Verteilungen|distribution
N|das|Ausmaß|Ausmaße|extent
N|die|Gewichtung|Gewichtungen|weighting
N|der|Einfluss|Einflüsse|influence
N|die|Voreingenommenheit|—|bias
N|die|Bilanz|Bilanzen|balance; overall result
N|der|Engpass|Engpässe|bottleneck, shortage
N|die|Ungleichheit|Ungleichheiten|inequality
N|die|Wahrnehmung|Wahrnehmungen|perception
N|die|Vorgehensweise|Vorgehensweisen|procedure, approach
V|abwägen|wog ab|hat abgewogen|to weigh up
V|ableiten|leitete ab|hat abgeleitet|to derive
V|ansprechen|sprach an|hat angesprochen|to address (a topic)
V|aufweisen|wies auf|hat aufgewiesen|to show, to exhibit
V|ausüben|übte aus|hat ausgeübt|to exert; to practise
V|begünstigen|begünstigte|hat begünstigt|to favour, to encourage
V|beheben|behob|hat behoben|to fix, to remedy
V|belegen|belegte|hat belegt|to prove, to substantiate
V|beruhen (auf)|beruhte|hat beruht|to be based (on)
V|bewältigen|bewältigte|hat bewältigt|to cope with, to master
V|einräumen|räumte ein|hat eingeräumt|to concede
V|entgegenwirken|wirkte entgegen|hat entgegengewirkt|to counteract
V|erörtern|erörterte|hat erörtert|to discuss in detail
V|gewährleisten|gewährleistete|hat gewährleistet|to guarantee, to ensure
V|heranziehen|zog heran|hat herangezogen|to draw on, to consult
V|hinweisen (auf)|wies hin|hat hingewiesen|to point out
V|nachweisen|wies nach|hat nachgewiesen|to prove, to demonstrate
V|umsetzen|setzte um|hat umgesetzt|to implement
V|unterliegen|unterlag|hat unterlegen|to be subject to
V|veranschaulichen|veranschaulichte|hat veranschaulicht|to illustrate
V|vernachlässigen|vernachlässigte|hat vernachlässigt|to neglect
V|voraussetzen|setzte voraus|hat vorausgesetzt|to presuppose
V|zurückführen (auf)|führte zurück|hat zurückgeführt|to attribute (to)
V|anstreben|strebte an|hat angestrebt|to aim for
V|einschränken|schränkte ein|hat eingeschränkt|to restrict, to limit
A|angemessen|angemessener|am angemessensten|appropriate
A|differenziert|differenzierter|am differenziertesten|nuanced
A|fundiert|fundierter|am fundiertesten|well-founded
A|gravierend|gravierender|am gravierendsten|serious, grave
A|nachvollziehbar|nachvollziehbarer|am nachvollziehbarsten|understandable, traceable
A|plausibel|plausibler|am plausibelsten|plausible
A|schlüssig|schlüssiger|am schlüssigsten|coherent, conclusive
A|sachlich|sachlicher|am sachlichsten|objective, factual
A|stichhaltig|stichhaltiger|am stichhaltigsten|sound, valid (argument)
A|umfassend|umfassender|am umfassendsten|comprehensive
A|weitreichend|weitreichender|am weitreichendsten|far-reaching
A|zweckmäßig|zweckmäßiger|am zweckmäßigsten|expedient, suitable
A|kontrovers|kontroverser|am kontroversesten|controversial
A|ausschlaggebend|—|—|decisive
A|beträchtlich|—|—|considerable
A|empirisch|—|—|empirical
A|hinreichend|—|—|sufficient
A|maßgeblich|—|—|significant, decisive
A|repräsentativ|—|—|representative
A|tendenziell|—|—|tending to, by tendency
A|unerlässlich|—|—|indispensable
A|vorrangig|—|—|primary, priority
A|zwangsläufig|—|—|inevitable
A|ambivalent|—|—|ambivalent
A|nachträglich|—|—|subsequent, after the fact
`,
C2: `
N|der|Anachronismus|Anachronismen|anachronism
N|die|Ambiguität|Ambiguitäten|ambiguity
N|der|Duktus|—|style, tone (of writing)
N|die|Eloquenz|—|eloquence
N|die|Feinheit|Feinheiten|subtlety, nuance
N|der|Habitus|—|demeanour, habitus
N|die|Gratwanderung|Gratwanderungen|fine line, balancing act
N|das|Gebaren|—|conduct, behaviour
N|die|Prämisse|Prämissen|premise
N|die|Quintessenz|Quintessenzen|quintessence, gist
N|die|Redewendung|Redewendungen|idiom, saying
N|das|Sammelsurium|Sammelsurien|hotchpotch
N|der|Scharfsinn|—|astuteness
N|die|Schattenseite|Schattenseiten|downside, dark side
N|der|Spagat|Spagate|balancing act; the splits
N|die|Stilblüte|Stilblüten|howler (unintentionally funny phrase)
N|der|Usus|—|custom, common practice
N|die|Verklärung|Verklärungen|glorification
N|das|Wagnis|Wagnisse|venture, risk
N|die|Zwickmühle|Zwickmühlen|dilemma, catch-22
N|das|Fingerspitzengefühl|—|instinct, tact
N|der|Zeitgeist|—|spirit of the age
N|die|Weltanschauung|Weltanschauungen|worldview, ideology
N|die|Gemütlichkeit|—|cosiness, comfort
N|die|Schadenfreude|—|pleasure at others' misfortune
N|der|Leitfaden|Leitfäden|guideline, manual
N|das|Kopfzerbrechen|—|racking one's brains
N|die|Lappalie|Lappalien|trifle
N|der|Seitenhieb|Seitenhiebe|sideswipe, dig
N|die|Gepflogenheit|Gepflogenheiten|custom, convention
V|anprangern|prangerte an|hat angeprangert|to denounce
V|beschönigen|beschönigte|hat beschönigt|to gloss over
V|erschließen|erschloss|hat erschlossen|to open up; to deduce
V|fußen (auf)|fußte|hat gefußt|to be based (on)
V|hinterfragen|hinterfragte|hat hinterfragt|to question critically
V|innewohnen|wohnte inne|hat innegewohnt|to be inherent in
V|konstatieren|konstatierte|hat konstatiert|to state, to note
V|relativieren|relativierte|hat relativiert|to put into perspective
V|sich anmaßen|maßte sich an|hat sich angemaßt|to presume, to claim wrongly
V|sich erübrigen|erübrigte sich|hat sich erübrigt|to be unnecessary
V|untermauern|untermauerte|hat untermauert|to underpin, to back up
V|verfechten|verfocht|hat verfochten|to champion, to advocate
V|verkennen|verkannte|hat verkannt|to misjudge, to fail to see
V|verschleiern|verschleierte|hat verschleiert|to conceal, to obscure
V|vorwegnehmen|nahm vorweg|hat vorweggenommen|to anticipate
V|sich zuspitzen|spitzte sich zu|hat sich zugespitzt|to come to a head
V|zutage treten|trat zutage|ist zutage getreten|to come to light
V|obliegen|oblag|hat oblegen|to be incumbent on
V|gedeihen|gedieh|ist gediehen|to thrive
V|ersinnen|ersann|hat ersonnen|to devise, to think up
V|schwinden|schwand|ist geschwunden|to dwindle, to fade
V|bergen|barg|hat geborgen|to hold, to contain; to rescue
V|preisen|pries|hat gepriesen|to praise
V|sich verbitten|verbat sich|hat sich verbeten|to refuse to tolerate
V|erwägen|erwog|hat erwogen|to consider, to contemplate
A|ambitioniert|ambitionierter|am ambitioniertesten|ambitious
A|brisant|brisanter|am brisantesten|explosive, highly topical
A|eigenwillig|eigenwilliger|am eigenwilligsten|idiosyncratic, wilful
A|erlesen|erlesener|am erlesensten|exquisite
A|fadenscheinig|fadenscheiniger|am fadenscheinigsten|flimsy (excuse)
A|lapidar|lapidarer|am lapidarsten|terse, succinct
A|prägnant|prägnanter|am prägnantesten|concise, pithy
A|redlich|redlicher|am redlichsten|honest, sincere
A|salopp|salopper|am saloppsten|casual, slangy
A|subtil|subtiler|am subtilsten|subtle
A|tiefgründig|tiefgründiger|am tiefgründigsten|profound
A|vehement|vehementer|am vehementesten|vehement
A|wortkarg|wortkarger|am wortkargsten|taciturn
A|zwiespältig|zwiespältiger|am zwiespältigsten|ambivalent, mixed
A|behäbig|behäbiger|am behäbigsten|sluggish, ponderous
A|altbacken|altbackener|am altbackensten|old-fashioned, stale
A|geflissentlich|—|—|deliberate(ly)
A|hanebüchen|—|—|outrageous, absurd
A|mannigfaltig|—|—|manifold, diverse
A|nonchalant|—|—|nonchalant
A|obsolet|—|—|obsolete
A|unumgänglich|—|—|unavoidable
A|verpönt|—|—|frowned upon
A|schnörkellos|—|—|plain, unadorned
A|beflissen|—|—|zealous, eager
`
};
