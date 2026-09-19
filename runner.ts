let testCount = 0;

export function runTest<T extends (...args: any[]) => any>(
  fn: T,
  expected: ReturnType<T>,
  ...args: Parameters<T>
): void {
  testCount++;

  const start = performance.now();
  const actual = fn(...args);
  const elapsed = performance.now() - start;

  const timeStr = `${elapsed.toFixed(2)}ms`;
  const inputStr = args.map((arg) => JSON.stringify(arg)).join(", ");

  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  if (passed) {
    console.log(`\x1b[32m✔ Test ${testCount} PASSED\x1b[0m (${timeStr})`);
    console.log(`   Input:    ${inputStr}`);
    console.log(`   Expected: ${JSON.stringify(expected)}\n`);
  } else {
    console.log(`\x1b[31m✖ Test ${testCount} FAILED\x1b[0m (${timeStr})`);
    console.log(`   Input:    ${inputStr}`);
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Actual:   ${JSON.stringify(actual)}\n`);
  }
}
