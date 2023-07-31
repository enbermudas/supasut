import snakecase from "../src/snakecase";

describe("snakecase", () => {
  it("should convert a camelCase string to snake_case", () => {
    const input = "camelCaseString";
    const expected = "camel_case_string";
    const result = snakecase(input);
    expect(result).toBe(expected);
  });

  it("should convert a PascalCase string to snake_case", () => {
    const input = "PascalCaseString";
    const expected = "pascal_case_string";
    const result = snakecase(input);
    expect(result).toBe(expected);
  });

  it("should convert a WeirdCase string", () => {
    const input = "aLlLoWeRcAsEsTrInG";
    const expected = "a_ll_lo_we_rc_as_es_tr_in_g";
    const result = snakecase(input);
    expect(result).toBe(expected);
  });

  it("should convert a string with white spaces", () => {
    const input = "string with white spaces";
    const expected = "string_with_white_spaces";
    const result = snakecase(input);
    expect(result).toBe(expected);
  });

  it("should not change an all lowercase string", () => {
    const input = "alllowercasestring";
    const result = snakecase(input);
    expect(result).toBe(input);
  });

  it("should not change a snake_case string", () => {
    const input = "snake_case_string";
    const result = snakecase(input);
    expect(result).toBe(input);
  });

  it("should handle an empty string as input", () => {
    const input = "";
    const result = snakecase(input);
    expect(result).toBe(input);
  });
});
