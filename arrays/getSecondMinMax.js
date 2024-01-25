// Find the smallest and second smallest elements in an array

/*
Write an efficient program to find the smallest and second smallest element in an array.

Example: 
Input:  arr[] = {12, 13, 1, 10, 34, 1}
Output: The smallest element is 1 and 
        second Smallest element is 10
*/

// // Solution: Time complexity - O(nlogn) and Aux Space complexity - O(1)
// function getSecondMinMax(arr) {
//   if (arr.length === 1) {
//     return { min: arr[0], max: arr[0] };
//   }

//   // sort arr in ascending order
//   arr.sort((a, b) => a - b);

//   // pick second and second-last index value
//   return { min: arr[1], max: arr[arr.length - 2] };
// }

// ---------------------------------------------

// Solution: Time complexity - O(nlogn) and Aux Space complexity - O(1)
function getSecondMinMax(arr) {
  if (arr.length === 2) {
    return { min: Math.max.apply(null, arr), max: Math.min.apply(null, arr) };
  }

  const result = { min: arr[0], max: arr[0] };
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max <= arr[i]) {
      result["max"] = max;
      max = arr[i];
    }

    if (min >= arr[i]) {
      result["min"] = min;
      min = arr[i];
    }
  }

  return result;
}

// ===========================================================

// Testing

console.log(getSecondMinMax([12]));
console.log(getSecondMinMax([12, 13, 1, 10, 34, 1]));
console.log(getSecondMinMax([12, 10]));
