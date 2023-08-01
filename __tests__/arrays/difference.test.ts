import difference from "../../src/arrays/difference";

describe("difference", () => {
  it("should find elements present in the first array but not in the second", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const diffElements = difference(array1, array2);
    expect(diffElements).toEqual([1, 2]);
  });

  it("should find string elements present in the first array but not in the second", () => {
    const words1 = ["apple", "banana", "orange"];
    const words2 = ["banana", "grape", "orange"];
    const diffWords = difference(words1, words2);
    expect(diffWords).toEqual(["apple"]);
  });

  it("should handle an empty array as input", () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    const diffElements = difference(array1, array2);
    expect(diffElements).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    const array1 = [1, 2, 2, 3, 4, 5];
    const array2 = [3, 3, 4, 5, 5, 6, 7];
    const diffElements = difference(array1, array2);
    expect(diffElements).toEqual([1, 2, 2]);
  });

  it("should handle arrays with different types", () => {
    const array1 = [1, "apple", true];
    const array2 = ["banana", 1, false];
    const diffElements = difference(array1, array2);
    expect(diffElements).toEqual(["apple", true]);
  });

  it("should not modify the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    const copyArray1 = [...array1];
    const copyArray2 = [...array2];
    difference(array1, array2);
    expect(array1).toEqual(copyArray1);
    expect(array2).toEqual(copyArray2);
  });
});
