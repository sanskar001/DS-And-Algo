/*

capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

*/

function capitalizeWords(arr) {
  const newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

// Testing

console.log(capitalizeWords(["i", "am", "yoyo", "rapper"]));
