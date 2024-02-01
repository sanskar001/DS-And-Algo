// Single Number

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Note: You must implement a solution with a linear runtime complexity and use only constant extra space.


Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1
*/

// Solution-01 Time complexity - O(n) and Aux Space complexity - O(n)

// function singleNumber(nums) {
//   const memory = {};

//   for (let i = 0; i < nums.length; i++) {
//     memory[nums[i]] = (memory[nums[i]] || 0) + 1;
//   }

//   for (let key in memory) {
//     if (memory[key] === 1) {
//       return key;
//     }
//   }
// }

// ---------------------------------------------

// Solution-02 Time complexity - O(n) and Aux Space complexity - O(1)

// Using XOR operation
/*
Assume the given array is: [4,1,2,1,2]
XOR of all elements = 4^1^2^1^2
      = 4 ^ (1^1) ^ (2^2)
      = 4 ^ 0 ^ 0 = 4^0 = 4
Hence, 4 is the single element in the array.
*/

function singleNumber(nums) {
  const result = nums.reduce((acc, val) => acc ^ val, 0);
  return result;
}

// TESTING

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
