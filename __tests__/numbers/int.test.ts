import int from "../../src/numbers/int";

describe("int", () => {
  it("should generate a random integer within the specified range", () => {
    const min = 10;
    const max = 20;
    for (let i = 0; i < 100; i++) {
      const randomNumber = int(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  it("should throw an error if `min` or `max` is not an integer", () => {
    expect(() => int(1.5, 10)).toThrow("Both `min` and `max` must be integers.");
    expect(() => int(1, 10.5)).toThrow("Both `min` and `max` must be integers.");
  });

  it("should throw an error if `min` is greater than `max`", () => {
    expect(() => int(20, 10)).toThrow("`min` must be less than or equal to `max`.");
  });
});
