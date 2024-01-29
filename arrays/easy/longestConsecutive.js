// Longest Consecutive Sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// Solution - Time - O(nlogn) and Aux Space: O(1)

// function longestConsecutive(arr) {
//   if (!arr.length) {
//     return 0;
//   }

//   arr.sort((a, b) => a - b);

//   let maxLen = 1;
//   let len = 1;

//   for (let i = 1; i < arr.length; i++) {
//     const diff = arr[i] - arr[i - 1];

//     if (diff <= 1) {
//       if (diff === 1) {
//         len++;
//       }
//     } else {
//       len = 1;
//     }
//     maxLen = Math.max(len, maxLen);
//   }

//   return maxLen;
// }

// =====================================

// Solution-02  Time complexity - O(n) & Aux Space complexity - O(n)

function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);

  let len = 1;
  let maxLen = 1;
  let start = null;

  for (let val of numSet) {
    if (!numSet.has(val - 1)) {
      start = val;
      len = 1;

      while (numSet.has(start + 1)) {
        start++;
        len++;
      }
    }

    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
}

// =====================================

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// console.log(longestConsecutive([0, 1, 2, 0]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
