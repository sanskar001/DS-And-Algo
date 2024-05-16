/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const sortedNums = [...nums];

  sortedNums.sort((a, b) => a - b);

  return sortedNums[nums.length - k];
};
