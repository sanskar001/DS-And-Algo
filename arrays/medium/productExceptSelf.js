// 238. Product of Array Except Self

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

// SOLUTION-1 - Time complexityn - O(n^2) and Aux Space complexity - O(n)

/*
var productExceptSelf = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    if (product === -0) {
      result.push(0);
    } else {
      result.push(product);
    }
  }

  return result;
};
*/

// SOLUTION-2 Time Complexity - O(n) and Aux Space complexity - O(n)
// Using prefix product and suffix product.

/*
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = [];
  const prefixProducts = new Array(n).fill(1);
  const suffixProducts = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    const output = prefixProducts[i] * suffixProducts[i];
    if (output === -0) {
      result[i] = 0;
    } else {
      result[i] = output;
    }
  }

  return result;
}; */

// SOLUTION-3 Time complexity - O(n) and Aux Space complexity - O(1)
// Most Effecient code

var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let suffixProduct = 1;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const output = result[i] * suffixProduct;
    if (output === -0) {
      result[i] = 0;
    } else {
      result[i] = output;
    }
    suffixProduct *= nums[i];
  }

  return result;
};

// TESTING

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
