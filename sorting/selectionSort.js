/* Selection Sorting

 Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

 Time complexity - O(n^2) and Space complexity - O(1)

*/

function selectionSort(arr) {
  if (arr <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swapping
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

// Testing

console.log(selectionSort([5, 1, 2, 3, 4]));
console.log(selectionSort([0, 12, 34, 22, 10, 19, 17]));
