import { runTest } from "../../runner";
import { groupAnagrams } from "./solution";

runTest(
  groupAnagrams,
  [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  ["eat", "tea", "tan", "ate", "nat", "bat"],
);
runTest(
  groupAnagrams,
  [["eat", "tea", "ate"], ["me", "em"], ["tan", "nat"], ["bat"]],
  ["eat", "tea", "me", "em", "tan", "ate", "nat", "bat"],
);
runTest(groupAnagrams, [[""]], [""]);
runTest(groupAnagrams, [["a"]], ["a"]);
runTest(groupAnagrams, [["ad"],["bc", "cb"]], ["ad", "bc", "cb"]);
