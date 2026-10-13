/* ============================================================
   TOPIC: Functions Part 2 - Parameters and Arguments
   ============================================================
   Parameters let a function accept input, so it can behave
   differently each time it's called - instead of always doing
   the exact same thing.

   PARAMETER = the placeholder name in the function definition
   ARGUMENT  = the actual value you pass in when calling it
============================================================ */

// `name` is a PARAMETER - a placeholder for whatever gets passed in
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// "Angela" and "Jack" are ARGUMENTS - the real values used
greet("Angela"); // "Hello, Angela!"
greet("Jack");   // "Hello, Jack!"

// Functions can take multiple parameters, separated by commas
function introduce(firstName, age) {
  console.log(`This is ${firstName}, who is ${age} years old.`);
}
introduce("Angela", 30);

/* ------------------------------------------------------------
   CHALLENGE: "Life in Weeks"
   Given someone's current age, estimate how many weeks they
   have left, assuming an average life expectancy of 90 years.
------------------------------------------------------------ */
function lifeWeeksLeft(currentAge) {
  const lifeExpectancy = 90;
  const yearsLeft = lifeExpectancy - currentAge;
  const weeksLeft = yearsLeft * 52;
  console.log(`You have approximately ${weeksLeft} weeks left to live.`);
}

/* ------------------------------------------------------------
   SOLUTION in use
------------------------------------------------------------ */
lifeWeeksLeft(30); // calculates weeks left for a 30-year-old
lifeWeeksLeft(45); // reusable for any age passed in!

// Default parameters: give a fallback value if no argument is passed
function greetWithDefault(name = "friend") {
  console.log(`Hi there, ${name}!`);
}
greetWithDefault();          // "Hi there, friend!" (uses default)
greetWithDefault("Angela");  // "Hi there, Angela!" (overrides default)
