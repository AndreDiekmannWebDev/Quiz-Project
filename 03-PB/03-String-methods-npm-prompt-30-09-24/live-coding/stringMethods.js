const greeting = "Hello World!";

console.log("Original:", greeting);

const uppercase = greeting.toUpperCase(); // großen Buchstaben

console.log("UpperCase", uppercase); // HELLO WORLD!

const lowerCase = greeting.toLowerCase();

console.log("lowerCase:", lowerCase); // hello world!

// slice

// Wir können ein stück (slice) vom Text haben
/* Wichtig:
- Erste Index ist inklusive
- Zweite Index ist Exklusive*/

const str = "Let us testing the slice method!";

const slice = str.slice(0, 3);
console.log(slice); // Let
// console.log(str);

const firstName = "sophie";

console.log(firstName.slice(0, 1), firstName[0]);

// Wie kann ich erste Buchstabe vom firstName umwandeln zu Große Buchstabe;

const capitalizedFirstLetter = firstName[0].toUpperCase() + firstName.slice(1);
console.log(capitalizedFirstLetter); // Sophie

// Wie kann man erste Zwei Buchstaben Groß machen

const capitalizingFirstTwoLetter =
  firstName[0].toUpperCase() + firstName[1].toUpperCase() + firstName.slice(2);
const capitalizingWithSlice =
  firstName.slice(0, 2).toUpperCase() + firstName.slice(2);
//  "so".toUpperCase() + "phie" = SOphie
console.log(capitalizingFirstTwoLetter); // SOphie
console.log(capitalizingWithSlice); // SOphie

// Includes

// Prüfen wir ein Text ob enthalt anderen Text

const text = "Hallo everyone?";

console.log(`Is this text include hallo? ${text.includes("Halo")}`); // flase
console.log(`Is this text include hallo? ${text.includes("Hallo")}`); // true
console.log(`Is this text include hallo? ${text.includes("e")}`); // true

// trim
// wird lerrzeichnen von Anfang und Ende des Texts gelöschet

const car = " Audi ";
console.log("car ithout trim:" + car);
const carWithTrim = car.trim();
console.log("car with trim:" + carWithTrim);
