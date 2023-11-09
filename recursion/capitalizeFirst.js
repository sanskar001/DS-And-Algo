/*

capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

*/

// Using helper recursive function

function capitalizeFirstWithHelper(arr) {
  const result = [];

  function helper(inputArr) {
    if (inputArr.length === 0) {
      return;
    }

    result.push(inputArr[0][0].toUpperCase() + inputArr[0].slice(1));

    helper(inputArr.slice(1));
  }

  helper(arr);

  return result;
}

// -----------------------------------------------------

// Using Pure recursion

function capitalizeFirstWithPure(arr) {
  const newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return newArr.concat(capitalizeFirstWithPure(arr.slice(1)));
}

// Testing

console.log(capitalizeFirstWithHelper(["sanskar", "first", "second"]));
console.log(capitalizeFirstWithPure(["sanskar", "first", "second"]));
