/*

productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.



*/

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  const last = arr.pop();
  return last * productOfArray(arr);
}

// Testing

console.log(productOfArray([1, 2, 3, 4, 5]));
console.log(productOfArray([]));
