package main

func insertInterval(intervals [][]int, newInterval []int) [][]int {
	if len(intervals) < 1 {
		return [][]int{newInterval}
	}

	insertS, insertE := false, false
	start, end := [][]int{}, [][]int{}

	for _, iValue := range intervals {
		if iValue[0] <= newInterval[0] {
			start = append(start, []int{iValue[0], iValue[1]})
		}
		if iValue[1] > newInterval[1] {
			end = append(end, []int{iValue[0], iValue[1]})
		}
	}

	if len(start) > 0 {
		if newInterval[0] <= start[len(start)-1][1] {
			if start[len(start)-1][1] < newInterval[1] {
				start[len(start)-1][1] = newInterval[1]
			}

			insertS = true
		}
	}

	if len(end) > 0 {
		if newInterval[1] >= end[0][0] {
			if end[0][0] > newInterval[0] {
				end[0][0] = newInterval[0]
			}

			insertE = true
		}
	}

	if insertS && insertE {
		start[len(start)-1][1] = end[0][1]
		end = end[1:]
	} else if !(insertS || insertE) {
		start = append(start, []int{newInterval[0], newInterval[1]})
	}

	start = append(start, end...)
	return start
}
