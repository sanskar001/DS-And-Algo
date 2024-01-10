/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// Solution-01 Time-O(n) and Aux Space-O(n)

function areThereDuplicates(...arr) {
  const countObj = {};

  for (let val of arr) {
    countObj[val] = (countObj[val] || 0) + 1;
  }

  for (let key in countObj) {
    if (countObj[key] > 1) {
      return true;
    }
  }

  return false;
}

// --------------------------------------------------------

// Solution-2 - Time - O(nlogn) and Aux Space - O(1)

// Step1: Sort given arguments list - O(nlogn)
// Step2: find duplicates using multiple pointer

// --------------------------------------------------------

// Testing

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
