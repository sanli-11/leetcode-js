package main

import "leetcode"

func main() {
	leetcode.RunTest(
		groupAnagrams,
		[][]string{
			{"eat", "tea", "ate"},
			{"tan", "nat"},
			{"bat"},
		},
		[]string{"eat", "tea", "tan", "ate", "nat", "bat"},
	)

	leetcode.RunTest(
		groupAnagrams,
		[][]string{
			{"eat", "tea", "ate"},
			{"me", "em"},
			{"tan", "nat"},
			{"bat"},
		},
		[]string{"eat", "tea", "me", "em", "tan", "ate", "nat", "bat"},
	)

	leetcode.RunTest(
		groupAnagrams,
		[][]string{
			{""},
		},
		[]string{""},
	)

	leetcode.RunTest(
		groupAnagrams,
		[][]string{
			{"a"},
		},
		[]string{"a"},
	)

	leetcode.RunTest(
		groupAnagrams,
		[][]string{
			{"ad"},
			{"bc", "cb"},
		},
		[]string{"ad", "bc", "cb"},
	)
}
