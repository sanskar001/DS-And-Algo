// Write a program to reverse an array or string

/*
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/

// function reverseArr(arr) {
//   const result = [...arr];

//   return result.reverse();
// }

// -----------------------------------------

// Solution: Time: O(n) and Aux Space - O(n)

// function reverseArr(arr) {
//   const result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }

//   return result;
// }

// -----------------------------------------

// Recursion - mutable

function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  const popped = arr.pop();

  return [popped].concat(reverseArr(arr));
}

// Testing

const arr = [1, 2, 3];
console.log(reverseArr(arr));
