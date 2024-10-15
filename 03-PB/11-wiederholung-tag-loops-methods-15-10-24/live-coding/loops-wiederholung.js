// Frage den Benutzer nach 10 Zahlen und finde mit einer While-Schleife die größte Zahl.
import rls from "readline-sync";

// let count = 0;
// let max = 0;

// while (count < 5) {
//   let number = rls.questionInt("Gib eine Zahl ein: ");
//   if (number > max) {
//     max = number;
//   }
//   count++;
// }
// console.log(max);

// for (let i = 0; i < 5; i++) {
//   let number = rls.questionInt("Gib eine Zahl ein: ");
//   if (number > max) {
//     max = number;
//   }
// }
// console.log(max);

let count = 2;
let max = 0;

// do {
//   let number = rls.questionInt("Gib eine Zahl ein: ");
//   if (number > max) {
//     max = number;
//   }
//   count++;
// } while (count < 5);
// console.log(max);

// -----------------
while (count < 5) {
  console.log("Welcome to the Big number app");

  let number = rls.questionInt("Gib eine Zahl ein: ");
  if (number > max) {
    max = number;
  }
  count++;
}
console.log(max);

// aufgabe
//Frage den Benutzer nach 5 Zahlen, speichere sie in einem Array, und berechne die Summe der Zahlen mit einer for-Schleife oder while-schleife und array zeigen.
