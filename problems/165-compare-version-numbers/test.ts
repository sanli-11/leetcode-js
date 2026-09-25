import { runTest } from "../../runner";
import { compareVersionNumbers } from "./solution";

runTest(compareVersionNumbers, -1, "1.2", "1.10");
runTest(compareVersionNumbers, 0, "1.01", "1.001");
runTest(compareVersionNumbers, 0, "1.0", "1.0.0.0");
runTest(compareVersionNumbers, -1, "1.0", "1.0.0.1");

