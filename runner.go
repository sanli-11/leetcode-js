package leetcode

import (
	"fmt"
	"reflect"
	"time"
)

var testCount = 0

// RunTest executes fn(args...) and compares its output against expected
func RunTest(fn any, expected any, args ...any) {
	testCount++

	fnVal := reflect.ValueOf(fn)
	fnType := fnVal.Type()

	// Convert raw args into reflect.Value parameters
	in := make([]reflect.Value, len(args))
	for i, arg := range args {
		if arg == nil {
			in[i] = reflect.Zero(fnType.In(i))
		} else {
			in[i] = reflect.ValueOf(arg)
		}
	}

	// Time and execute the function
	start := time.Now()
	out := fnVal.Call(in)
	elapsed := time.Since(start)

	// Get return value
	var actual any
	if len(out) > 0 {
		actual = out[0].Interface()
	}

	// Format inputs into a single clean string
	inputStr := ""
	for i, arg := range args {
		if i > 0 {
			inputStr += ", "
		}
		inputStr += fmt.Sprintf("%v", arg)
	}

	passed := reflect.DeepEqual(actual, expected)
	timeStr := fmt.Sprintf("%.2fms", float64(elapsed.Microseconds())/1000.0)

	if passed {
		fmt.Printf("\x1b[32m✔ Test %d PASSED\x1b[0m (%s)\n", testCount, timeStr)
		fmt.Printf("   Input:    %s\n", inputStr)
		fmt.Printf("   Expected: %v\n\n", expected)
	} else {
		fmt.Printf("\x1b[31m✖ Test %d FAILED\x1b[0m (%s)\n", testCount, timeStr)
		fmt.Printf("   Input:    %s\n", inputStr)
		fmt.Printf("   Expected: %v\n", expected)
		fmt.Printf("   Actual:   %v\n\n", actual)
	}
}
