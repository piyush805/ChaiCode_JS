// Date () gives moment in time
// starting from arbitrary point in time - 1st Jan 1970 UTC
// date calculates time in milliseconds number

let myDate = new Date();
console.log(myDate); // 2024-03-31T13:56:35.567Z
console.log(myDate.toString()); // Sun Mar 31 2024 19:27:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Mar 31 2024
console.log(myDate.toTimeString()); // 19:27:36 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 3/31/2024, 7:27:08 PM

console.log(typeof myDate); // object

// get specific date
let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate); // 2024-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // Tue Jan 23 2024
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date(2024, 0, 23, 5, 3);
console.log(myCreatedDate2); // 2024-01-22T23:33:00.000Z
console.log(myCreatedDate2.toDateString()); // Tue Jan 23 2024
console.log(myCreatedDate2.toLocaleString()); // 1/23/2024, 5:03:00 AM

let myCreatedDate3 = new Date("2024-01-23"); // YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString()); // 1/23/2024, 5:30:00 AM

let myCreatedDate4 = new Date("01-04-2023");
console.log(myCreatedDate4.toLocaleString()); // 1/4/2023, 12:00:00 AM

// +++++++++++++++++++++++++ Time stamp +++++++++++++++++++++++++

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1698697836567 - gives time in milliseconds from 1st Jan 1970
console.log(myCreatedDate.getTime()); // 1705948200000 - gives time in milliseconds from 1st Jan 1970 - of that date
console.log(Math.floor(Date.now() / 1000)); // 1711894524

// +++++++++++++++++++++++++ Date Methods +++++++++++++++++++++++++
let newDate = new Date();
console.log(newDate); // 2024-03-31T14:15:47.126Z
console.log(newDate.getFullYear()); // 2024 // getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds()

// +++++++++++++++++++++++++ Internationalization +++++++++++++++++++++++++

let myDate2 = new Date();
// 1st arg is time zone declaration - like en-US, ar-EG, and so on
myDate2.toLocaleString("default", {
  weekday: "long",
  month: "short",
  year: "2-digit",
});


