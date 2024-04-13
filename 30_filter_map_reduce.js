// for each does not return anything
const coding = ["JS", "Python", "Java"];
const values = coding.forEach((element) => {
  console.log(element);
  return element;
});

console.log(values); // undefined

// Sometimes we want to operate on each value, maybe even conditionally

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter returns new number - for which conditions is true
const newNums = myNums.filter((num) => num > 4); // implicit return
// with scope, we need explicit return
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// Doing above with for each
const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    // more code has to be written here
    newNums2.push(num);
  }
});
console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]

// Map returns new array - with each element modified
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums3 = myNums2.map((num) => num * 2);
console.log(newNums3); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// Reduce - it returns a single value
const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = myNums3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55
/**
 * const initialValue = 0;
 * let acc = initialValue;
 * const sumWithInitial = myNums3.reduce(
 *    (acc, num) => acc + num,
 * initialValue);
 */
