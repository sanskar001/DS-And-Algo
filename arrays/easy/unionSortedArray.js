// Union of Two Sorted Arrays

/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

Examples
Example 1:
Input:
n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 

Example 2:
Input:
n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output: {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}
*/

// Solution-01 Time complexity - O(nlogn) and Aux Space complexity - O(n)

// function union(arr1, arr2) {
//   // 1. concat these two sorted array
//   const combinedArr = arr1.concat(arr2);

//   // 2. make new array of distinct item
//   const distinctItemArr = Array.from(new Set(combinedArr));

//   // 3. sort distinctItemArr in ascending order
//   return distinctItemArr.sort((a, b) => a - b);
// }

// ---------------------------------------------
// Solution-01 Time complexity - O(n+m) and Aux Space complexity - O(n+m)

function union(arr1, arr2) {
  const result = [];
  let i = 0; // for arr1
  let j = 0; // for arr2

  while (i < arr1.length || j < arr2.length) {
    const last = result[result.length - 1];
    let item = null;

    if (arr1[i] < arr2[j] || j === arr2.length) {
      item = arr1[i];
      i++;
    } else if (arr1[i] > arr2[j] || i === arr1.length) {
      item = arr2[j];
      j++;
    } else {
      item = arr1[i];
      i++;
      j++;
    }

    if (item !== last) {
      result.push(item);
    }
  }

  return result;
}

// TESTING

console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 4, 5])); // [1,2,3,4,5]
console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12])); // [1,2,3,4,5,6,7,8,9,10,11,12]
