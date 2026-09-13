export class TrieNode {
  val: string;
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor(val: string = "") {
    this.val = val;
    this.children = new Map();
    this.isEnd = false;
  }
}

export function trie(words: string[]): TrieNode {
  const root = new TrieNode();
  for (const word of words) {
    let curr = root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode(char));
      }
      curr = curr.children.get(char)!;
    }
    curr.isEnd = true;
  }
  return root;
}
