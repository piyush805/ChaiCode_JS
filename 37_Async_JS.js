// Blocking vs Non blocking code
// JS always runs in an env and never in a runtime env and never alone
// so we never feel that it is a single threaded language -
// although it is sync language which executes code line by line only

// Block execution example like reading from a file before doing something with it
// Fetch data from backend before doing some operation and rendering it

// JS engine is made up of memory heap and call stack
// Runtime env: has more than just engine - it  can be node or Web API
// In Node there is no document object model
/**  Apart from APi - there are
 * Task Queue and
 * High Priority(or Promise) Queue
 */

// Usual process is to load functions in stack and over and stack gets empty
// But things like setTimeout, setInterval - a `Register callback`(outside execution context) saves them to remind to execute their callback when timer is over
// When done - they get pushed into TASK queue and then into stack(which is in execution context) to get executed - it gets into stack and gets executed immediately because FIFO

// Even 0 timer setTimeout will not get executed immediately since it goes through register and High priority queue before finally getting executed via stack

// Promises - have the same callback thing but they have been designed to give higher priority - in the HIGH PRIORITY QUEUE
