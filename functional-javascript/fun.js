function addDog(dogs) {
  var withString = dogs.map(function(elem) {
    return 'a ' + elem + ' is a breed of dog!'
  })
console.log(withString);
}
addDog(['golden retriever', 'husky', 'pitbull'])
