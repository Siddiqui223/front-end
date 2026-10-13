/* ============================================================
   TOPIC: Text Manipulation and the Text Content Property
   ============================================================
   There are 3 main ways to read/change the text inside an
   element, and they behave slightly differently.
============================================================ */

const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

// 1. textContent - gets/sets the RAW text, including hidden elements,
//    and ignores any HTML tags (treats them as plain text, not markup)
console.log(paragraph.textContent); // "This is a paragraph with bold text."
heading.textContent = "Changed with textContent";

// 2. innerText - similar to textContent, but is "style-aware":
//    it respects CSS (e.g. won't return text from display:none elements)
//    and can be slightly slower because of that extra calculation
console.log(paragraph.innerText);
heading.innerText = "Changed with innerText";

// 3. innerHTML - gets/sets the content INCLUDING HTML tags,
//    meaning you can inject actual markup (be careful with this -
//    inserting untrusted user input here can be a security risk,
//    known as an XSS vulnerability)
console.log(paragraph.innerHTML); // "This is a <strong>paragraph</strong> with bold text."
heading.innerHTML = "Changed with <em>innerHTML</em> (this italicizes)";

/* ------------------------------------------------------------
   RULE OF THUMB:
   - Use textContent/innerText for plain text changes (safer, simpler)
   - Use innerHTML only when you actually need to insert HTML markup
============================================================ */
