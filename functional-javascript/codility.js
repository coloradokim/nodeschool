function solution(S, T) {
  var s = S.split("");
  var t = T.split("");
  if (s.length != t.length) {
    return "IMPOSSIBLE";
  }
  for (var i=0; i<s.length; i++)
  for (var j=0; j<t.length; i++)
    if(s[i] === t[j]) {
      return "NOTHING";
    }
}
console.log(solution("test", "test" ));




// return "INSERT " +
// return "DELETE " +
// return "SWAP " +
