const name = "hitesh";
const repoCount = 50;

// Old way: console.log("My name is " + name + " and I have " + repoCount + " repositories on GitHub.");

// better and more readable way
console.log(
  `My name is ${name} and I have ${repoCount} repositories on GitHub.`
);

const gameName = new String("PUBG");
// pasting in console gives Object [String: 'PUBG'] - don't confuse with Array
// {0: "P", 1: "U", 2: "B", 3: "G",
// length: 4,
// [[Prototype]]: String,  // here are many methods
// [[PrimitiveValue]]: "PUBG"}

console.log(gameName[1]); // U

console.log(gameName.__proto__);
// prints empty object in terminal,
// String { "", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, … } = Visible in browser console
// this provides access to all functions and methods of String -
// We don't have to access it every-time with proto but can be done with direct methods

console.log(gameName.length); // 4
console.log(gameName.toLowerCase()); // pubg

console.log(gameName); // original value has still not changed because it is a primitive data type

console.log(gameName.charAt(2)); // B

const newString = gameName.substring(0, 2);
console.log(newString); // PU

const anotherString = gameName.slice(-2, 4);
console.log(anotherString); // BG

const newString2 = "     hitesh    ";
console.log(newString2);
console.log(newString2.trim()); // hitesh

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // https://hitesh.com/hitesh-choudhary

const gameNameDash = "hitesh-hc-game";
console.log(gameNameDash.split("-")); // ["hitesh", "hc", "game"]
