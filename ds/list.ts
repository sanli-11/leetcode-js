export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class DLLNode {
  val: number;
  prev: DLLNode | null;
  next: DLLNode | null;
  constructor(val?: number, prev?: DLLNode | null, next?: DLLNode | null) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

export function list(arr: number[]): ListNode | null {
  if (!arr.length) return null;
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

export function dll(arr: number[]): DLLNode | null {
  if (!arr.length) return null;
  const head = new DLLNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    const node = new DLLNode(arr[i], curr);
    curr.next = node;
    curr = node;
  }
  return head;
}

export function dllToArray(head: DLLNode | null): number[] {
  const res: number[] = [];
  let curr = head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }
  return res;
}
