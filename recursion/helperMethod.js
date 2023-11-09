// Helper Method Recursion.

// Outer function is not recursion but inner helper function is recursive.

// Example: Collect all of the odd values in the array.

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// Testing

console.log(collectOddValues([1, 2, 3, 4, 5]));
