/* ============================================================
   TOPIC: JavaScript Variables (+ Exercise)
   ============================================================
   Variables are named "boxes" that store data so you can
   reuse and change it later.

   let    -> a variable whose value CAN change later
   const  -> a variable whose value CANNOT be reassigned
   var    -> the old way of declaring variables (avoid in
             modern code - it has confusing scoping rules)
============================================================ */

// Declaring and assigning a variable with let
let score = 0;
console.log(score); // 0

// We can reassign a `let` variable
score = 10;
console.log(score); // 10

// const variables must be given a value immediately,
// and can never be reassigned afterwards.
const birthYear = 1995;
// birthYear = 2000; // <-- this would throw an error, uncomment to test

// Good practice: use `const` by default, and only use `let`
// when you know the value needs to change.

/* ------------------------------------------------------------
   EXERCISE: Variables Practice
   Create variables for a user's profile and log them out.
------------------------------------------------------------ */
let firstName = "Jack";
let lastName = "Bauer";
let currentAge = 42;
let job = "Secret Agent";
let hasPet = true;

console.log(firstName);
console.log(lastName);
console.log(currentAge);
console.log(job);
console.log(hasPet);

// Combine multiple variables into one log statement
console.log(firstName + " " + lastName + " is " + currentAge + " years old.");
