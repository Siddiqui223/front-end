/* ============================================================
   TOPIC: Manipulating and Changing Styles of Elements
   ============================================================
   Every element has a `.style` object you can use to change
   its CSS directly from JavaScript.

   NOTE: CSS properties with hyphens (e.g. background-color)
   become camelCase in JS (e.g. backgroundColor).
============================================================ */

const title = document.getElementById("box-title");
const box = document.getElementById("box");

// Changing individual style properties
title.style.color = "blue";
title.style.fontSize = "40px";       // "font-size" -> "fontSize"
title.style.textAlign = "center";     // "text-align" -> "textAlign"

box.style.backgroundColor = "tomato"; // "background-color" -> "backgroundColor"
box.style.borderRadius = "50%";       // makes the box a circle
box.style.width = "150px";
box.style.height = "150px";

// You can also set multiple styles at once using cssText
// (less common, but useful for bulk changes)
box.style.cssText = "width: 200px; height: 200px; background-color: skyblue;";

/* ------------------------------------------------------------
   BEST PRACTICE: toggling a CSS CLASS instead of individual
   styles. This keeps styling logic in your CSS file, and JS
   just flips a class on/off.
------------------------------------------------------------ */
// Imagine a CSS class defined elsewhere: .highlight { border: 3px solid gold; }
box.classList.add("highlight");     // adds the class
box.classList.remove("highlight");  // removes the class
box.classList.toggle("highlight");  // adds it if missing, removes it if present
