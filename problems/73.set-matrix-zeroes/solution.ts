function setZeroes(matrix: number[][]): number[][] {
  let zeroIndices: number[][] = [];

  matrix.forEach((row, i) =>
    row.forEach((num, j) => num === 0 && zeroIndices.push([i, j])),
  );

  const zeroRow = Array(matrix[0].length).fill(0);

  zeroIndices.forEach((zero) => {
    matrix[zero[0]] = zeroRow;

    matrix.forEach((row) => row[zero[1]] = 0)
  });

  return matrix;
}

export { setZeroes };
