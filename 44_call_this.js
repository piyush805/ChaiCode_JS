// Function are executed in call stack
// For normal functions- this keyword refers to their parent execution context
// In arrow function - it refers to global execution context
// 1. If window env - then this points to windows
// 2. else in node env - this gives an empty object

function SetUserName(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  // SetUserName(username);
  // setting username here is set in another function - how does it know which 'this' are we referring to? It wont
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123");
console.log(chai);

// Line 14: doesn't actually call the function but only references it
// When it simply called as a function - it gets into stack, gets executed, popped out and its execution context gets destroyed
// So 'this' for function SetUserName and 'this' for function createUser are different
// In order to hold the reference of this of parent function we need 'call'
// An optional parameter 'this' of current parent function needs to be passed which gets used in child function
// This 'this' retains username property and doesn't get destroyed along with execution context this time
// and all 3 properties are retained
