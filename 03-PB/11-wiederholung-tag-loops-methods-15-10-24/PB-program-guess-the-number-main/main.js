import readline from "readline-sync";

console.clear();
console.log("Try to guess a number between 1 and 100.");

const randomNum = Math.ceil(Math.random() * 100); // 1 - 100

let guess = null;

while (guess !== randomNum) {
  let userInput = readline.question("Enter a number between 1 and 100:\n");

  guess = parseInt(userInput);
  // guess = parseInt(readline.question("Enter a number between 1 and 100:"));

  console.clear();
  console.log(`Your guess is ${guess}\n`);

  if (guess === randomNum) {
    console.log("Congragulation, you won!");
  } else if (guess < randomNum) {
    console.log("Wrong! Try with a higher number.");
  } else {
    console.log("Wrong! Try with a lower number.");
  }
}
