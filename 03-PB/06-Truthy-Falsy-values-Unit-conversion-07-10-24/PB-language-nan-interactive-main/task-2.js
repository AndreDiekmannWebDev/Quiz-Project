import readlineSync from "readline-sync";

const inputPin = readlineSync.question("please Enter a pin : ");

const pin = Number(inputPin);

if (isNaN(pin) || inputPin.length !== 4) {
  console.log(`ERROR: the pin you entered is not valid`);
} else {
  console.log(`Thank you. The pin you chose was saved correctly.`);
}
