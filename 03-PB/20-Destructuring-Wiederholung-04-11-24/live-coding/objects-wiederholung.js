// Objects OOP

const user = {
  name: "norman",
  age: 25,
  books: ["Harry potter"],
  //   speak() {
  //     console.log(`I am ${this.name}`);
  //   },
};

console.log(user);
console.log(typeof user);

// ein Key zugreifen
const key = "age";
console.log(user.age); // dot notation
console.log(user[key]); // bracket notation

user.hobbies = ["Laufen", "Padel"];
console.log(user);

// user.hobbies.pop();
delete user.hobbies;
console.log(user);

console.clear();

// user.speak();

console.clear();

// Shallow cloning, Flach
user.adress = {
  street: "Banhof",
  Zip: 22222,
};

const clone = { ...user };

// Deep cloning , Tief

const deepCloning = structuredClone(user);

user.name = "John";
user.adress.street = "blabla";
user.adress.Zip = 11111;
console.log("user", user); // The original has the changes
console.log("clone", clone); // the clone reflects the street change, but not the name. Das heisst, es wird nur die obersten Eigenschaften kopiert werden.
console.log("deepCloning", deepCloning); // the deep clones is independent

console.clear();
const user2 = {
  name: "Anna",
  age: 23,
  address: {
    street: "Market street",
    zip: "44444",
  },
};

const copyUser2 = Object.assign({}, user2); // flach Copy

const deepCopyUser2 = JSON.stringify(user2);
const deepCopy2 = JSON.parse(deepCopyUser2);
user2.name = "Sophia";
user2.address.zip = 11111;
console.log(copyUser2);
console.log(user2);
console.log(deepCopy2);
