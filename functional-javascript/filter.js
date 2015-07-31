function getShortMessages(messages) {
     return messages.filter(function(item) {
       return item.message.length < 50
     }).map(function(item) {
       return item.message
     })
   }





    module.exports = getShortMessages



    //
    //
    // function getShortMessages(messages) {
    //   return messages.map(function(elem) {
    //     return elem['message']
    //   }).filter(function(elem) {
    //     return elem.length < 50;
    //   })
    // }
