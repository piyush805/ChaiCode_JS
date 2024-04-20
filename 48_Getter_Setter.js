class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    // RangeError: Maximum call stack value size exceeded
    return this.password.toUpperCase();
  }
  set password(value) {
    // RangeError: Maximum call stack value size exceeded
    this.password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "123");
console.log(hitesh.password);

// When we define the setter which assigns value to a property again which is also being assigned in constructor - then RangeError: Maximum call stack value size exceeded

// So we define it a bit differently with underscore= this is standard practice
// Here we have overridden getting and setting password from constructor to explicit getter and setters
// ++++++++++++++++ Class based syntax
class User1 {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}hitesh`;
  }
  set password(value) {
    this._password = value;
  }
}
const hitesh1 = new User1("h@hitesh.ai", "123");
console.log(hitesh1.email); // H@HITESH.AI
// ! When we print object we see field _email, _password, and normal values but when we read particular fields we get the values through getter

// ++++++++++++ This is older(Function based) syntax of doing getter and setter++++++++++++++
function User2(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const hitesh2 = new User2("chai@chai.ai", "123");
console.log(hitesh2.email); // CHAI@CHAI.AI

// ++++++++++++Object based syntax of getter and setter ++++++++++++++
const User3 = {
  _email: "h@hc.com",
  _password: "abc",
  // This is not intuitive as function have been defined without key value pairs inside an object
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User3); // Factory function - create an object on basis on User - instead of using 'new'
console.log(tea.email); // H@HC.COM; We are able to access email property here although there was only _email everywhere inside User3
// So JS uses these get and set keyword with name 'email' on top of properties _email
// Using underscore is standard practice to denotes private properties (i.e. they cannot be accessed directly outside the class)
// With get and set keyword JS matches those functions on top of those properties and when we console log outside the Object, we are actually invoking those getter and setter and not the property
// So these setter and getter are treated as property and not method and user outside doesn't know that any property by name _email exists
// Like length property in an array - which is like getter - it does calculation as a function and returns value - it doesn't just store the length statically

// ES2022 - private property proposes using hash(#) instead of underscore to denote private  private properties
// Currently , we ASSUME underscore as private but there is actually nothing to stop any method from accessing it outside. We override with different name using getter and setter - so that users outside access those by only using those functions
