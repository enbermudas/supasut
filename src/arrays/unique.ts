/**
 * Retrieves unique elements from an array by eliminating duplicates.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array from which to get unique elements.
 * @returns {T[]} - An array containing unique elements from the input array.
 */
function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export default unique;
