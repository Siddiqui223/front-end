/* ============================================================
   TOPIC: Selecting HTML Elements with JavaScript
   ============================================================
   Before you can change anything on a page, you need to
   SELECT the element(s) you want to work with.
============================================================ */

// getElementById() - selects ONE element by its unique id attribute
const title = document.getElementById("title");
console.log(title);

// getElementsByClassName() - selects ALL elements with that class,
// returned as an "HTMLCollection" (array-like, but not a true array)
const descriptions = document.getElementsByClassName("description");
console.log(descriptions);          // both <p class="description"> elements
console.log(descriptions[0]);       // the first one specifically

// getElementsByTagName() - selects ALL elements of that tag type
const listItems = document.getElementsByTagName("li");
console.log(listItems); // both <li> elements

// querySelector() - selects the FIRST element matching a CSS selector
// (this is the most flexible and commonly used method today)
const firstParagraph = document.querySelector(".description"); // by class
const titleAgain = document.querySelector("#title");            // by id
const firstListItem = document.querySelector("li");             // by tag
console.log(firstParagraph, titleAgain, firstListItem);

// querySelectorAll() - selects ALL elements matching a CSS selector,
// returned as a "NodeList" (array-like; supports forEach)
const allDescriptions = document.querySelectorAll(".description");
allDescriptions.forEach(function (paragraph) {
  console.log(paragraph.innerText);
});

// TIP: querySelector/querySelectorAll accept ANY valid CSS selector,
// making them the most powerful and flexible option, e.g.:
document.querySelector("ul li:first-child"); // first <li> inside a <ul>
