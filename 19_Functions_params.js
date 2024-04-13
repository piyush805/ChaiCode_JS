// Function is a block of code that can be called and executed from anywhere in the program.
func(); // accessing the function before declaration is possible in JS
function func() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("L");
  console.log("O");
}
func(); // H E L L O

// func();
// func2(); // Not possible because func2 is a variable and not a function
var func2 = function () {
  console.log("H");
};
func3(); // Similar to func2, func3 is a variable and not a function
var func3 = () => {
  console.log("H");
};
func3(); // H

// Function definition - has parameter and when called - arguments are passed
function addTwoNumbers(number1, number2) {
  number1 + number2;
}

// When we dont pass expected number of arguments, the missing arguments are considered as undefined
console.log(addTwoNumbers(1)); // NaN - because number2 is undefined
