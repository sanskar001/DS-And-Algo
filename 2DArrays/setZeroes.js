// Set Matrix Zeroes

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

// Solution 01 - Time complexity - O(n*m) and Aux Space complexity - O(1)

function findZeroes(matrix) {
  const zeroes = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zeroes.push([r, c]);
      }
    }
  }

  return zeroes;
}

function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // finding zeroes indexes
  const zeroes = findZeroes(matrix);

  // If zeroes not found then return original matrix
  if (!zeroes.length) {
    return matrix;
  }

  // Otherwise set rows and cols indexes on basis of zeroes position.
  for (let i = 0; i < zeroes.length; i++) {
    const rowIndex = zeroes[i][0];
    const colIndex = zeroes[i][1];

    for (let r = 0; r < rows; r++) {
      if (matrix[r][colIndex] !== 0) {
        matrix[r][colIndex] = 0;
      }
    }

    for (let c = 0; c < cols; c++) {
      if (matrix[rowIndex][c] !== 0) {
        matrix[rowIndex][c] = 0;
      }
    }
  }

  return matrix;
}

// ----------------------------------------------------

// TESTING

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
