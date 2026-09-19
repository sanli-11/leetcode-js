import { runTest } from "../../runner";
import { searchA2DMatrix } from "./solution";

runTest(
  searchA2DMatrix,
  true,
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3,
);

runTest(
  searchA2DMatrix,
  false,
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  13,
);

runTest(searchA2DMatrix, false, [[1]], 2);
runTest(searchA2DMatrix, true, [[1], [3]], 1);
runTest(searchA2DMatrix, false, [[1], [3]], 4);
