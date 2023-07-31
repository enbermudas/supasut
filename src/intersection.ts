/**
 * Finds the common elements between two arrays.
 *
 * @template T - The type of elements in the arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} - An array containing the common elements between the two input arrays.
 */
function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => array2.includes(item));
}

export default intersection;
