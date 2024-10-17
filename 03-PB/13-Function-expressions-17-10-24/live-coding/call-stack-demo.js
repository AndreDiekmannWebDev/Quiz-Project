function first() {
  console.log("hello");
}
function second() {
  first();
}
function third() {
  second();
}
third();
