import { runTests } from "../../runner";
import { sumOfNumberAndItsReverse } from "./solution";

runTests(sumOfNumberAndItsReverse, [
  {
    input: [443],
    expected: true,
  },
  {
    input: [63],
    expected: false,
  },
  { input: [181], expected: true },
]);
