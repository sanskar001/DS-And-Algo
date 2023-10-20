/*

PROBLEM: Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

*/

// Solution 1 (Sliding window) Time - O(n)

function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let max = sum;

  for (let i = n; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - n];
    max = max <= sum ? sum : max;
  }

  return max;
}

// Testing

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
