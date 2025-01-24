# Objects

```javascript
var object = {
    "name": camper,
    "hello": 4,
}
```

Objects in JS are just like dictionaries in other languages: key/values

We cane either do `object.key` if the key is a string with no spaces. Anything else, we do `object[key]`.

- delete item: `delete object[key];`
- check if property (key/value pair) exists: `object.hasOwnProperty(key);` -> true if exists, false otherwise

## Destructiveness assignment

Instead of assigning one by one each element of an object to variables:

```javascript
var ex = {a: 1, b: 2, c: 3};
let a = ex.a
let b = ex.b
let c = ex.c
```

You can shorten the assignments and take less lines by doing:

```javascript
var {a: x, b: y, c: z} = ex; // So x = 1, y = 2, c = 3
```

## Template Literals

```javascript
let a = 10;
const str = `Hello, the value of variable a is ${a}`;
```
Note: MAKLE SURE TO USE BACKSTICK