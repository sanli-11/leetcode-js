function setZeroes(matrix: number[][]): number[][] {
  let firstColHasZero = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) firstColHasZero = true;

    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    for (let k = 0; k < matrix[0].length; k++) matrix[0][k] = 0;
  }

  if (firstColHasZero) {
    for (let k = 0; k < matrix.length; k++) matrix[k][0] = 0;
  }

  return matrix;
}

export { setZeroes };
