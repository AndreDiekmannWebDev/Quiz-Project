// Pseudocode Beispiel

// Problem : Erstelle ein neues Array mit allen ungraden zahlen

// const input = [4, 5, 3, 2, 9, 70, 80, 100];

// Pseudocode 1
// const result = [];
// for(jede Zahl im Array){
//     if(Zahl ist ungrade){
//         füge Zahl zum neue Array hinzu
//     }
// }

// Pseudocode 2

// Initialisiere ein leeres Array namens "results"
//     Für jede Zahl im "input" Array:
//         Wenn die Zahl ungerade ist:
//             Füge die Zahl zum "results" Array hinzu
//     Ende der Schleife

// ------------------------------------------------

// Problem: Finde die erste Zahl in einem Array von Zahlen,
// die durch 5 teilbar ist, und gib sie in der Konsole aus.

let numbers = [12, 16, 22, 20, 33, 40];

/*
Pseudocode

for(jede Zahl im Array){
wenn (die Zahl durch 5 teilbar ist){
console.log(Zahl)
Beende die Shleife
}
}
*/
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 5 === 0) {
//     console.log(numbers[i]);
//     break; // stop the loop completely
//   }
// }

// --------------------------------------
// Problem: Betrachte ein Array von Zahlen und gib die Differenz
// zwischen der aktuellen Zahl und der vorherigen aus.
// Wenn eine Zahl null ist, gib weder für diese Zahl noch für die
// nächste Zahl etwas aus.
// Dies könnte in der Datenvisualisierung nützlich sein.

const scores = [2, 5, 0, 4, 5, 0, 7, 8, 7, 7, 6, 9];

/*
Pseudocode

for(jede Zahl im Array "scores"){
  ob(die Zahl null ist){
         Ignoriere diese Zahl
    } 
  ob(die vorherige Zahl null ist){
         Ignoriere diese Zahl
  }
  gib die Differenz zwischen der Aktuellen Zahl und der vorherigen aus
}

*/

// for (let i = 1; i < scores.length; i++) {
//   if (scores[i] === 0 || scores[i - 1] === 0) {
//     continue;
//   }
//   console.log(scores[i] - scores[i - 1]);
// }
// ----------------------------

// break

const text = "hello";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
  if (text[i] === "l") {
    break;
  }
}

const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  if (nums[i] === 3) {
    break;
  }
}

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) {
    continue;
  }
  console.log(nums[i]);
}
