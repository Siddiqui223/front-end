/* ============================================================
   TOPIC: Basic Arithmetic and the Modulo Operator
   ============================================================
   JavaScript supports the standard math operators, plus a
   special one - modulo - that's extremely useful for
   real-world logic (like checking odd/even numbers).
============================================================ */

const a = 10;
const b = 3;

console.log(a + b); // 13 - Addition
console.log(a - b); // 7  - Subtraction
console.log(a * b); // 30 - Multiplication
console.log(a / b); // 3.333... - Division

// MODULO (%) returns the REMAINDER after division.
// 10 divided by 3 is 3, with 1 left over -> remainder = 1
console.log(a % b); // 1

/* ------------------------------------------------------------
   WHY MODULO IS USEFUL: Checking Even/Odd numbers
   Any number divided by 2:
     - remainder 0 -> it's EVEN
     - remainder 1 -> it's ODD
------------------------------------------------------------ */
console.log(10 % 2); // 0 -> even
console.log(7 % 2);  // 1 -> odd

/* ------------------------------------------------------------
   ANOTHER USE CASE: Wrapping values (e.g. clock hours)
   If it's hour 22 and we add 5 hours, normal addition gives 27,
   but a 24-hour clock should wrap back around to 3.
------------------------------------------------------------ */
const currentHour = 22;
const hoursToAdd = 5;
const newHour = (currentHour + hoursToAdd) % 24;
console.log(newHour); // 3

// Operator precedence: multiplication/division happen before
// addition/subtraction, just like in regular math. Use
// parentheses () to control the order explicitly.
console.log(2 + 3 * 4);   // 14 (3*4 happens first)
console.log((2 + 3) * 4); // 20 (parentheses force addition first)
