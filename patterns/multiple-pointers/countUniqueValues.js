/*

// PROBLEM: countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
values in the array, There can be nagative number in the array, but it will always be sorted.

*/

// Solution 1 (Multiple pointer pattern)
// Time - O(n)

function countUniqueValues(arr) {
  let count = 0;

  if (arr.length >= 1) {
    count = 1;
  }

  for (let i = 0, j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      count++;
      i = j;
    }
  }

  return count;
}

// Testing

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
