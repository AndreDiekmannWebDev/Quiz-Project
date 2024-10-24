// OOP

const person = {
  firstName: "Nancy",
  lastName: "Drew",
  age: 30,
  add: "Berlin",
  sayHi: () => {
    console.log(`Hi ${this.lastName}`);
  },
};

console.log(person["firstName"]);
console.log(person.firstName);
//person.sayHi();
const myDreamCar = {
  name: "Audi",
  model: "A8",
  sayHello: function () {
    console.log(`Hi ${this.name} - ${this.model}`);
  },
};
myDreamCar.sayHello();

const carShow = () =>
  console.log(`Hi ${myDreamCar.name} - ${myDreamCar.model}`);
carShow();

const bandNames = {
  band1: "The Beatles",
  band2: "The Rolling Stones",
  band3: "The Who",
  band4: "The Kinks",
};
console.log(bandNames.band4);
console.log(bandNames["band4"]);

bandNames.band4 = "The cools";
bandNames.band5 = "The cool kids";
console.log(bandNames);
bandNames.func = () => "I am a function";
console.log(bandNames.func());
// keys & values
console.log(Object.keys(bandNames));
console.log(Object.values(bandNames));

// Prof Obj
const carInfo = {
  model: "AMG",
  colors: ["Red", "Blue", "Green", { kraftstof: "xxx" }],
  lack: {
    shadeNum: 222,
    farbe: "Orange",
  },
};
console.log(carInfo.colors);
const people = [
  {
    model: "AMG",
    colors: ["Red", "Blue", "Green", { kraftstof: "xxx" }],
    lack: {
      shadeNum: 222,
      farbe: "Orange",
    },
    sayHi: function () {
      return `${this.model}`;
    },
  },
  {
    model: "A8",
    colors: [{ kraftstof: "xxx" }],
    lack: {
      shadeNum: 3456,
      farbe: "Orange",
    },
    sayHi: function () {
      return `${this.model}`;
    },
  },
  {
    model: "F1",
    colors: ["Yellow"],
    lack: {
      shadeNum: 222,
      farbe: "Pink",
    },
    sayHi: function () {
      return `${this.model}`;
    },
  },
];
console.log(people[1].sayHi());

// people.push({ name: "Nancy", age: 22 });
//console.log(people[3]);

for (let i = 0; i < people.length; i++) {
  console.log(people[i].colors);
}
const arr = [2, 3, 5, 7, 7];
const obj = { name: "Ali" };
console.log(Array.isArray(arr));
