// Search in Rotated Sorted Array

/*
here is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

var search = function (nums, target) {
  function findPivotIndex(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] > nums[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  }

  function binarySearch(nums, start, end, target) {
    let left = start;
    let right = end;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  const pivotedIndex = findPivotIndex(nums);

  console.log({ pivotedIndex });

  if (nums[pivotedIndex] <= target && target <= nums[nums.length - 1]) {
    return binarySearch(nums, pivotedIndex, nums.length - 1, target);
  } else {
    return binarySearch(nums, 0, pivotedIndex - 1, target);
  }
};

// TESTING

console.log(search([4, 5, 6, 7, 0, 1, 2], 6));
