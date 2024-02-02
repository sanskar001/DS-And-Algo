// Longest Subarray with given Sum K(Positives)

/*
Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
*/

// Solution-01 Time complexity - O(n^2) ans Aux Space complexity - O(1)

// function lenOfLongSubarr(arr, n, k) {
//   let maxLen = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         maxLen = Math.max(maxLen, j - i + 1);
//       }
//     }
//   }

//   return maxLen;
// }

// ------------------------------------------------------------

// Using Sliding Window

function lenOfLongSubarr(arr, n, k) {
  let maxLen = 0;
  let sum = 0;
  let i = 0;
  let j = 0;

  for (let p = 0; p < n; p++) {
    sum += arr[p];
    if (sum >= k) {
      j = p;
      break;
    }
  }

  while (j < n) {
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    } else if (sum > k) {
      while (sum > k) {
        sum = sum - arr[i];
        i++;
      }
    }

    sum += arr[j];
    j++;
  }

  return maxLen;
}

function makeArrFromStr(str) {
  return str.split(" ").map((val) => +val);
}

console.log(lenOfLongSubarr([2, 3, 5], 3, 5)); // 2
console.log(lenOfLongSubarr([2, 3, 5, 1, 9], 5, 10)); // 3
console.log(lenOfLongSubarr([10, 5, 2, 7, 1, 9], 6, 15)); // 4
