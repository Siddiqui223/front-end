/* ============================================================
   TOPIC: Random Number Generation - Building a Love Calculator
   ============================================================
   Math.random() gives a random decimal between 0 (inclusive)
   and 1 (exclusive), e.g. 0.4837...

   To get a random WHOLE number in a specific range, we scale
   and round it.
============================================================ */

// Random decimal between 0 and 1
console.log(Math.random());

/* ------------------------------------------------------------
   Formula for a random INTEGER between 0 and (max - 1):
   Math.floor(Math.random() * max)
------------------------------------------------------------ */
function randomWholeNumber(max) {
  return Math.floor(Math.random() * max);
}
console.log(randomWholeNumber(10)); // random integer from 0 to 9

/* ------------------------------------------------------------
   Formula for a random integer within a RANGE (min to max, inclusive):
   Math.floor(Math.random() * (max - min + 1)) + min
------------------------------------------------------------ */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(1, 100)); // random integer from 1 to 100

/* ------------------------------------------------------------
   PROJECT: Love Calculator
   Generate a "compatibility score" between two names using a
   random percentage from 0 to 100.
------------------------------------------------------------ */
function calculateLoveScore(name1, name2) {
  const score = randomInRange(0, 100);
  console.log(`Your love score for ${name1} and ${name2} is ${score}%.`);
  return score;
}

const loveScore = calculateLoveScore("Romeo", "Juliet");

// We can now use that returned score to add extra logic,
// e.g. deciding a fun message based on the result:
if (loveScore > 90) {
  console.log("It's meant to be! 💕");
} else if (loveScore > 50) {
  console.log("There's definitely potential here!");
} else {
  console.log("Maybe just stay friends...");
}
