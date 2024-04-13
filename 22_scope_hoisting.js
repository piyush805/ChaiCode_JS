function one() {
  const username = "Hitesh";
  two();
  function two() {
    const website = "youtube";
    console.log("username is", username);
  }
  two();
  console.log("website is ", website);
}
one();

// Function call have a separate call stack - which takes in all the variable defined and being accessed in that scope which function in being executed
// Once the function is executed - the call stack is popped out and all the variables are removed from the memory
// So, if we try to access a variable outside the function - it will throw an error

// Hoisting - is a mechanism in JS where variables and function declarations are moved to the top of their scope before code execution
// It is done by the JS engine - so that we can use the variables before they are declared
// But it is not recommended to use it - as it makes the code less readable
// It is recommended to declare the variables and functions at the top of the scope

// ++++++++++Normal function vs function expression ++++++++++++
// normal function is hoisted to top - so it can be accessed before it is declared
// while function expression is not hoisted - so it cannot be accessed before it is declared

addTwo(4); // This will give error
const addTwo = function (num) {
  return num + 2;
};
