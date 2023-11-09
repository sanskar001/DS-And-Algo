// Problem: factorial using recursion.

// Time complexity - O(n) and Space complexity - O(n)

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// Testing

console.log(factorial(5));
console.log(factorial(0));
