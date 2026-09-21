package main

import "strings"

func simplifyPath(path string) string {
	var sections []string = strings.Split(path, "/")
	var res []string = []string{}

	for _, iV := range sections {
		if len(iV) < 1 || iV == "." {
			continue
		}

		if iV == ".." {
			if len(res) >= 1 {
				res = res[:len(res)-1]
			}
		} else {
			res = append(res, iV)
		}
	}

	return "/" + strings.Join(res, "/")
}
