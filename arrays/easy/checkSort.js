//  Check if Array Is Sorted and Rotated

/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
*/

function isSorted(nums) {
  // 1. find rotation pivot index using binary search
  function findPivot(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return i;
      }
    }

    return -1;
  }

  const pivotIndex = findPivot(nums);

  if (pivotIndex === -1) {
    return true;
  }

  // 2. Reverse rotation
  const newArr = [...nums.slice(pivotIndex), ...nums.slice(0, pivotIndex)];

  // 3. check sort
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] < newArr[i - 1]) {
      return false;
    }
  }

  // 4. Otherwise return true
  return true;
}

console.log(isSorted([2, 1, 3, 4])); // false
console.log(isSorted([3, 4, 5, 1, 2])); // true
console.log(isSorted([1, 2, 3])); // true
console.log(isSorted([3, 1, 2, 2, 4])); // false
