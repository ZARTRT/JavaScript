import { Levenshtein } from "./5.Day";

const lsamples = [
  {
    string1: "horse",
    string2: "ros",
    count: 3
  },
  {
    string1: "intention",
    string2: "execution",
    count: 5
  }
];

describe("Levenshtein()", () => {
  it("能够正确地计算距离", () => {
    lsamples.forEach(({ string1, string2, count }) =>
      expect(Levenshtein(string1, string2)).toEqual(count)
    );
  });
});
