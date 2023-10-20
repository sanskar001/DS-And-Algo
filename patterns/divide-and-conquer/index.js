/*

PROBLEM: Given a sorted array of intergers, write a function called a search that accepts a value and returns, 
 the index where the value passed to the function is located. If the value is not found return -1.

*/

// Solution 1  (Binary Search which uses Divide and Conquer pattern)
// Time - O(log n)

function search(arr, target) {
  let mid = 0;
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    mid = Math.floor((last + first) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

// Testing

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
