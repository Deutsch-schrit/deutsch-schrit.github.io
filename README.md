# Deutsch Schritt für Schritt

German grammar explained in English from A1 to C2, with vocabulary lists and flashcards.

Live site: https://deutsch-schrit.github.io/

## What is inside

- **Grammar**: 72 topics across six levels. Each has an explanation, tables, example sentences with translations, typical mistakes and a 10-question quiz that marks your answers.
- **Wortschatz**: about 650 words. Nouns with article and plural, verbs with Präteritum and Perfekt, adjectives with Komparativ and Superlativ. Search and filter by level and word type.
- **Exam simulation**: 12 original model tests in the structure of the Goethe-Zertifikat and telc Deutsch exams (A1 to C2), with timers, listening texts read aloud by the browser, automatic marking, writing checks with a rubric and speaking practice with recording. Data in `js/exams/`, engine in `js/exam.js`.
- **Karteikarten**: flashcards with a five-box spaced-repetition system. Progress is stored in the browser (localStorage).

## Adding content

The site is plain HTML, CSS and JavaScript with no build step.

- Grammar topics live in `js/grammar/a1.js` to `c2.js`. Each topic is one object in `GRAMMAR.push(...)`. Helper functions in `js/helpers.js` (`EX`, `TBL`, `NOTE`, `MISTAKE`, `PRACTICE`) keep the content short.
- Vocabulary lives in `js/vocab.js`, one word per line:
  - `N|der|Mann|Männer|man; husband`
  - `V|gehen|ging|ist gegangen|to go`
  - `A|gut|besser|am besten|good`
  - Adverbs live in `js/vocab-adverbs.js`: `D|heute|time|Heute habe ich keine Zeit.|today`

Commit and push, and GitHub Pages updates the site within a minute or two.

## Quizzes

Each grammar topic has a quiz in `js/quiz/a1.js` to `c2.js`, one question per line:

    prompt ## answer || alternative answer ## option | option | option

Leave out the options for a typed answer. A first line starting with `@` is the instruction shown above the questions.

## Updating the site

Every file link in `index.html` carries a version number (`?v=…`). Change it whenever you edit a CSS or JS file, so browsers load the new version instead of a cached copy.
