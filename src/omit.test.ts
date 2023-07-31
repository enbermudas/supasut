import omit from "./omit";

describe("omit", () => {
  it("should omit specified values from the array", () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
    const omittedArray: number[] = omit(originalArray, 2, 4);
    expect(omittedArray).toEqual([1, 3, 5]);
  });

  it("should handle empty array", () => {
    const originalArray: number[] = [];
    const omittedArray: number[] = omit(originalArray, 2, 4);
    expect(omittedArray).toEqual([]);
  });

  it("should handle array with no values to omit", () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
    const omittedArray: number[] = omit(originalArray);
    expect(omittedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle omitting values that are not present in the array", () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
    const omittedArray: number[] = omit(originalArray, 6, 7);
    expect(omittedArray).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle arrays with different data types", () => {
    const originalArray: (number | string)[] = [1, "two", 3, "four", 5];
    const omittedArray: (number | string)[] = omit(originalArray, 1, "four");
    expect(omittedArray).toEqual(["two", 3, 5]);
  });

  it("should handle arrays with duplicate values", () => {
    const originalArray: number[] = [1, 2, 2, 3, 4, 4, 5];
    const omittedArray: number[] = omit(originalArray, 2, 4);
    expect(omittedArray).toEqual([1, 3, 5]);
  });
});
