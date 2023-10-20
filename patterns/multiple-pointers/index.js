/*

PROBLEM: Write a function called "sumZero" which accepts a "sorted" array of integers. The function
should find the first pair where the sum is 0. Return an array that includes both values that sum 
to zero or undefined if a pair does not exist.

*/

// Solution 1 (Naive Solution)
// Time - O(n^2)

/*

function sumZero(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    const target = 0 - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target) {
        return [arr[i], target];
      }
    }
  }

  return undefined;
}

*/

// Solution 2 (Multiple pointer pattern)
// Time - O(n)

function sumZero(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  let first = 0;
  let last = arr.length - 1;

  while (arr[first] < arr[last]) {
    const sum = arr[first] + arr[last];

    if (sum === 0) {
      return [arr[first], arr[last]];
    } else if (sum < 0) {
      first++;
    } else {
      last--;
    }
  }

  return undefined;
}

// Testing

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
