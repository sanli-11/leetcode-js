package main

import "leetcode"

func main() {
	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 5},
			{6, 9},
		},
		[][]int{
			{1, 3},
			{4, 5},
			{6, 9},
		},
		[]int{2, 5},
	)

	leetcode.RunTest(insertInterval, [][]int{{5, 7}}, [][]int{}, []int{5, 7})

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 5},
			{6, 9},
		},
		[][]int{
			{1, 3},
			{6, 9},
		},
		[]int{2, 5},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 2},
			{3, 10},
			{12, 16},
		},
		[][]int{
			{1, 2},
			{3, 5},
			{6, 7},
			{8, 10},
			{12, 16},
		},
		[]int{4, 8},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 2},
			{3, 8},
			{9, 10},
		},
		[][]int{
			{1, 2},
			{3, 8},
			{9, 10},
		},
		[]int{4, 5},
	)

	leetcode.RunTest(insertInterval, [][]int{{0, 5}}, [][]int{{1, 5}}, []int{0, 3})

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 5},
			{6, 8},
		},
		[][]int{{1, 5}},
		[]int{6, 8},
	)

	leetcode.RunTest(insertInterval, [][]int{{1, 5}}, [][]int{{1, 5}}, []int{2, 3})
	leetcode.RunTest(insertInterval, [][]int{{1, 7}}, [][]int{{1, 5}}, []int{5, 7})
	leetcode.RunTest(insertInterval, [][]int{{1, 7}}, [][]int{{1, 5}}, []int{1, 7})

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{0, 0},
			{1, 5},
		},
		[][]int{{1, 5}},
		[]int{0, 0},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{0, 5},
			{7, 16},
		},
		[][]int{
			{0, 5},
			{9, 12},
		},
		[]int{7, 16},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{3, 5},
			{6, 6},
			{12, 15},
		},
		[][]int{
			{3, 5},
			{12, 15},
		},
		[]int{6, 6},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{{1, 20}},
		[][]int{
			{1, 2},
			{3, 4},
			{5, 6},
			{7, 8},
			{9, 10},
			{11, 12},
			{13, 14},
			{15, 16},
			{17, 18},
			{19, 20},
		},
		[]int{1, 20},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 2},
			{5, 6},
			{9, 10},
			{13, 14},
			{15, 16},
			{17, 18},
			{21, 22},
			{25, 26},
			{29, 30},
			{33, 34},
			{37, 38},
		},
		[][]int{
			{1, 2},
			{5, 6},
			{9, 10},
			{13, 14},
			{17, 18},
			{21, 22},
			{25, 26},
			{29, 30},
			{33, 34},
			{37, 38},
		},
		[]int{15, 16},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 3},
			{5, 23},
			{25, 27},
			{29, 31},
			{33, 35},
			{37, 39},
		},
		[][]int{
			{1, 3},
			{5, 7},
			{9, 11},
			{13, 15},
			{17, 19},
			{21, 23},
			{25, 27},
			{29, 31},
			{33, 35},
			{37, 39},
		},
		[]int{6, 22},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 5},
			{10, 12},
			{14, 16},
			{18, 20},
			{22, 24},
			{26, 28},
			{30, 32},
			{34, 36},
			{38, 40},
			{42, 44},
			{46, 48},
		},
		[][]int{
			{10, 12},
			{14, 16},
			{18, 20},
			{22, 24},
			{26, 28},
			{30, 32},
			{34, 36},
			{38, 40},
			{42, 44},
			{46, 48},
		},
		[]int{1, 5},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{10, 12},
			{14, 16},
			{18, 20},
			{22, 24},
			{26, 28},
			{30, 32},
			{34, 36},
			{38, 40},
			{42, 44},
			{46, 48},
			{50, 55},
		},
		[][]int{
			{10, 12},
			{14, 16},
			{18, 20},
			{22, 24},
			{26, 28},
			{30, 32},
			{34, 36},
			{38, 40},
			{42, 44},
			{46, 48},
		},
		[]int{50, 55},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{{2, 32}},
		[][]int{
			{2, 4},
			{6, 8},
			{10, 12},
			{14, 16},
			{18, 20},
			{22, 24},
			{26, 28},
			{30, 32},
		},
		[]int{4, 30},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 5},
			{10, 15},
			{20, 25},
			{28, 28},
			{30, 35},
			{40, 45},
			{50, 55},
			{60, 65},
			{70, 75},
		},
		[][]int{
			{1, 5},
			{10, 15},
			{20, 25},
			{30, 35},
			{40, 45},
			{50, 55},
			{60, 65},
			{70, 75},
		},
		[]int{28, 28},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{10, 20},
			{30, 40},
			{50, 60},
			{70, 80},
			{90, 100},
			{110, 120},
			{130, 140},
		},
		[][]int{
			{10, 20},
			{30, 40},
			{50, 60},
			{70, 80},
			{90, 100},
			{110, 120},
			{130, 140},
		},
		[]int{50, 50},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{{-100, 100}},
		[][]int{
			{-50, -40},
			{-30, -20},
			{-10, 0},
			{10, 20},
			{30, 40},
			{50, 60},
			{70, 80},
			{90, 100},
		},
		[]int{-100, 100},
	)

	leetcode.RunTest(
		insertInterval,
		[][]int{
			{1, 10},
			{20, 30},
			{40, 100},
			{110, 120},
			{130, 140},
			{150, 160},
		},
		[][]int{
			{1, 10},
			{20, 30},
			{40, 100},
			{110, 120},
			{130, 140},
			{150, 160},
		},
		[]int{50, 80},
	)

}
