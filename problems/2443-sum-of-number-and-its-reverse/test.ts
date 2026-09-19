import { runTest } from "../../runner";
import { sumOfNumberAndItsReverse } from "./solution";

runTest(sumOfNumberAndItsReverse, true, 443);
runTest(sumOfNumberAndItsReverse, false, 63);
runTest(sumOfNumberAndItsReverse, true, 181);
runTest(sumOfNumberAndItsReverse, false, 20);
runTest(sumOfNumberAndItsReverse, false, 21);
runTest(sumOfNumberAndItsReverse, true, 11);
runTest(sumOfNumberAndItsReverse, true, 4);
runTest(sumOfNumberAndItsReverse, true, 141);
