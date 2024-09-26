//  let , const , (var nicht benutzen)

let greeting = "hello world!"; // greeting hat value string ("hello world!")
console.log(greeting);
console.log(typeof greeting);

let age = 30;
console.log(age);

const firstName = "Norman"; // constant, variable Name : camel case
const second_name = "Bach"; // variable name : snake case

age = 20;
// firstName = "Adel"; Type error, constant variable
console.log(age);

// var : scope, hoisting

// console.log(num1); // error weil es wurde danach defeniert
let num1 = 34;
// let num1 = 30;
console.log(num2); // undefined aber kein Error weil var wurde benutzt
var num2 = 50;
// var num2 = 40; // Kein Error

let fullName; // undefined
// const fullName; // Error weil schon deklarieret
// let fullName ; Error weil schon deklarieret
// fullName = "John Doe";
console.log(fullName); //

let x = 100;
console.log(x);
x = 10;
console.log(x);
