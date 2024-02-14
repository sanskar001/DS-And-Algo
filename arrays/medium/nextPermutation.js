// Next Permutation

/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
*/

// Time complexity - O(n) and Aux Space complexity - O(1)

function reverseArr(nums, start = 0, end) {
  while (start <= end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];

    start++;
    end--;
  }

  return nums;
}

function nextPermutation(nums) {
  if (nums.length === 1) {
    return nums;
  }

  // Move from backside
  // Find index of element which follow nums[i] < nums[i+1];
  let maskedIndex;
  let nextMaskedIndex;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      maskedIndex = i;
      break;
    }
  }

  if (maskedIndex === undefined) {
    return reverseArr(nums, 0, nums.length - 1);
  }

  // Find index of value in right subarray which is just more than maskedIndex value
  for (let j = nums.length - 1; j > maskedIndex; j--) {
    if (nums[j] > nums[maskedIndex]) {
      nextMaskedIndex = j;
      break;
    }
  }

  // Swap maskedIndex value with nextMaskedIndex value
  [nums[maskedIndex], nums[nextMaskedIndex]] = [
    nums[nextMaskedIndex],
    nums[maskedIndex],
  ];

  // Reverse right subarray from maskedIndex
  return reverseArr(nums, maskedIndex + 1, nums.length - 1);
}

console.log(nextPermutation([3, 2, 1]));
