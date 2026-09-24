package main

import (
	"sort"
)

func groupAnagrams(strs []string) [][]string {
	group := make(map[string][]string)

	for _, v := range strs {
		letters := []rune(v)

		sort.Slice(letters, func(i, j int) bool {
			return letters[i] < letters[j]
		})

		word := string(letters)

		group[word] = append(group[word], v)
	}

	res := make([][]string, 0, len(group))

	for _, v := range group {
		res = append(res, v)
	}

	return res
}
