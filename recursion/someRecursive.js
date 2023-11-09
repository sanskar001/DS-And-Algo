/*

flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

*/

function flatten(arr) {
  const result = [];

  function helper(inputArr) {
    // Base case
    if (inputArr.length === 0) {
      return;
    }

    // If element is nested array
    if (Array.isArray(inputArr[0])) {
      helper(inputArr[0]);
    } else {
      // if element is any value
      result.push(inputArr[0]);
    }

    // Reducing array
    helper(inputArr.slice(1));
  }

  helper(arr);

  return result;
}

// Testing

console.log(flatten([1, 2, [3, 4, [5]]]));
