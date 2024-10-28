const user1 = {
  userFirstName: "Nancy",
  userLsstName: "Olama",
  userAge: 22,
  add: "DÜS",
  hob: ["Dance", "TEATIME"],
};
const user2 = {
  userFirstName: "Ali",
  userLsstName: "xc",
  userAge: 44,
  add: "BER",
  hob: ["Dance", "TEATIME"],
};

function printInfo() {
  console.log(
    `${this.userFirstName} ${this.userLsstName} has many hob ${this.hob}`
  );
}
// let x = 5;
// let y = x;
user1.printData = printInfo;
user2.printData = printInfo;
user1.printData();
user2.printData();
//console.log(Object.keys(user1));
console.clear();

const pet = {
  name: "Haskey",
  sort: "Dog",
  age: "4",
  speack: function () {
    return `I'm ${this.sort}, my owner like to call me ${this.name}, I', ${this.age}`;
  },
};
console.log(pet.speack());
const users = [
  {
    userName: "Arthor Aug",
    userPass: "123456789pass",
    userEmail: "arthor@gamil.com",
    hasKids: true,
  },
  {
    userName: "Brandy Sep",
    userPass: "1234word",
    userEmail: "brandy@gmx.de",
    hasKids: "yes",
  },
  {
    userName: "Kait Dec",
    userPass: "password",
    userEmail: "kait@hotmail.fr",
    hasKids: 0,
  },
];
for (let i = 0; i < users.length; i++) {
  console.log(
    `
    -----------------------------
    ${users[i].userName} has a very simple password : ${users[i].userPass}
    ${users[i].hasKids ? "cool 🧒🏻" : "No 😑"}.
    -----------------------------
    `
  );
}
