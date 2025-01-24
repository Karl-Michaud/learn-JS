class animal {
    constructor(name) {
        this.name = name;
        this._legs = 0;
    }

    get legs() {
        return this._legs;
    }

    set legs(val) {
        if (typeof val === "number") {
            this._legs = val;
        }
    }

    speak() {
        console.log(`this animal has ${this._legs} legs`);
    }
}

class Dog extends animal {
    constructor(name) {
        super(name);
        this.woof = "woof";

    }

    speak() {
        console.log(`this animal says ${this.woof}`);
    }


}

const dog = new Dog("Berry");
dog.speak();
console.log(dog.name);

dog.legs = 10;
console.log(dog.legs);