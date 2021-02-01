/**
 * - placeholders for information that we wil pass into our function
 * - parameters are placed inside of the parantheses
 *  - parameters are separated by a comma
 */

 //           ticket = 'cheese pizza'
function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

zach('cheese pizza'); // 'cheese pizza' is the argument

let resource = "|==========|"

function machine(ironRod) {
    console.log(ironRod);
}

machine(resource); //argument

/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - declare a new variable that combines both the F and L name parameters.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/


function testFn(firstName, lastName) {
    let fullName = firstName +  ' ' + lastName;
    console.log(`Hello, my name is ${fullName}`);
}

testFn('Ramsay', 'Hofmeister') // arguments go here inside of parantheses - also separated by comma