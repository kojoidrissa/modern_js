const firstName = "Kojo";
const lastName = "Idrissa";
const age =100;

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
val = firstName.indexOf('K');
// val = firstName.lastIndexOf()

console.log(val);
