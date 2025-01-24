// Print using console.log
console.log("Hello World from JavaScript!")

function testScope() {
    let i = "function scope";
    if (true) {
        i = "block scope";
        // let i = "block scope"; would make it function scope
        console.log(i);
    }
    console.log(i);
    return i;
}
testScope();