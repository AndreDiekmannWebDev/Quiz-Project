let breakfastPrice = "12€";
let lunchPrice = "18.71€";
let dinnerPrice = "43.63€";

// Calculate the total, adding 10% plus rounding up the result
let breakfastTotal;
let lunchTotal;
let dinnerTotal;

breakfastTotal = Math.ceil(parseFloat(breakfastPrice) * 1.1);
console.log(breakfastTotal);
lunchTotal = Math.ceil(parseFloat(lunchPrice) * 1.1);
dinnerTotal = Math.ceil(parseFloat(dinnerPrice) * 1.1);
console.log(lunchTotal, dinnerTotal);
