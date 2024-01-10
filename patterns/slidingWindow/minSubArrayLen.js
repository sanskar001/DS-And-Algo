/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum 
is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)

Space Complexity - O(1)
*/

/*
2,3,1,2,4,3   2,3,1,2 = 8 >= 7   => 4
3,1,2,4,3   3,1,2 = 6 < 7   => 4
3,1,2,4,3   3,1,2,4 = 10 > 7   => 4
1,2,4,3   1,2,4 = 7 >= 7   => 3
2,4,3   2,4 = 6 < 7   => 3
2,4,3   2,4,3 = 9 >= 7   => 3
4,3   4,3 = 7 >= 7   => 2
3   3 = 3 < 7   => 2
*/

function minSubArrayLen(arr, num) {
  let minLen = 0;
  let subArrSum = 0;
  let subArrLen = 0;

  for (let i = 0; i < arr.length; i++) {
    subArrSum += arr[i];
    if (subArrSum >= num) {
      minLen = i + 1;
      subArrLen = minLen;
      break;
    }
  }

  if (subArrSum < num) {
    return 0;
  }

  for (let i = 1; i < arr.length; i++) {
    subArrSum = subArrSum - arr[i - 1];
    subArrLen--;

    if (subArrSum >= num) {
      minLen = subArrLen;
      continue;
    }

    subArrSum = subArrSum + arr[i + subArrLen];
    subArrLen++;
    minLen = subArrLen;
  }

  if (arr[arr.length - 1] >= num) {
    return 1;
  }

  return minLen;
}

// Testing

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
