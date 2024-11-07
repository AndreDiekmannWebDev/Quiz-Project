const shoppingBasket = [
  { product: "candy", price: 1.09, quantity: 2 },
  { product: "bread", price: 0.99, quantity: 1 },
  { product: "tea", price: 3.99, quantity: 1 },
  { product: "chips", price: 2.99, quantity: 1 },
  { product: "peanuts", price: 1.99, quantity: 3 },
];

// sort : ist eine Methode, die die Elemente eines Arrays in aufsteigender oder absteigender Reihenfolge sortiert. Sie ändert das ursprüngliche Array und gibt das sortierte Array zurück.
const nums = [1, 50, 40, 5, 10];

const sortedArray = [...nums].sort((a, b) => {
  //   return a - b;
  return b - a;
});
console.log("🚀 ~ sortedByPrice:", sortedArray);

console.log("🚀 ~ nums:", nums);

// If the number is negative, the first element is placed before the second
// If the number is positive, the second element is placed before the first
// If the number is zero, the elements are considered equal

const sortedByPrice = shoppingBasket.sort((itemA, itemB) => {
  //   return itemA.price - itemB.price;
  if (itemA.price < itemB.price) {
    return -1;
  }
  if (itemA.price > itemB.price) {
    return 1;
  }
  return 0;
});
console.log("🚀 ~ sortedByPrice ~ sortedByPrice:", sortedByPrice);

const sortedByName = shoppingBasket.sort((a, b) => {
  //   return a.product - b.product;
  return a.product.localeCompare(b.product);
});
console.log("🚀 ~ sortedByName ~ sortedByName:", sortedByName);
