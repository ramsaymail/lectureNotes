/* Concatonation with strings
*/

let example = 1050 + '100'; //coersion JS
console.log(example);

let firstName = 'Ramsay';
let lastName = 'Hofmeister';
let houseNumber = 1340;
let street = 'Alabama Street';
let city = 'Indianapolis,';
let state = 'Indiana';
let zipCode = 46202;

console.log(firstName, lastName + ',', houseNumber);
console.log(`${firstName} ${lastName}, ${houseNumber}`);

/*
    String Properties
    - properties are qualities that are associated with datatype
*/

let myName = 'Zach';
console.log(myName.length);

/*
    String Methods
    -methods are tools that help us manipulate the data
    - .properties / .methods()
        *no parenthesis for propertiesL*
*/

let myNameIs = 'Zach';
console.log(myNameIs.toUpperCase());
console.log(myNameIs);

let homeTown = 'My hometown is Greenwood';
console.log(homeTown.includes('greenwood'

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let str = 'Ramsay went to the store.';
console.log(str.split(" "));

//Instructor code
