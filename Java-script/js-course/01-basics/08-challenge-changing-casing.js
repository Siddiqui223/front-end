/* ============================================================
   TOPIC: Challenge - Changing Casing in Text (+ Solution)
   ============================================================
   CHALLENGE: Given someone's first and last name (typed in
   any casing), print their name with the first name in
   UPPERCASE and the last name in lowercase.

   Example input:  "angela" "YU"
   Expected output: "ANGELA yu"
============================================================ */

// --- Inputs (imagine these came from user input/prompt) ---
const firstName = "angela";
const lastName = "YU";

/* ------------------------------------------------------------
   SOLUTION
------------------------------------------------------------ */

// Step 1: Force the first name to be fully uppercase
const upperFirstName = firstName.toUpperCase();

// Step 2: Force the last name to be fully lowercase
const lowerLastName = lastName.toLowerCase();

// Step 3: Combine them with a space in between
const formattedName = `${upperFirstName} ${lowerLastName}`;

console.log(formattedName); // "ANGELA yu"

/* ------------------------------------------------------------
   BONUS: Title Case a single word (capitalize just the first letter)
   This combines slicing with toUpperCase/toLowerCase.
------------------------------------------------------------ */
const word = "javascript";

const firstLetter = word[0].toUpperCase();      // "J"
const restOfWord = word.slice(1).toLowerCase(); // "avascript"
const titleCased = firstLetter + restOfWord;

console.log(titleCased); // "Javascript"
