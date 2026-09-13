declare class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null);
}

declare class DLLNode {
  val: number;
  prev: DLLNode | null;
  next: DLLNode | null;
  constructor(val?: number, prev?: DLLNode | null, next?: DLLNode | null);
}

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}

declare class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]);
}

declare class TrieNode {
  val: string;
  children: Map<string, TrieNode>;
  isEnd: boolean;
  constructor(val?: string);
}
