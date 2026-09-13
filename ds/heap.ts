export class Heap<T> {
  private heap: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}

  push(val: T) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): T | undefined {
    if (this.size() === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop()!;
    if (this.size() > 0) {
      this.heap[0] = bottom;
      this.bubbleDown(0);
    }
    return top;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  private bubbleUp(i: number) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.compare(this.heap[i], this.heap[parent]) < 0) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  private bubbleDown(i: number) {
    const len = this.heap.length;
    while ((i << 1) + 1 < len) {
      let left = (i << 1) + 1,
        right = left + 1,
        smallest = i;
      if (this.compare(this.heap[left], this.heap[smallest]) < 0)
        smallest = left;
      if (
        right < len &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      )
        smallest = right;
      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else break;
    }
  }
}

export class MinHeap extends Heap<number> {
  constructor() {
    super((a, b) => a - b);
  }
}

export class MaxHeap extends Heap<number> {
  constructor() {
    super((a, b) => b - a);
  }
}
