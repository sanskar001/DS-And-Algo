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

// Remove Consecutive Characters

// TIME COMPLEXITY - O(N) & SPACE COMPLEXITY - O(N)

function removeConsecutiveCharcter(str) {
  let result = "";

  for (let l of str) {
    if (result[result.length - 1] !== l) {
      result += l;
    }
  }

  return result;
}


// ---------------------------------------------

// Testing

console.log(removeConsecutiveCharcter("aba"));
console.log(removeConsecutiveCharcter("abaa"));
console.log(removeConsecutiveCharcter("aabaa"));
console.log(removeConsecutiveCharcter("aabb"));
console.log(removeConsecutiveCharcter("aabbaaa"));
