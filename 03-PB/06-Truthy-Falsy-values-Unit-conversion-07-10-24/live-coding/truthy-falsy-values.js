// Truthy - falsy testen
import readlineSync from "readline-sync";

// truthy
if (true) {
  console.log("Is it true? Ja"); // true
}

if ("yes") {
  console.log("Is it true? Ja"); // true
}

if ("false") {
  console.log("Is it true? Ja"); // true
}
if (911) {
  console.log("Is it true? Ja");
}
if ([]) {
  console.log("Is it true? Ja"); // true
}
if (!0) {
  console.log("Is it true? Ja");
}
if ("0") {
  console.log("Is it true? Ja");
}

// falsy

if (0) {
  console.log("Is it true? No"); // false
}
if (null) {
  console.log("Is it true? No"); // false
}
if (NaN) {
  console.log("Is it true? No"); // false
}
if (undefined) {
  console.log("Is it true? No"); // false
}
if ("") {
  console.log("Is it true? No"); // false
}
if (-0) {
  console.log("Is it true? No");
}

if (false) {
  console.log("Is it true? No");
}

// mehr test

if (1 == true) {
  console.log("is it true ? Yes");
}
if (1 === true) {
  console.log("is it true ? No"); // false
}
if (0 === false) {
  console.log("is it true ? No"); //false
}

if ("yes" == true) {
  console.log("is it true ? No"); //false
}
if ("yes" === true) {
  console.log("is it true ? No"); // false
}
if (5 == true) {
  console.log("is it true ? No"); // false
}
if (5 === true) {
  console.log("is it true ? No"); // false
}

if (null == false) {
  console.log("is it true ? No"); // false
}
if (NaN == NaN) {
  console.log("is it true ? No"); // false
}
if (null == null) {
  console.log("is it true ? Yes");
}

console.log("\n\n");

const name = readlineSync.question("Your name please ?") || "Guest"; // default Wert wenn erste Wert false ist
console.log(`Welcome ${name}`);
