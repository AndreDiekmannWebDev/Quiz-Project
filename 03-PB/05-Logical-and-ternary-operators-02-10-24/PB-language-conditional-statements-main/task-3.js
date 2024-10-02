let mode = "blabla";
let backgroundColor = "";
let textColor = "";

if (mode === "dark") {
  backgroundColor = "black";
  textColor = "white";
  console.log(backgroundColor, textColor);
} else if (mode === "light") {
  backgroundColor = "white";
  textColor = "Black";
  console.log(backgroundColor, textColor);
} else {
  console.log(`please enter a valid mode.`);
}
