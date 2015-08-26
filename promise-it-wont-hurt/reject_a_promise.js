var q = require('q');
var defer = q.defer();

function printError (err) {
  console.log(err.message);
}

defer.promise.then(null, printError)
setTimeout(defer.reject, 300, new Error("REJECTED!"));


// 1. Use "q" again to create a promise
// 2. Create a function to print error.message using console.log.  Pass this
// function as a rejection handler to the "then" method of your promise.
// 3.Manually reject that promise using setTimeout with a delay of 300ms and pass it
// an Error object with parameter "REJECTED!";
