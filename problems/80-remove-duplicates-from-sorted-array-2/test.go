package main

import "leetcode"

func main() {
	leetcode.RunTest(removeDuplicates, 5, []int{1, 1, 1, 2, 2, 3})
	leetcode.RunTest(removeDuplicates, 7, []int{0, 0, 1, 1, 1, 1, 2, 3, 3})
	leetcode.RunTest(removeDuplicates, 10, []int{0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4})
	leetcode.RunTest(removeDuplicates, 11, []int{0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5})
	leetcode.RunTest(removeDuplicates, 6, []int{0, 1, 2, 3, 3, 3, 4})
	leetcode.RunTest(removeDuplicates, 1, []int{1})
}
