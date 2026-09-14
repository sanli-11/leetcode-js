function searchA2DMatrix(matrix: number[][], target: number) {
  let firstRow = 0;
  let lastRow = matrix.length;

  while (firstRow <= lastRow) {
    let midRow = Math.floor((firstRow + lastRow) / 2);

    if (
      matrix[midRow][0] <= target &&
      matrix[midRow][matrix.length - 1] >= target
    ) {
      let left = 0;
      let right = matrix[midRow].length;

      while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (matrix[midRow][mid] === target) return true;
        else if (matrix[midRow][mid] > target) right = mid - 1;
        else left = mid + 1;
      }

      return false;
    } else if (matrix[midRow][0] > target) lastRow = midRow - 1;
    else firstRow = midRow + 1;
  }

  return false;
}

export { searchA2DMatrix };
