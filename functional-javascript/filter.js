function getShortMessages(messages) {
   var msg = messages.filter(function(object) {
    return object.message.length < 50
   }).map(function(obj) {
     return obj.message
   })
 }





 module.exports = getShortMessages


 // getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
 //
 // The function should return an array containing the messages themselves, without their containing object.
 //
 // ## Arguments
 //
 //   * messages: an Array of 10 to 100 random objects that look something like this:
 //
 //     {
 //       message: 'Esse id amet quis eu esse aute officia ipsum.' // random
 //     }
 //
 // ## Conditions
 //
 //   * Do not use any for/while loops or Array#forEach.
 //   * Do not create any unnecessary functions e.g. helpers.
