let x = [23, 4, -6, 23, -9, 21, 3, -45, -8];
let positive = x.filter(num => num > 0);
let negative = x.filter(num => num < 0);
console.log("Positive:", positive);
console.log("Negative:", negative);
