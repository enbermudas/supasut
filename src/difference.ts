/**
 * Retrieves elements that are present in one array but not in another.
 *
 * @template T - The type of elements in the arrays.
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} - An array containing elements that are present in `array1` but not in `array2`.
 */
function difference<T>(array1: T[], array2: T[]): T[] {
  const set2 = new Set(array2);
  return array1.filter((item) => !set2.has(item));
}

export default difference;
