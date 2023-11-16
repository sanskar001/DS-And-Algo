// Bubble Sort Algorithm

// A sorting algorithm where the largest values bubble up to the top.

/*

Arr: [5, 3, 4, 1, 2]

[5, 3, 4, 1, 2]

[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[3, 4, 1, 5, 2]
[3, 4, 1, 2, 5]

[3, 1, 4, 2, 5]
[3, 1, 2, 4, 5]

[1, 3, 2, 4, 5]
[1, 2, 3, 4, 5]  (Result)

*/

// Note: Using swapping flag we can reduce unneccessary iteration when given array is almost sorted.

// Time complexity - O(n^2) and Space complexity - O(1)

function bubbleSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let noSwap = true;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swapping
        noSwap = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (noSwap) {
      return arr;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([5, 3, 4, 1, 2]));
console.log(bubbleSort([5, 3, 4, 1, 2, 1]));
