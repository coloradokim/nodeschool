//
// Create a file named for-loop.js.
//
// In that file define a variable named total and make it equal the number 0.
//
// Define a second variable named limit and make it equal the number 10.
//
// Create a for loop with a variable i starting at 0 and increasing by 1 each time through the loop.
// The loop should run as long as i is less than limit.
//
// On each iteration of the loop, add the number i to the total variable.
// To do this, you can use this statement:
//
// total += i;
//
// After the for loop, use console.log() to print the total variable to the terminal.

// var total = 0;
// var limit = 10;
//
// for (var i = 0; i < limit; i++) {
//   total = total + i
// }
//
// console.log(total);

var array = [1,2,3,4];
var total = 0;

for (var i =0; i < array.length; i++) {
  total += array[i]
}

var total = 0
array.forEach(function(el) {
  total += el
})

array.reduce(function(prev, next){
  return prev + next
}, 0)
