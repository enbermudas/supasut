import sample from "../src/sample";

describe("sample", () => {
  it("should return a random sample of elements from the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sampleSize = 3;
    const sampledArray = sample(array, sampleSize);

    // Assert that the sampled array has the correct size
    expect(sampledArray).toHaveLength(sampleSize);

    // Assert that all elements in the sampled array are present in the original array
    expect(sampledArray.every((item) => array.includes(item))).toBeTruthy();
  });

  it("should handle an empty array as input", () => {
    const emptyArray: number[] = [];
    const sampleSize = 3;
    const sampledArray = sample(emptyArray, sampleSize);
    expect(sampledArray).toEqual([]);
  });

  it("should handle a sample size larger than the array size", () => {
    const array = [1, 2, 3];
    const sampleSize = 5;
    const sampledArray = sample(array, sampleSize);
    expect(sampledArray).toHaveLength(array.length);
    expect(sampledArray).toEqual(expect.arrayContaining(array));
  });

  it("should handle a sample size equal to the array size", () => {
    const array = [1, 2, 3, 4];
    const sampleSize = array.length;
    const sampledArray = sample(array, sampleSize);
    expect(sampledArray).toHaveLength(sampleSize);
    expect(sampledArray).toEqual(expect.arrayContaining(array));
  });

  it("should handle an array with a single element", () => {
    const array = [42];
    const sampleSize = 1;
    const sampledArray = sample(array, sampleSize);
    expect(sampledArray).toEqual(array);
  });

  it("should not modify the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const copyArray = [...array];
    sample(array, 3);
    expect(array).toEqual(copyArray);
  });
});
