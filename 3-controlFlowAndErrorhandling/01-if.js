/*
    Conditionals
        - a falsy value is a value that is considered false when encountered in a boolean context
            - there are 6 falsy values in JS
                1. false
                2. 0
                3. "", '', ``
                4. null
                5. undefined
                6. NaN

*/

if (true) {
    console.log('will it run?');
}

// let isOn = true;
// if (isOn == true) {
//     console.log('the light is on!');
// }

if (isOn) {
    console.log('the light is onni!')
}

let isOn = false;
if (isOn == false) {
    console.log('the light is off!');
}

/*
    - JS allows us to reference a variable that's already been declared and assign it a new value (or reinitialize that variable), but we cannot declare
    two variables with the same name

    - general rule of thumb
        - when declaring a new variable the variable name needs to be prefaced by one of our 3 available JS keywords to
        declare variables (var, let, const)
        - when assigning a new vaue to a variable that already exists, we simply just need to reference a variable that's already been named

*/

let weather = 65;
if (weather < 70) {
    console.log('wear a jacket');

}