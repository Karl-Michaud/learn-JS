# Conditions Statements

Like in Java, conditions in JavaScript are of the form:

```javascript
if (boolean) {
    statement
} else if (boolean) {
    statement
} else {
    statement
}
```

- equality: ==
- strict equality: ===

Notice that the equality sign attempts to convert the value to a common time to compare (autobox/unbox). This means that
the following are true `3 == '3'` and `3 == 3`. The strict equality does not do the type conversion, thus `3 === '3'` evaluates to false,
but `3 === 3` evaluates to true

- inequality: !=
- strict inequality: !==

Similarly, the normal inequality attempts to convert both to the same type and then compare.
So `'5' != 5`  is false and `3 != 5` is true but `'5' !== 5 ` is true and `3 != 5` is true.
Notice: `'5' != 5`  is false AND `'5' !== 5 ` is true

- And operator: &&
- Or operator: ||


## Switch statement

```javascript
switch(val) {
    case 1:
        answer = ...;
        break;
    case 2:
        answer = ...;
        break;
    .
    .
    default: ...
}
```