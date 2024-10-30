const person = {
  firstName: "Nancy",
  lastName: "vao",
  age: 22,
};
console.log(person.age);
console.log(person["age"]);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
// Es6
for (let key in person) {
  console.log(key == "firstName" ? `Hi ${person[key]}` : person[key]);
}
// Es6
// for(of)
console.log("I'm now in Chrome");
const printSomething = () => console.log("something");
// printSomething()
