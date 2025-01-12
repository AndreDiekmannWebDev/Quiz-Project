// Define a parent class "vehicle": brand, model

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  getDescription() {
    return `Brand : ${this.brand}, Model : ${this.model}`;
  }
}

const myCar = new Vehicle("BMW", "X6");

console.log(myCar); // {Brand: "BMW" , model: "X6"}
console.log(myCar instanceof Vehicle);

console.log(myCar.getDescription());

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model); // invoke the parent constructor
    this.year = year;
  }
  startEngine() {
    return `${this.brand} ${this.model} engine is started!`;
  }
}

const myNewCar = new Car("Audi", "Q8", 2024);

console.log(myNewCar); //
console.log(myNewCar.getDescription());
console.log(myNewCar.startEngine());
console.log(myNewCar instanceof Vehicle);
console.log(myNewCar instanceof Car);
console.log(myCar instanceof Car);

console.clear();

// parent class shape {color} => Circle {getArea}
// parent class shape {color} => rectangle {width, high , getArea} => square {width, high , getarea}

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color, width, hight) {
    super(color);
    this.width = width;
    this.hight = hight;
  }
  getArea() {
    return this.width * this.hight;
  }
}

class Square extends Rectangle {
  constructor(color, side) {
    super(color, side, side);
  }
}

const circle = new Circle("red", 5);
console.log(circle);
console.log(circle.getArea());
console.log(Math.PI);

const rectangle = new Rectangle("blue", 20, 10);

console.log(rectangle);
console.log(rectangle.getArea()); // 200

const square = new Square("green", 5);
console.log(square);
console.log(square.getArea());
