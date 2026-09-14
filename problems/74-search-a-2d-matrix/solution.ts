function searchA2DMatrix(matrix: number[][], target: number) {
  for (let i = 0; i < matrix.length; i ++) {
        if (matrix[i].indexOf(target) >= 0) return true;
    }

    return false;
}

export { searchA2DMatrix };
