function sortColors(nums: number[]): number[] {
  function merge(left: number[], right: number[]): number[] {
    const res = [];
    let l = 0,
      r = 0;

      console.log("Combine received", left, right)

    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        res.push(left[l]);
        l++;
      } else {
        res.push(right[r]);
        r++;
      }
    }


    while (l < left.length) {
      res.push(left[l])
      l ++
    }
    while (r < right.length) {
      res.push(right[r])
      r ++
    }

    return res;
  }

  function mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
  }

  nums = mergeSort(nums);

  return nums;
}

export { sortColors };
