function sumOfNumberAndItsReverse(num: number): boolean {
  if (num === 0) return true;

  for (let i = 2; i < num; i++) {
    if (num % 2 !== 0 && num % 11 !== 0 && num % i === 0) return false;
  }

  for (let i = 0; i < num; i++) {
    if (i + Number(i.toString().split("").reverse().join("")) === num)
      return true;
  }

  return false;
}

export { sumOfNumberAndItsReverse };
