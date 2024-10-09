const namen = [
  "Anna",
  "Lukas",
  "Sophia",
  "Jonas",
  "Laura",
  "Maximilian",
  "Emma",
  "Felix",
  "Mia",
  "Leon",
];

console.log(namen.length); // 10
console.log(namen[namen.length - 1]); // "Leon"
console.log(namen[0]); // "Anna"

// pop Loescht letzte Element

let deletedLastELement = namen.pop();
console.log("deletedLastELement:", deletedLastELement); // "Leon"
console.log(namen);

// splice

const deletedElements = namen.splice(1, 2, "Leon");
console.log(namen);
console.log(deletedElements); // ["Lukas", "Sophia"]

// slice

const firstFourNames = namen.slice(0, 4);
console.log(firstFourNames);
// console.log(namen);

// join, toString, String

// const arrayToString = namen.join(", ");
// console.log(arrayToString);
// // console.log(namen);

// const arrayToString2 = namen.toString();
// console.log(arrayToString2);

const arrayToString3 = String(namen);
console.log(arrayToString3);
// console.log(String(namen));

console.log(namen);
console.log(arrayToString3.toUpperCase());
