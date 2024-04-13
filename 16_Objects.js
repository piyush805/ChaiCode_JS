// declaring like literals doesn't make singleton
// With constructor, it does
// singleton - only one instance of object is created

// object literal
// Object.create - this is constructor method through which singleton can be created
const JsUser = {
  name: "John",
  "full Name": "John Doe", // key with spaces - use quotes
  age: 30,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// In array we cannot define keys
// keys are considered by the system as: "name": "John", "age": 30
// keys are considered as strings

// Access object
// dot operator - for known keys
console.log(JsUser.name); // John
// console.log(JsUser[name]); - this will throw error - name is not defined
console.log(JsUser["name"]); // John
// Now full Name is a key with space - and cannot be accessed with dot operator - it has to be explicitly accessed with []

console.log(JsUser["full Name"]); // John Doe
console.log(JsUser["full Name"]); // John Doe

// Using symbol as key
const sym1 = Symbol("myKey");
const obj = {
  [sym1]: "value1", // using above declared symbol as key
  // declaring it normally like sym1: "value1" - will still print - but that sym1 would be different from declared sym1
};
console.log(obj); // { [Symbol(myKey)]: 'value1' }

console.log(obj[sym1]); // Accessed neither with of dot - or squared bracket and string - but only with squared bracket and symbolName

// Freezing object - locking its properties
// Object.freeze(JsUser);
// JsUser.name = "Hitesh"; // this will throw error in strict mode
// Normally it will not throw error - but it will not propagate the change

JsUser.greeting = function () {
  console.log("Hello");
};
console.log(JsUser.greeting); // [Function: greeting]
console.log(JsUser.greeting()); // Hello undefined

// Inside the function - the object it is a part of can be referred to with `this`
