import toPascalCase from "../src/toPascalCase";

describe("toPascalCase", () => {
  it("should convert a snake_case string to PascalCase", () => {
    const input = "snake_case_string";
    const expected = "SnakeCaseString";
    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it("should convert a camelCase string to PascalCase", () => {
    const input = "camelCaseString";
    const expected = "CamelCaseString";
    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it("should convert a string with white spaces to PascalCase", () => {
    const input = "string with white spaces";
    const expected = "StringWithWhiteSpaces";
    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it("should convert an all lowercase string", () => {
    const input = "alllowercasestring";
    const expected = "Alllowercasestring";
    const result = toPascalCase(input);
    expect(result).toBe(expected);
  });

  it("should not change a PascalCase string", () => {
    const input = "PascalCaseString";
    const result = toPascalCase(input);
    expect(result).toBe(input);
  });

  it("should handle an empty string as input", () => {
    const input = "";
    const result = toPascalCase(input);
    expect(result).toBe(input);
  });
});
