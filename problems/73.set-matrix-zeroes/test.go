package main

import "leetcode"

func main() {

	leetcode.RunTest(
		setZeroes,
		[][]int{
			{1, 0, 1},
			{0, 0, 0},
			{1, 0, 1},
		},
		[][]int{
			{1, 1, 1},
			{1, 0, 1},
			{1, 1, 1},
		},
	)

	leetcode.RunTest(
		setZeroes,
		[][]int{
			{0, 0, 0, 0},
			{0, 4, 5, 0},
			{0, 3, 1, 0},
		},
		[][]int{
			{0, 1, 2, 0},
			{3, 4, 5, 2},
			{1, 3, 1, 5},
		},
	)

	leetcode.RunTest(setZeroes, [][]int{{0, 0}}, [][]int{{0, 1}})
}
