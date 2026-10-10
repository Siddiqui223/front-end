/* ============================================================
   TOPIC: String Lengths and Retrieving Characters/Numbers
   ============================================================
   Strings are basically a list of characters, each with a
   position ("index") starting at 0.
============================================================ */

const fruit = "watermelon";

// .length tells you how many characters are in the string
console.log(fruit.length); // 10

// Access a single character using square brackets + its index.
// Indexing starts at 0, so the FIRST character is index 0.
console.log(fruit[0]); // "w" (1st letter)
console.log(fruit[1]); // "a" (2nd letter)

// To get the LAST character, use length - 1
// (because the last index is always one less than the length)
console.log(fruit[fruit.length - 1]); // "n" (last letter)

// indexOf() finds the position of a character/substring
console.log(fruit.indexOf("m")); // 4 - the first "m" is at index 4
console.log(fruit.indexOf("z")); // -1 - returns -1 if not found

// Retrieving/converting numbers stored as strings
const numberAsString = "1234";
console.log(numberAsString.length); // 4

// Number() converts a numeric string into an actual number,
// which is important if you want to do math with it.
const numberAsNumber = Number(numberAsString);
console.log(numberAsNumber + 1); // 1235 (real addition)
console.log(numberAsString + 1); // "12341" (string concatenation, NOT math!)
