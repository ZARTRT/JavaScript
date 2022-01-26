import { longestCommonSubsequence } from "./4.Day";

const lcsamples = [
  {
    string1: "abcde",
    string2: "ace",
    count: 3
  },
  {
    string1: "abc",
    string2: "abc",
    count: 3
  },
  {
    string1: "abc",
    string2: "def",
    count: 0
  }
];

describe("longestCommonSubsequence()", () => {
  it("获得正确地最长公共子序列", () => {
    lcsamples.forEach(({ string1, string2, count }) =>
      expect(longestCommonSubsequence(string1, string2)).toEqual(count)
    );
  });
});
