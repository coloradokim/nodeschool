// Return a function that takes a list of valid users,
// and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

   function checkUsersValid(goodUsers) {
     return function(submittedUsers) {
       return submittedUsers.every(function(submit) {
       	return goodUsers.some(function(good) {
       		return good.id === submit.id;
       	})
       })
     };
   }

   module.exports = checkUsersValid



//
// ## Example
//
//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 }
//     ]
//
//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)
//
//     testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ])
//     // => true
//
//     testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ])
//     // => false
