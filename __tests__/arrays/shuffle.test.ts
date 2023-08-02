import shuffle from "../../src/arrays/shuffle";

describe("shuffle", () => {
  it("should return a shuffled version of the array", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(array);

    // Assert that the shuffled array has the same elements as the original array
    expect(shuffledArray).toHaveLength(array.length);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));

    // Assert that the shuffled array is not equal to the original array
    expect(shuffledArray).not.toEqual(array);
  });

  it("should handle an empty array as input", () => {
    const emptyArray: number[] = [];
    const shuffledArray = shuffle(emptyArray);
    expect(shuffledArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const array = [42];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toEqual(array);
  });

  it("should not modify the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const copyArray = [...array];
    shuffle(array);
    expect(array).toEqual(copyArray);
  });
});
