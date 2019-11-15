//Create arrays
const numbers = [43,56,33,23,44,36,5];
const new_numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,34,56,78); //Array constructor
const fruit = ["apple", "pear", "durian"];
const mixed = [22, 'Whut?', true, null, {a:1, b:2, c:3}, new Date()];

let val;

// Is this an array?
val = Array.isArray(numbers);
//Adding value to an array
console.log(`Original Numbers is: ${numbers}`);
numbers[2] = 1000;
val = numbers.indexOf(36);

// Mutate Arrays
// numbers.push(250); // add to end
// numbers.unshift(120); // add to front
// console.log('After push/unshift, before pop/shift');
// console.log(numbers);
// numbers.pop(); // removes and returns last element
// numbers.shift(); // removes and returns first element
// numbers.splice(1,3); //removes elements; index ranges are inclusive 
// numbers.reverse();

val = numbers.concat(numbers2);
val = fruit.sort();
val = numbers.sort();

//use the 'compare function'...this makes NO SENSE to me
val = numbers.sort(function (x,y) {
    return x - y;
});

// reverse sort
val = numbers.sort(function (x, y) {
    return y - x;
});

// Find: returns the value of the first element in the provided array that satisfies the provided testing function
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);

val = new_numbers.find(under50);

console.log(new_numbers);
console.log(val);
