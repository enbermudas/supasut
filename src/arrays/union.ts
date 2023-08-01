/**
 * Creates a new array with unique elements from two or more arrays.
 *
 * @template T - The type of elements in the arrays.
 * @param {...T[][]} arrays - Two or more arrays to union.
 * @returns {T[]} - A new array containing unique elements from all input arrays.
 */
function union<T>(...arrays: T[][]): T[] {
  const mergedArray = ([] as T[]).concat(...arrays);
  return Array.from(new Set(mergedArray));
}

export default union;
