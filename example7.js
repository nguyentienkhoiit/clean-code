let matrix = [[1, 2], [3, 4]];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// =====================================

let matrixs = [[1, 2], [3, 4]];
matrixs.forEach(row => {
  row.forEach(cell => {
    console.log(cell);
  });
});
