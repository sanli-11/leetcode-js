function sortColors(nums: number[]): number[] {
  function merge(left: number[], right: number[]): number[] {
    const res = [];
    let l = 0, r = 0;

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

    const left: number[] = mergeSort(array.slice(0, mid));
    const right: number[] = mergeSort(array.slice(mid));

    return merge(left, right);
  }

  mergeSort(nums).forEach((n) => nums.push(n));

  nums.splice(0, Math.floor(nums.length / 2))

  return nums;
}

export { sortColors };
