import { runTest } from "../../runner";
import { removeDuplicates } from "./solution";

runTest(removeDuplicates, 5, [1, 1, 1, 2, 2, 3]);
runTest(removeDuplicates, 7, [0, 0, 1, 1, 1, 1, 2, 3, 3]);
runTest(removeDuplicates, 10, [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]);
runTest(removeDuplicates, 11, [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5]);
runTest(removeDuplicates, 6, [0, 1, 2, 3, 3, 3, 4]);
