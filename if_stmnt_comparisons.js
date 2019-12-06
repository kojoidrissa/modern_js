// If statements & Comparison Operators

// if(something){
//     do something
// }   else {
//     do something else
// }

const id = 100;

// //EQUAL TO
// if(id == 101){
//     console.log('Correct');
// }   else {
//     console.log('WRONG DUMMY!');
// }

// //Not EQUAL TO
// if (id != 101) {
//     console.log('Correct');
// } else {
//     console.log('WRONG DUMMY!');
// }

// /// === tests value AND type
// if (id === 100) {
//     console.log('Correct');
// } else {
//     console.log('WRONG DUMMY!');
// }

// /// === tests value AND type
// if (id !== 100) {
//     console.log('Correct');
// } else {
//     console.log('WRONG DUMMY!');
// }

// Test if Undefined
// if(typeof(id) !== 'undefined'){
//     console.log(`the ID is ${id}`);
// }   else {
//     console.log('No ID');
// }

// Greater or Less?
if (id > 200) {
    console.log('Correct');
} else {
    console.log('WRONG DUMMY!');
}


const color = 'yellow';

if (color === 'red'){
    console.log('Color is Red');
}   else if(color === 'blue'){
    console.log('Color is blue');
}   else {
    console.log('Color is not red or blue');
}

//Ternary Operator
console.log(id === 100 ? 'Right!' : 'WRONG!');

// No Brackets?!?
if(id ===100)
    console.log('Yes!');
else
    console.log('You STUPID!');
