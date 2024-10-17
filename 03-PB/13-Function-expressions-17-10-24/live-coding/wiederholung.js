// 5 => 10
console.log(double(10)); // hoisting

function double(a) {
  return a * 2;
}

console.log(double(2));
console.log(double(6));
double(7); // 14

// ------------------

function greet(name) {
  return `Hallo ${name}`;
  console.log(`Hallo ${name}`); // nicht ausgefuehrt weil ist nach return
}

const greetJohn = greet("John"); // Hallo John

console.log(greetJohn + " this is from fuction greet");

// ----------------

function whoIsTheFirst(first, second) {
  return second + first; // first second
}

console.log(whoIsTheFirst("second", "first")); // first second

// ------------------

function testParameter(a, b, c) {
  return a, b, c;
}
console.log(testParameter(1, 2, 3)); // 3
