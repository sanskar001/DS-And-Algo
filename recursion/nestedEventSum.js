/*

nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

*/

function nestedEvenSum(obj) {
  let sum = 0;

  function helper(inputObj) {
    for (let key in inputObj) {
      if (typeof inputObj[key] === "object") {
        helper(inputObj[key]);
      }
      if (typeof inputObj[key] === "number" && inputObj[key] % 2 === 0) {
        sum = sum + inputObj[key];
      }
    }
  }

  helper(obj);

  return sum;
}

// Testing

console.log(
  nestedEvenSum({ a: 1, b: 20, c: { x: 11, y: 22, z: { p: 30, q: 20 } } })
);
