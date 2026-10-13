/* ============================================================
   TOPIC: Functions Part 3 - Outputs & Return Values
   ============================================================
   So far our functions just console.log() their result. But
   what if we want to USE that result elsewhere in our code?
   That's what `return` is for - it sends a value back out of
   the function so it can be stored or reused.
============================================================ */

// This function only LOGS - it doesn't give us anything back to use.
function addAndLog(a, b) {
  console.log(a + b);
}
addAndLog(2, 3); // prints 5, but we can't capture/reuse that 5

// This function RETURNS a value - we can now store it in a variable.
function add(a, b) {
  return a + b; // sends the result back to whoever called the function
}

const sum = add(2, 3);
console.log(sum);        // 5
console.log(add(10, 20) * 2); // 60 - we can use the return value directly in more math

// IMPORTANT: code after `return` inside a function never runs,
// because `return` immediately exits the function.
function example() {
  return "done";
  console.log("This line never runs!"); // unreachable code
}

/* ------------------------------------------------------------
   CHALLENGE: BMI (Body Mass Index) Calculator
   Formula: BMI = weight (kg) / (height (m) * height (m))
------------------------------------------------------------ */
function calculateBMI(weightInKg, heightInM) {
  const bmi = weightInKg / (heightInM * heightInM);
  // Round to 1 decimal place for a cleaner result
  return bmi.toFixed(1);
}

/* ------------------------------------------------------------
   SOLUTION in use
------------------------------------------------------------ */
const myBMI = calculateBMI(75, 1.8);
console.log(`Your BMI is ${myBMI}`); // "Your BMI is 23.1"

// Because it returns a value, we can feed it into more logic later,
// e.g. deciding a BMI category:
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(getBMICategory(Number(myBMI))); // "Normal weight"
