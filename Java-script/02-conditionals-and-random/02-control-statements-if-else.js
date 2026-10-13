/* ============================================================
   TOPIC: Control Statements - Using If-Else, Conditionals & Logic
   ============================================================
   Control statements let your program make DECISIONS -
   running different code depending on whether a condition
   is true or false.
============================================================ */

const age = 20;

// Basic if statement - the code block only runs if the condition is true
if (age >= 18) {
  console.log("You are an adult.");
}

// if / else - provides an alternative path when the condition is false
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}

// if / else if / else - checks multiple conditions in order,
// stopping at the FIRST one that's true
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C"); // this one matches (75 is between 70-79)
} else {
  console.log("Grade: F");
}

/* ------------------------------------------------------------
   COMPARISON OPERATORS (produce true/false)
------------------------------------------------------------ */
console.log(5 === 5);  // true  - strictly equal (checks value AND type)
console.log(5 === "5"); // false - different types (number vs string)
console.log(5 !== 3);   // true  - not equal
console.log(5 > 3);     // true  - greater than
console.log(5 <= 5);    // true  - less than or equal to

// NOTE: Always prefer === and !== over == and != in JavaScript.
// == and != do "loose" comparison and can produce confusing results,
// e.g. 0 == false is true, but 0 === false is false.

/* ------------------------------------------------------------
   LOGICAL OPERATORS - combine multiple conditions
------------------------------------------------------------ */
const hasLicense = true;
const carAvailable = false;

// && (AND) - true only if BOTH sides are true
if (hasLicense && carAvailable) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive right now.");
}

// || (OR) - true if AT LEAST ONE side is true
const isWeekend = true;
const isHoliday = false;
if (isWeekend || isHoliday) {
  console.log("No work today!");
}

// ! (NOT) - flips true to false and vice versa
console.log(!hasLicense); // false, because hasLicense is true

/* ------------------------------------------------------------
   NESTED CONDITIONALS - an if statement inside another if statement
------------------------------------------------------------ */
const weight = 75;
const height = 1.8;
const bmi = weight / (height * height);

if (bmi > 18.5) {
  if (bmi > 25) {
    console.log("Overweight range.");
  } else {
    console.log("Healthy weight range.");
  }
} else {
  console.log("Underweight range.");
}
