// JS and Classes
// It is primarily as prototype based language
// concept of classes was introduced in ES6 - which is syntactic sugar on top of prototypes based inheritance mechanism
// it provided more familiar syntax for developers coming in from languages like C++, Java
// But under the hood, it works somewhat differently

// OOP - Programming Paradigm - About the structure of code you write
// Why use OOP - to prevent spaghetti code where it becomes difficult to separate out anything, and nothing is being re-used
// There are other paradigm like procedural programming and functional programming

// Object - collection of properties and methods
// [Part of OOP] - Object Literal - (literally taking object)

// Concepts to discuss - Constructor, Prototypes, Classes, Instances(new, this)

/** Assignment - 
1. Abstraction - hide details
2. Encapsulation - Wrapper
3. Inheritance - carry over properties and methods
4. Polymorphism - many forms of same things
*/

// JS - object is the base unit

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("`Hello");
    console.log(`Username: ${username}`); // username is directly not defined inside its context
    // It has to be taken from outside as its own . i.e. this.username
  },
};
// console.log("username", user.username);
// the value of this inside above object will be current context i.e. entire object with its properties and values

// In browser console, it already has window object with log of things inside 'this'

// constructor function invoked with 'new' keyword helps build context

function User(username, loginCount, isLoggedIn) {
  this.username = username; // assign value of variables to the same variable name in current context
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this; // return entire object
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);
// console.log(`userOne`, userOne.username); // userTwo will have overwritten values
// So we need a 'new' instance of object - made from constructor

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(`userOne`, userOne.username);
console.log(`userOne`, userTwo.username);

// instanceof method to check the uniqueness of objects
// Object.constructor - method of same name as object - reference to self
