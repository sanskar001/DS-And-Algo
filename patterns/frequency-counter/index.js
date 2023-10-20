/*

PROBLEM: Write a function called same, which accepts two arrays. The function should return true if every value
in the array has its corresponding value sqaured in the second array. The frequency of values must be the same.

Example:

same([1, 2, 3], [4, 1, 9])     =>   true
same([1, 2, 3], [1, 9])        =>   false
same([1, 2, 1], [4, 4, 1])     =>   false

*/

// SOLUTION 1 (Naive Solution)  - Time complexity O(n^2)

/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const target = arr1[i] ** 2;
    const correctIndex = arr2.indexOf(target);

    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  return true;
}
*/

// SOLUTION 2 (Frequency Counter pattern) - Time complexity - O(n) & Space complexity - O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let val of arr1) {
    map1[val] = (map1[val] || 0) + 1;
  }

  for (let val of arr2) {
    map2[val] = (map2[val] || 0) + 1;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
