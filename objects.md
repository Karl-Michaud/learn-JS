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