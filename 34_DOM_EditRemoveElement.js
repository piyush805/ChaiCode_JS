// Approach 1
function addLanguage(langName) {
  const list = document.createElement("li");
  list.innerHTML = `${langName}`; // traverse to fill the innerHTML
  document.querySelector("ul").appendChild(list);
}
addLanguage("Python");
addLanguage("JavaScript");

// Approach 2
function addOptimalLanguage(langName) {
  // Don't have to traverse the DOM tree every time
  const list = document.createElement("li");
  list.appendChild(document.createTextNode(langName)); // Better
  document.querySelector("ul").appendChild(list);
}
addOptimalLanguage("Java");

// +++++ Edit an element +++++
// approach 1
const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
secondLang.replaceWith(newLi);

// approach 2
const firstLang = document.querySelector("li:first-child)");
firstLang.outerHTML = "<li>TypeScript</li>";

// remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
