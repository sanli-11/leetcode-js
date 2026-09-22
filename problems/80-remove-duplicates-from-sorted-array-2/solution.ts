function removeDuplicates(nums: number[]): number {
  let left = 2;

  for (let right = 2; right < nums.length; right++) {
    if (nums[left - 2] !== nums[right]) {
      nums[left] = nums[right]
      left++;
    }
  }

  console.log(nums);

  return left;
}

export { removeDuplicates };
