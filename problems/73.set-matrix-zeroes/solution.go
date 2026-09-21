package main

func setZeroes(matrix [][]int) [][]int {
	firstColHasZero := false

	for i := range matrix {
		if matrix[i][0] == 0 {
			firstColHasZero = true
		}

		for j := 1; j <= len(matrix[0])-1; j++ {
			if matrix[i][j] == 0 {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if matrix[0][0] == 0 {
		for k := range matrix[0] {
			matrix[0][k] = 0
		}
	}

	if firstColHasZero {
		for k := range matrix {
			matrix[k][0] = 0
		}
	}

	return matrix
}
