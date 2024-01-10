/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

// Solution-01 Time complexity - O(n+m) and Aux Space complexity - O(1)

// function isSubsequence(str, superStr) {
//   if (str.length > superStr.length) {
//     return false;
//   }

//   let start = 0;
//   for (let i = 0; i < str.length; i++) {
//     const subString = superStr.slice(start);
//     const charIndex = subString.indexOf(str[i]);
//     if (charIndex >= 0) {
//       start = charIndex;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// -------------------------------------------------------

function isSubsequence(str, superStr) {
  if (str.length > superStr.length) {
    return false;
  }

  for (let i = 0, j = 0; i < superStr.length; i++) {
    if (superStr[i] === str[j]) {
      j++;
      if (j === str.length) {
        return true;
      }
    }
  }

  return false;
}

// -------------------------------------------------------

// Testing

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
