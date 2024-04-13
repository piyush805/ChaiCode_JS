// ES6 - 2015 - Arrow Function

// Accessing current context - this keyword
const user = {
  username: "Hitesh",
  price: 199,
  welcomeMessage: function () {
    // normal function has its own this keyword for reference to the object
    // this here refers to entire object
    console.log(`Welcome ${this.username}, welcome to our website`);
  },
};

// What is current context outside the object -
// What if 'this' is used outside
// It will be empty object in NODE Env
// In browser - it will be window object

// Earlier - there was only one way of executing JS - in browser - so there was global window object - which was used to access the global variables- which shows up in `this` keyword
// While in node env - when JS executing env is extracted - there is no window object - so it will be empty object

function chai() {
  console.log(this);
  // Here it prints bunch of this
  /**
   * global: [Circular *1],
  ....
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
   */
  /**
   * Even when something is defined inside the function -
   */
}
chai();

// ++++++++++++++++ Pure Arrow Function ++++++++++++++++

var addTwo = (num1, num2) => {
  return num1 + num2;
};

var addTwo = (num1, num2) => num1 + num2; // Implicit return

// Need curly braces when returning an object
var addTwo = (num1, num2) => ({ sum: num1 + num2 });
