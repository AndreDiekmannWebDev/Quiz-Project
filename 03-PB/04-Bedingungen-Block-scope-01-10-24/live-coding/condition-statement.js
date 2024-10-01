// if Anweisungen

/* if(Bedienung){ 4 > 3 true
   code ; Wird durch gefuehrt wenn bedienung ist true.
}*/

const geld = 4;
const brotPreis = 6;

if (geld >= brotPreis) {
  console.log("you can buy the bread!");
}
if (true) {
  console.log("Das wird immer ausgefuehrt!");
}
if (geld < brotPreis) {
  console.log("sorry, You can't buy this Bread!");
}

// if ... else

const age = 15;

if (age >= 18) {
  console.log("Du darfst fuehrerschein machen!");
} else {
  console.log("Du darfst nicht fuehrerschein machen!");
}

// nested if else

const firstName = "Janine";
const tall = 170;

if (firstName === "Janine") {
  if (tall >= 170) {
    console.log("You can play volleyball!");
  } else {
    console.log("You can't");
  }
  console.log("Good Bye!!");
}

// example

const alter = 1;
if (alter > 90) {
  console.log("Beeindruckendes Alter!");
} else if (alter > 70) {
  console.log("Im Ruhestand oder noch arbeiten?");
} else if (alter > 50) {
  console.log("Ich hole bald zu deinem Alter auf");
} else if (alter > 25) {
  console.log("Ich nenne diese Jahre die goldenen Jahre");
} else if (alter > 18) {
  console.log("Party hard");
} else if (alter > 3) {
  console.log("Spiel hart");
} else {
  console.log("Ga ga gu gu?");
}

//
