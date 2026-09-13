import {
  DLLNode,
  dllToArray,
  GraphNode,
  graphToAdjList,
  ListNode,
  listToArray,
  TreeNode,
  treeToArray,
} from './ds';

export interface TestCase<I = any[], O = any> {
  input: I;
  expected: O;
}

function normalize(val: any): any {
  if (val === null || val === undefined) return val;
  if (val instanceof ListNode) return listToArray(val);
  if (val instanceof DLLNode) return dllToArray(val);
  if (val instanceof TreeNode) return treeToArray(val);
  if (val instanceof GraphNode) return graphToAdjList(val);
  if (Array.isArray(val)) return val.map(normalize);
  return val;
}

function isEqual(a: any, b: any): boolean {
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
}

export function runTests<F extends (...args: any[]) => any>(
  fn: F,
  testCases: TestCase<Parameters<F>, ReturnType<F>>[]
) {
  console.log(`\n\x1b[36m========== Running: ${fn.name || 'Solution'} ==========\x1b[0m\n`);

  testCases.forEach(({ input, expected }, idx) => {
    // Capture input representation before fn execution (in case fn mutates input in-place)
    const normalizedInput = normalize(input);
    const normalizedExpected = normalize(expected);

    const start = performance.now();
    const result = fn(...input);
    const end = performance.now();

    const normalizedResult = normalize(result);
    const passed = isEqual(result, expected);

    const timeStr = `${(end - start).toFixed(2)}ms`;

    if (passed) {
      console.log(`\x1b[32m✔ Test ${idx + 1} PASSED\x1b[0m (${timeStr})`);
      console.log(`   Input:    ${JSON.stringify(normalizedInput)}`);
      console.log(`   Expected: ${JSON.stringify(normalizedExpected)}\n`);
    } else {
      console.log(`\x1b[31m✖ Test ${idx + 1} FAILED\x1b[0m (${timeStr})`);
      console.log(`   Input:    ${JSON.stringify(normalizedInput)}`);
      console.log(`   Expected: ${JSON.stringify(normalizedExpected)}`);
      console.log(`   Actual:   ${JSON.stringify(normalizedResult)}\n`);
    }
  });
}
