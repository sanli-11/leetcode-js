function searchA2DMatrix(matrix: number[][], target: number) {
  let binarySearch = (array: number[]) => {
    if (array.length === 1) return array[0] === target;

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (array[mid] === target) return true;
      else if (array[mid] > target) right = mid - 1;
      else left = mid + 1;
    }

    return false;
  };

  if (matrix.length === 1) return binarySearch(matrix[0]);

  let firstRow = 0;
  let lastRow = matrix.length - 1;

  while (firstRow <= lastRow) {
    let midRow = Math.floor((firstRow + lastRow) / 2);

    if (matrix[midRow][0] <= target && matrix[midRow].at(-1)! >= target) return binarySearch(matrix[midRow]);
    else if (matrix[midRow][0] > target) lastRow = midRow - 1;
    else firstRow = midRow + 1;
  }

  return false;
}

export { searchA2DMatrix };
