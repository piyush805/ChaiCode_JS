// +++++++++++++++++++++++++++++ NEW KEYWORD +++++++++++++++++++++++++++++

// JS is prototypal in nature - it keeps looking one layer up until it finds what it is looking for
// Eg: when we define an array and print it in console
// We get elements at all indices, length property and [[Prototype]]: Array
// which when opened presents lots of methods available - which help us perform various operations on our defined array
// Then again inside it is another [[Prototype]]: Object
// This again has lots of methods and properties of its own
// But it further does not contain any more [[Prototype]]
// There are however get__proto__, set__proto__ - which are there to set function definition
// These again have [[Prototype]]: f() ->
//  which again has [[Prototype]] -> it has get and set proto again which again have Prototype
// There is not [[Prototype]]

// When does it end?

// Object is the last thing - which has no parent = Everything in JS is an Object
// So everything goes up until 'Object' - object parent prototype is null
// There are getter and setter using which we can attach
// But usually we don't

function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2; // function also has Object prototype so we can define some other property of it as well

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // {} empty parenthesis - because it is object and this is where key value pair of power:2 gets stored

function createUser(username, score) {
  this.username = username; // context's username = param username
  this.score = score; // context's score = param score
}
// console.log(createUser.this);

// Can we inject our own functionalities?
// Here inject a function in key named increment in the prototype of function defined above
createUser.prototype.increment = function () {
  this.score++; // whoever call the function, increment 'that' score. 'this' here enables reaching that context for each execution
};

createUser.prototype.printMe = function () {
  console.log(`${this.username}: score is ${this.score}`);
};
const chai = new createUser("chai", 25);
// new keyword here informs 'chai' that a unique instance with possible new properties is incoming.
// Without this, it will not know about injected methods increment and printMe
// Without this, only values passed in inside createUser will be known
// new keyword is to invoke constructor function, create of new JS object
// With new: newly created object gets linked to prototype of the constructor function

const tea = new createUser("tea", 250);
chai.printMe(); // chai: score is 25

// +++++++++++++++++++++++++++++ PROTOTYPE KEYWORD +++++++++++++++++++++++++++++
let myName = "hitesh";
console.log(myName.length);
// what if there was a trueLength 'property' which would output string + entire statement giving actual length without spaces
// bake in that functionality with every string

let myHeroes = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.hitesh = function () {
  // inject function hitesh in all Object prototypes - so that it is available to all that inherit from it
  console.log(`hitesh is present in all objects`);
};
heroPower.hitesh(); // print the clg above means function hitesh is successfully injected - present in this
myHeroes.hitesh(); // print the clg above means function hitesh is successfully injected - and present in this as well

// Similarly if we define something on array prototype then array myHeroes will have access to it
// whereas heroPower will not have access to it because it inherits only from Object and not Arrays
Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// +++++++++++++++++++++++++++++ PROTOTYPAL INHERITANCE +++++++++++++++++++++++++++++
// Older syntax when there were no classes and everything was object so all methods had to be defined in key value pair of object only
// later it could also be accessed through '__proto__'
const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// ++++++++++++++++++++ Modern syntax++++++++++++++++++++++
// behind the scene its all same, but this syntactic sugar easier to read and write
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode            ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength(); // 11
// Now lets see this inherited method for other strings as well
"hitesh    ".trueLength(); // 6, works
