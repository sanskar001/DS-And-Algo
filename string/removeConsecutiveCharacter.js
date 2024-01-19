// Remove Consecutive Characters

/*
Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

Example 1:

Input:
S = aabb
Output:  ab 
Explanation: 'a' at 2nd position is
appearing 2nd time consecutively.
Similiar explanation for b at
4th position.

Example 2:

Input:
S = aabaa
Output:  aba
Explanation: 'a' at 2nd position is
appearing 2nd time consecutively.
'a' at fifth position is appearing
2nd time consecutively.

*/

function removeConsecutiveCharcter(str) {
  if (str.length === 1) {
    return str;
  }

  const strArr = [];

  for (let char of str) {
    if (char !== strArr[strArr.length - 1]) {
      strArr.push(char);
    }
  }

  return strArr.join("");
}

// ---------------------------------------------

// Testing

console.log(removeConsecutiveCharcter("aba"));
console.log(removeConsecutiveCharcter("abaa"));
console.log(removeConsecutiveCharcter("aabaa"));
console.log(removeConsecutiveCharcter("aabb"));
console.log(removeConsecutiveCharcter("aabbaaa"));
