// Trapping Rain Water

/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

// SOLUTION-1 => Time complexity - O(n^2) and Aux Space complexity - O(1)

/*
const trap = function (height) {
  let trappedWater = 0;

  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0;
    let rightMax = 0;

    let j = i;

    // leftmost highest building
    while (j >= 0) {
      leftMax = Math.max(leftMax, height[j]);
      j--;
    }

    j = i;

    // rightmost highest building
    while (j < height.length) {
      rightMax = Math.max(rightMax, height[j]);
      j++;
    }

    trappedWater += Math.min(leftMax, rightMax) - height[i];
  }

  return trappedWater;
};
*/

// SOLUTION-2 Using mulit-pointer pattern - Time Complexity - O(n) and Aux Space complexity - O(1)

const trap = function (height) {
  let trappedWater = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        trappedWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        trappedWater += maxRight - height[right];
      }
      right--;
    }
  }

  return trappedWater;
};

// TESTING

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
