# Loops in JS

## While loops

```javascript
var i = 0;
while (i < 5) {
    statement
}
```

Initialise an index variable and increment as you go.

## For loops

```javascript
for (let i = 0; i < 5; i++) {
    statement
}
```

Notice that the indexer can be initialized outside but do not forget the first semicolon:
```javascript
var i = 10;
for (; i > 0; i -= 5) {
    statement
}
```
Notice that everything can be outside the loop header, but we cannot forget the semicolon.

## Do-while loops

```javascript
do {
    statement
} while (boolean);
```
Similar to other languages, the content is done before the conditions is checked.

## for ... of loops

```javascript
for (let element of iterable) {
    statement
}

```

We can use const, let or var for element but const or let are better practice.