// Interview question like value of Math.pi is 3.145..., how can i make it to be 4 or 3, if so how or why not?

/**
Object.getOwnPropertyDescriptor - tells lot of hidden things about Object
*/
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
// Both times value remains the same without error

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/**
 * {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */
// There are hardcoded checks which makes this properties unchangeable
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailble: true,
};
console.log(chai);
Object.keys(chai).map((key) => {
  console.log(`${key}: ${chai[key]}`);
  /**
   * name: ginger chai
   * price: 250
   *isAvailble: true */
});
// This is an Object, this doesn't have Property descriptor yet
// Earlier we logged properties of PI in math library
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**
 * {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
 */
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**
 * {
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
 */
chai.name = "something";
console.log(chai);
Object.keys(chai).map((key) => {
  console.log(`${key}: ${chai[key]}`);
  /**
   // Here name is not enumerable anymore, so it doesnt come inside loop
   * price: 250
   *isAvailble: true */
});
// so this way we can make objects iteratable, enumerable etc by setting there property descriptors
