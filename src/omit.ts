/**
 * Creates a new array by omitting specified values from the original array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The original array.
 * @param {...T[]} valuesToOmit - The values to omit from the original array.
 * @returns {T[]} - A new array with elements from the original array, excluding the specified values.
 */
function omit<T>(array: T[], ...valuesToOmit: T[]): T[] {
  return array.filter((item) => !valuesToOmit.includes(item));
}

export default omit;
