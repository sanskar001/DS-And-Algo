// Maximum and minimum of an array using minimum number of comparisons

/*
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
        Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
         Maximum element is: 35
*/

// Solution 1: Time: O(n) and Aux Space: O(1)

function getMinMax(arr) {
  if (!arr.length) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];

  for (let val of arr) {
    min = val < min ? val : min;
    max = val > max ? val : max;
  }

  return { min, max };
}

// ------------------------------------------------------

// Solution 1: Time: O(n/2) and Aux Space: O(1)

// function getMinMax(arr) {
//   if (!arr.length) {
//     return null;
//   }

//   let min = 0;
//   let max = 0;

//   if (arr.length === 1) {
//     return { min: 1, max: 1 };
//   }

//   if (arr[0] < arr[1]) {
//     min = arr[0];
//     max = arr[1];
//   } else {
//     min = arr[1];
//     max = arr[0];
//   }

//   for (let i = 2; i < arr.length; i += 2) {
//     if (arr[i] < arr[i + 1]) {
//       min = arr[i];
//       max = arr[i + 1];
//     } else {
//       min = arr[i + 1];
//       max = arr[i];
//     }
//   }
// }

// Testing

console.log(getMinMax([])); // null
console.log(getMinMax([3, 5, -2, -1, 9])); // {min: -1, max: 9}
console.log(getMinMax([22, 14, 8, 17, 35, 3])); // {min: 3, max: 35}
