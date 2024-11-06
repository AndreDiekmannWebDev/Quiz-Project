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

// Map: Erstellt ein neues Array, indem es jedes Element des ursprünglichen Arrays durch die angegebene Funktion transformiert. map gibt ein neues Array zurück.

const titlesArray = bookshelf.map((book) => book.title);
console.log(titlesArray);

const authors = bookshelf.map((book) => book.author);
console.log(authors);

const nums = [4, 6, 8, 10];

const newNums = nums.map((x) => x / 2);
console.log(newNums);

nums.map((x, index) => {
  console.log(index);
});
