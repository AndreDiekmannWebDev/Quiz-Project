// filter, sort, reduce, map, forEach

const numbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10]

const doubleNum = numbers.map((n) => {
  return n * 2;
});

console.log(doubleNum);

console.clear();

const words = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]

const capitalizedWords = words.map((x) => x.toUpperCase());

console.log(capitalizedWords);

words.forEach((item) => {
  console.log(item);
});

console.clear();

const students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 85 },
];
// Expected output in console: Alice, Charlie

students.forEach((x) => {
  if (x.score >= 80) {
    console.log(x.name);
  }
});

const orders = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 3 },
  { price: 20, quantity: 1 },
];
// Expected output: 85

// let total = 0;
// orders.forEach((order) => {
//   total += order.price * order.quantity;
// });
// console.log(total);

const total = orders.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);
console.log(total);
