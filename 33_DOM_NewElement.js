/**
 * <div class="parent">
 *    <div class="child">Monday</div>
 *    <div class="child">Tuesday</div>
 *    <div class="child">Wednesday</div>
 *    <div class="child">Thursday</div>
 *  </div>
 */
const parent = document.querySelector(".parent");
console.log(parent); // returns Element
console.log(parent.children); // returns HTML Collection

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML); // returns Element
}
parent.children[1].innerHTML = "Changed using JS";

console.log(parent.firstElementChild); // returns  1st Element
console.log(parent.lastElementChild); // returns last Element

const children = document.querySelector(".child");
const parent2 = children.parentElement;
const nextSibling = children.nextElementSibling;

console.log("NODES: ", parent.childrenNodes); // returns NodeList

// comment and line breaks are also nodes
// multiple line breaks are considered as one node

// +++++++++++++++++++How to create a new element+++++++++++++++++++
const newElement = document.createElement("div");
newElement.innerHTML = "New Element";
newElement.className = "new-class";
newElement.innerText = "New Element";
// set attribute is preferred over direct assignment
// because direct assignment can override the previous attributes - i.e. it has to fetch previous attributes and then add new one
// setAttribute saves this round trip
const textNode = document.createTextNode("This is a text node");
document.body.appendChild(textNode); // now attached to the body
