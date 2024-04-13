// After getElement we can get its attributes one by one or all
// id, className,
// getAttribute('class'),
// setAttribute('class', 'new-class') // this overrides previous attributes

// title.style.backgroundColor = "red"; // this is how we can change the style of an element

// How to get content
// innerHTML, innerText, outerHTML, outerText, textContent
// * innerText = actual visible text
// * textContent = all the text including hidden text
// * innerHTML = includes any HTML tags used in the text

// Selecting element
// getElementById, getElementsByClassName, getElementsByTagName,
// querySelector(returns first matching),
// querySelectorAll(returns all matching as Node List)
// Eg: document.querySelector('input[type="password"]')

// querySelector chaining
/**
 * const form = document.querySelector('form');
 * const input = form.querySelector('input[type="password"]');
 */

// Node List has forEach but no map - so we can do same operation by accessing each element but it requires us to use foreach - or convert from node list to array
// const arr = Array.from(nodeList);

// HTMLCollection has - item, length, namedItem but nothing for looping
// const arr = Array.from(htmlCollection);
