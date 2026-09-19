import { runTest } from "../../runner";
import { setZeroes } from "./solution";

runTest(
  setZeroes,
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
);

runTest(
  setZeroes,
  [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ],
  [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ],
);

runTest(setZeroes, [[0, 0]], [[0, 1]]);
