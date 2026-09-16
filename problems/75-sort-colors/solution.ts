function sortColors(nums: number[]): number[] {
  let left = 0,
    mid = 0,
    right = nums.length - 1,
    temp;

  while (mid <= right) {
    switch (nums[mid]) {
      case 0:
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
        left++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      default:
        [nums[right], nums[mid]] = [nums[mid], nums[right]];
        right--;
        break;
    }
  }

  return nums;
}

export { sortColors };
