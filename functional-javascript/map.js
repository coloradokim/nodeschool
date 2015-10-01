// convert for loop to a function using map
// function doubleAll(numbers) {
//    var result = []
//    for (var i = 0; i < numbers.length; i++) {
//      result.push(numbers[i] * 2)
//    }
//    return result
//  }

 function doubleAll(arr) {
   var newArr = arr.map(function(el) {
     return el * 2
   })
   return newArr
 }

 module.exports = doubleAll
