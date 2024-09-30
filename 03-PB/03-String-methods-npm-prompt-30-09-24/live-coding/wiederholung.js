// String

const firstName = "John"; // Double
const lastName = '"Doe"'; // single
const lastName2 = '"Doe"'; // single
// const escapeChar = "\"Doe\""; // single

let age = `46`; // Backticks
age = 46;
console.log(firstName, lastName, age);

// const text = "Hallo, How are you today ?\nWhere are you ?"; // \n Neue Zeile Text
const text = "Hallo, How are you today " + firstName + " ?\nWhere are you ?"; // \n Neue Zeile Text

const text2 = `Hallo, How are you today ${firstName} ?
Where are you ?`;
console.log(text);
console.log(text2);

let num = 100;

let num2 = Math.ceil(num / 3);

console.log(num2); // 34

let num3 = Math.round(num / 3);
console.log(num3); // 33
