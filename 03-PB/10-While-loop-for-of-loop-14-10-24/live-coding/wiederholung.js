// 1. Schreibe ein Programm, die ein Text zählt, wie oft der Buchstabe "a" im Text vorkommt.

let text = "Today is an amazing day because it's monday ;)";

/*
for(zählt die länge des texts){
wenn(buchstabe a ist){
addieren wir eins fuer ein variable
}
}
ziegen wir wie viel a haben wir im text
*/
let counter = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") {
    counter++;
  }
}
console.log(`im Text befindet ${counter} a`);

// 2.  Erstelle ein Array mit beliebigen Zahlen und berechne die Summe aller Elemente im Array.

let numbers = [3, 6, 9, 14, 50, 60];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  //   sum = sum + numbers[i]
  // erste iteration sum = 0 + 3
  // 2 iteration sum = 3 + 6
  // 3 iteration sum = 9 + 9;
}

console.log(sum);

// 3. Schreibe ein Programm, das eine Zeichenkette vom Benutzer abfragt und zählt, wie viele Großbuchstaben in der Zeichenkette vorkommen.

let userMsg = "Hallo John, Wie geht es dir heute ?";

/*
erstell ein variable
for(durch den text zu gehen){
wenn(Grossbuchstabe ist){
zaehlen
}
}
ziege der Zahl
*/

let upperCaseCount = 0;

for (let i = 0; i < userMsg.length; i++) {
  if (
    userMsg[i] === userMsg[i].toUpperCase() &&
    userMsg[i] !== userMsg[i].toLowerCase()
  ) {
    upperCaseCount++;
  }
}

console.log(upperCaseCount);

// 4. Schreibe ein Programm, das ein Rechteck aus Sternen (*) mit einer Breite und Höhe druckt, die vom Benutzer vorgegeben werden. Verwende dafür verschachtelte for-Schleifen.
// Breite = 3, Hoehe = 2
// * * *
// * * *

let breite = 6;
let hoehe = 6;

for (let i = 0; i < hoehe; i++) {
  let zeile = "";
  for (let j = 0; j < breite; j++) {
    zeile += "* ";
  }
  console.log(zeile);
}
// for (let i = 0; i < 3; i++) {
//   console.log(`i ausserhalb : ${i}`);

//   for (let j = 0; j < 2; j++) {
//     console.log(`i:${i}, j:${j}`);
//   }
// }

// let nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < nestedArray.length; i++) {
//   console.log(nestedArray[i]);
//   for (let j = 0; j < nestedArray[i].length; j++) {
//     console.log(nestedArray[i][j]);
//   }
// }
