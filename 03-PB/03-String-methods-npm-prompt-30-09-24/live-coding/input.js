const readlineSync = require("readline-sync");

const firstName = readlineSync.question("What is your name? ");
const lastName = readlineSync.question("What is your last name? ");

console.log(`Welcome ${firstName} ${lastName}!`);

console.log(
  `\n\n${firstName}, type a word and I 'll tell you it's second letter`
);

const word = readlineSync.question("What is your favurite Word : ");

console.log("the Second letter is :", word[1]);
