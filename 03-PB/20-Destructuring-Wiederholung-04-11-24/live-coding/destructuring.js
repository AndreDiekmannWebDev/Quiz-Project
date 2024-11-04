// Destructuring an Array

const fruits = [
  "Orang",
  "Banane",
  "watermelon",
  "durian",
  "jackfruit",
  "lychee",
  "mangosteen",
  "rambutan",
];

// const firstItem = fruits[0];
// console.log(firstItem);

const [first, second, third, ...rest] = fruits;
console.log("first", first);
console.log("second", second);
console.log("third", third);
console.log(rest);

// Destructuring an object

const car = {
  model: "Audi",
  speed: 220,
  price: 85000,
  owner: "Giaco",
};

const { model, speed, price, ...rest1 } = car;
console.log(model);
console.log(car.model);
console.log(rest1);

function printCarInfo({ speed, price, owner }) {
  console.log(`speed: ${speed}`);
}
printCarInfo(car);
function printArray([firstItem, secondItem]) {
  console.log(firstItem, secondItem);
}
printArray(fruits);

function testDestructuring({ model, ...rest }) {
  console.log(rest);
}
testDestructuring(car);

console.log(Object.keys(car)); // Array Keys
console.log(Object.values(car)); // Array values
console.log(Object.entries(car)); // Array arrays key value paires
