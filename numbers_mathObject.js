const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 / num2;
val = num1 % num2; // Modulus

// Math Object
val = Math.PI;
val = Math.E; // Euler's number
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-5);
val = Math.pow(8,2);
val = Math.min(2, 33, 4,5, 8);
val = Math.max(2, 33, 4, 5, 8);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val);