function compareVersionNumbers(version1: string, version2: string): number {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  let reverse = false;

  let shorter = arr1;
  let longer = arr2;
  if (arr2.length < arr1.length) {
    reverse = true;

    shorter = arr2;
    longer = arr1;
  }

  let i = 0;

  while (i < shorter.length) {
    if (Number(shorter[i]) < Number(longer[i])) return reverse ? 1 : -1;
    else if (Number(shorter[i]) > Number(longer[i])) return reverse ? -1 : 1;

    i++;
  }

  while (i < longer.length) {
    console.log("Here", longer[i])
    if (Number(longer[i]) > 0) return reverse ? 1 : -1;

    i++
  }

  return 0;
}

export { compareVersionNumbers };
