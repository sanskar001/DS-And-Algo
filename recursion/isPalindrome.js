/*

isPalindrome

Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backward). Otherwise it returns false.

*/

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  const first = str[0];
  const last = str[str.length - 1];

  return first === last && isPalindrome(str.slice(1, str.length - 1));
}

// Testing

console.log(isPalindrome("a")); // true
console.log(isPalindrome("ab")); // false
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("aa")); // true
console.log(isPalindrome("aaa")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abcba")); // true
console.log(isPalindrome("abccba")); // true
console.log(isPalindrome("abccdba")); // false
