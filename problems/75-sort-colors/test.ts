import { runTest } from "../../runner";
import { sortColors } from "./solution";

runTest(sortColors, [0, 0, 1, 1, 2, 2], [2, 0, 2, 1, 1, 0]);
runTest(sortColors, [0, 1, 2], [2, 0, 1]);
runTest(sortColors, [2], [2]);
runTest(sortColors, [2, 2], [2, 2]);
