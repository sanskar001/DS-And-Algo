
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  function twoSum(arr, start, end, target) {
    const diffObj = {};

    for (let i = start; i < end; i++) {
      diffObj[target - arr[i]] = i;
    }

    for (let i = start; i < end; i++) {
      if (!!diffObj[arr[i]] && diffObj[arr[i]] !== i) {
        return [arr[i], arr[diffObj[arr[i]]]];
      }
    }

    return [];
  }

  for (let i = 0; i < nums.length - 2; i++) {
    const twoSumResult = twoSum(nums, i + 1, nums.length, 0 - nums[i]);
    if (twoSumResult.length) {
      result.push([nums[i], ...twoSumResult]);
    }
  }

  return result;
};
