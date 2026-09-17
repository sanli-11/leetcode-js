function setZeroes(matrix: number[][]): number[][] {
  const zeroX: Set<number> = new Set();
  const zeroY: Set<number> = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroX.add(i);
        zeroY.add(j);
      }
    }
  }

  zeroX.forEach((x: number) => (matrix[x] = Array(matrix[0].length).fill(0)));

  zeroY.forEach((y) => {
    for (let k = 0; k < matrix.length; k++) matrix[k][y] = 0
  });

  return matrix;
}

export { setZeroes };
