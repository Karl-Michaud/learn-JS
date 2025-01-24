# Classes

Class variables need to be defined in the constructor. We can make these variables either
private using the underscore or public.
Ex:

```javascript
class Example {
    constructor(author) {
        this.author = author; // public
        this._isAuther = true; // private
    }
}
```

## Getters and Setters

Getters and setters in JS are special: we use keywords (get, set).

```javascript
class Example {
    constructor(author) {
        this.author = author; // public
        this._isAuther = true; // private
    }
    
    get getAuthor() {
        return this._isAuthor;
    }
    
    set setAuthor(boolean) {
        this._isAuthor = boolean;
    }
}
```
Important to note that getters and setters are not accessed like normal methods. They are accessed like variables.
For example:

```javascript
const ex = new Example("karl");
const author = ex.getAuthor;
ex.setAuthor = "Bob";
```

You can think of them as variables, and so usually in JS, we use the same name for getters and setters:

```javascript
class Example {
    constructor(author) {
        this.author = author; // public
        this._isAuther = true; // private
    }
    
    get isAuthor() {
        return this._isAuthor;
    }
    
    set isAuthor(boolean) {
        this._isAuthor = boolean;
    }
}

const ex = new Example("karl");
ex.isAuthor = false;
const boolean = ex.isAuthor
console.log(boolean) // prints false
```


## Create an Instance of the class

We create an instance of a class using the `new` keyword just like in Java.

```javascript
const example = new Example("Karl");
```

## Inheritance

Just like in Java, JavaScript uses the `extends` keyword to signify that there will be inheritance.

## Abstract classes

There are no abstract classes in JS, but they can be mimicked!