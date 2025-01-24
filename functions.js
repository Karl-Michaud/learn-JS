/*
functions are always as follows:

function name(param1, param2, ...) {
    statements
}

 */

function helloWorld(repeated) {
    let string = "Hello World!".repeat(repeated);
    return string;
}

console.log(helloWorld(3));

console.log(helloWorld(5, 10, 15, 200000)); // JS ignores the rest, look at .md

function testScope() {
    globalVar = 10;
}

function other() {
    testScope();
    console.log(globalVar);
}

other();