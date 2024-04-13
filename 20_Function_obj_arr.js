// When number of params are unknown, we can use rest operator
function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(10)); // 10

// When here being used in a function - it is called 'Rest Operator'
function calculateCartPrice2(...num1) {
  return num1;
}
console.log(calculateCartPrice2(10, 20, 30, 40, 50)); // [10, 20, 30, 40, 50]

// Now we have an array and we can operate on it later on with loop or something

// Rest operator should be the last parameter in the function

function calculateCartPrice3(num1, num2, ...num3) {
  // here num3 will be an array of values passed after first 2 values
  return num3;
}

const user = {
  name: "Hitesh",
  price: 199,
};
// How to pass object as a parameter to a function
function calculateCartPrice4(anyObj) {
  console.log(`User Name: ${anyObj.name} and Price: ${anyObj.price}`);
}
calculateCartPrice4(user); // User Name: Hitesh and Price: 199

// here type safety is not there - so we can pass any object - so we can use destructuring
// Need to have consistent naming
calculateCartPrice4({ name: "Same", price: 299 }); // User Name: Same and Price: 299

function loginUserMessage(username = "same") {
  if (!username) {
    return console.log("Please provide a valid username");
  }
  return console.log(`${username} just logged in`);
}
loginUserMessage(null); // Welcome Hitesh just logged in
