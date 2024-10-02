let num = 8;

// num > 5 und num / 2 => good number =>  bad number.
if (num > 5) {
  if (num % 2 === 0) {
    console.log("Good number!");
  } else {
    console.log("Bad number");
  }
} else {
  console.log("Bad number");
}

// &&:
/*
true && true = true
false && true = false
true && false = false 
false && false = false
*/

if (num > 5 && num % 2 === 0) {
  console.log("Good number!");
} else {
  console.log("Bad number");
}

// name: string > 7 letters and string = Johannes and first letter = J => you are Johannes => you are a Hacker

const firstName = "johannes";

if (firstName.length > 7 && firstName === "Johannes" && firstName[0] === "J") {
  console.log(`You are ${firstName}`);
} else {
  console.log(`You are a Hacker`);
}

// || :

/*
true || true = true
true || false = true
false || true = true
false || false = false
*/

// Car : GTI oder speed > 220 oder BJ > 2019 => Fast car => Bad car

const car = "Golf 5";
const speed = 290;
const bj = 2013;

if (car === "GTI" || speed > 220 || bj > 2019) {
  console.log(`Fast Car!`);
} else {
  console.log(`Bad Car :(`);
}

// !

// !true = false
// !false = true

// let isThere = false;
// let book = 0; // false
// undefined, null // false
let book = 1;
// wenn da ist, angekommen , ist unterwegs

if (!book) {
  console.log(`ist unterwegs!`);
} else {
  console.log(`ist angekommen!`);
}

// Ternary Operator

// zahl > 10 => big number, zahl <= 10 => small number

let zahl = 10;
// if (zahl > 10) {
//   console.log(`Big number`);
// } else {
//   console.log(`Small number`);
// }
// condition if code else code
zahl > 10 ? console.log("Big number") : console.log("Small number");

//  zahl < 100 and zahl >10 => zahl + 50  else zahl >100 => zahl -100 else log den zahl.
// zahl =zahl + 50 => zahl += 50
zahl < 100 && zahl > 10
  ? (zahl += 50)
  : zahl > 100
  ? (zahl -= 100)
  : console.log(zahl);

console.log(zahl); // 10
