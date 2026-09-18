function sumOfNumberAndItsReverse(num: number): boolean {
  if (num === 0) return true;

  for (let i = 2; i < num; i++) {
    if (num % 2 !== 0 && num % 11 !== 0 && num % i === 0) return false;
  }

  let reversed: number[] = [0];

  for (let i = 1; i < num; i++) {
    reversed[0] += 1;

    for (let j = 0; j < reversed.length; j++) {
      if (reversed[j] > 9) {
        reversed[j] = 0;

        if (j === reversed.length - 1) reversed.push(1);
        else reversed[j + 1] += 1;
      }
    }

    if (i + Number(reversed.join("")) === num) return true;
  }

  return false;
}

export { sumOfNumberAndItsReverse };
