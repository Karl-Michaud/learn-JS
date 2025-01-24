
export class Example {
    constructor() {
        this._name = null;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

export function helloWorld() {
    console.log("hello world");
}

export const test = "cool";