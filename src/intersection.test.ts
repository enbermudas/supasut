import intersection from "./intersection";

describe("intersection function", () => {
  it("should find common elements between two number arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const commonElements = intersection(array1, array2);
    expect(commonElements).toEqual([3, 4, 5]);
  });

  it("should find common elements between two string arrays", () => {
    const words1 = ["apple", "banana", "orange"];
    const words2 = ["banana", "grape", "orange"];
    const commonWords = intersection(words1, words2);
    expect(commonWords).toEqual(["banana", "orange"]);
  });

  it("should handle an empty array as input", () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    const commonElements = intersection(array1, array2);
    expect(commonElements).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    const array1 = [1, 2, 2, 3, 4, 5];
    const array2 = [3, 3, 4, 5, 5, 6, 7];
    const commonElements = intersection(array1, array2);
    expect(commonElements).toEqual([3, 4, 5]);
  });

  it("should return an empty array if there are no common elements", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const commonElements = intersection(array1, array2);
    expect(commonElements).toEqual([]);
  });

  it("should not modify the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const copyArray1 = [...array1];
    const copyArray2 = [...array2];
    intersection(array1, array2);
    expect(array1).toEqual(copyArray1);
    expect(array2).toEqual(copyArray2);
  });
});
