// fetch was so far only available in web and not in node'
// Feb 1, 2022 - merging PR of fetch request to Node

// Node Team manually wrote browser based stream APIs - LIKE AbortController
// Like setTimeout and setInterval queue - fetch has a queue of its own
// Priority queue or Microtask queue

// There are 2 parts to the execution
// 1. Data - to reserve in global memory space
    // 1.1 onFulfilled - Promise resolution - pvt arrays 
    // 1.2 onRejection - Promise rejection - pvt arrays
// 2. Access browser/node api to make network request

//arrays above store all the code, status for the request made 