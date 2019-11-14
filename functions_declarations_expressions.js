// Function Declarations
function greet(firstName='Kojo', lastName='Idrissa'){
    // console.log('Hello');
    return `Hello ${firstName} ${lastName}`
}

// console.log(greet('Roderick', 'Strongman'));
console.log(greet());

// Function Expressions
// The norm is a named variable (square) and an anonymous function
const square = function(x=9){
    return x*x;
};

console.log(square(12));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs
// Functions that are declared and run at the same time
// It has to be an expression; putting it inside parens does that
// Since it's a FUNCTION, it needs parens after it's 'defined'.
// Those are the final parens just before the final ";"

// IIFE 1
(function(){
    console.log('IIFE Ran...');
})();

// IIFE 2
(function (name) {
    console.log('Hey' + name);
})('Little Walter');

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    },
    // delete: function(){
    //     console.log('Delete todo...');
    // }
}

todo.delete = function(){
    console.log('New Delete Function: Bye Todo!');
}

todo.add();
todo.edit(37);
todo.delete();