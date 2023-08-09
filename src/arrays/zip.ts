/**
 * Combines multiple arrays element-wise into an array of tuples.
 *
 * @param {...Array<any>[]} arrays - The arrays to be zipped.
 * @returns {Array<any[]>} - An array of tuples containing corresponding elements from input arrays.
 */
function zip(...arrays: Array<any>[]): Array<any[]> {
  if (arrays.length === 0) return [];

  const length = Math.min(...arrays.map((arr) => arr.length));
  const result: Array<any[]> = [];

  for (let i = 0; i < length; i++) {
    result.push(arrays.map((arr) => arr[i]));
  }

  return result;
}

export default zip;
