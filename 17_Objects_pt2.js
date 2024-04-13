const tinderUser = new Object();

console.log(tinderUser); // {} - empty object

tinderUser.id = "123abc";
tinderUser.name = "Hitesh";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Hitesh', isLoggedin: false }

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Hitesh",
      lastName: "Choudhary",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName); // Hitesh

// Option chaining

// Merging objects

// const obj3 = { obj1, obj2 }; // obj3 = {obj1: obj1, obj2: obj2} // this is not correct
var obj3 = { ...obj1, ...obj2 }; // obj3 = {obj1, obj2} // this is correct
//OR
var obj3 = Object.assign({}, obj1, obj2); // obj3 = {obj1, obj2} // this is correct
// or skip the first argument to modify the first object
var obj3 = Object.assign(obj1, obj2); // obj3 = obj1 // this is correct

// Accessing all keys of an object
const keys = Object.keys(obj1); // keys = ['key1', 'key2', 'key3'] // Array of keys

// Accessing all values of an object
const values = Object.values(obj1); // values = ['value1', 'value2', 'value3'] // Array of values

// Accessing all key-value pairs of an object
const entries = Object.entries(obj1); // entries = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']] // Array of key-value pairs

// Check if a key exists in an object
const keyExists = obj1.hasOwnProperty("key1"); // returns Boolean
