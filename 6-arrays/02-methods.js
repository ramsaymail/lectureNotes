let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];
// push method - allows us to add one or more items to the end of an array
// console.log(food);
food.push('Pizza');
console.log('push:', food);

//splice - allows us to remove, replace, or add new elements to the array
food.splice(4, 1);
console.log('splice:', food);

food.splice(2,0, 'Lollipops');
console.log('splice 2:', food)

//pop allows us to remove the last item of a array
food.pop();
console.log('pop:', food);

// shift - allows us to remove the first item of an array
food.shift();
console.log('shift:', food);

// unshift - allows us to add one or more items to the beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift', food);