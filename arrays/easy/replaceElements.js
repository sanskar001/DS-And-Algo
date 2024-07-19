// Replace Elements with Greatest Element on Right Side Using In place method

// Time complexity - O(N^2) and Aux Space complexity - O(1)

/*
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
      break;
    }

    let max = arr[i + 1];

    for (let j = i + 2; j < arr.length; j++) {
      max = Math.max(max, arr[j]);
    }

    arr[i] = max;
  }

  return arr;
};
*/

//////////////////////////////////////////////////////////////////////

// Time complexity - O(N) and Aux Space complexity - O(1)

// Approach: Iterate from right to left and manage max value.

var replaceElements = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let current = arr[i];
    arr[i] = max;
    max = Math.max(max, current);
  }

  return arr;
};

// TESTING

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]
