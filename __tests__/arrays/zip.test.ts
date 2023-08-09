import zip from "../../src/arrays/zip";

describe("zip", () => {
  it("zips two arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c"];
    const result = zip(array1, array2);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });

  it("zips three arrays", () => {
    const array1 = [1, 2, 3];
    const array2 = ["a", "b", "c"];
    const array3 = [true, false, true];
    const result = zip(array1, array2, array3);
    expect(result).toEqual([
      [1, "a", true],
      [2, "b", false],
      [3, "c", true],
    ]);
  });

  it("zips arrays of different lengths", () => {
    const array1 = [1, 2, 3];
    const array2 = ["a", "b"];
    const result = zip(array1, array2);
    expect(result).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });

  it("returns an empty array when given no arrays", () => {
    const result = zip();
    expect(result).toEqual([]);
  });
});
