function setZeroes(matrix: number[][]): number[][] {
  const zeroX: Set<number> = new Set();
  const zeroY: Set<number> = new Set();

  matrix.forEach((row, i) =>
    row.forEach((num, j) => {
      if (num === 0) {
        zeroX.add(i);
        zeroY.add(j);
      }
    }),
  );

  zeroX.forEach((x: number) => (matrix[x] = Array(matrix[0].length).fill(0)));

  zeroY.forEach((y) => matrix.forEach((m) => (m[y] = 0)));

  return matrix;
}

export { setZeroes };
