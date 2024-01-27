// Rotate Array Right

/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

// Solution-01 Time complexity - O(n) and Aux Space complexity - O(n)

// function rotate(nums, k) {
//   const rotateCount = k % nums.length;

//   if (rotateCount === 0) {
//     return nums;
//   }

//   const leftPart = nums.slice(-rotateCount);
//   const rightPart = nums.slice(0, nums.length - rotateCount);

//   let i = 0;

//   while (i < leftPart.length) {
//     nums[i] = leftPart[i];
//     i++;
//   }

//   while (i < rightPart.length + leftPart.length) {
//     nums[i] = rightPart[i - leftPart.length];
//     i++;
//   }
// }

// -------------------------------------------------

// Solution-01 Time complexity - O(n) and Aux Space complexity - O(n)
// Less operation

function rotate(nums, k) {
  const rotateCount = k % nums.length;

  if (rotateCount === 0) {
    return nums;
  }

  const leftPart = nums.slice(-rotateCount);

  for (let i = nums.length - rotateCount - 1; i >= 0; i--) {
    nums[i + rotateCount] = nums[i];
  }

  for (let i = 0; i < leftPart.length; i++) {
    nums[i] = leftPart[i];
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
