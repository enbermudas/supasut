import clamp from "../../src/numbers/clamp";

describe("clamp", () => {
  it("should clamp the value to the minimum if it is less than the minimum", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(-100, -50, 50)).toBe(-50);
  });

  it("should clamp the value to the maximum if it is greater than the maximum", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(100, -50, 50)).toBe(50);
  });

  it("should not clamp the value if it falls within the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(0, -5, 5)).toBe(0);
    expect(clamp(10, 0, 100)).toBe(10);
  });

  it("should handle floating-point numbers", () => {
    expect(clamp(2.5, 0, 5)).toBe(2.5);
    expect(clamp(7.8, 1, 10)).toBe(7.8);
    expect(clamp(-3.3, -5, 0)).toBe(-3.3);
  });

  it("should handle negative and positive values", () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(20, -10, 10)).toBe(10);
  });

  it("should return NaN if min is greater than max", () => {
    expect(clamp(5, 10, 5)).toBeNaN();
  });
});
