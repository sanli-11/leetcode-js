package main

import "leetcode"

func main() {
	leetcode.RunTest(
		searchA2DMatrix,
		true,
		[][]int{
			{1, 3, 5, 7},
			{10, 11, 16, 20},
			{23, 30, 34, 60},
		},
		3,
	)

	leetcode.RunTest(
		searchA2DMatrix,
		false,
		[][]int{
			{1, 3, 5, 7},
			{10, 11, 16, 20},
			{23, 30, 34, 60},
		},
		13,
	)

	leetcode.RunTest(searchA2DMatrix, false, [][]int{{1}}, 2)
	leetcode.RunTest(searchA2DMatrix, true, [][]int{{1}, {3}}, 1)
	leetcode.RunTest(searchA2DMatrix, false, [][]int{{1}, {3}}, 4)
}
