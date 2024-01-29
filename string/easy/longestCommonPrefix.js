// Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

// Solution: Time complexity - O(n*m) and Space complexity - O(r)

// function longestCommonPrefix(strs) {
//   if (strs.length === 1) {
//     return strs[0];
//   }

//   const firstStrItem = strs[0];
//   const result = [];

//   for (let i = 0; i < firstStrItem.length; i++) {
//     let flag = true;
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] === firstStrItem[i]) {
//         flag = true;
//       } else {
//         flag = false;
//         break;
//       }
//     }

//     if (flag) {
//       result.push(firstStrItem[i]);
//     } else {
//       return result.join("");
//     }
//   }

//   return result.join("");
// }

// -----------------------------------------------------

// Solution 02: Time Complexity - O(n*m) and Aux Space complexity - O(r)   [FASTEST]

// function getMinLenString(strs) {
//   let minLenStrIndex = strs[0];
//   let minLen = strs[0].length;

//   for (let val of strs) {
//     if (minLen > val.length) {
//       minLen = val.length;
//       minLenStrIndex = val;
//     }
//   }

//   return minLenStrIndex;
// }

// function longestCommonPrefix(strs) {
//   if (strs.length === 1) {
//     return strs[0];
//   }

//   const minLenString = getMinLenString(strs);
//   let minLenStringArr = [...minLenString];

//   for (let string of strs) {
//     for (let i = minLenStringArr.length - 1; i >= 0; i--) {
//       if (minLenStringArr[i] !== string[i]) {
//         minLenStringArr = minLenStringArr.slice(0, i);
//         if (minLenStringArr.length === 0) {
//           return "";
//         }
//       }
//     }
//   }

//   return minLenStringArr.length;
// }

// ----------------------------------------------------

// Cleanest solution - [NOT FASTEST]

function longestCommonPrefix(strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  strs.sort();

  const firstStrItem = strs[0];

  for (let i = 0; i < firstStrItem.length; i++) {
    if (firstStrItem[i] !== strs[strs.length - 1][i]) {
      return firstStrItem.slice(0, i);
    }
  }

  return firstStrItem;
}

// -----------------------------------------------------

// Testing

console.log(longestCommonPrefix(["flowers", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));
