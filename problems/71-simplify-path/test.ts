import { runTest } from "../../runner";
import { simplifyPath } from "./solution";

runTest(simplifyPath, "/", "/");
runTest(simplifyPath, "/home", "/home/");
runTest(simplifyPath, "/home/foo", "/home//foo/");
runTest(
  simplifyPath,
  "/home/user/Pictures",
  "/home/user/Documents/../Pictures",
);
runTest(simplifyPath, "/", "/../");
runTest(simplifyPath, "/.../b/d", "/.../a/../b/c/../d/./");
runTest(simplifyPath, "/c", "/a/./b/../../c/");
