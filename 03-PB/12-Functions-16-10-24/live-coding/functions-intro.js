function greet() {
  console.log("Hello");
}
greet();
greet();
greet();
greet();

function greetPerson(firstName) {
  console.log(`Hello ${firstName}`);
}

console.log(greetPerson("Anna"));
greetPerson("John");

function giveGreeting(person) {
  return `Hello, ${person}`;
}
console.log(giveGreeting("Louisa"));

const result = giveGreeting("Louisa");
console.log(result.toUpperCase());

// function zwei parameters als nummern => summe

function sumNums(num1, num2) {
  return num1 + num2;
}
console.log(sumNums(1.1, 2.5));
console.log(sumNums(2.2, 3.3));

//
