/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

*/

// Time complexity - O(n^2) & Space complexity - O(m^2)

type TwoDimArray = [number, number][];

function setZeroes(matrix: number[][]): void {
  const zeroPositions: TwoDimArray = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zeroPositions.push([r, c]);
      }
    }
  }

  for (let i = 0; i < zeroPositions.length; i++) {
    // Here we can also create Map or Object to make it fast and reduce redundany.
    // Even we can also use separate sets for rows anc columns.
    placeZeroes(zeroPositions[i][0], zeroPositions[i][1]);
  }

  function placeZeroes(row, col) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][col] = 0;
    }

    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0;
    }
  }
}

// TESTING

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
