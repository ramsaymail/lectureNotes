/*
    - JS is interpreted line by line and read top to bottom
    - when our JS code is read, the code is parsed through 2 times
        - pass 1: our code is read top to bottom, and any variables or functions that we've declared will get stored away to memory
        - pass 2: the code is executed (once again ran top to bottom), and all values that we've given to variables are assigned.
*/
console.log(myName);
let myName = 'Zach';
testFunction();
function testFunction() {
    console.log('I have been hoisted');
}

/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/

function callNumber() {
    for (i=1; i<=10; i++){
        console.log(i);
    }
}
callNumber();

/*
CHALLENGE
************
    - Given the array, create a function that lists out the values individually.
*/

function mNames(){
    let arr = ['This', 'is', 'really', 'cool'];
    for(i=0; i<=3; i++){
        console.log(arr[i]);
    }
}
mNames();


for (i=0; i<=50; i++){
    t += i;