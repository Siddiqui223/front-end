/* ============================================================
   TOPIC: Introduction to the DOM + Solution to the DOM Challenge
   ============================================================ */

// `document` is the root object representing the entire webpage.
// console.log it to explore the DOM tree in the browser console.
console.log(document);

/* ------------------------------------------------------------
   CHALLENGE / SOLUTION:
   1. Select the heading and the button using their IDs.
   2. Listen for a click on the button.
   3. When clicked, update the heading's text.
------------------------------------------------------------ */

// Step 1: Select elements from the page (more detail in the next file)
const heading = document.getElementById("main-heading");
const button = document.getElementById("change-btn");

// Step 2 & 3: addEventListener runs a function whenever the
// specified event ("click") happens on that element.
button.addEventListener("click", function () {
  heading.innerText = "The heading has changed!";
});
