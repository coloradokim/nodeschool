var A = [1,2,-1,4,3]

function solution(A) {
    A.forEach(function(el, index) {
    if (el === -1) {
      A.splice(index, 1)
    }
  })
  return A.length
}


console.log(solution(A));


// function getShortMessages(messages) {
//    var msg = messages.filter(function(object) {
//     return object.message.length < 50
//    }).map(function(obj) {
//      return obj.message
//    })
//  }
