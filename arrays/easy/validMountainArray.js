// Valid Mountain Array

// Time complexity - O(N) and Aux Space complexity - O(1)

var validMountainArray = function (arr) {
  let pickPoint = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      return false;
    } else if (arr[i + 1] < arr[i]) {
      pickPoint = i;
      break;
    }
  }

  if (pickPoint < 1) {
    return false;
  }

  for (let i = pickPoint; i < arr.length; i++) {
    if (arr[i + 1] >= arr[i]) {
      return false;
    }
  }

  return true;
};

// TESTING

console.log(validMountainArray([1, 2, 3, 4, 3, 2, 1])); // true
console.log(validMountainArray([1, 2, 3, 4, 1])); // true
console.log(validMountainArray([1, 4, 3, 2, 1])); // true
console.log(validMountainArray([1, 2, 2, 4, 3, 1])); // false
console.log(validMountainArray([1, 2, 3])); // false
console.log(validMountainArray(3, 2, 1)); // false
