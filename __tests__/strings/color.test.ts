import color, { ColorFormat } from "../../src/strings/color";

describe("color", () => {
  test("should generate a random color in RGB format", () => {
    const randomColor = color(ColorFormat.RGB);
    const regex = /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/;
    expect(randomColor).toMatch(regex);
  });

  test("should generate a random color in HEX format", () => {
    const randomColor = color(ColorFormat.HEX);
    const regex = /^#[0-9a-fA-F]{6}$/;
    expect(randomColor).toMatch(regex);
  });

  test("should generate a random color in HSL format", () => {
    const randomColor = color(ColorFormat.HSL);
    const regex = /^hsl\(\d{1,3}(?:\.\d+)?, \d{1,3}(?:\.\d+)?%, \d{1,3}(?:\.\d+)?%\)$/;
    expect(randomColor).toMatch(regex);
  });

  test("should throw an error for an unsupported color format", () => {
    expect(() => color("invalid" as ColorFormat)).toThrowError("Unsupported color format: invalid");
  });
});
