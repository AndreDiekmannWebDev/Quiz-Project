// The goal is to reach the random number between 1 - 100
// The player starts at 0
// The player can add one to their number
// The player can substract one from their number
// The player can double their number
// The player can halve their number

/*
game starting:
print game instructions
set the goal random number to 1 - 100
set the current number to 0

while the game is running:
    Print the current number
    

    ask the player which operation they want to use to perform the operation
    If the current number is equal to the goal number
    Print "You have reached the goal, congragulation!"
    End the game!
*/
import rls from "readline-sync";
console.log("Welcome to the Math game!");
console.log("To Stop playing, type 'stop'");
console.log("to add one, type 'add'");
console.log("to substract one, type'sub'");
console.log("to double your number, type'double'");
console.log("to halve your number, type 'halve'");

function randomNum() {
  return Math.ceil(Math.random() * 100); // 1 - 100
}

function askOperation() {
  let input = rls.question("What would you like to do?").toLowerCase();

  const opertions = ["add", "stop", "halve", "double", "sub"];
  while (!opertions.includes(input)) {
    console.log("invalid operation! you can use:", opertions.join(", "));

    input = rls.question("What would you like to do?").toLowerCase();
  }
  return input;
}

function calculate(operation, current) {
  switch (operation) {
    case "add":
      return current + 1;
    case "sub":
      return current - 1;
    case "double":
      return current * 2;
    case "halve":
      return current / 2;
    case "stop":
      console.log("Thanks for playing our game!");
      process.exit();
  }
}

// console.log(goal);
let current = 0;
const goal = randomNum();
while (current !== goal) {
  console.log(`Your current number is ${current}`);
  let operation = askOperation();
  current = calculate(operation, current);
  if (current === goal) {
    console.log(`You won!`);
  } else if (current > goal) {
    console.log(`You have to give lower number!`);
  } else {
    console.log(`You have to give higher number!`);
  }
}
