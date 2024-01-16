// Maximum Subarray

/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// Solution 1: Time complexity - O(n^2) and Aux Space complexity - O(1)

// function maxSubArray(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   let maxSum = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let sum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j];
//       maxSum = maxSum < sum ? sum : maxSum;
//     }
//   }

//   return maxSum;
// }

// -----------------------------------------------------------

// Solution 2: Time complexity - (n) and Space complexity - O(1)

// dynamic programming - Kandane Algo

function maxSubArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let sum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(sum + arr[i], arr[i]);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

// Testing
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
