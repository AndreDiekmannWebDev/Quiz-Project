const bookshelf = [
  { title: "The Silent Spring", author: "Rachel Carson", genre: "Science" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Fiction" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
  },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
  { title: "Faust", author: "Johann Wolfgang von Goethe", genre: "Drama" },
];

// forEach :Führt eine gegebene Funktion für jedes Element in einem Array aus. Sie wird meistens für Operationen genutzt, bei denen man das Array durchlaufen möchte, ohne ein neues Array zu erzeugen. forEach gibt nichts zurück.
// 1.
// bookshelf.forEach(printTitle);

// function printTitle(book) {
//   console.log(book.title);
// }

// 2.
// bookshelf.forEach(function (book) {
//   console.log(book.title);
// });

// 3.
bookshelf.forEach((book) => console.log(book.title));

// neu Array mit alle title
const titlesArray = [];
bookshelf.forEach((book) => titlesArray.push(book.title));
console.log(titlesArray);

const persons = [
  { name: "Peter", age: 16, country: "Germany" },
  { name: "Mark", age: 88, country: "UK" },
  { name: "John", age: 27, country: "USA" },
  { name: "Jane", age: 14, country: "Germany" },
  { name: "Tony", age: 44, country: "UK" },
  { name: "Mike", age: 32, country: "USA" },
];

// greet all persons and tell them if they are allowed to drive or not in deutschland.
// example : Hallo Peter, welcome in deutschland. You are not allowed to drive a car in Deutschland.
