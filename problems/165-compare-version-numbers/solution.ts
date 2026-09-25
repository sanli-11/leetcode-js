function compareVersionNumbers(version1: string, version2: string): number {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const arr = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < arr; i++) {
    if (Number(arr1[i] ?? 0) < Number(arr2[i] ?? 0)) return -1
    else if (Number(arr1[i] ?? 0) > Number(arr2[i] ?? 0)) return 1
  }

  return 0;
}

export { compareVersionNumbers };
