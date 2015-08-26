var foodsArr = ['bananas', 'kale', 'chocolate']

var eat = function(arr) {
  return arr.map(function(el) {
    return el + ' tasted really good.'
  })
}

console.log(eat(foodsArr));
