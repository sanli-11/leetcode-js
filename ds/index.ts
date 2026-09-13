import { ListNode, DLLNode } from './list';
import { TreeNode } from './tree';
import { GraphNode } from './graph';
import { TrieNode } from './trie';

// Inject data structure constructors into runtime global scope
const g = globalThis as any;
g.ListNode = ListNode;
g.DLLNode = DLLNode;
g.TreeNode = TreeNode;
g.GraphNode = GraphNode;
g.TrieNode = TrieNode;

export * from './list';
export * from './tree';
export * from './graph';
export * from './trie';
export * from './heap';
