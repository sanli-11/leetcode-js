function removeDuplicates(nums: number[]): number {
  let firstItem = 0;
  let currentItem = nums[0];
  let countItem = 1;

  for (let i = 1; i < nums.length; i++) {
    if (currentItem === nums[i]) countItem++;
    else {
      if (countItem > 2) {
        nums.splice(firstItem + 2, countItem - 2);
        i -= countItem - 1;
      }

      currentItem = nums[i];
      firstItem = i;
      countItem = 1;
    }
  }

  if (countItem > 2) nums.splice(firstItem + 2, countItem - 2);

  console.log(nums);

  return nums.length;
}

export { removeDuplicates };
