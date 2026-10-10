/* ============================================================
   TOPIC: String Concatenation
   ============================================================
   Concatenation means "joining strings together". There are
   two common ways to do it in JavaScript.
============================================================ */

const firstName = "Jack";
const lastName = "Bauer";

// METHOD 1: The + operator
// Note: you must manually add spaces/punctuation yourself.
const fullName1 = firstName + " " + lastName;
console.log(fullName1); // "Jack Bauer"

// You can also mix strings with numbers - JS converts the number to text
const age = 42;
const sentence1 = firstName + " is " + age + " years old.";
console.log(sentence1); // "Jack is 42 years old."

// METHOD 2: Template literals (the modern, preferred way)
// Use backticks (`) instead of quotes, and ${...} to insert variables.
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); // "Jack Bauer"

const sentence2 = `${firstName} is ${age} years old.`;
console.log(sentence2); // "Jack is 42 years old."

// Template literals also support multi-line strings easily
const multiLine = `Line one
Line two
Line three`;
console.log(multiLine);

// You can even put expressions inside ${}
console.log(`Next year, ${firstName} will be ${age + 1}.`);
