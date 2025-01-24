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
