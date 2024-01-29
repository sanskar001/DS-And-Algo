// Chocolate Distribution Problem

/*
Given an array of N integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

Each student gets one packet.
The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.

Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
Output: Minimum Difference is 2 
Explanation:
We have seven packets of chocolates and we need to pick three packets for 3 students 
If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

Input : arr[] = {3, 4, 1, 9, 56, 7, 9, 12} , m = 5 
Output: Minimum Difference is 6 

Input : arr[] = {12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50} , m = 7 
Output: Minimum Difference is 10 
*/

function findMinDiff(arr, m) {
  if (arr.length < m) {
    return null;
  }

  // sort array in ascending order
  arr.sort((a, b) => a - b);

  let minDiff = arr[m - 1] - arr[0];

  for (let i = 1; i <= arr.length - m; i++) {
    const diff = arr[i + m - 1] - arr[i];
    minDiff = diff < minDiff ? diff : minDiff;
  }

  return minDiff;
}

// Testing

console.log(findMinDiff([7, 3, 2, 4, 9, 12, 56], 3)); // 2
console.log(findMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 5)); // 6
console.log(
  findMinDiff(
    [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50],
    7
  )
); // 10
