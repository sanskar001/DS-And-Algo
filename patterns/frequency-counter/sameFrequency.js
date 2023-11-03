/*

Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

// Solution-1 (Brute Force Approach)
// Time - O(n^2) and Space - O(n)

// function sameFrequency(num1, num2) {
//   const numList1 = String(num1).split("");
//   const numList2 = String(num2).split("");

//   if (numList1.length !== numList2.length) {
//     return false;
//   }

//   for (let i = 0; i < numList1.length; i++) {
//     const indexValue = numList2.indexOf(numList1[i]);

//     if (indexValue !== -1) {
//       numList2.splice(indexValue, 1);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// ----------------------------------------------

// SOLUTION: Frequency Counter
// Time: O(n) and Space: O(n)

function sameFrequency(num1, num2) {
  const numString1 = String(num1);
  const numString2 = String(num2);

  if (numString1.length !== numString2.length) {
    return false;
  }

  const numObj1 = {};
  const numObj2 = {};

  for (let v of numString1) {
    numObj1[v] = (numObj1[v] || 0) + 1;
  }

  for (let v of numString2) {
    numObj2[v] = (numObj2[v] || 0) + 1;
  }

  for (let key in numObj1) {
    if (numObj1[key] !== numObj2[key]) {
      return false;
    }
  }

  return true;
}

// Testing

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
