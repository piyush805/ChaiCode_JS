const course = {
  courseName: "JavaScript",
  courseDuration: "6 months",
  courseType: "Web Development",
};
// Destructuring - in order to not have to repeat the object name in every time accessing its keys-values
const { courseName, courseDuration, courseType } = course;

// renaming the keys in destructuring
const { courseName: name, courseDuration: duration, courseType: type } = course;

/**  Object vs json
 JSON is a string representation of an object
{
  keys: ["key1", "key2", "key3"], - writing plain like this is not valid- since this is Js file
}
// When given a name to this - it becomes an object
// In JSON, both keys and values are strings
*/
