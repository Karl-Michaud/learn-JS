var dog = {
    "name": "bush",
    "age": 8,
    "gender": "male",
    "has space": "yessss"
};

console.log(dog);
console.log(dog.name);

if (dog.hasOwnProperty("has space")) {
    console.log(dog["has space"]);
} else {
    console.log("booooom");
}


var ex = {a: 1, b: 2, c: 3, 2:"hello"};
let a = ex.a
let b = ex.b
let c = ex.c
let d = ex[2]

console.log(c);
console.log(b);
console.log(a);
console.log(d);


var {a: x, b: y, c: z} = ex;
console.log(x);
console.log(y);
console.log(z);


let zzz = 10;
const str = `Hello, the value of variable a is ${zzz}`;
console.log(str);