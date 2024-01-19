// Zigzag (or diagonal) traversal of Matrix
/*
Given a 2D matrix, print all elements of the given matrix in diagonal order. For example, consider the following 5 X 4 input matrix.  

Example: 
1     2     3     4
5     6     7     8
9    10    11    12
13    14    15    16
17    18    19    20

Diagonal printing of the above matrix is

1
5 2
9 6 3
13 10 7 4
17 14 11 8
18 15 12
19 16
20

*/

function diaginalOrder(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  for (let r = 0; r < row; r++) {
    const rowLog = [];
    for (let i = r, j = 0; j <= r; i--, j++) {
      rowLog.push(matrix[i][j]);
    }
    if (r < row - 1) {
      console.log(rowLog);
    }
  }

  for (let c = 0; c < column; c++) {
    const colLog = [];
    for (let i = row - 1, j = c; i >= 0 && j < column; i--, j++) {
      colLog.push(matrix[i][j]);
    }
    console.log(colLog);
  }
}

// Testing

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(diaginalOrder(matrix));
