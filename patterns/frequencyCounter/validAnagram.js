/*
Given two strings, write a function to determine if the second string is an 
anagram of the first. An anagram is a word, phrase, or name formed by 
rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true


Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)

*/

// Solution-01 Time complexity - O(n^2) and Space complexity - O(1)

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   function deleteCharFromString(index, str) {
//     return (
//       str.slice(0, index) + (index + 1 < str.length ? str.slice(index + 1) : "")
//     );
//   }

//   for (let i = 0; i < str1.length; i++) {
//     const targetIndex = str2.indexOf(str1[i]);

//     if (targetIndex >= 0) {
//       str2 = deleteCharFromString(targetIndex, str2);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// -----------------------------------------------------

// Solution-02 Time Complexity - O(n) and Space complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const strObj1 = {};
  const strObj2 = {};

  for (let i = 0; i < str1.length; i++) {
    strObj1[str1[i]] = (strObj1[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    strObj2[str2[i]] = (strObj2[str2[i]] || 0) + 1;
  }

  for (let key in strObj1) {
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
  }

  return true;
}

// -----------------------------------------------------

// Testing

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anargam", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
