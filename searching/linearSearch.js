// Linear Search

// Time complexity - O(n)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Testing

const testArr = [10, 20, 30, 40, 50];

console.log(linearSearch(testArr, 10));
console.log(linearSearch(testArr, 50));
console.log(linearSearch(testArr, 60));
