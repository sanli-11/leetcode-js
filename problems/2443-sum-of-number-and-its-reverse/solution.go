package main

func sumOfNumberAndItsReverse(num int) bool {
	if num == 0 {
		return true
	}

	for i := num - 1; i >= num/2; i-- {
		rev := 0

		for n := i; n > 0; {
			rev = (rev * 10) + (n % 10)
			n = n / 10
		}

		if i+rev == num {
			return true
		}
	}

	return false
}
