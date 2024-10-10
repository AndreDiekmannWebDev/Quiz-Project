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
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
    break; // stop the loop completely
  }
}
