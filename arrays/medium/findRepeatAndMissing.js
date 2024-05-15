/*
You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.

Example:

Input:[3 1 2 5 3] 

Output:[3, 4] 

A = 3, B = 4

*/

// TESTING

function findRepeatAndMissing(nums) {
  const result = { repeat: null, missing: null };
  const sortedNums = [...nums];

  sortedNums.sort((a, b) => a - b);

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      result.repeat = sortedNums[i];
      break;
    }
  }

  const len = nums.length;
  const sum = nums.reduce((total, val) => total + val, 0);
  result.missing = (len * (len + 1)) / 2 - sum + result.repeat;

  return result;
}

// TESTING

console.log(findRepeatAndMissing([3, 1, 2, 5, 3]));
