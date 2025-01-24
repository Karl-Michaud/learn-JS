var i = 0;
var list = [];
while (i < 5) {
    list.push(i);
    i++;
}
console.log(list);

for (var i = 5; i < 10; i++) {
    list.push(i);
}

console.log(list);

var j = 0;
for (;j < 10; j++) {
    console.log(list[j]);
}

for (let i = 0; i < 10; i += 2) {
    console.log(JSON.stringify(list[i]));
}

var i = 10
do {
    console.log(list[i - 1]);
    i++;
} while (i < 10);


for (let element of list) {
    console.log(element);
}

for (const element of "helloworkd") {
    console.log(element);
}
