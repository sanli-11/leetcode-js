package main

func simplifyPath(path string) string {
	if len(path) <= 1 {
		return path
	}

	var sections []string = []string{}
	var start int = 0

	for i, iV := range path {
		if iV == '/' {
			sections = append(sections, path[start:i])
			start = i + 1
		}
	}
	sections = append(sections, path[start:])

	var res []string = []string{}

	for _, iV := range sections {
		if len(iV) >= 1 {
			switch iV {
			case ".":
			case "..":
				if len(res) >= 1 {
					res = res[:len(res)-1]
				}
			default:
				res = append(res, iV)
			}
		}
	}

	if len(res) < 1 {
		return "/"
	}

	var result string = ""

	for _, iV := range res {
		result += "/" + iV
	}

	return result
}
