// Older method of api call using XML HTTP request, fetch is new
/**
 * It is heavily AJAX programming based - Asynchronous JS and XML
 * Everything used to be managed by states
 * 5 Types: Unsent, Opened, Headers received, Loading, Done.
 * State value from 0 to 4.
 * Read more here: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
const xhr = new XMLHttpRequest();
// open method send the request
const requestUrl = "https://api.github.com/users/hiteshchoudhary";
xhr.open("GET", requestUrl); //Method, string
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log("Followers: ", data.followers);
  }
};
xhr.send();

// +++++++++++++++Console++++++++++++++++
/**
 * Console is not part of core JS - it is injected by its runtime
 * Official V8 engine repo available - written in C++
 * It provides Developer tools, APIs, debuggers, console etc with all the CSS to insert element here and there
 * Which enables us to use all the developer tools the way we do while development
 */

/**
 * D8 Folder - d8-console.cc, d8-console.header
 * This is where header comes from - it provides the dev tool console space where it write into file - what all we
 * pass via console statements - be it log, info, table etc.
 *
 *
 * void D8Console::Log(const debug::ConsoleCallArguments& args,
 *                     const v8::debug::ConsoleContext&){
 *      WriteToFile(nullptr, stdout, isolate_, args)
 * }
 *
 * main method - WriteToFile
 *
 */
