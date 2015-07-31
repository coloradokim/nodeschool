// var names = ['Tara', 'Alley', 'Ryne'];
// var addHello = names.map(function(element) {
//   return 'Hello ' + element + '!' ;
// });
//
// console.log(names);
// console.log(addHello);

var str = 'palindrome';
[].map.call(str, function(x) {
  return x;
}).reverse().join('');

console.log([]);


// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome
