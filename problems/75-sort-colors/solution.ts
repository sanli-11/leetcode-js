function sortColors(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  let left = 0,
    mid = 0,
    right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      if (left !== mid) {
        nums[left] ^= nums[mid];
        nums[mid] ^= nums[left];
        nums[left] ^= nums[mid];
      }
      left++;
      mid++;
    } else if (nums[mid] === 2) {
      if (right !== mid) {
        nums[right] ^= nums[mid];
        nums[mid] ^= nums[right];
        nums[right] ^= nums[mid];
      }
      right--;
    } else mid++;
  }

  return nums;
}

export { sortColors };
