import isEmpty from "../../src/arrays/isEmpty";

describe("isEmpty", () => {
  it("should return true for an empty array", () => {
    const emptyArray: number[] = [];
    expect(isEmpty(emptyArray)).toBe(true);
  });

  it("should return false for a non-empty array", () => {
    const nonEmptyArray = [1, 2, 3];
    expect(isEmpty(nonEmptyArray)).toBe(false);
  });

  it("should return true for an array with zero length", () => {
    const zeroLengthArray = new Array<number>(0);
    expect(isEmpty(zeroLengthArray)).toBe(true);
  });

  it("should return false for an array with non-zero length", () => {
    const nonZeroLengthArray = new Array<number>(3);
    expect(isEmpty(nonZeroLengthArray)).toBe(false);
  });

  it("should return true for an array with falsy elements", () => {
    const falsyArray = [null, undefined, false, 0, ""];
    expect(isEmpty(falsyArray, true)).toBe(true);
  });
});
