/**
 * Gets a random sample of elements from an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to sample from.
 * @param {number} size - The size of the sample.
 * @returns {T[]} - A new array containing the random sample of elements.
 */
function sample<T>(array: T[], size: number): T[] {
  const sampledArray = [...array];
  let currentIndex = array.length;
  let randomIndex, temporaryValue;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = sampledArray[currentIndex];
    sampledArray[currentIndex] = sampledArray[randomIndex];
    sampledArray[randomIndex] = temporaryValue;
  }

  return sampledArray.slice(0, size);
}

export default sample;
