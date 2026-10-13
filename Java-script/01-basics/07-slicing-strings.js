/* ============================================================
   TOPIC: Slicing and Extracting Parts of a String
   ============================================================
   .slice(start, end) extracts a portion of a string.
   - "start" is inclusive (included in the result)
   - "end" is exclusive (NOT included in the result)
   - If you omit "end", it slices to the end of the string.
============================================================ */

const message = "Hello, my name is Angela";

// Extract "Hello"
console.log(message.slice(0, 5)); // "Hello" (chars at index 0,1,2,3,4)

// Extract everything from index 19 onward ("Angela")
console.log(message.slice(19)); // "Angela"

// Negative numbers count from the END of the string
console.log(message.slice(-6)); // "Angela" (last 6 characters)

/* ------------------------------------------------------------
   PRACTICAL EXAMPLE: Extracting a username from an email
------------------------------------------------------------ */
const email = "jack.bauer@ctu.gov";
const atIndex = email.indexOf("@");

// Grab everything BEFORE the "@" symbol
const username = email.slice(0, atIndex);
console.log(username); // "jack.bauer"

// Grab everything AFTER the "@" symbol
const domain = email.slice(atIndex + 1);
console.log(domain); // "ctu.gov"

/* ------------------------------------------------------------
   OTHER USEFUL METHODS
------------------------------------------------------------ */
console.log(message.toUpperCase()); // "HELLO, MY NAME IS ANGELA"
console.log(message.toLowerCase()); // "hello, my name is angela"
console.log(message.includes("Angela")); // true - does the string contain "Angela"?
