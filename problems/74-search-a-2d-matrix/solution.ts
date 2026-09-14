function searchA2DMatrix(matrix: number[][], target: number) {
  let rowContainsRange: number[] = [];

  let firstRow = 0;
  let lastRow = matrix.length - 1;

  while (firstRow <= lastRow) {
    let midRow = Math.floor((firstRow + lastRow) / 2);

    if (matrix[midRow][0] > target) lastRow = midRow - 1;
    else if (matrix[midRow].at(-1)! < target) firstRow = midRow + 1;
    else {
      rowContainsRange = matrix[midRow];
      break;
    }
  }

  if (firstRow > lastRow) return false;

  let left = 0;
  let right = rowContainsRange.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (rowContainsRange[mid] === target) return true;
    else if (rowContainsRange[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return false;
}

export { searchA2DMatrix };
