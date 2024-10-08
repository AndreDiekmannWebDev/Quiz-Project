let string = "Hallo!";
// string.length
// string[0]
// Index

const tiere = ["schlange", "Ziege", "Affe"];
const zahlen = [1, 4, 7, 4, 6, 90];
const produktInfo = [
  "Iphone",
  16,
  "Guter Zustand",
  1200,
  true,
  ["Rot", "Blau", "Schwarz"],
  { reserviert: true },
];

console.log(produktInfo);
console.log(tiere.length); // 3
console.log(tiere[1]); // "Ziege"
console.log(typeof tiere); //object
// string[0].toLowerCase() + string.slice(1);
let newWord = string[0].toLowerCase() + string.slice(1);

console.log(newWord); // hallo!
tiere[0] = "Elefant";
console.log(tiere); // ["Elefant", "Ziege", "Affe"]
// tiere = "try"; // error
produktInfo[5][0] = "weiß";
console.log(produktInfo);
console.log(produktInfo[0][0]); // I

produktInfo[0][0] = "i";
console.log(produktInfo[0]); // Iphone

console.log("\n\n");

const arr = new Array(1, 2, 3); // sehr selten
console.log(arr); // [1,2,3]
