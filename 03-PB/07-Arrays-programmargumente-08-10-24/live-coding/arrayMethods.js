// Array methods

// unshift() fügt ein Element am Anfang des Arrays hinzu

const cars = ["Audi", "VW"];

const element = cars.unshift("Jeep");
console.log(element); // cars.length

console.log(cars); // ["Jeep","Audi", "VW"]
// push()

cars.push("Opel"); // ["Jeep","Audi", "VW", "Opel"]
console.log(cars);

// shift

const deletedElement = cars.shift();
console.log(deletedElement);

console.log(cars); // ["Audi", "VW", "Opel"]

// pop

cars.pop();
console.log(cars); // ["Audi", "VW"]

// const test = delete cars[0]; //Loescht aber den Platz bleibt reserviert
// console.log(cars);
// cars[0] = "Merceds";
// console.log(cars);

// splice

const tiere = ["Elefant", "Affe", "loewe", "Katze"];

const namesOfDeletedElements = tiere.splice(1, 2);
console.log(tiere);
console.log(namesOfDeletedElements);

const namesOfDeletedEle = tiere.splice(0, 1, "Hund", "Tieger");
console.log(tiere); // ['Hund','Tieger', 'Katze']
console.log(namesOfDeletedEle); // ['Elefant]

// slice

const numArrays = [0, 1, 2, 3, 4, 5, 6];

const copyOfNums = numArrays.slice(1, 4);

console.log(numArrays); // [0, 1, 2, 3, 4, 5, 6]
console.log(copyOfNums); // [1,2,3]

// reverse

numArrays.reverse();
console.log(numArrays);

// sort
const randomArray = [4, 3, 7, 1, 9, 100, 50];
randomArray.sort();

console.log(randomArray);

// concat

const ps1 = ["Js", "PHP"];
const ps2 = ["React", "Java"];

const psTogeather = ps1.concat(ps2);
console.log(psTogeather); // ["Js", "PHP", "React", "Java"]
console.log(ps1); // ["Js", "PHP"]

// join

const arrayTostring = psTogeather.join(", ");
console.log(arrayTostring);

// toString

const arrayTostring2 = psTogeather.toString();
console.log(arrayTostring2);

console.log(String(psTogeather)); // Js, PHP, React, Java
