// Convert a sentence into its equivalent mobile numeric keypad sequence

/*
Given a sentence in the form of a string, convert it into its equivalent mobile numeric keypad sequence.
Input: GEEKSFORGEEKS
Output: 4333355777733366677743333557777
Explanation: For obtaining a number, we need to press a number corresponding to that character for a number of times equal to the position of the character. For example, for character E, press number 3 two times and accordingly.

Input : HELLO WORLD
Output : 4433555555666096667775553
*/

/*
// SOLUTION-1

function printSequence(str) {
  const keypad = {
    ABC: "2",
    DEF: "3",
    GHI: "4",
    JKL: "5",
    MNO: "6",
    PQRS: "7",
    TUV: "8",
    WXYZ: "9",
    " ": "0",
  };

  let result = "";

  for (let letter of str) {
    Object.keys(keypad).forEach((key) => {
      if (!!key.includes(letter)) {
        result += keypad[key].repeat(key.indexOf(letter) + 1);
      }
    });
  }

  return result;
}


*/

// const keyMap = {
//   a: "2",
//   b: "22",
//   c: "222",
//   d: "3",
//   e: "33",
//   f: "333",
//   g: "4",
//   h: "44",
//   i: "444",
//   j: "5",
//   k: "55",
//   l: "555",
//   m: "6",
//   n: "66",
//   o: "666",
//   p: "7",
//   q: "77",
//   r: "777",
//   s: "7777",
//   t: "8",
//   u: "88",
//   v: "888",
//   w: "9",
//   x: "99",
//   y: "999",
//   z: "9999",
//   " ": "0",
// };

// // Solution: Time complexity O(n) and Aux Space complexity - O(1)
// function printKeySequence(str) {
//   let result = "";

//   for (let char of str.toLowerCase()) {
//     result += keyMap[char];
//   }

//   return result;
// }

// ------------------------------------------------------

// TESTING

console.log(printKeySequence("GEEKSFORGEEKS")); // 4333355777733366677743333557777
console.log(printKeySequence("HELLO WORLD")); // 4433555555666096667775553
