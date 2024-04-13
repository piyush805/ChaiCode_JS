const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Batman", "flash"];

// marvel_heros.push(dc_heros); // expected to merge - but it becomes nested array
// console.log(marvel_heros); // ["thor", "Ironman", "Spiderman", "Hulk", "Captain America", ["Superman", "Batman", "flash"]]

// concat() - merge two arrays
const newHeros = marvel_heros.concat(dc_heros);
console.log(newHeros); // ["thor", "Ironman", "Spiderman", "Hulk", "Captain America", "Superman", "Batman", "flash"]

// spread operator
const newHeros2 = [...marvel_heros, ...dc_heros];
console.log(newHeros2); // ["thor", "Ironman", "Spiderman", "Hulk", "Captain America", "Superman", "Batman", "flash"]

// Flat - to remove nested arrays - upto n levels - default is 1 - 'Infinity' is all levels
const nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

console.log(Array.isArray("hitesh")); // false
console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({ name: "hitesh" })); // [] - empty array - you have to provide whether convert with keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
