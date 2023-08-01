import average from "../src/average";

describe("average", () => {
  const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 35 },
  ];

  it("should return the average value of the specified key in the array of objects", () => {
    const avgAge = average(data, "age");
    expect(avgAge).toBe(32.5); // (30 + 25 + 40 + 35) / 4 = 32.5
  });

  it("should return 0 for an empty input array", () => {
    const emptyArray: any[] = [];
    const avg = average(emptyArray, "age");
    expect(avg).toBe(0);
  });

  it("should throw an error if the key is not present in any of the objects", () => {
    const invalidData = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 40 },
      { name: "David" }, // Missing age key in this object
    ];

    expect(() => average(invalidData, "age")).toThrowError('Key "age" is not present in the object.');
  });

  it("should throw an error if the value of the key is not a number", () => {
    const invalidData = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: "40" }, // Invalid age value, should be a number
      { name: "David", age: 35 },
    ];

    expect(() => average(invalidData, "age")).toThrowError('Value of "age" is not a number.');
  });
});
