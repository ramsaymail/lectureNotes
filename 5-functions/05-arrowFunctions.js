/**
 * Arrow Functions - (or Fat Arrow Functions) were introduced in ES6 as an alternative to
 * traditional function expressions. They allow us to write shorter function expressions. They are
 * NOT declarations, so they do not get hoisted
 */
hi(); //Notic if we run this we get an error. It cannot be hoisted like traditional
      //function declarations.
 //  (1)     (2)
 let hi = () => {
     console.log('hi');
 }

 // 1. Assigning a variable to fat arrow function
 // 2. We use a fat arrow, denoted by the '=>', to signify that it is a function

 // Arrow functions can have either a "Conside Body" or a "Block Body"

 //Concise Body - provides a implicit return value by default. A conside body is denoted
 // by the lack of brackets. Saves time and lines of code

 let hi = () => console.log('hi');
 hi();

 //Block Body - requires an explicit return value. A block body is denoted by the brackets
 // after the "fat arrow".
 //The block body mut have a return in the body of the functions (Anything between the curly braces)

 let hi = () => {
     console.log('hi');
 }
 hi();
// Concise VS. Block
 //Concise Body

 let character = x => console.log(`${x} is my favorite character`);
 character('Sailor Moon');

 // Block Body

 let characters = (x, y) => {
     console.log(`My favorite characters are ${x} and ${y}`);
 }
 characters('Lesslie Knope', 'Ron Swanson');