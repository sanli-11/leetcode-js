function sumOfNumberAndItsReverse(num: number): boolean {
  if (num === 0) return true;

  for (let i = 0; i < num; i++) {
    if (i + Number(i.toString().split("").reverse().join("")) === num)
      return true;
  }

  return false;
}

export { sumOfNumberAndItsReverse };
