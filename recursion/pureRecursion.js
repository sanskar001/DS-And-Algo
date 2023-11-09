// Pure Recursion

// Example: Collects all of the odds in the array.

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// Testing

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

/*

collectOddValues([1, 2, 3, 4, 5])
    [1].collectOddValues([2, 3, 4, 5])
        [].collectOddValues([3, 4, 5])
            [3].collectOddValues([4, 5])
                [].collectOddValues([5])
                    [5].collectOddValues([])

*/
