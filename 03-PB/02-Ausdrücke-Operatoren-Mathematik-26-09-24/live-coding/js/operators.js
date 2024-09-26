// Arithmetische OPeratoren: +, -, *, /, %, **

/* 
1 x Kaffe    7€ pro stueck
2 x Cola     3€ pro stueck
4 x Schokolade 2.50€ pro stueck
1 x Nuddel     1.25€ pro stueck
5 x Pizza        4€ pro stueck*/

const numberOfItems = 1 + 2 + 4 + 1 + 5;

console.log("numberOfItem", numberOfItems);

const total = 1 * 7 + 2 * 3 + 4 * 2.5 + 1.25 + 5 * 4; // (* +)
console.log("total", total);

const totalWithDiscount = total * 0.8; // Rabat 20%

console.log("totalWithDiscount", totalWithDiscount);

// wie viel kostet ein durchschnittlicher Artikel ?

const averagePrice = total / numberOfItems;

console.log("averagePrice", averagePrice);

// Artikel zurück geben => 2 Pizza

const returnedItems = 2;

const numberOfNewItems = numberOfItems - returnedItems;

console.log("numberOfNewItems", numberOfNewItems);

const newTotal = total - returnedItems * 4;
console.log("newTotal", newTotal);

const newTotalWithDiscount = newTotal * 0.8;
console.log("newTotalWithDiscount", newTotalWithDiscount);

const moneyInTheHand = 29;

const moneyIsEnough = moneyInTheHand >= newTotalWithDiscount; // true oder false

console.log(moneyIsEnough);

// 3 kindern wollen Schokalade

const numberOfSchocoForEachKid = 4 / 3;
// console.log(numberOfSchoco);
const restOfChoco = 5 % 3; // 2
console.log(restOfChoco);

const testRest = 10 % 5; // 0
console.log(testRest);

const testRest2 = 5 % 10; // 5
console.log(testRest2);

// hoch, Potenz

console.log("hoch :", 2 ** 2); // 2 * 2

console.log("2 hoch 4 :", 2 ** 4); // 2 * 2 * 2 * 2

// Inkrement, Dekrement (++, --)

let num = 5;

// console.log("num", num + 1); // 6
// num + 1;
num++; // num = num + 1 postfix form inkrement
console.log("num inkrement", num); // 6
num--; // num = num - 1;
console.log("num dekrement", num); //  5
// console.log("num iekrement", ++num); // 6 Prefix form inkrement log

console.log("num iekrement", num++); // 5 log iekrement
console.log(num); // 6
// --num;
// console.log(num); // 5

const firstPrice = 35;
const secondPrice = "35";

// strikte Gleichheit === Empfohlen!!!!!!

// console.log(firstPrice === secondPrice); // false

// lose Gleichheit

// console.log(firstPrice == secondPrice); // true

const boolVal = true; // 1  false : 0

const boolVal2 = "true"; // true

console.log(boolVal === boolVal2); // false

console.log(boolVal == boolVal2); // false

let name1 = "andre";
let name2 = `Andre`;

console.log(name1 === name2); // false
console.log(name1 == name2); //  false
