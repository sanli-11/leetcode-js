function sortColors(nums: number[]): number[] {
  let left = 0,
    mid = 0,
    right = nums.length - 1,
    temp;

  while (mid <= right) {
    switch (nums[mid]) {
      case 0:
        temp = nums[left];
        nums[left++] = nums[mid];
        nums[mid++] = temp;
        break;
      case 1:
        mid++;
        break;
      default:
        temp = nums[right];
        nums[right--] = nums[mid];
        nums[mid] = temp;
        break;
    }
  }

  return nums;
}

export { sortColors };
