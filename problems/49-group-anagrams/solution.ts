function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    let sortedLetters = strs[i].split("").sort().join("");

    map.has(sortedLetters)
      ? map.get(sortedLetters)!.push(strs[i])
      : map.set(sortedLetters, [strs[i]]);
  }

  return [...map.values()]
}

export { groupAnagrams };
