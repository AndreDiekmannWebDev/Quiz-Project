// Wert zu true oder false konvertieren
import rls from "readline-sync";

console.log(Boolean(0)); // false

console.log(Boolean(5)); // true

if (Boolean(5) == true) {
  console.log(`is it true ? Ja`);
}

console.log(Boolean(NaN)); // false

// Zu String konvertieren

console.log("\n");

console.log(String(1)); // "1" als string
console.log(String(true)); // "true" als string
console.log(String(null)); // "null" als string
console.log(String(" ")); // space

console.log("\n");

// zu Number konvertieren

console.log(Number("12")); // 12 als number
console.log(Number(`-1`)); // -1 als number
console.log(Number(true)); // 1 als number
console.log(Number(false)); // 0 als number
console.log(Number("12.2")); // 12.2

console.log(Number("yes")); // NaN
console.log(parseInt("12.99")); // 12
console.log(parseFloat("12.4")); // 12.4

console.log(typeof NaN); // number
console.log(NaN + 500); // NaN

// const num = rls.question("Number please:");

// console.log(+num, typeof num);

console.log("100" - 20); // 80
console.log(20 + "100"); // 20100
console.log(+"100" + 20); // 120
console.log("100" + 20); // 10020

const newNum = 10 / 3;
console.log(newNum.toFixed(2)); // 3.33 string

// Number.isNaN() um NaN zu prüfen
console.log(Number.isNaN(NaN)); // true
