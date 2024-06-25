// Group Anagrams

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const strObj1 = {};
  const strObj2 = {};

  for (let char of str1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }

  for (let char of str2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }

  for (let key in strObj1) {
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
  }

  return true;
}

// SOLUTION-1 => TIME COMPLEXITY - O(N^3) AND SPACE COMPLEXITY - O(N);

// var groupAnagrams = function (strs) {
//   const result = [];
//   const tempStrs = [...strs];

//   for (let i = 0; i < tempStrs.length; i++) {
//     const arr = [tempStrs[i]];
//     for (let j = i + 1; j < tempStrs.length; ) {
//       if (isAnagram(tempStrs[i], tempStrs[j])) {
//         arr.push(tempStrs[j]);
//         tempStrs.splice(j, 1);
//       } else {
//         j++;
//       }
//     }
//     result.push(arr);
//   }

//   return result;
// };

// =================================================================

// SOLUTION-2 => TIME COMPLEXITY - O(N^3) AND SPACE COMPLEXITY - O(N)

// var groupAnagrams = function (strs) {
//   const memory = {};

//   for (let first of strs) {
//     const matches = [];

//     for (let second of strs) {
//       if (isAnagram(first, second)) {
//         if (!memory[second]) {
//           matches.push(second);
//         } else {
//           break;
//         }
//       }
//     }

//     if (matches.length) {
//       memory[first] = matches;
//     }
//   }

//   return Array.from(Object.values(memory));
// };

// =================================================================

var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

// ===================================================================

// TESTING

const example1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const example2 = [""];
const example3 = ["a"];

console.log(groupAnagrams(example1));
console.log(groupAnagrams(example2));
console.log(groupAnagrams(example3));
