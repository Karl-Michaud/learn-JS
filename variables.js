// One way to declare is using var. It can be any type.
// var can be used in the scope of the whole program. So global scope.
var myName = "JavaScript"
myName = "JavaScript is cool"

// Another is using the let keyword
// Only be used in the scope of where it is initialized. So local scope.
let ourName = "JavaScript is made with let"

// Another way is using the const keyword
// variables declared using const can never be changed. They have global scope.
const pi = 3.14

// if pi is changed then it will produce an error.


// Use of semicolon optional but suggested (good practice)
var a; // has value null when initialized
console.log(a); // prints undefined

var c = null;
console.log(c); // prints null

var b = 2;
a = 10;

console.log(a);
console.log(b);

b = a;

console.log(a);
console.log(b);

/**********************************************************************************************************************/

// String with escape character

var myString = "JavaScript is cool as they all screamed in unison: \"unc!\"";
// You tell JS that there is an escape character and so "...."test"...." causes and error but "....\"test\"...." doesn't
console.log(myString);

// easier
var myString2 = 'this is a string with double "" quotes and no escape characters';

// If I want to use both single and double quotes in a string

var myString3 = `this string has both ' ' and " " quotes and no escape characters`;


/**********************************************************************************************************************/

var myArray = [];
myArray.push(0);
console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray.at(0));

// pop removes last element, shift removes first element and unshift adds at 0th index
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.pop();
console.log(myArray);