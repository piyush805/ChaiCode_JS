/**
 * Stack and Heap
 * - Stack used in all primitive types
 *   - means you get copy of it when declared
 * - Heap used in all reference(non primitive) types
 *   - means you get reference of it when declared - so any change will changed the original value
 */

let myYotubeName = "hiteshChourdharydotcom";

let anotherName = myYotubeName;
anotherName = "chai aur code";

console.log(myYotubeName);
console.log(anotherName);

// These are strings primitive data types for we get a copy of it
// and changing it does not affect the original value

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // variable gets declared the value still referencing the original

userTwo.email = "chai@google.com";
console.log(userOne);
console.log(userTwo);

// Now here we are changing the email of userTwo
// but it is also changing the email of userOne
