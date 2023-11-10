/*

collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the 
object that have a typeof string.

*/

// Using Helper Recursive function

function collectStrings(obj) {
  const result = [];

  function helper(inputObj) {
    for (let key in inputObj) {
      if (typeof inputObj[key] === "object" && !Array.isArray(inputObj)) {
        helper(inputObj[key]);
      } else if (typeof inputObj[key] === "string") {
        result.push(inputObj[key]);
      }
    }
  }

  helper(obj);

  return result;
}

// Testing

console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  })
);
