/* ============================================================
   TOPIC: The Separation of Concerns Structure
   ============================================================
   "Separation of Concerns" means each file/technology should
   have ONE job:

     HTML  -> structure/content only
     CSS   -> all visual styling (colors, layout, fonts)
     JS    -> all behaviour/logic (what happens, and when)

   This makes projects far easier to read, debug, and scale,
   because you're not hunting for styles buried inside JS or
   HTML, and not hunting for behaviour buried inside CSS.
============================================================ */

/* ------------------------------------------------------------
   BAD EXAMPLE (mixing concerns) - avoid this style:

   <button style="background-color: red;" onclick="alert('hi')">
     Click
   </button>

   Here, HTML holds structure AND inline styling AND inline
   JS all in one line. Hard to maintain, hard to reuse.
------------------------------------------------------------ */

/* ------------------------------------------------------------
   GOOD EXAMPLE (separated concerns):

   HTML:  <button id="my-btn" class="primary-btn">Click</button>
   CSS:   .primary-btn { background-color: red; }
   JS:    (this file) - only handles behaviour
------------------------------------------------------------ */

const myButton = document.getElementById("my-btn");

myButton.addEventListener("click", function () {
  // JS decides WHAT happens (behaviour)...
  alert("Hi!");

  // ...but styling changes should ideally happen by toggling
  // a CSS class, not by setting styles directly in JS:
  myButton.classList.add("clicked-style"); // defined in the CSS file
});

/* ------------------------------------------------------------
   SUMMARY OF BENEFITS:
   1. Easier to find and fix bugs (you know which file to check)
   2. Multiple people can work on HTML/CSS/JS independently
   3. Styles and behaviour can be reused across many elements
   4. Cleaner, more professional, more maintainable codebase
============================================================ */
