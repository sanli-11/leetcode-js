package main

import "leetcode"

func main() {
	leetcode.RunTest(simplifyPath, "/", "/")
	leetcode.RunTest(simplifyPath, "/home", "/home/")
	leetcode.RunTest(simplifyPath, "/home/foo", "/home//foo/")
	leetcode.RunTest(
		simplifyPath,
		"/home/user/Pictures",
		"/home/user/Documents/../Pictures",
	)
	leetcode.RunTest(simplifyPath, "/", "/../")
	leetcode.RunTest(simplifyPath, "/.../b/d", "/.../a/../b/c/../d/./")
	leetcode.RunTest(simplifyPath, "/c", "/a/./b/../../c/")
}
