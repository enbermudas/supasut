import union from "../src/union";

describe("union", () => {
  it("should return an array with unique elements from multiple arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    const array3 = [5, 6, 7];
    const unionArray = union(array1, array2, array3);
    expect(unionArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7]));
    expect(unionArray).toHaveLength(7);
  });

  it("should handle empty arrays as input", () => {
    const emptyArray: number[] = [];
    const unionArray = union(emptyArray);
    expect(unionArray).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    const array1 = [1, 2, 2, 3, 4];
    const array2 = [3, 4, 4, 5];
    const unionArray = union(array1, array2);
    expect(unionArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    expect(unionArray).toHaveLength(5);
  });

  it("should handle arrays with different types", () => {
    const array1 = [1, "apple", true];
    const array2 = ["banana", 1, false];
    const unionArray = union(array1, array2);
    expect(unionArray).toEqual(expect.arrayContaining([1, "apple", true, "banana", false]));
    expect(unionArray).toHaveLength(5);
  });

  it("should handle an empty array as input", () => {
    const emptyArray: number[] = [];
    const unionArray = union(emptyArray);
    expect(unionArray).toEqual([]);
  });

  it("should not modify the original arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    const copyArray1 = [...array1];
    const copyArray2 = [...array2];
    union(array1, array2);
    expect(array1).toEqual(copyArray1);
    expect(array2).toEqual(copyArray2);
  });
});
