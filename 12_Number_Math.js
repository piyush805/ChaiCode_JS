const score = 400; // implicit take number as data type

const balance = new Number(1000); // explicit declaring number as data type

console.log("Score:", score); // prints 400
console.log("Balance:", balance); // prints [Number: 1000] - gives all properties and methods of Number which can be seen in browser console and accessed with __proto__

console.log(balance.toString().length); // 4 - converts number to string and then gives length of string

const otherNumber = 23.899;
console.log(otherNumber.toPrecision(3)); // 23.9 - gives number with precision of 3const otherNumber = 23.899;
const otherNumber2 = 123.899;
console.log(otherNumber2.toPrecision(3)); // 124
const otherNumber3 = 1123.899;
console.log(otherNumber3.toPrecision(3)); // 1.12e+3

// so need to be careful with precision - and should know how  many numbers are going to occur in total

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 - gives number with commas - US format
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 - gives number with commas - Indian format

// MIN_VALUE and MAX_VALUE
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// ++++++++++++++++++++++++++++++ Math Library ++++++++++++++++++++++++++++++

console.log(Math); // gives all properties and methods of Math library
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4 - gives absolute value
console.log(Math.ceil(7.8)); // 8 - gives next integer
console.log(Math.floor(7.8)); // 7 - gives previous integer
console.log(Math.round(7.8)); // 8 - gives nearest integer
console.log(Math.min(7, 8, 9, 10)); // 7 - gives minimum value
console.log(Math.max(7, 8, 9, 10)); // 10 - gives maximum value

console.log(Math.random()); // gives random number between 0 and 1
// How to get random number between 1(A) and 10(B)
// A + Math.floor((B - A + 1) * Math.random())
// B - A + 1 is done to get random number between 1 and 10
// floor is used to get integer value
console.log(1 + Math.floor((10 - 1 + 1) * Math.random())); // 1 to 10 - gives random number between 1 and 10
