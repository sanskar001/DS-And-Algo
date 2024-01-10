/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers
have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

// Time complexity - O(n) and Aux Space complexity - O(n)

function sameFrequency(num1, num2) {
  const numString1 = num1.toString();
  const numString2 = num2.toString();

  if (numString1.length !== numString2.length) {
    return false;
  }

  const numObj1 = {};
  const numObj2 = {};

  for (let i = 0; i < numString1.length; i++) {
    numObj1[numString1[i]] = (numObj1[numString1[i]] || 0) + 1;
  }

  for (let i = 0; i < numString2.length; i++) {
    numObj2[numString2[i]] = (numObj2[numString2[i]] || 0) + 1;
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
