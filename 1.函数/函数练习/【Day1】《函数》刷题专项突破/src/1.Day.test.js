import { bubbleSort, insertionSort } from "./1.Day";

const samples = [
  {
    src: [1, 3, 2, 6, 4, 5, 9, 8, 7],
    dst: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    src: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    dst: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    src: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    dst: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
];

describe("bubbleSort()", () => {
  it("应该正确地排序", () => {
    samples.forEach(({ src, dst }) => expect(bubbleSort(src)).toEqual(dst));
  });
});

describe("insertionSort()", () => {
  it("应该正确地排序", () => {
    samples.forEach(({ src, dst }) => expect(insertionSort(src)).toEqual(dst));
  });
});
