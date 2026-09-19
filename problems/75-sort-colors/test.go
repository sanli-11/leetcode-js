package main

import "leetcode"

func main() {

	leetcode.RunTest(sortColors, []int{0, 0, 1, 1, 2, 2}, []int{2, 0, 2, 1, 1, 0})
	leetcode.RunTest(sortColors, []int{0, 1, 2}, []int{2, 0, 1})
	leetcode.RunTest(sortColors, []int{2}, []int{2})
	leetcode.RunTest(sortColors, []int{2, 2}, []int{2, 2})
}
