// Immediately Invoked Function Expression
// UseCase: Connection to db as soon as app loads
// Prevent pollution from global scope - so we make scope of our own

(function chai() {
  console.log("this is IIFE");
})();
// Instead of declaring a function and calling it immediately, we can use IIFE - where we replace that function name with entire function  definition itself

// Here there can be arrow function as well - Unnamed IIFE

(() => {
  console.log("this is IIFE in arrow function");
})();

// Semi colon at the end is important for execution to know when to stop - before reading next line separately from IIFE
// Prettier automatically adds semi colon at the end of the line - but one should know that without it - there will be error

// It can take arguments as well
(function chai(name) {
  console.log(`this is IIFE with arguments - ${name}`);
})("Hitesh");
// The same way, a  function would be declared with args and we pass params
// Same here - it looks weird because it is all written together

//
