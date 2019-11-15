const firstName = "Kojo";
const lastName = "Idrissa";
const age =100;
const str = "Hello folks I am Kojo and I am the best";
const tags = "web design, web dev, front end, back end, Python";
let val;

val = firstName + lastName;

val = firstName + " Ya Boi! " + lastName;

//Append

val = 'Brad ';
val += 'Traversey';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// String Properties
val = firstName.length;
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName.toLowerCase(); //toLocaleLowerCase()?
val = firstName[0];
val1 = firstName.indexOf('K');
val2 = firstName.lastIndexOf('j');
val = firstName.charAt('3') //looks like it'll take int or string of index

//get last char
val = firstName.charAt(firstName.length -1); //length -1 = final index

// Substring
val = firstName.substring(0,2);

// Slice
val1 = firstName.slice(0,4);
// substring() vs slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#Examples
val2 = firstName.slice(-2);

// Split
val = str.split(' ');
val2 = tags.split(',');

// Replace
val1 = firstName.replace('o', 'x'); // Only replaces first occurence

//Includes
val =firstName.includes('j');

console.log(val);
console.log(val1);
console.log(val2);
