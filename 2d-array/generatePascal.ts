/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

*/

function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result: number[][] = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const newRow: number[] = [];
    newRow.push(1);
    for (let j = 0; j < i - 1; j++) {
      newRow.push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    newRow.push(1);

    result.push(newRow);
  }

  return result;
}

// TESTING

console.log(generate(5));
