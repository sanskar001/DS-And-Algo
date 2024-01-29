// Search an element in a sorted and rotated Array

/*
Note: Find the element in O(logN) time and assume that all the elements are distinct.

Example:  

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
Output : Found at index 8

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
Output : Not found

Input : arr[] = {30, 40, 50, 10, 20}, key = 10   
Output : Found at index 3
*/

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid - 1] > arr[mid]) {
      return mid;
    } else if (arr[left] < arr[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(findPivot([5, 6, 7, 8, 9, 10, 1, 2, 3], 8));
