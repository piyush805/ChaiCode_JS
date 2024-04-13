// Document Object Model (DOM)
// What is the model of document made up of <objects>?
// console.log(window.document); or just console.dir(document);
// Or to see just the HTML Node part - console.log(document);

/**
 * window
 * - document
 *   - html
 *     - head
 *       - title - text Node
 *       - meta - attribute
 *     - body
 *       - div - attribute
 *         - h1 - attribute, text
 *         - p - text
 *
 */
// Important thing is to know relationship between the nodes and how to reach one from other
// console.log(document.childNodes); // [html] - returns a NodeList
// console.log(document.childNodes[0].childNodes); // [head, body] - returns a NodeList

// it returns an HTML Collection - which is similar to an array but not an array
// Node collections is also an array-like object - it does not have array methods available


