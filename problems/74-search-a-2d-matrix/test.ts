import { runTests } from "../../runner";
import { searchA2DMatrix } from "./solution";

runTests(searchA2DMatrix, [
  {
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13,
    ],
    expected: false,
  },
  {
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
    ],
    expected: true,
  },
  {
    input: [[[1]], 2],
    expected: false
  },
  {
    input: [[[1],[3]], 1],
    expected: true
  },
{
    input: [[[1],[3]], 4],
    expected: false
  }
]);
