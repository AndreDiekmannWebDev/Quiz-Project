const text = "Let'ss try string methods";
const newText = text.toLowerCase();
const veryNewText = newText.toUpperCase();
console.log("newText:", newText); // alles wird klein
console.log("text:", text);
console.log("veryNewText: ", veryNewText);

const upperCase = text.toUpperCase(); // "LET'S TRY STRING METHODS"
// console.log(upperCase); //
upperCase.toLowerCase();

console.log(upperCase); //

const einStueck = text.slice(0, 5);
console.log(einStueck);

const lastSteuck = text.slice(-7);
console.log("lastSteuck :", lastSteuck);

const lastLetterCapital =
  text.slice(0, -1).toLowerCase() + text[text.length - 1].toUpperCase();
console.log(lastLetterCapital); // Alles gross außer laetste
