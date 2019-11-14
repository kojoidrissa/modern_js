// var, let, const
var greeting;
console.log(greeting);
greeting = 'Greetings!';
console.log(greeting);

// letters, numbers, _, $
// Can't start w/ a number

// multi word vars: camelCase is the norm for variables
// Pascal case for Constructor Functions or ES6 Classes

// const variables can't be changed, but if they're COMPLEX data types, /// the internals can be changed/reassigned
// So, the internal values of an array or object (reference types) CAN be changed/mutated. But you can't reassign the variable itself.
const numbers = [1,2,3];
const person = {
    name: 'Kojo',
    age: 190
}

// Primitives vs Reference data types: dig into this in more detail later
var primitives = ['string', 'number', 'boolean', 'null', 'undefined', 'symbols']
// Symbols new in ES6

var reference = ['Arrays', 'Object Literals', 'Functions', 'Dates']
// Considered to be objects

// Strings
const name = "Kojo Idrissa";

// Number
const age = 45
console.log(`name is of type: ${typeof name}`);

// Boolean
const hasKids = true;

//Null
const car = null;

// Undefined
let test;

//Symbol (new in ES6)
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['Overwatch', 'programming'];
// Object Literal
const address = {
    city: 'Houston',
    state: 'Texas'
}
// Dates
const today = new Date();
console.log (today);
console.log(typeof today);
