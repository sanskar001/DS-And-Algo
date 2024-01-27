/*
Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4


Time Complexity - O(n)

Space Complexity - O(n)

Bonus: You must do this with constant or O(1) space and O(n) time.

*/

// Solution-01 Time-O(n) and Aux Space-O(n)

// function countUniqueValues(arr) {
//   const countObj = {};

//   for (let val of arr) {
//     countObj[val] = (countObj[val] || 0) + 1;
//   }

//   return Object.keys(countObj).length;
// }

// -----------------------------------------------------

// Solution-02 Time complexity  O(n) and Aux Space O(1)

// function countUniqueValues(arr) {
//   if (!arr.length) {
//     return 0;
//   }

//   let uniqueCount = 1;

//   let unique = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== unique) {
//       unique = arr[i];
//       uniqueCount++;
//     }
//   }

//   return uniqueCount;
// }

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let uniqueCount = 1;

  for (let j = 0, i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j = i;
      uniqueCount++;
    }
  }

  return uniqueCount;
}

// -----------------------------------------------------

// Testing

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
