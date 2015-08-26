    //
    // function doubleAll(numbers) {
    //   return numbers.map(function (num) {
    //     return num * 2
    //   })
    // }
    //
    //
    // module.exports = doubleAll


var arr = [1,2,3,4,5]

function arrMap(array) {
  console.log(array);
  var newArr = array.map(function(item){
    return item + 2
  })
  console.log(newArr);
}
