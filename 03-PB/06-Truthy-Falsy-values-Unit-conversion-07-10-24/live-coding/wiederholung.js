// if else statement

// random number 0, 100 => number < 50 = Lucky => number >= 50 = unlucky.

const number = Math.floor(Math.random() * 101); // 0 - 100

if (number < 50) {
  console.log("Lucky");
} else {
  console.log("Unlucky");
}

//  ? :

let result = number < 50 ? "Lucky" : "Unlucky";

console.log(result);
