function setZeroes(matrix: number[][]): number[][] {
  let zeroIndices: number[][] = [];

  matrix.forEach((row, i) =>
    row.forEach((num, j) => num === 0 && zeroIndices.push([i, j])),
  );

  zeroIndices.forEach((zero) =>
    matrix.forEach((row, i) =>
      row.forEach((_, j) => {
        matrix[zero[0]][j] = 0;
        matrix[i][zero[1]] = 0;
      }),
    ),
  );

  return matrix;
}

export { setZeroes };
