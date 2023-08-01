/**
 * Calculates the average value of a provided array with objects based on a specified key.
 *
 * @template T - The type of elements in the array of objects.
 * @param {T[]} array - The array of objects to calculate the average from.
 * @param {keyof T} key - The key in the objects to calculate the average on.
 * @returns {number} - The average value of the specified key in the array of objects.
 * @throws {Error} - If the key is not present in any of the objects or if the value is not a number.
 */
function average<T extends Partial<Record<K, any>>, K extends keyof T>(array: T[], key: K): number {
  if (array.length === 0) return 0;

  let total = 0;
  let count = 0;

  for (const obj of array) {
    if (!(key in obj)) {
      throw new Error(`Key "${String(key)}" is not present in the object.`);
    }

    if (typeof obj[key] !== "number") {
      throw new Error(`Value of "${String(key)}" is not a number.`);
    }

    total += obj[key];
    count++;
  }

  return total / count;
}

export default average;
