// For schleifen (loops)

/*
Syntax :
    - Einem Startpunkt (Initialisierung)
    - Einem Endpunkt (Exit-Bedingung)
    - Einem Fortschrittsschritt
    for(initialisierung;Exit Bedinung; Fortschrittsschritt){
    body mein Loop/ Block Scope
    }
 */

// let counter = 0;

// console.log(counter);
// counter++;

// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
for (let count = 0; count <= 5; count++) {
  console.log(count);
}

for (let i = 100; i <= 105; i++) {
  console.log(i);
}

console.log("-------");

// 10, 12, 14,16, 18, 20

// for (let i = 10; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// i = i+ 2 === i += 2
for (let i = 10; i <= 20; i += 2) {
  console.log(i);
}

console.log("-------");
// 5,4,3,2,1,0
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

console.log("-------");

let sum = 0;

for (let i = 0; i <= 5; i++) {
  console.log(`Adding ${i} to ${sum}`);

  sum += i;
}
console.log("Final Sum:", sum);

console.log("-------");

// ....*....*....*....*....* // 50 Char

let string = "";

// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     string += "*";
//   } else {
//     string += ".";
//   }
// }
// console.log(string);

for (let i = 0; i < 10; i++) {
  string += "....*";
}
console.log(string);

console.log("-------");

const autos = ["Audi", "Bmw", "Benz", "Opel"];

// console.log(autos[0]);
// console.log(autos[1]);

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

const autosLowerCase = [];
console.log(autosLowerCase);

for (let i = 0; i < autos.length; i++) {
  autosLowerCase.push(autos[i].toLowerCase());
}
console.log(autosLowerCase);
