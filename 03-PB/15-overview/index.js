console.log("Hi");
let x = 5;
if (3 < 4) console.log("Nice");
for (let i = 0; i < 5; ) {
  console.log(i);
  i += 2;
}
do {
  console.log("Hello");
} while (false);

/*
+
++
+++
++++
*/
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "+";
  }
  console.log(str);
}
let shape = "";
for (let i = 0; i < 5; i++) {
  shape += "+";
  console.log(shape);
}
console.log(`
    +
    ++
    +++
    ++++`);
console.log(Math.round(Math.random() * 10));
const arr = [1, 2, 3, 4, 5];
arr.unshift(6);
arr.push(88);
console.log(arr);
console.table(arr);
// console.clear();

function sum(a, b) {
  console.log(a + b);
}
// sum(335, 3);
console.log(sum(3, 3));

// NaN
// undefined
// null
let something = null;
console.log(something);
something = "hi";
console.log(something);

console.log(parseInt("3 cool"));
console.log(parseFloat("3.334hadi"));

1 < 5 ? console.log("yes") : console.log("no");
