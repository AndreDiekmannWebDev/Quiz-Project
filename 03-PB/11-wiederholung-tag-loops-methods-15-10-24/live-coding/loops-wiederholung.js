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

// let count = 2;
// let max = 0;

// do {
//   let number = rls.questionInt("Gib eine Zahl ein: ");
//   if (number > max) {
//     max = number;
//   }
//   count++;
// } while (count < 5);
// console.log(max);

// -----------------
// while (count < 5) {
//   console.log("Welcome to the Big number app");

//   let number = rls.questionInt("Gib eine Zahl ein: ");
//   if (number > max) {
//     max = number;
//   }
//   count++;
// }
// console.log(max);

// aufgabe
//Frage den Benutzer nach 5 Zahlen, speichere sie in einem Array, und berechne die Summe der Zahlen mit einer for-Schleife oder while-schleife und array zeigen.

// let numbers = []; // [1,2,3,4,5]
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//   let newNum = parseInt(rls.question(`Gib eine Zahl ${i + 1} ein:`));
//   numbers.push(newNum);
// }
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(`Die Summe meinem Array ${numbers} ist : ${sum}`);

// Frage den Benutzer nach 5 Wörtern und gib das Array in umgekehrter Reihenfolge mit einer for-Schleife aus.

let words = [];
// for (let i = 0; i < 5; i++) {
//   words.push(rls.question("Gib ein Wort ein :"));
// }

// for (let i = words.length - 1; i >= 0; i--) {
//   console.log(words[i]);
// }
// let i = 0;
// while (i < 5) {
//   words.push(rls.question("Gib ein Wort ein :"));
//   i++;
// }
// console.log(words.length); // 4
// console.log(i); // 5
// while (words.length > 0) {
//   console.log(words.pop()); //
// }
// console.log(words);

// Erstelle ein verschachteltes Array mit mindestens 3 Zeilen und 3 Spalten und finde die kleinste Zahl mit einer verschachtelten for-schleife.

let nestedArray = [
  [3, 5, 7, -1000],
  [2, 8, 6],
  [1, 9, 4],
  [0, -100, -500],
];
let min = nestedArray[0][0];
let sum = 0;
for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    if (nestedArray[i][j] < min) {
      min = nestedArray[i][j];
    }
    sum += nestedArray[i][j];
  }
}
console.log(min);
console.log(sum);
