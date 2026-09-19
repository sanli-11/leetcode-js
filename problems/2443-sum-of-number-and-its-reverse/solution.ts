function sumOfNumberAndItsReverse(num: number): boolean {
  if (num === 0) return true;

  for (let i = 1; i < num; i++) {
    let rev = 0,
      n = i;

    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    if (i + rev === num) return true;
  }

  return false;
}

export { sumOfNumberAndItsReverse };
