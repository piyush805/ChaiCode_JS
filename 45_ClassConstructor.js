// Classes only after ES6 - only syntactical sugar
// Constructor base in order to control the new keyword

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword()); // 123abc

console.log(chai.changeUserName()); // CHAI

// +++++++++++++++++ Behind the scene in older syntax +++++++++++++++++

User.prototype.encryptPassword = function () {
  this.username = username;
  this.email = email;
  this.password = password;
};

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "tea@gmail.com", "123");
console.log(tea.encryptPassword()); // 123abc
console.log(tea.changeUserName()); // TEA

// ++++++++++++++++++++++++++++ INHERITANCE ++++++++++++++++++++++++++++++

class User1 {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// sugar coating proto-typing with 'extends'
class Teacher extends User1 {
  constructor(username, email, password) {
    super(username); // sugar coating of 'call(this, username)' with the 'super(username)' keyword for Parent(here, User)
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chaiTeacher = new Teacher("tea", "tea@teacher.com", "123");
chaiTeacher.addCourse(); // A new course was added by tea
const masalaChai = new User1("masalaChai");
masalaChai.logMe(); // USERNAME is masalaChai

console.log(chaiTeacher instanceof Teacher); // true
console.log(chaiTeacher instanceof User1); // true
console.log(masalaChai instanceof Teacher); // false

// +++++++++++++++++++++++ STATIC PROPERTIES(PROPS) +++++++++++++++++++++++++++++++

class User2 {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  static createId() {
    // static keyword prevents methods from being inherited to every instance instantiated from this class
    return `123`;
  }
}
const hitesh = new User2("hitesh");
console.log(hitesh.createId()); // TypeError: hitesh.createId is not a function

class Teacher1 extends User2 {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher1("iphone", "i@phone.com");
console.log(iphone.createId()); // TypeError: iphone.createId is not a function
