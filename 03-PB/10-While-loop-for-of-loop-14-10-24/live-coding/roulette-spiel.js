/*
Es ist ein vereinfachtes Roulette-Spiel!
Zuerst wird nach deinem Namen gefragt.
Danach wird gefragt, ob du über 18 Jahre alt bist.
Wenn du nicht über 18 Jahre alt bist, stoppt das Programm.
Du startest mit 100€.
Jede Runde kostet 1€.
Jede Runde:
Wenn du kein Geld mehr hast, endet das Spiel.
Das Spiel fragt, ob du aufhören oder weitermachen möchtest.
Wenn du aufhörst, behältst du den Rest deines Geldes.
Das Spiel fragt, ob du auf gerade oder ungerade Zahlen setzen möchtest.
Das Spiel generiert eine zufällige Zahl zwischen 0 und 100.
Wenn die Zahl gerade ist und du auf gerade Zahlen gesetzt hast, gewinnst du 2.4€.ungerade 3€.
Wenn die Zahl gerade ist und du auf ungerade Zahlen gesetzt hast, verlierst du.
Wenn die Zahl 0 ist, verlierst du. 
*/

import rls from "readline-sync";

let firstName = rls.question("Enter your first name please: ") || "Guest";
console.log(`Welcome ${firstName}`);

let age = rls.question("Enter your age: ");
if (age < 18) {
  console.log("You can't play this game.");
  process.exit();
}
let geld = 100;

while (geld >= 1) {
  geld--;
  let num = Math.floor(Math.random() * 101); // 0 - 100
  console.log(`You have ${geld}€`);
  const bet = rls.question("Do you want to bet even or odd? (e/o)");
  console.log(`the Number is ${num}`);
  if (num === 0) {
    console.log("You lose!");
  } else if (num % 2 === 0 && bet === "e") {
    console.log(`You win 2.4€`);
    geld += 2.4;
  } else if (num % 2 !== 0 && bet === "o") {
    console.log("You win 3€");
    geld += 3;
  } else {
    console.log("You lose!");
  }
  const play = rls.question(`Do you want to keep playing? (y/n)`);
  if (play === "n") {
    console.log(`Good bye, see you later!`);

    break;
  }
}
console.log("You have no Money :(");
console.clear();
