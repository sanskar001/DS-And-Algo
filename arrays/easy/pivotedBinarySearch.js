// Search an element in a sorted and rotated Array

/*
Given a sorted and rotated array arr[] of size N and a key, the task is to find the key in the array.

Note: Find the element in O(logN) time and assume that all the elements are distinct.

Example:  

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
Output : Found at index 8

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
Output : Not found

Input : arr[] = {30, 40, 50, 10, 20}, key = 10   
Output : Found at index 3

*/

// Brute force solution: Linear Search (Time - O(n) and Aux Space - O(1))

function getPivotedIndex(arr) {
  let left = 0;
  let right = arr.length - 1;

  // No rotation happen
  if (arr[left] < arr[right]) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid - 1] > arr[mid]) {
      return mid;
    } else if (arr[mid] > arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return 0;
}

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function pivotedBinarySearch(arr, target) {
  const pivotedIndex = getPivotedIndex(arr);

  let last = arr.length - 1;

  // Search in right pivoted subarray
  if (target >= arr[pivotedIndex] && target <= arr[last]) {
    return binarySearch(arr, target, pivotedIndex, last);
  } else {
    // Search in left subarray
    return binarySearch(arr, target, 0, pivotedIndex - 1);
  }
}

// TESTING

console.log(pivotedBinarySearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 3));
console.log(pivotedBinarySearch([5, 6, 7, 8, 9, 10, 1, 2, 3], 30));
console.log(pivotedBinarySearch([30, 40, 50, 10, 20], 10));
