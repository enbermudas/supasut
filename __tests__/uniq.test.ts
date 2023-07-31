import uniq from "../src/uniq";

describe("uniq", () => {
  it("should return an array with unique elements", () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const uniqueNumbers = uniq(numbers);
    expect(uniqueNumbers).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an array with unique strings", () => {
    const words = ["apple", "banana", "apple", "orange"];
    const uniqueWords = uniq(words);
    expect(uniqueWords).toEqual(["apple", "banana", "orange"]);
  });

  it("should return an array with unique objects based on reference", () => {
    const obj1 = { id: 1, name: "Alice" };
    const obj2 = { id: 1, name: "Alice" };
    const obj3 = { id: 2, name: "Bob" };
    const objects = [obj1, obj2, obj3];
    const uniqueObjects = uniq(objects);
    expect(uniqueObjects).toEqual([obj1, obj2, obj3]); // Objects with the same content but different references are not treated as duplicates
  });

  it("should return an empty array if the input array is empty", () => {
    const emptyArray: number[] = [];
    const result = uniq(emptyArray);
    expect(result).toEqual([]);
  });

  it("should handle an array of mixed types", () => {
    const mixedArray = [1, "apple", true, 1, "banana", false, "apple"];
    const uniqueValues = uniq(mixedArray);
    expect(uniqueValues).toEqual([1, "apple", true, "banana", false]);
  });

  it("should not modify the original array", () => {
    const originalArray = [1, 2, 2, 3, 4, 4, 5];
    const copyArray = [...originalArray];
    uniq(originalArray);
    expect(originalArray).toEqual(copyArray);
  });
});
