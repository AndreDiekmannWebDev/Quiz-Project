const num = "-100.9px"; // string

console.log(Number(num)); // NaN
console.log(num); // string
console.log(+num); // NaN
console.log(parseInt(num)); // -100
console.log(parseFloat(num)); // -100.9
