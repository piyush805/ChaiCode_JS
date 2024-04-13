/**
 * for (const ele of arr) {
 *   console.log(num);
 * }
 *
 * Works on string as well
 */
// Maps - it has all unique values
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

console.log(map);
/**
 * Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'UK' => 'United Kingdom'
}
 */
for (const key of map) {
  console.log(key);
}
// ["IN", "India"]
// [("USA", "United States of America")]
// [("UK", "United Kingdom")];
for (const [key, value] of map) {
  console.log(key, value);
}
// IN India
// USA United States of America
// UK United Kingdom

const myObject = {
  game1: "Cricket",
  game2: "Football",
};
// for of loop does not work for objects - Error that myObject is not iterable
// Here for in loop works
for (const key in myObject) {
  console.log(key);
}
// game1
// game2
for (const key in myObject) {
  console.log(myObject[key]);
}
// Cricket
// Football

// For in works with Arrays as well - giving its indices from 0 to n-1
// It doesn't work with Maps - it doesn't return anything - as it is not iterable - neither any error
// It doesn't work with Sets - it doesn't return anything - as it is not iterable - neither any error

// For Each - it is higher order function - it takes a function as an argument - which returns something - for each element of array on which it is executed
// Works with Arrays, Maps, Sets
// It doesn't work with Objects
const coding = ["JS", "Python", "Java"];
coding.forEach(function (element) {
  console.log(element);
});
coding.forEach((element) => {
  console.log(element);
});
// JS
// Python
// Java

// for each  has a second argument - index = which is index of the element on which it is running
// 3rd arg is the array itself - which is often not used
