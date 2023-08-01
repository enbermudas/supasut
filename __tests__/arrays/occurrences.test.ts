import occurrences from "../../src/strings/occurrences";

describe("occurrences", () => {
  it("should count the number of occurrences of the substring in the string", () => {
    const str = "hello, hello, hello world";
    const substring = "hello";
    const occ = occurrences(str, substring);
    expect(occ).toBe(3);
  });

  it("should return 0 if the substring is not found", () => {
    const str = "hello, hello, hello world";
    const substring = "none";
    const occ = occurrences(str, substring);
    expect(occ).toBe(0);
  });

  it("should handle an empty string as input", () => {
    const str = "";
    const substring = "hello";
    const occ = occurrences(str, substring);
    expect(occ).toBe(0);
  });

  it("should handle an empty substring as input", () => {
    const str = "hello, hello, hello world";
    const substring = "";
    const occ = occurrences(str, substring);
    expect(occ).toBe(26);
  });

  it("should handle case-insensitive occurrences", () => {
    const str = "Hello, hello, Hello world";
    const substring = "hello";
    const occ = occurrences(str, substring);
    expect(occ).toBe(3);
  });
});
