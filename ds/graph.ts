export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function graph(adjList: number[][]): GraphNode | null {
  if (!adjList.length) return null;
  const map = new Map<number, GraphNode>();
  for (let i = 1; i <= adjList.length; i++) {
    map.set(i, new GraphNode(i));
  }
  for (let i = 0; i < adjList.length; i++) {
    const node = map.get(i + 1)!;
    node.neighbors = adjList[i].map((val) => map.get(val)!);
  }
  return map.get(1) || null;
}

export function graphToAdjList(node: GraphNode | null): number[][] {
  if (!node) return [];
  const visited = new Map<number, number[]>();

  function dfs(curr: GraphNode) {
    if (visited.has(curr.val)) return;
    visited.set(
      curr.val,
      curr.neighbors.map((n) => n.val)
    );
    for (const neighbor of curr.neighbors) {
      dfs(neighbor);
    }
  }

  dfs(node);
  const result: number[][] = [];
  for (let i = 1; i <= visited.size; i++) {
    result.push(visited.get(i) || []);
  }
  return result;
}
