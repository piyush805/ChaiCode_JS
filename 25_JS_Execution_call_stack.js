// JS Execution context
// JS runs program in 2 phases

/**
1 Global Execution(Env) Context - EC
        - EC is put inside `this` object
        - Different from browser and in node
        - In browser, `this` is window object
        - In Node, there is no window object
        - This executes all in a single thread - JS is a single threaded    
1 Function Execution Context - FEC
1 Eval Execution Context - EC - also mentioned in some documentations 
        - Eval itself is part of GEC - so this is only for interview purposes
*/
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
/* 
1. Memory Creation Phase / Creation phase- 
    - Here, only creation and allocation and not execution
    - GEC is created and put in memory - put in `this`
    - Variables are created and assigned undefined 
        - let val1, let val2 = undefined
        - function addNum - definition
        - let result1, result2 = undefined
        - This was 1st cycle of memory creation phase

2. Execution phase
    - val1 assigned 10
    - val2 assigned 5
    - addNum is just function definition and no execution is happening is skipped to end of function
    - result1 has to hold value by executing addNum with val1 and val2 - 
        - New execution context is formed - FEC
            - It has its own memory creation(variable env) and execution phase(execution thread) - until return operation
            2.1  num1, num2, total are crated and assigned undefined
            2.2  Execution phase - 
                - num1 assigned 10, 
                - num2 assigned 5, 
                - total assigned 15
                - return back to parent execution context - GEC - this FEC now gets destroyed
    - result1 assigned 15
    - result2 again calls for addNum with 10 and 2 - 
        - New FEC is created
            - num1, num2, total are crated and assigned undefined
            - Execution phase - 
                - num1 assigned 10, 
                - num2 assigned 2, 
                - total assigned 2
                - return back to parent execution context - GEC
    - result2 assigned 12
*/

// +++++++++++++++ Call Stack +++++++++++++++

// Function calls one by one go into context and then return back to parent context
// When nested function calls are there, they are put in stack and then executed
// Stack has LIFO - Last In First Out
