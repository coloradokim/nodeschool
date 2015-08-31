// Given an Array of strings, use Array#reduce to create an object that contains the
// number of times each string occured in the array. Return the object directly (no need to console.log).

var countWords = function (arr) {
  var obj = {}
  arr.forEach(function(el) {
    if (obj[el] === undefined) {
        obj[el] = 1
    } else {
      obj[el] ++
    }
  })
  return obj
}
module.exports = countWords
