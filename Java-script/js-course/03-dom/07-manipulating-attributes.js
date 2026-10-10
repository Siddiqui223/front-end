/* ============================================================
   TOPIC: Manipulating HTML Element Attributes
   ============================================================
   Attributes are the extra bits of info on an HTML tag, like
   src, href, alt, placeholder, width, etc. JS can read and
   change these dynamically.
============================================================ */

const photo = document.getElementById("photo");
const link = document.getElementById("link");
const textInput = document.getElementById("text-input");

// COMMON PROPERTIES can be accessed directly as dot-properties
console.log(photo.src);   // full URL to the image
console.log(photo.alt);   // "A cat"
console.log(link.href);   // "https://example.com/"

// Changing them is just as simple
photo.src = "dog.jpg";
photo.alt = "A dog";
link.href = "https://anthropic.com";
textInput.placeholder = "Enter your name";

/* ------------------------------------------------------------
   GENERIC METHODS - work for ANY attribute, including custom ones
------------------------------------------------------------ */
// getAttribute() - reads any attribute by name (as a string)
console.log(photo.getAttribute("width")); // "200"

// setAttribute(name, value) - sets/changes any attribute
photo.setAttribute("width", "300");
photo.setAttribute("data-category", "animals"); // custom attribute

// hasAttribute() - checks if an attribute exists
console.log(photo.hasAttribute("alt")); // true

// removeAttribute() - deletes an attribute entirely
photo.removeAttribute("width");

/* ------------------------------------------------------------
   PRACTICAL EXAMPLE: Toggle an image between two states
------------------------------------------------------------ */
let isDog = false;
function toggleImage() {
  if (isDog) {
    photo.setAttribute("src", "cat.jpg");
    photo.setAttribute("alt", "A cat");
  } else {
    photo.setAttribute("src", "dog.jpg");
    photo.setAttribute("alt", "A dog");
  }
  isDog = !isDog; // flip the boolean for next time
}
