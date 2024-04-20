// Types of arrays
// Among Continuous and Holey arrays(when there is no element at a place)
/**
 * 1. Small Integer SMI
 * 2. Packed Elements
 * 3. Double(float, string, function)
And there are different optimization techniques for each type of arrays 
Now, there are 6 combinations - based on what and how elements are placed
Similarly, array methods like, map, filter, forEach - all have different implementation depending on what elements it encounters 
*/
const arrOne = [1, 2, 3, 4, 5]; // Continuous(PACKED) SMI - default most optimized type
// But this is very restrictive as it allows only numbers, not even decimal
const arrTwo = [1, 2, , 4, 5]; // Holey SMI

arrOne.push(6.0); // PACKED_DOUBLE
arrOne.push("7"); // PACKED_ELEMENTS

// Now after having pushed - deleting those elements will not upgrade it. It is been downgraded, now compiler will not interpret as upgraded

arrOne[10] = 11;
// HOLEY_ELEMENTS - because gap in between (7th,)
console.log(arrOne); //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrOne.length); // 11
console.log(arrOne[9]); // undefined
console.log(arrOne[19]); // undefined

// These undefined are very costly operations here
// Bound check - when element asked is greater then length - return undefined
// But when checking within length - its problematic
/**
 * hasOwnProperty(arrOne, 9) - okay, this array doesn't have property
 * hasOwnProperty(arrOne.prototype, 9) - does its prototype parent has that property?
 * hasOwnProperty(Object.hasOwnProperty, 9) - does core Object has that property?
 *
 * And hasOwnProperty on its own is very expensive check
 */

// SMI > DOUBLE > PACKED(CONTINUOUS)
// H_SMI > H_DOUBLE > H_ELEMENTS(CONTINUOUS)
// Until there are no holes it can simply return values
// Once holes introduced, it has to check with hasOwnProperty multiple times

// If in an SMI array, we delete some element - it downgrades to H_SMI

const arrThree = new Array(3); // 3 holes, H_SMI_elements(compiler tries to optimize to best - so not h_double, h_packed)
arrThree[0] = "1"; // downgrade to HOLEY_ELEMENTS
arrThree[1] = "2";
arrThree[2] = "3";

// Better approach is
const arrFour = [];
arrFour.push("1");
arrFour.push("2");
arrFour.push("3");
// This retains it as PACKED_ELEMENTS

// Also, SMI array may downgrade as we push things like NaN, infinity - so be careful to check before pushing elements

// Recommended to use inbuilt methods of for, for-of, forEach - because JS has optimized it more cases than we possibly can with our manual methods. Also, we may need to optimize our methods for different browsers which V8, SpiderMonkey automatically take care of.
