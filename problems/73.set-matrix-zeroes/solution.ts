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

  const zeroXArr = [...zeroX];
  const zeroYArr = [...zeroY];

  for (let i = 0; i < zeroXArr.length; i ++) {
    for (let j = 0; j < matrix[0].length; j ++) {
      matrix[zeroXArr[i]][j] = 0
    }
  }

  for (let i = 0; i < zeroYArr.length; i ++) {
    for (let j = 0; j < matrix.length; j ++) {
      matrix[j][zeroYArr[i]] = 0
    }
  }

  return matrix;
}

export { setZeroes };
