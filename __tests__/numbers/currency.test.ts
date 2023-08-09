import currency from "../../src/numbers/currency";

describe("currency", () => {
  it("formats number with default separators", () => {
    expect(currency(1234567.89)).toBe("1.234.567,89");
  });

  it("formats number with custom separators", () => {
    expect(currency(1234567.89, ",", ".")).toBe("1,234,567.89");
  });

  it("formats negative number", () => {
    expect(currency(-1234567.89)).toBe("-1.234.567,89");
  });

  it("formats zero", () => {
    expect(currency(0)).toBe("0,00");
  });

  it("formats number with different decimal places", () => {
    expect(currency(1234567.89123)).toBe("1.234.567,89");
  });

  it("formats number with no decimals", () => {
    expect(currency(1234567)).toBe("1.234.567,00");
  });
});
