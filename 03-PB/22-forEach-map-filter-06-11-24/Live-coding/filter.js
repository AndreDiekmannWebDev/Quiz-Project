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
// filter : Erstellt ein neues Array mit allen Elementen, die eine angegebene Bedingung erfüllen. filter gibt ebenfalls ein neues Array zurück.

// const fictionBooks = bookshelf.filter((x) => x.genre === "Fiction");

// console.log(fictionBooks);

const notFiction = bookshelf.filter((x) => x.genre !== "Fiction");
console.log(notFiction);
const persons = [
  { name: "Peter", age: 16, country: "Germany" },
  { name: "Mark", age: 88, country: "UK" },
  { name: "John", age: 27, country: "USA" },
  { name: "Jane", age: 14, country: "Germany" },
  { name: "Tony", age: 44, country: "UK" },
  { name: "Mike", age: 32, country: "USa" },
];

const onlyUsa = persons.filter((x) => x.country.toUpperCase() === "USA");
console.log(onlyUsa);
