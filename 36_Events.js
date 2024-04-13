// JS is sequentially run language
// But in events we sometimes ignore this where code is not executed line by line by on events only

// Approach 1: Attaching event in the HTML element itself
/**
 * <button onclick="alert('Button clicked')">Click me</button>
 * This is not scalable and not recommended
 * In React it works - because components are re-usable
 */

// Approach 2: Attaching event in the JS file
document.getElementById("btn").onclick = function () {
  alert("Button clicked");
};

// Approach 3: Attaching event using addEventListener

// ON click event like this has problem because here we don't get a lot of info - we should user event listener instead - they provide propagation ability
// Event listener is a method that attaches an event handler to the specified element without overwriting existing event handlers
document.getElementById("btn").addEventListener("click", function (e) {
  alert("Button clicked");
});
// Here, event object e has lot of information
// 3rd argument is optional - if true, the event handler is executed in the capturing phase - false in the bubbling phase
/**
 * Here important things are:
 * 1 - type - keyboard, mouse etc
 * 2 - timeStamp - time date activity
 * 3 - defaultPrevented - if default action is prevented - mostly used in form submission, or anchor tag navigation
 * 4 - target, toElement, srcElement - where the event is originated
 * 5 - clientX, clientY - position of the mouse
 * 6 - screenX, screenY - position of the screen
 * 7 - key, keyCode - key pressed - altKey, ctrlKey, shiftKey - if they are pressed
 */

// ++++++++++++++++++++++++++++++ Event Propagation ++++++++++++++++++++++++++++++
/**
 * 2 contexts - capturing and bubbling
 * default - 3rd argument is false - bubbling
 * sometimes we want to capture the event before it reaches the target element - then we use true
 * - This comes in handy when we have nested elements - like a button inside a div or clicking <li> element inside <ul>
 * *- When bubbling then event is first captured by the innermost element and then propagated to the outer elements
 * *- When capturing then event is first captured by the outermost element and then propagated to the inner elements
 * *- we use e.stopPropagation() to stop the event propagation for both and treating both nested elements as separate entities
 * *- e.preventDefault() - to prevent the default action of the event
 */

// ++++++++++++++++++++++++++++++ Tracking elements ++++++++++++++++++++++++++++++
