// function decleration

console.log(greet("Hoisting test"));

function greet(person) {
  return `Hello ${person}`;
}

console.log(greet("Anna"));

// function expression

// console.log(greetPerson("Hoisting test")); // error
// Anonym
const greetPerson = function (person) {
  return `Hello ${person}`;
};

console.log(greetPerson("John"));
console.log(greetPerson); // function

// Arrow function

// arrowFunction("test hoisting"); not hoisted

// const arrowFunction = (msg) => {
//   console.log(msg);
// };

// we can omit the parentheses (weg lassen)
// const arrowFunction = msg => {
//   console.log(msg);
// };

// can omit curly braces
const arrowFunction = (a, b) => a * b;
// const arrowFunction = (a, b) => {
//   return a * b;
// };

const result = arrowFunction(1, 2);
console.log(result);

// drei nummern => summe

const sumNums = (a, b, c) => a + b + c;
function sumNums1(a, b, c) {
  return a + b + c;
}
console.log(sumNums(1, 2, 3));
console.log(sumNums1(1, 2, 3));
