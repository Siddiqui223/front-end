/* ============================================================
   TOPIC: Naming and Naming Conventions
   ============================================================
   Good variable names make code easier to read and maintain.
   JavaScript has rules (what's allowed) and conventions
   (what's considered good style).
============================================================ */

// RULES (the code will break if you don't follow these):
// 1. Names can only contain letters, digits, $ and _
// 2. Names cannot start with a digit
// 3. Names are case-sensitive (age and Age are different variables)
// 4. Reserved words (like "let", "const", "function") can't be used as names

let age1 = 25;        // OK - letters + digit at the end
let _hidden = "secret"; // OK - starts with underscore
let $price = 9.99;     // OK - starts with $

// let 1stPlace = "gold"; // INVALID - can't start with a digit
// let let = 5;           // INVALID - reserved word

// CONVENTIONS (not required, but expected by other developers):

// 1. camelCase for variables and functions (most common in JS)
let firstName = "Angela";
let totalScore = 100;

// 2. Use descriptive names - avoid vague names like x, data, temp
let numberOfStudents = 30;   // good
let n = 30;                  // bad - unclear what "n" means

// 3. CONSTANT_CASE (all caps + underscores) for values that never change,
//    especially configuration-like values
const MAX_LOGIN_ATTEMPTS = 3;
const PI = 3.14159;

// 4. Boolean variables often start with is/has/can for clarity
let isLoggedIn = false;
let hasPermission = true;
let canEdit = false;

console.log(firstName, totalScore, numberOfStudents, MAX_LOGIN_ATTEMPTS, isLoggedIn);
