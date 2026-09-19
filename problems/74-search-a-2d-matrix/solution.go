package main

func searchA2DMatrix(matrix [][]int, target int) bool {
	var rowContainsRange = []int{}

	var first, last = 0, len(matrix) - 1

	loop: for first <= last {
		var midRow int = (first + last) / 2

		switch {
		case matrix[midRow][0] > target:
			last = midRow - 1
		case matrix[midRow][len(matrix[midRow])-1] < target:
			first = midRow + 1
		default:
			rowContainsRange = matrix[midRow]
			break loop
		}
	}

	if first > last {
		return false
	}

	first, last = 0, len(rowContainsRange)-1

	for first <= last {
		var mid int = (first + last) / 2

		switch {
		case rowContainsRange[mid] == target:
			return true
		case rowContainsRange[mid] > target:
			last = mid - 1
		default:
			first = mid + 1
		}
	}

	return false
}
