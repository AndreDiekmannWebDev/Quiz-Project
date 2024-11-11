class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  //   showInfo() {
  //     console.log(`${this.name} is a ${this.type}`);
  //   }
}

const amy = new Pet("Amy", "cat");

console.log(amy.type);
console.log(typeof amy);

// amy.showInfo();

const nacho = new Pet("Nacho", "cat");

console.log(nacho);

const test = new Pet("test", "notworking");
console.log(test);

console.log(typeof Pet); //

class Person {
  #age; // private property
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  get userAge() {
    return this.#age;
  }
}
const randy = new Person("Randy", 35);
console.log(randy);
randy.name = "John";
console.log(randy);

console.log(randy.userAge);
