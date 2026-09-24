function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const res: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    let sortedLetters = strs[i].split("").sort().join("");

    map.has(sortedLetters)
      ? map.get(sortedLetters)!.push(strs[i])
      : map.set(sortedLetters, [strs[i]]);
  }

  let iterator = map.values();

  for (
    let v = iterator.next().value;
    v !== undefined;
    v = iterator.next().value
  ) {
    res.push(v);
  }

  return res;
}

export { groupAnagrams };
