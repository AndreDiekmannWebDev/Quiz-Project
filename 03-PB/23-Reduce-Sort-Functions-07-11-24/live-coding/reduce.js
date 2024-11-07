// reduce method: ist eine Array-Methode, die alle Elemente eines Arrays auf ein einzelnes Ergebnis reduziert.

const array = [1, 2, 3, 4, 5, 6, 7];

const sum = array.reduce((accumulator, currentValue) => {
  console.log("🚀 ~ currentValue:", currentValue);
  console.log("🚀 ~ accumulator:", accumulator);
  return accumulator + currentValue;
}, 0);
console.log("🚀 ~ sum:", sum);

const shoppingBasket = [
  { product: "candy", price: 1.09, quantity: 2 },
  { product: "bread", price: 0.99, quantity: 1 },
  { product: "tea", price: 3.99, quantity: 1 },
  { product: "chips", price: 2.99, quantity: 1 },
  { product: "peanuts", price: 1.99, quantity: 3 },
];

const total = shoppingBasket.reduce((acc, cur) => {
  return acc + cur.price * cur.quantity;
}, 0);
console.log("🚀 ~ total ~ total:", total);

const mostExpensive = shoppingBasket.reduce((acc, curr) => {
  //   return acc.price > curr.price ? acc : curr;
  if (!acc) {
    return curr;
  }
  if (acc.price > curr.price) {
    return acc;
  }
  return curr;
}, null);
console.log("🚀 ~ mostExpensive:", mostExpensive);
