import readlineSync from "readline-sync";

const inputAge = readlineSync.questionInt("Enter your Age: ");
const inputCurrentYear = readlineSync.question("Enter the currnt year: ");

const currentYear = Number(inputCurrentYear);

if (Number.isNaN(currentYear)) {
  console.log("Error");
} else {
  console.log(`You are born in ${currentYear - inputAge}`);
}
