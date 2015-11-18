// Given an Array of strings, use Array#reduce to create an object that contains the
// number of times each string occured in the array.
 // Return the object directly (no need to console.log).

// example
// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//
//    console.log(countWords(inputWords))

   // =>
   // {
   //   Apple: 2,
   //   Banana: 1,
   //   Durian: 3
   // }

function countWords (arr) {
  return arr.reduce(function(prev, curr) {
    prev[curr] != undefined ? prev[curr] ++ : prev[curr] = 1
      return prev
  }, {})
}


module.exports = countWords
