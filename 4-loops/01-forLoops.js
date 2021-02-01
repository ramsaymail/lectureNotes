/*
    - Loops offer us a quick and easy way to do something repeatedly

    - there are many different kinds of loops, but they all essentially do the same thing:
        repeat until a special condition evaluates to false
            - for loops
            - for in loops
            - for of loops
            - while loops
            - do while loops
            - labeled loops
            - break loops
            - continue loops

    NOTE: DANGER of infinite loops

    - for Loops take in 3 required parameters
        1. inital expression
        2. condition
        3. increment expression
 */

 //    1.          2.     3.
//  for (let i = 0; i < 10; i++) {
//     console.log(i);
//  }

 for loop: 20 by 2's
 for (let i = 2; i<=20; i+=2) {
    console.log(i);
 }

 //for loop: 10 to 0 by 1's

 for (let i=10; i>=0; i-=1){
    console.log(i);
 }

 //for loop: 0 to -24 by 2's

 let myName = "Spongebob";

 for (let i = 0; i < myName.length; i++){
    let c = myName[i];
    console.log(c);

//  }
 // for loop: loop through a name and display each letter individually

 let myName = "Spongebob";

 for (let i = 0; i < myName.length; i++){
    let c = myName[i];
    console.log(c);

// make a for loop where you add up all the numbers from 1-50. (equals 1275)
let t = 0;
for (i=0; i<=50; i++){
    t += i;
}
console.log(t);
