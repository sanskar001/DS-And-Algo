/*

PROBLEM: Anagrams 

Given two strings,write a function to determine if the second string is anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letter of another, such as
"cinema", formed from "iceman".

*/

// Solution (Frequency counters patterns)
// Time - O(n) and Space- O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let val of str1) {
    map1[val] = (map1[val] || 0) + 1;
  }

  for (let val of str2) {
    map2[val] = (map2[val] || 0) + 1;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
}

// Example Testing

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
