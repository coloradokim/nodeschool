var q = require('q');
var defer = q.defer();

defer.promise.then(console.log)
setTimeout(defer.resolve, 5000, "RESOLVED!")
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here

// Task
//
//
// Pass console.log to the "then" method of your promise.
//
// Manually resolve that promise using setTimeout with a delay of 300ms and pass
// it a parameter of "RESOLVED!".
//
// In Q, promises are created using Q.defer();
//
// The defer that is created is not exactly the promise and in order to return the actual
// promise object itself you must return the "promise" attribute of the newly created defer.
