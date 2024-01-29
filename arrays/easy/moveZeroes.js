// Move Zeroes

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/

// Solution-01 Time complexity - O(n^2) and Aux Space complexity - O(1)
// function moveZeroes(nums) {
//   // 1. loop over array

//   let zeroCount = 0;

//   for (let i = 0; i < nums.length; ) {
//     if (nums[i] === 0) {
//       // 2. under loop -> count number of zeroes
//       zeroCount++;
//       // 3. under loop -> then remove zeroes from that index using splice
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }

//   // 4. push number of zeroes to the end of array
//   while (zeroCount > 0) {
//     nums.push(0);
//     zeroCount--;
//   }

//   return nums;
// }

// -------------------------------------------------------------

// Solution-02 Time complexity - O(n) and Aux Space complexity - O(1)

// function moveZeroes(nums) {
//   let zeroCount = 0;

//   // 1. Loop over array and moving all non-zero value to front in same sequence
//   // 2. Along with we are counting number of zeroes.
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     } else {
//       zeroCount++;
//     }
//   }

//   // 3. Setting zeroes in last positions
//   while (zeroCount > 0) {
//     nums[nums.length - zeroCount] = 0;
//     zeroCount--;
//   }

//   return nums;
// }

// -------------------------------------------------------------

// Solution-03 Time complexity - O(n) and Aux Space complexity - O(1)

function moveZeroes(nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
}

// -------------------------------------------------------------
// Testing

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0])); // [0]
