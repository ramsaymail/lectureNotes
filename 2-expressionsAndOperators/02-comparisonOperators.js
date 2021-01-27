// equal
console.log(3 == 3);
console.log('3' == 3);

/*
    - coersion is the process of converting a value from one type to another
        - JS assumes that we made a mistake and that we do want to compare two values that are the same datatype
*/

// strict equal - this overrides javascript coersion
console.log(3 === 3);
console.log('3' === 3);

// not equal
console.log('3' != 3); // false

// strict not equal
console.log('3' !== 4); // true

// and
2 && 3; // and allows us to check if multiple values are true or false

let x = 5;
let y = 6;

if(x >= 1 && y >=1){
console.log(true);
}

// or
2 || 3; // or allows us to check multiple values, but only one of the values needs to be correct

