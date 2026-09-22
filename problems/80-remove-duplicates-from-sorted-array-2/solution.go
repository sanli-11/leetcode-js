package main

func removeDuplicates(nums []int) int {
	if len(nums) <= 1 {
		return len(nums)
	}

	var left int = 2

	for right := 2; right < len(nums); right++ {
		if nums[left-2] != nums[right] {
			nums[left] = nums[right]
			left++
		}
	}

	return left
}
