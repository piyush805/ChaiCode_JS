// array

const myArr = [0, 1, 2, 3, 4, 5]; // can be mixed data types - primitive or non-primitive

// JS array are resizable

// copying- shallow copy - BECAUSE Array are non primitive data types
// A shallow copy of an object is a copy that contains references to the original object.
// If you change a copy of an object, you change the original object as well.

// A deep copy of an object is a copy that contains copies of all the original object's properties.
// If you change a copy of an object, the original object is not changed.

const myHeroes = ["shaktiman", "nagraj", "superman", "batman", "spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// window console again provides - it as object, length method, and
// [[Prototype]] method - which contains all the methods of array -
// this at the end again has[[Prototype]] method which contains all the methods of object
// further there is no prototype method

myArr.push(6); // add element at the end
myArr.unshift(-1); // add element at the start
// In unshift, all the elements are shifted to the right - this will be a costly operation
myArr.pop(); // remove element from the end
myArr.shift(); // remove element from the start

console.log(myArr.includes(3)); // true - returns Boolean
console.log(myArr.indexOf(3)); // 3 - returns index of the element - number
console.log(myArr.indexOf(10)); // -1 - if element is not present, it returns -1

const newArr2 = myArr.join(); // "0,1,2,3,4,5,6" - returns a string

// slice(a,b) - a is inclusive, b is exclusive - removes elements from a to b-1
console.log(myArr.slice(1, 3)); // [1, 2]
console.log(myArr); // [0, 1, 2, 3, 4, 5] - original array remains same

// splice(a,b,c) - a is index, b is number of elements to remove, c is elements to add
console.log(myArr.splice(1, 3)); // [1, 2, 3] - returns removed elements
console.log(myArr); // [0, 4, 5] - original array modified - 1, 2, 3 removed
