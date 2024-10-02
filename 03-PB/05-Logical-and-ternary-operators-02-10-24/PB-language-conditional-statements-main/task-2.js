const person1Name = "John";
const person1Age = 17;
const person2Name = "Fiona";
const person2Age = 16;

if (person1Age < person2Age) {
  console.log(`${person1Name} is the youngest person`);
} else if (person2Age < person1Age) {
  console.log(`${person2Name} is the youngest person`);
} else {
  console.log(`${person1Name} and ${person2Name} have the same age.`);
}
