/**
 * Shuffles the elements of an array randomly.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} - A new array with the elements randomly shuffled.
 */
function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default shuffle;
