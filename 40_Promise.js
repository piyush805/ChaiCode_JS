// ++++++++ Promise - then, catch, fetch +++++++++++

// Mozilla docs - Promise object represents eventual completion (or failure)
// of an asynchronous operation and its resulting value

// What are those operations? There are a lot of more than API calls
// eg: file access, db query, cryptography, device activation and accessing
// Either we use async, await - Modern form is promise

// State - pending, fulfilled and rejected state
// We rarely create explicit promises, we are mostly consuming them

/**
 * fetch(requestUrl)
 * .then(()=>{
 * })
 * .catch(()=>{
 * })
 * .finally(()=>{
 * })
 */
// But lets create promises first - Promise are an Object - so same as making instance of class
// const promiseOne = new Promise();
// Earlier 'Q' and 'Bluebird' libraries existed to enable developers to do async operations - provides then-ables
// Performance evaluation : NodeJS native Promises are better
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task - DB calls, cryptography, network calls,
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // connects promise to its consumption
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// here do both of above things in single
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log("user", user); // entire resolve parameter passed is received here
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("user", user);
    return user.username;
  })
  .then((username) => {
    console.log("username", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  // after chaining one may need finally - which always executes that too after then and catch block
  .finally(() => {
    console.log("Promise finally resolved or rejected");
  });

const promiseFive = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      res({ username: "hitesh", password: "123" });
    } else {
      rej("ERROR: JS went wrong");
    }
  }, 1000);
});
// promise can be handled with async await as well
async function consumePromiseFive() {
  try {
    const val = await promiseFive;
    console.log("val", val);
  } catch (err) {
    // handle error by wrapping whole thing in try catch - this is like then with a  catch block
    console.log("err", err);
  }
}

// Now using fetch

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    console.log("res1", res);
  } catch (err) {
    console.log("e", err);
  }
}
// getAllUsers();

consumePromiseFive();
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log(error);
  });
