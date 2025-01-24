// Operations on variables
let stringTest = "initial value";
let numberTest = 0;

stringTest = "hello" * 2; // stringTest has value NaN now
console.log(typeof stringTest);
console.log(Number.isNaN(stringTest));

// To repeat a string in JavaScript or Java use the repeat() method of the string class
stringTest = "hello".repeat(10);
console.log(stringTest);

// Concatenate
stringTest = "hello" + " world!";
console.log(stringTest);

// Find length of string
var length = stringTest.length;
console.log(length);

// Get character at index string
console.log(stringTest[6], stringTest[length - 1]);

// Since strings are immutable, we can't do the following: stringTest[0] = "p"
// Also notice for an index out of bounds, we get undefined value: stringTest[-1] -> undefined

numberTest += 1;
numberTest++;
numberTest--;
++numberTest;
--numberTest;
console.log(numberTest);

// produces NaN: Not a Number since we are multiplying a string with a number. Despite the name, NaN is of type number.
// typeof NaN -> number *** NaN == NaN *** isNaN(NaN) -> True *** isNaN("stringtest") -> false *** 0/0 -> NaN
// Math.sqrt(-1) -> NaN

// Qwirks of JavaScript

console.log(10 / 0); // infinity
console.log(-10 / 0); // -infinity
console.log(0 / 0); // NaN
console.log(5 / 2); // 2.5
console.log("5" / 2); // 2.5
console.log("5" / "2"); // 2.5
console.log("hello" / 5); // NaN
console.log(NaN / 2); // NaN
console.log(10 / Infinity); // 0
console.log(-10 / Infinity); // -0
console.log(0 / Infinity); // 0

console.log(2.0 * 2.5); // 5
console.log(1.1 * 3.4); // 3.74
