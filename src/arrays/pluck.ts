/**
 * Extracts a specific attribute or nested attribute from each object in an array.
 *
 * @template T - The type of objects in the array, which extends object.
 * @param {T[]} array - The array of objects.
 * @param {string} key - The attribute key or nested attribute path to extract from each object.
 * @returns {Array<any>} - An array containing the extracted attribute or nested attribute values.
 * @throws {Error} - If the attribute key or nested attribute path is not valid for any object in the array.
 */
function pluck<T extends object>(array: T[], key: string): Array<any> {
  const keys = key.split(".");

  return array.map((item) => {
    let value: any = item;
    for (const k of keys) {
      if (!(k in value)) {
        throw new Error(`Invalid attribute key or path: "${key}"`);
      }
      value = value[k];
    }
    return value;
  });
}

export default pluck;
