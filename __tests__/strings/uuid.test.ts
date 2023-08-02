import uuid from "../../src/strings/uuid";

describe("uuid", () => {
  it("should generate a valid UUID", () => {
    const generatedUUID = uuid();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(generatedUUID).toMatch(uuidRegex);
  });

  it("should generate unique UUIDs", () => {
    const uuidSet = new Set<string>();
    for (let i = 0; i < 1000; i++) {
      const generatedUUID = uuid();
      expect(uuidSet.has(generatedUUID)).toBe(false);
      uuidSet.add(generatedUUID);
    }
  });
});
