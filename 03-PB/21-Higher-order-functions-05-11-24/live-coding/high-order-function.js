// Function gibt uns zurück ein function

function greeting(name) {
  return function () {
    console.log(`Hallo ${name}`);
  };
}

// greeting("Olga")();
const makeGreet = greeting("Olga");
makeGreet();

// function als argument

function count(n, showCounting) {
  for (let i = 0; i <= n; i++) {
    showCounting(i);
  }
}
function logNums(num) {
  console.log(num);
}

count(10, logNums);

console.clear();
// function name, age, ageControlling function

function person(name, age, ageControlling) {
  console.log(`Hallo ${name}`);
  ageControlling(age);
}
function ageCheck(age) {
  age >= 18
    ? console.log(`You are allowed to drive`)
    : console.log(`You are not allowed`);
}
person("Randy", 28, ageCheck);

console.clear();

// function paramter1 : number, parameter2 : addFive function
// check if number bigger than 10 dann wird adding 5 otherwise log the number without adding anything
function sumFive(number, addFive) {
  number > 10 ? addFive(number) : console.log(number);
}
function plusFive(n) {
  console.log(n + 5);
}

sumFive(15, plusFive); // 20
sumFive(5, plusFive); // 5
