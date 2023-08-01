import sortBy from "../src/sortBy";

describe("sortBy", () => {
  const data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 4, name: "David", age: 35 },
    { id: 3, name: "Charlie", age: 40 },
    { id: 2, name: "Bob", age: 25 },
  ];

  it("should return a new array sorted by the specified property in ascending order (number)", () => {
    const sortedArray = sortBy(data, "age");
    const expectedArray = [
      { id: 2, name: "Bob", age: 25 },
      { id: 1, name: "Alice", age: 30 },
      { id: 4, name: "David", age: 35 },
      { id: 3, name: "Charlie", age: 40 },
    ];
    expect(sortedArray).toEqual(expectedArray);
  });

  it("should return a new array sorted by the specified property in ascending order (string)", () => {
    const sortedArray = sortBy(data, "name");
    const expectedArray = [
      { id: 1, name: "Alice", age: 30 },
      { id: 2, name: "Bob", age: 25 },
      { id: 3, name: "Charlie", age: 40 },
      { id: 4, name: "David", age: 35 },
    ];
    expect(sortedArray).toEqual(expectedArray);
  });

  it("should not modify the original array", () => {
    const originalArray = [...data];
    sortBy(data, "age");
    expect(data).toEqual(originalArray);
  });

  it("should return the same array for an empty input array", () => {
    const emptyArray: any[] = [];
    const sortedArray = sortBy(emptyArray, "name");
    expect(sortedArray).toEqual([]);
  });

  it("should return the same array if the property is not found in the objects", () => {
    const sortedArray = sortBy(data, "address");
    expect(sortedArray).toEqual(data);
  });
});
