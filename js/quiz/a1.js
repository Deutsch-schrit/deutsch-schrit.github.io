/*
  Quiz data. One question per line:
  prompt ## answer || alternative answer ## option | option | option   (options only for multiple choice)
  A first line starting with @ is the instruction shown above the questions.
*/
window.QUIZ = window.QUIZ || {};

QUIZ['a1-praesens'] = `
@ Write the verb in the correct present-tense form.
Du ___ Deutsch. (lernen) ## lernst
Er ___ nach Hause. (fahren) ## fährt
Ihr ___ sehr nett. (sein) ## seid
Was ___ sie (she)? (lesen) ## liest
Wir ___ keine Zeit. (haben) ## haben
Sie (she) ___ bei Siemens. (arbeiten) ## arbeitet
___ du Englisch? (sprechen) ## Sprichst
Ich ___ müde. (sein) ## bin
Wie ___ du? (heißen) ## heißt
Er ___ gern Pizza. (essen) ## isst
`;

QUIZ['a1-artikel'] = `
@ Choose the correct article.
___ Wohnung ## die ## der | die | das
___ Montag ## der ## der | die | das
___ Brötchen ## das ## der | die | das
___ Lehrer ## der ## der | die | das
___ Freiheit ## die ## der | die | das
___ Kinderzimmer ## das ## der | die | das
___ Zeitung ## die ## der | die | das
___ Mädchen ## das ## der | die | das
___ Winter ## der ## der | die | das
___ Museum ## das ## der | die | das
`;

QUIZ['a1-plural'] = `
@ Write the plural form of the noun (without the article).
die Tasche → die ___ ## Taschen
das Haus → die ___ ## Häuser
der Apfel → die ___ ## Äpfel
das Foto → die ___ ## Fotos
die Freundin → die ___ ## Freundinnen
das Kind → die ___ ## Kinder
der Tag → die ___ ## Tage
die Frau → die ___ ## Frauen
der Lehrer → die ___ ## Lehrer
das Buch → die ___ ## Bücher
`;

QUIZ['a1-akkusativ'] = `
@ Fill in the correct form in the accusative.
Ich suche ___ Bahnhof. (der) ## den
Wir kaufen ___ Tisch. (ein) ## einen
Sie trinkt ___ Tee. (ein) ## einen
Hast du ___ Buch? (das) ## das
Er besucht ___ Großmutter. (die) ## die
Ich habe ___ Bruder. (ein) ## einen
Es gibt ___ Kaffee mehr. (kein) ## keinen
Kennst du den Lehrer? Ja, ich kenne ___. (er) ## ihn
Siehst du mich? Ja, ich sehe ___. (du) ## dich
Wir brauchen ___ Stühle. (die, plural) ## die
`;

QUIZ['a1-negation'] = `
@ Fill in nicht or the correct form of kein.
Ich habe ___ Auto. ## kein
Wir haben ___ Zeit. ## keine
Sie ist ___ müde. ## nicht
Das ist ___ Problem. ## kein
Ich komme heute ___. ## nicht
Er hat ___ Bruder. ## keinen
Das ist ___ mein Handy. ## nicht
Wir trinken ___ Kaffee. ## keinen
Ich kenne den Film ___. ## nicht
Kommst du nicht? ___, ich komme! ## Doch ## Ja | Doch | Nein
`;

QUIZ['a1-satzbau'] = `
@ Write the sentence or choose the question word. Punctuation does not matter.
Start with "Heute": Ich lerne heute Deutsch. ## Heute lerne ich Deutsch
Start with "Am Abend": Wir essen am Abend Pizza. ## Am Abend essen wir Pizza
Start with "Seit 2020": Er wohnt seit 2020 in Leipzig. ## Seit 2020 wohnt er in Leipzig
Make a W-question: du / wohnen / wo ## Wo wohnst du
Make a yes/no question: Sie / sprechen / Deutsch ## Sprechen Sie Deutsch
___ kommst du? Aus Italien. ## Woher ## Wo | Woher | Wohin
___ fährt der Bus? Nach Berlin. ## Wohin ## Wo | Woher | Wohin
___ beginnt der Kurs? Um 9 Uhr. ## Wann ## Wann | Wie | Wo
___ heißt du? Anna. ## Wie ## Was | Wie | Wer
___ Kinder haben Sie? Zwei. ## Wie viele ## Wie viel | Wie viele | Wann
`;

QUIZ['a1-modalverben'] = `
@ Fill in the modal verb, or write the full sentence.
Er ___ sehr gut kochen. (können) ## kann
Du ___ mehr lernen. (müssen) ## musst
___ ich das Fenster öffnen? (dürfen) ## Darf
Wir ___ nach Spanien fahren. (wollen) ## wollen
Ich ___ ein Glas Wasser. (möchten) ## möchte
Ihr ___ leise sein. (sollen) ## sollt
___ du mir helfen? (können) ## Kannst
Hier ___ man nicht rauchen. (dürfen) ## darf
Write the sentence: ich / heute / arbeiten / müssen ## Ich muss heute arbeiten
"You don't have to come": Du ___ nicht kommen. ## musst ## musst | darfst | sollst
`;

QUIZ['a1-trennbar'] = `
@ Write the full sentence, or answer the question.
ich / fernsehen / am Abend ## Ich sehe am Abend fern
er / einkaufen / im Supermarkt ## Er kauft im Supermarkt ein
der Zug / ankommen / um 10 Uhr ## Der Zug kommt um 10 Uhr an
Question: du / mitkommen ## Kommst du mit
wir / müssen / heute / aufräumen ## Wir müssen heute aufräumen
ich / aufstehen / um 7 Uhr ## Ich stehe um 7 Uhr auf
sie / anrufen / ihre Mutter ## Sie ruft ihre Mutter an
Is "verstehen" a separable verb? ## no ## yes | no
Is "einkaufen" a separable verb? ## yes ## yes | no
Is "bezahlen" a separable verb? ## no ## yes | no
`;

QUIZ['a1-possessiv'] = `
@ Fill in the possessive article with the correct ending.
Das ist ___ Wohnung. (ich) ## meine
Hast du ___ Schlüssel? (du; der Schlüssel) ## deinen
Peter sucht ___ Handy. (er) ## sein
Lisa ruft ___ Vater an. (sie, she) ## ihren
Wir lieben ___ Kinder. (wir) ## unsere
Ist das ___ Koffer? (Sie, polite) ## Ihr
Wo ist ___ Auto? (ihr, you plural) ## euer
Das sind ___ Eltern. (ich) ## meine
Maria besucht ___ Mutter. (Maria's own mother) ## ihre ## seine | ihre | ihr
Tom und ___ Schwester (Tom's sister) ## seine ## seine | ihre | sein
`;

QUIZ['a1-imperativ'] = `
@ Write the imperative. You may add bitte.
du / langsam sprechen ## Sprich langsam
Sie / hier unterschreiben ## Unterschreiben Sie hier
ihr / die Hausaufgaben machen ## Macht die Hausaufgaben
du / das Buch lesen ## Lies das Buch
du / nicht so spät kommen ## Komm nicht so spät || Komme nicht so spät
du / langsam fahren ## Fahr langsam || Fahre langsam
ihr / leise sein ## Seid leise
Sie / Platz nehmen ## Nehmen Sie Platz
du / aufstehen ## Steh auf || Stehe auf
du / mich anrufen ## Ruf mich an || Rufe mich an
`;
