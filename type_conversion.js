let val;

// Convert to string
// val = 5;
val = String(5);
val = String(4+4);
val = String(true);
val = String(new Date);
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = '5';
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
// console.log(val); returns NaN
val = Number('Hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.31');

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// Type Coercion
const val1 = '5';
const val2 = 6; // Int get's coerced into a string by JS
const sum = (val1 + val2);

console.log(sum);
console.log(typeof sum);