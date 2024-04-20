// +++++++++++++++++++ Closures +++++++++++++++++++++++++
// Closure gives you access to an outer function scope from an inner function
// Closures are created every time a function is created

// Children can share from parents and so on
// Siblings do not share memory space among themselves
// Also parents cannot share memory spaces from children

function outer() {
  let username = "hitesh";
  function inner() {
    console.log("inner", username); // works - shared memory space of parent
  }
  function innerTwo() {
    console.log("innerTwo", username); // works - shared memory space of parent
  }
  inner();
  innerTwo();
}
outer();
// console.log("Too outer", username);

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; // here we not only pass the reference to the function but also its parent's memory space - so 'name' is not in scope outside but it will be accessible since it is in displayName's parent memory space
}
const myFunc = makeFunc();
myFunc();

// Scenario with actual use of closure and lexical scoping
//  2 buttons in DOM to change body bgColor to orange and green
document.getElementById("orange").onclick = function () {
  document.body.style.backgroundColor = `orange`;
};
document.getElementById("green").onclick = function () {
  document.body.style.backgroundColor = `green`;
};
// What is there were n such buttons? We would not copy paste this n times - but try to use DRY - but how?
function clickHandler(color) {
  document.body.style.backgroundColor = `${color}`;
}
// How to attach this handler with click - by also passing in color value
// document.getElementById('orange').onclick = clickHandler('orange') - But this executes it immediately
function clickHandler1(color) {
  return function () {
    // we are returning this function only but here color is accessible from its parent scope
    document.body.style.backgroundColor = `${color}`;
  };
}
document.getElementById("orange").onclick = clickHandler1("orange"); // because on click assignment expects executable and not function execution
document.getElementById("green").onclick = clickHandler1("green");

// So we are returning to it the same function we we had to use two times for 2 buttons - by means of another function - so we don't have to write repeatedly
