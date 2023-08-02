/**
 * Checks if an array is empty.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to check.
 * @param {boolean} falsyElements - Checks falsy elements in side the array.
 * @returns {boolean} - True if the array is empty, false otherwise.
 */
function isEmpty<T>(array: T[], falsyElements: boolean = false): boolean {
  let isEmpty = array.length === 0;

  if (!falsyElements) return isEmpty;

  return array.every((element) => !element);
}

export default isEmpty;
