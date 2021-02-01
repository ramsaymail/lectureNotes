/**
 *  - forEach() method
 *      - the forEach() method executes a function once for each element in an array
 *      - the forEach() method essentially does the same thing as a for loop or for of loop
 *          -both iterate over the properties in an array
 * 
 * 
 */

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// regular for Loop

for (let i=0; i<food.length; i++) {
    console.log(food[i])
}

// forEach method
food.forEach(function(foodItem) {
    console.log(foodItem);
})

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/


let movie = ['American Pie', 'Godfather', 'Scarface', 'Willy Wonka', 'America'];

movie.forEach(function(movieName) {
    console.log(movieName);
})

