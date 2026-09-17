function setZeroes(matrix: number[][]): number[][] {
  let zeroIndices: number[][] = [];

  matrix.forEach((row, i) =>
    row.forEach((num, j) => num === 0 && zeroIndices.push([i, j])),
  );

  zeroIndices.forEach((zero) => {
    for (let i = 0; i < matrix.length; i++) matrix[i][zero[1]] = 0;

    for (let j = 0; j < matrix[0].length; j++) matrix[zero[0]][j] = 0;
  });

  return matrix;
}

export { setZeroes };
