/*
  Adverbs, A1 to C2. One per line:
  D|adverb|type|German example sentence|English
  Types: time, place, manner, frequency, degree, reason, comment, connector.
  This file adds its lines to VOCAB_RAW, so it must load after vocab.js and before app.js.
*/
(function () {
  var ADV = {
A1: `
D|heute|time|Heute habe ich keine Zeit.|today
D|morgen|time|Morgen fahre ich nach Berlin.|tomorrow
D|gestern|time|Gestern war ich im Kino.|yesterday
D|jetzt|time|Ich muss jetzt gehen.|now
D|bald|time|Wir sehen uns bald.|soon
D|später|time|Ich rufe dich später an.|later
D|dann|time|Erst essen wir, dann gehen wir spazieren.|then
D|immer|frequency|Er kommt immer zu spät.|always
D|oft|frequency|Ich trinke oft Tee.|often
D|manchmal|frequency|Manchmal koche ich selbst.|sometimes
D|nie|frequency|Sie raucht nie.|never
D|hier|place|Ich wohne hier.|here
D|dort|place|Dort ist der Bahnhof.|there
D|links|place|Das Café ist links.|(on the) left
D|rechts|place|Gehen Sie hier rechts.|(on the) right
D|geradeaus|place|Gehen Sie immer geradeaus.|straight ahead
D|oben|place|Das Bad ist oben.|upstairs, at the top
D|unten|place|Die Küche ist unten.|downstairs, at the bottom
D|sehr|degree|Das Essen ist sehr gut.|very
D|auch|degree|Ich komme auch.|also, too
D|nur|degree|Ich habe nur fünf Euro.|only
D|zusammen|manner|Wir lernen zusammen.|together
D|allein|manner|Sie wohnt allein.|alone
D|vielleicht|comment|Vielleicht komme ich morgen.|maybe
D|wieder|frequency|Komm bald wieder!|again
D|noch|time|Ich bin noch müde.|still
D|schon|time|Bist du schon fertig?|already
`,
A2: `
D|früher|time|Früher wohnte ich in Lagos.|in the past, earlier
D|danach|time|Wir essen und danach gehen wir ins Kino.|afterwards
D|vorher|time|Ruf mich vorher an.|beforehand
D|sofort|time|Ich komme sofort.|immediately
D|gerade|time|Ich koche gerade.|right now, just
D|endlich|time|Endlich ist Wochenende!|finally, at last
D|zuerst|time|Zuerst mache ich die Hausaufgaben.|first
D|zum Schluss|time|Zum Schluss sagen wir Danke.|at the end, finally
D|selten|frequency|Ich gehe selten ins Theater.|rarely
D|meistens|frequency|Meistens fahre ich mit dem Rad.|usually, mostly
D|täglich|frequency|Ich lerne täglich Deutsch.|daily
D|draußen|place|Die Kinder spielen draußen.|outside
D|drinnen|place|Bei Regen bleiben wir drinnen.|inside
D|überall|place|Ich habe überall gesucht.|everywhere
D|irgendwo|place|Mein Schlüssel ist irgendwo hier.|somewhere
D|nirgends|place|Ich finde ihn nirgends.|nowhere
D|zu Hause|place|Am Abend bin ich zu Hause.|at home
D|nach Hause|place|Ich gehe jetzt nach Hause.|home (direction)
D|ziemlich|degree|Der Test war ziemlich schwer.|quite, rather
D|zu|degree|Die Hose ist zu groß.|too
D|fast|degree|Ich bin fast fertig.|almost
D|genug|degree|Hast du genug Geld?|enough
D|besonders|degree|Das Kleid ist besonders schön.|especially
D|leider|comment|Leider habe ich keine Zeit.|unfortunately
D|natürlich|comment|Natürlich helfe ich dir.|of course
D|wirklich|degree|Das ist wirklich toll.|really
D|deshalb|reason|Ich war krank, deshalb bin ich zu Hause geblieben.|therefore, that's why
D|trotzdem|connector|Es regnet, trotzdem gehen wir spazieren.|nevertheless, anyway
D|außerdem|connector|Die Wohnung ist hell, außerdem ist sie billig.|besides, in addition
`,
B1: `
D|inzwischen|time|Inzwischen spreche ich gut Deutsch.|meanwhile, by now
D|damals|time|Damals gab es noch keine Handys.|back then
D|neulich|time|Neulich habe ich Anna getroffen.|recently, the other day
D|bisher|time|Bisher hat alles gut geklappt.|so far, until now
D|seitdem|time|Ich bin 2023 umgezogen. Seitdem wohne ich in Halle.|since then
D|rechtzeitig|time|Bitte melden Sie sich rechtzeitig an.|in time, on time
D|vorhin|time|Vorhin hat jemand angerufen.|a little while ago
D|demnächst|time|Demnächst eröffnet hier ein neues Café.|shortly, in the near future
D|gelegentlich|frequency|Gelegentlich arbeite ich von zu Hause.|occasionally
D|wahrscheinlich|comment|Wahrscheinlich regnet es morgen.|probably
D|möglicherweise|comment|Möglicherweise verschiebt sich der Termin.|possibly
D|hoffentlich|comment|Hoffentlich bestehe ich die Prüfung.|hopefully
D|eigentlich|comment|Eigentlich wollte ich früher kommen.|actually, really
D|tatsächlich|comment|Das hat tatsächlich funktioniert.|indeed, actually
D|zum Glück|comment|Zum Glück war niemand verletzt.|luckily
D|übrigens|comment|Übrigens, hast du morgen Zeit?|by the way
D|ungefähr|degree|Die Fahrt dauert ungefähr zwei Stunden.|about, approximately
D|kaum|degree|Ich habe kaum geschlafen.|hardly, barely
D|völlig|degree|Ich bin völlig erschöpft.|completely
D|ebenfalls|degree|Ich wünsche Ihnen ebenfalls ein schönes Wochenende.|likewise, also
D|sogar|degree|Er spricht sogar Japanisch.|even
D|vorne|place|Bitte setzen Sie sich nach vorne.|at the front
D|hinten|place|Der Ausgang ist hinten.|at the back
D|daher|reason|Der Zug hatte Verspätung, daher kam ich zu spät.|therefore, hence
D|sonst|connector|Beeil dich, sonst verpasst du den Bus.|otherwise
D|stattdessen|connector|Es regnete. Stattdessen gingen wir ins Museum.|instead
D|zumindest|degree|Zumindest hast du es versucht.|at least
`,
B2: `
D|allerdings|connector|Die Wohnung ist schön, allerdings ist sie teuer.|however, though
D|dennoch|connector|Die Aufgabe war schwer, dennoch hat sie sie gelöst.|nevertheless
D|folglich|connector|Er hat nicht gelernt, folglich hat er die Prüfung nicht bestanden.|consequently
D|somit|connector|Alle Unterlagen liegen vor, somit können wir beginnen.|thus, therefore
D|hingegen|connector|Er mag Kaffee, sie hingegen trinkt lieber Tee.|on the other hand, whereas
D|zudem|connector|Das Hotel ist zentral und zudem günstig.|moreover
D|schließlich|connector|Wir sollten gehen, schließlich ist es schon spät.|after all; finally
D|zunächst|time|Zunächst möchte ich mich vorstellen.|first, at first
D|anschließend|time|Wir essen und gehen anschließend spazieren.|afterwards, subsequently
D|mittlerweile|time|Mittlerweile habe ich mich an das Wetter gewöhnt.|meanwhile, by now
D|stets|frequency|Er war stets freundlich.|always (formal)
D|keineswegs|degree|Das ist keineswegs selbstverständlich.|by no means
D|weitgehend|degree|Das Problem ist weitgehend gelöst.|largely
D|größtenteils|degree|Die Studierenden kommen größtenteils aus Europa.|for the most part
D|überwiegend|degree|Das Wetter war überwiegend sonnig.|predominantly
D|äußerst|degree|Die Lage ist äußerst ernst.|extremely
D|durchaus|degree|Das ist durchaus möglich.|quite, definitely
D|einigermaßen|degree|Ich habe die Prüfung einigermaßen gut bestanden.|reasonably, fairly
D|angeblich|comment|Angeblich soll es morgen schneien.|supposedly, allegedly
D|vermutlich|comment|Vermutlich kommt sie später.|presumably
D|bestimmt|comment|Das klappt bestimmt.|certainly, definitely
D|gewissermaßen|comment|Das ist gewissermaßen ein Neuanfang.|so to speak, in a way
D|ausnahmsweise|manner|Heute darfst du ausnahmsweise länger aufbleiben.|as an exception
D|absichtlich|manner|Das hat er bestimmt nicht absichtlich gemacht.|on purpose
D|freiwillig|manner|Sie arbeitet freiwillig im Tierheim.|voluntarily
D|ehrenamtlich|manner|Er engagiert sich ehrenamtlich.|on a voluntary basis
D|unterwegs|place|Ich bin gerade unterwegs.|on the way, out and about
D|nebenbei|manner|Sie arbeitet nebenbei als Kellnerin.|on the side, at the same time
`,
C1: `
D|demzufolge|connector|Die Kosten sind gestiegen; demzufolge erhöhen sich die Preise.|consequently, accordingly
D|infolgedessen|connector|Es gab einen Streik, infolgedessen fielen viele Züge aus.|as a result
D|demnach|connector|Demnach ist die Studie nicht repräsentativ.|according to this, therefore
D|nichtsdestotrotz|connector|Die Kritik war hart, nichtsdestotrotz machte sie weiter.|nonetheless
D|ferner|connector|Ferner ist zu berücksichtigen, dass …|furthermore
D|darüber hinaus|connector|Darüber hinaus bietet die Firma Weiterbildungen an.|in addition, moreover
D|wiederum|connector|Die einen sind dafür, die anderen wiederum dagegen.|in turn, on the other hand
D|insofern|connector|Insofern hast du recht.|to that extent, in that respect
D|gleichwohl|connector|Er war müde, gleichwohl arbeitete er weiter.|nevertheless (formal)
D|letztlich|comment|Letztlich entscheidet der Kunde.|ultimately
D|zweifellos|comment|Das ist zweifellos die beste Lösung.|undoubtedly
D|erwartungsgemäß|comment|Erwartungsgemäß stiegen die Zahlen.|as expected
D|bekanntlich|comment|Bekanntlich ist Übung der beste Lehrer.|as is well known
D|schlichtweg|degree|Das ist schlichtweg falsch.|simply, plainly
D|annähernd|degree|Annähernd die Hälfte der Befragten stimmte zu.|nearly, approximately
D|ausschließlich|degree|Der Raum ist ausschließlich für Mitarbeiter.|exclusively
D|vorwiegend|degree|Die Teilnehmer waren vorwiegend Studierende.|mainly, predominantly
D|zusehends|manner|Ihr Deutsch verbessert sich zusehends.|visibly, noticeably
D|schrittweise|manner|Die Regeln werden schrittweise eingeführt.|step by step, gradually
D|vorsorglich|manner|Ich habe vorsorglich einen Schirm mitgenommen.|as a precaution
D|vorab|time|Vorab vielen Dank für Ihre Antwort.|in advance
D|fortan|time|Fortan arbeitete sie selbstständig.|from then on
`,
C2: `
D|mithin|connector|Die Bedingungen sind erfüllt, mithin ist der Antrag gültig.|consequently, thus (formal)
D|indes|connector|Der Plan war gut, die Umsetzung indes mangelhaft.|however, meanwhile (formal)
D|gleichsam|comment|Das Treffen war gleichsam ein Neubeginn.|as it were, so to speak
D|mitnichten|degree|Das ist mitnichten bewiesen.|by no means
D|schlechterdings|degree|Das ist schlechterdings unmöglich.|utterly, absolutely
D|tunlichst|manner|Diese Fehler sollte man tunlichst vermeiden.|by all means, as far as possible
D|unverzüglich|time|Bitte melden Sie den Schaden unverzüglich.|without delay
D|alsbald|time|Die Antwort kam alsbald.|shortly, soon (literary)
D|seinerzeit|time|Seinerzeit war das eine Sensation.|at that time
D|hinlänglich|degree|Das Problem ist hinlänglich bekannt.|sufficiently, well enough
D|beiläufig|manner|Sie erwähnte es nur beiläufig.|casually, in passing
D|unumwunden|manner|Er gab den Fehler unumwunden zu.|frankly, openly
D|kurzerhand|manner|Wir entschieden uns kurzerhand für Rom.|without further ado
D|notgedrungen|manner|Notgedrungen nahmen wir ein Taxi.|of necessity, reluctantly
D|nolens volens|manner|Nolens volens stimmte er zu.|willy-nilly, like it or not
D|gemeinhin|frequency|Das gilt gemeinhin als unhöflich.|commonly, generally
D|bisweilen|frequency|Bisweilen ist er etwas zerstreut.|at times, occasionally
D|allenfalls|degree|Das dauert allenfalls eine Stunde.|at most; if anything
D|zuweilen|frequency|Zuweilen regnet es hier wochenlang.|at times
D|schlechthin|degree|Er ist der Romantiker schlechthin.|par excellence, the epitome
D|wohlweislich|manner|Sie hat wohlweislich geschwiegen.|wisely, prudently
D|ohnehin|comment|Ich wollte ohnehin gehen.|anyway, in any case
`
  };
  window.VOCAB_RAW = window.VOCAB_RAW || {};
  Object.keys(ADV).forEach(function (lvl) {
    window.VOCAB_RAW[lvl] = (window.VOCAB_RAW[lvl] || '') + '\n' + ADV[lvl].trim() + '\n';
  });
})();
