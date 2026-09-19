function sumOfNumberAndItsReverse(num: number): boolean {
  if (num === 0) return true;

  for (let i = num - 1; i >= num / 2; i--) {
    let rev = 0,
      n = i;

    while (n > 0) {
      rev = (rev * 10) + (n % 10);
      n = n / 10 | 0;
    }

    if (i + rev === num) return true;
  }

  return false;
}

export { sumOfNumberAndItsReverse };
