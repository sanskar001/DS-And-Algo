/*

Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first 
string form a subsequence of the characters in the second string. In other words, the function should check whether
the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

*/

function isSubsequence(subString, mainString) {
  let result = false;

  if (subString.length > mainString.length) {
    return false;
  }

  for (let i = 0, j = 0; i < mainString.length; i++) {
    if (mainString[i] === subString[j]) {
      j++;
      if (j === subString.length) {
        result = true;
        break;
      }
    }
  }

  return result;
}

// TESTING

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
