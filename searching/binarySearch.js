// Binary Search

// Time complexity - O(logn)

// Note: this is only applicable for sorted array.

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
