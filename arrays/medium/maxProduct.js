/*
152. Maximum Product Subarray

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// SOLUTION-1 - Time complexity - O(n^2) and Aux Space complexity - O(1)

/*
var maxProduct = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      max = Math.max(max, product);
    }
  }

  return max;
};
*/

// SOLUTION-2 - Time complexity - O(n) and Aux space complexity - O(1)

var maxProduct = function (nums) {
  let result = nums[0];
  let minProduct = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    minProduct = Math.min(nums[i], nums[i] * minProduct);
    maxProduct = Math.max(nums[i], nums[i] * maxProduct);

    result = Math.max(maxProduct, result);
  }

  return result;
};

// TESTING

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([0, 2]));
