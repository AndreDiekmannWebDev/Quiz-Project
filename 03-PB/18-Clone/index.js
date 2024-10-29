const arr = [1, 2, 4, 6, 7];
// const newArr = arr; refrence
const newArr = [...arr]; // clone
newArr[0] = "Ali";
//console.log(arr);

function doSomething(a, b) {}
doSomething(2, 34);
const sum = (...nums) => {
  console.log(nums);
  let result = 0;
  for (let i = 0; i < nums.length; i++) result += nums[i];
  return result;
};
console.log(sum(1, 35, 67, 54, 64, 333, 56));

const product = {
  name: "laptop",
  price: 200,
  colors: ["red", "green", "orange"],
  warenty: {
    starts: 2024,
    monthlyPayment: false,
  },
};
// const newProduct = product; // refrence
const newProduct = { ...product };
newProduct.colors[0] = "Yellow";
console.log(product);
