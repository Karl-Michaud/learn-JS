import * as Import from "./importfrom";

// alternatively, we can have:
// import {Example, helloWorld, test} from "./importfrom.js";

const ex = new Import.Example();
ex.name = "example";
console.log(ex.name);


Import.helloWorld();

console.log(Import.test);