/* ============================================================
   TOPIC: Increment and Decrement Expressions
   ============================================================
   These are shorthand operators for the very common task of
   increasing or decreasing a number by 1 (or by some amount).
============================================================ */

let score = 0;

// The long way to add 1
score = score + 1;
console.log(score); // 1

// Shorthand: += adds and reassigns in one step
score += 1;
console.log(score); // 2

// ++ increments by exactly 1 (shortest form)
score++;
console.log(score); // 3

// Same idea, but for subtraction:
let lives = 5;
lives = lives - 1; // long way
lives -= 1;        // shorthand: subtract and reassign
lives--;           // shortest: decrement by 1
console.log(lives); // 2

// These shorthand operators work for other math too:
let total = 10;
total *= 2; // total = total * 2
console.log(total); // 20

total /= 4; // total = total / 4
console.log(total); // 5

/* ------------------------------------------------------------
   PREFIX vs POSTFIX (a subtle but important difference)
------------------------------------------------------------ */
let x = 5;
console.log(x++); // 5 -> prints OLD value, THEN increments
console.log(x);   // 6 -> now it's updated

let y = 5;
console.log(++y); // 6 -> increments FIRST, then prints new value
console.log(y);   // 6
