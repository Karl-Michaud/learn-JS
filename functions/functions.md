# Functions

Functions are always of the form:

```javascript
function name(param1, ... ,paramN) {
    statements
} 
```

An interesting thing about JavaScript is that if the function is defined to only have one parameter,
and we give multiple arguments, then JS will only look at only the first call.
For example: `func(10)` is equivalent to `func(10, 13, 200000)`

# JavaScript: `let` vs `var` vs No Keyword

In JavaScript:

- **`let`**:
    - **Block-scoped**: Only accessible within the block it's defined (e.g., inside loops or conditionals).
    - Can be reassigned but **cannot be redeclared** in the same block.

- **`var`**:
    - **Function-scoped**: Accessible throughout the function in which it’s defined, or globally if defined outside any function.
    - Can be reassigned and **redeclared** within the same function or globally.

- **No keyword (implicit global)**:
    - If you assign a value to an undeclared variable, it becomes a **global variable** (not recommended).
    - **Not scoped** and can lead to unintended global state.

### Example:

```javascript
// let example
let a = 10;
a = 20;  // Reassignable

// var example
var b = 10;
var b = 20;  // Redeclared within the same scope

// No keyword (bad practice)
c = 10;  // Implicitly global
```

### Global variables in functions

Stack Frame and Execution Context: When you call a function, it creates an execution context (or stack frame). Once the function completes, its execution context is removed from the stack, but any global variables it created remain in the global scope.
This means that the following code works and will in fact print 10:

```javascript
function testScope() {
    globalVar = 10;
}

function other() {
    testScope();
    console.log(globalVar);
}

other();
```

We can think of the global variables existing separate from the stack frame when created. Global variables are stored in the global execution context, which can be thought of as a shared space that all code in the global scope can access.

## Anonymous functions

```javascript
var magic = function() {
    return 10; // as an example
}
```

OR

```javascript
var magic = () => {
    return 10;
}
```

OR

```javascript
var magic = () => 10;
```