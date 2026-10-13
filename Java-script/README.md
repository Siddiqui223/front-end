# JavaScript Course Notes & Practice Code

Each topic from the course is its own file with runnable, heavily-commented
example code. Files are numbered in the order the topics are usually taught.

## 📁 01-basics
Core JavaScript fundamentals (no HTML needed — run these with Node.js).

| File | Topic |
|---|---|
| `01-introduction-to-javascript.js` | What JS is, `console.log`, comments |
| `02-data-types.js` | string, number, boolean, undefined, null, object, array |
| `03-variables.js` | `let` / `const` / `var`, variables exercise |
| `04-naming-conventions.js` | Naming rules and conventions (camelCase, etc.) |
| `05-string-concatenation.js` | `+` operator and template literals |
| `06-string-length-and-characters.js` | `.length`, indexing, `indexOf()` |
| `07-slicing-strings.js` | `.slice()`, extracting substrings |
| `08-challenge-changing-casing.js` | Challenge + solution: upper/lowercasing names |
| `09-arithmetic-and-modulo.js` | `+ - * /` and the `%` modulo operator |
| `10-increment-and-decrement.js` | `++`, `--`, `+=`, prefix vs postfix |
| `11-functions-part1-creating-and-calling.js` | Defining/calling functions, Karel challenge |
| `12-functions-part2-parameters.js` | Parameters/arguments, Life in Weeks challenge |
| `13-functions-part3-return-values.js` | `return`, BMI calculator challenge |

Run any of these with:
```bash
node 01-basics/01-introduction-to-javascript.js
```

## 📁 02-conditionals-and-random
| File | Topic |
|---|---|
| `01-random-numbers-love-calculator.js` | `Math.random()`, Love Calculator project |
| `02-control-statements-if-else.js` | `if/else`, comparison & logical operators |

## 📁 03-dom
These require a browser (they use `document`), so each JS file has a
matching `.html` file to open and test in your browser.

| File | Topic |
|---|---|
| `01-adding-javascript-to-websites.html/.js` | Inline vs internal vs external JS |
| `02-dom-introduction-and-challenge.html/.js` | Intro to the DOM + click challenge solution |
| `03-selecting-html-elements.html/.js` | `getElementById`, `querySelector`, etc. |
| `04-manipulating-styles.html/.js` | Changing `.style`, `classList` |
| `05-separation-of-concerns.js` | Best-practice structure (HTML/CSS/JS split) |
| `06-text-manipulation.html/.js` | `textContent` vs `innerText` vs `innerHTML` |
| `07-manipulating-attributes.html/.js` | `getAttribute`, `setAttribute`, `src`, `href` |

To try these, just open the `.html` file in your browser and open the
DevTools console (F12) to see the `console.log()` output.
