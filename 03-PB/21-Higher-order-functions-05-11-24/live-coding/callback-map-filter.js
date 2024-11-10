const shoppingBasket = [
  { id: 1, offer: false, product: "Oranges", price: 1.2, quantity: 2 },
  { id: 2, offer: false, product: "Apples", price: 0.9, quantity: 6 },
  { id: 3, offer: true, product: "Bananas", price: 0.5, quantity: 3 },
  { id: 4, offer: false, product: "Cat food", price: 1.0, quantity: 12 },
];

// function convert array to another format

function convertArray(array, converter) {
  const convertedArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = converter(array[i]);
    convertedArray.push(result);
  }
  return convertedArray;
}

function getProductName(object) {
  return object.product;
}

const productNames = convertArray(shoppingBasket, getProductName);
console.log(productNames);
// const productNames1 = shoppingBasket.map((x) => x.product);
// console.log(productNames1); ['oranges',"Apples","Bananas","Cat food"]

// --------

// const shoppingBasket = [
//     { id: 1, offer: false, product: "Oranges", price: 1.2, quantity: 2 },
//     { id: 2, offer: false, product: "Apples", price: 0.9, quantity: 6 },
//     { id: 3, offer: true, product: "Bananas", price: 0.5, quantity: 3 },
//     { id: 4, offer: false, product: "Cat food", price: 1.0, quantity: 12 },
//   ];

function filterArray(array, converter) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (converter(array[i])) {
      const result = converter(array[i]);
      filteredArray.push(result);
    }
  }
  return filteredArray;
}

function cheapProducts(object) {
  if (object.price < 1) {
    return object;
  }
}
const cheapItems = filterArray(shoppingBasket, cheapProducts);
console.log(cheapItems);

function offerOnly(object) {
  if (object.offer) {
    return object;
  }
}
const productOnOffer = filterArray(shoppingBasket, offerOnly);
console.log(productOnOffer);
