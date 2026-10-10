/* ============================================================
   TOPIC: Functions Part 1 - Creating and Calling Functions
   ============================================================
   A function is a reusable block of code. You DEFINE it once,
   then CALL (or "invoke") it as many times as you like.
============================================================ */

// DEFINING a function using the `function` keyword
function sayHello() {
  console.log("Hello!");
}

// CALLING (running) the function - nothing happens until you call it!
sayHello(); // "Hello!"
sayHello(); // "Hello!" - can be called multiple times

// A function can contain multiple lines of code
function greetTheDay() {
  console.log("Good morning!");
  console.log("Time to write some code.");
}
greetTheDay();

/* ------------------------------------------------------------
   CHALLENGE: The Karel-style "turtle" movement functions
   (Inspired by the classic "Karel the Robot" teaching exercise
   where you chain simple commands together to solve a maze.)
------------------------------------------------------------ */
function moveForward() {
  console.log("Move forward one step");
}

function turnLeft() {
  console.log("Turn left 90 degrees");
}

function pickUpBall() {
  console.log("Pick up the tennis ball");
}

/* ------------------------------------------------------------
   SOLUTION: Chain the commands to complete a simple maze -
   move forward twice, turn left, move again, then grab the ball.
------------------------------------------------------------ */
function solveMaze() {
  moveForward();
  moveForward();
  turnLeft();
  moveForward();
  pickUpBall();
}

solveMaze();
