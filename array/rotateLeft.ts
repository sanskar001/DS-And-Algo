/*

A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. 
Given an integer, rotate the array that many steps left and return the result.

Example:

d: 4
arr: [1, 2, 3, 4, 5]

Output = [5, 1, 2, 3, 4]

After  rotations, .

*/

function rotateLeft(d: number, arr: number[]): number[] {
  const remindar = d % arr.length;

  const leftPart = arr.slice(remindar, arr.length);
  const rightPart = arr.slice(0, remindar);

  return leftPart.concat(rightPart);
}
