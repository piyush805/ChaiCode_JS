// setTimeout, setInterval,
// clearTimeout, clearInterval - pass in reference of setTimeout, setInterval to stop - on some event
const sayDate = function (str) {
  console.log(str, Date.now());
};

const intervalId = setInterval(sayDate, 1000, "hi"); // 3rd param when we want to pass some arg into function on which we are calling interval

// clearInterval(intervalId); - event based
