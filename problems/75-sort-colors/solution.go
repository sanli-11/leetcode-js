package main

func sortColors(nums []int) []int {
	if cap(nums) <= 1 {
		return nums
	}

	left, right := 0, len(nums)-1

	for mid := 0; mid <= right; {
		switch nums[mid] {
		case 0:
			if left != mid {
				nums[left] ^= nums[mid]
				nums[mid] ^= nums[left]
				nums[left] ^= nums[mid]
			}
			left++
			mid++
		case 2:
			if right != mid {
				nums[right] ^= nums[mid]
				nums[mid] ^= nums[right]
				nums[right] ^= nums[mid]
			}
			right--
		default:
			mid++
		}
	}

	return nums
}
