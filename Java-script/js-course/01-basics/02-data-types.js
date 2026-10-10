/* ============================================================
   TOPIC: Data Types
   ============================================================
   JavaScript has a handful of core data types you'll use
   constantly. Knowing them helps you predict how operations
   (like + or ===) will behave.
============================================================ */

// 1. String - text, wrapped in quotes ('single', "double", or `backticks`)
const name = "Angela";
console.log(typeof name, name); // "string" Angela

// 2. Number - both integers and decimals use the same type
const age = 30;
const price = 19.99;
console.log(typeof age, age);     // "number" 30
console.log(typeof price, price); // "number" 19.99

// 3. Boolean - true or false (used for logic/decisions)
const isStudent = true;
console.log(typeof isStudent, isStudent); // "boolean" true

// 4. Undefined - a variable that has been declared but not given a value
let mysteryValue;
console.log(typeof mysteryValue, mysteryValue); // "undefined" undefined

// 5. Null - intentionally "nothing" (a deliberate empty value)
let emptyOnPurpose = null;
console.log(typeof emptyOnPurpose, emptyOnPurpose); // "object" null (this is a known JS quirk)

// 6. Object - a collection of key/value pairs
const person = {
  firstName: "Angela",
  age: 30,
};
console.log(typeof person, person); // "object" { firstName: 'Angela', age: 30 }

// 7. Array - an ordered list of values (technically a special kind of object)
const colors = ["red", "green", "blue"];
console.log(typeof colors, colors); // "object" [ 'red', 'green', 'blue' ]

// TIP: JavaScript is "dynamically typed" - a variable can hold
// any type, and can even change type later (though this is
// usually poor practice).
let flexible = "I'm a string";
flexible = 42; // now it's a number
console.log(typeof flexible, flexible);
