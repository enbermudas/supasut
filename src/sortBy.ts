/**
 * Creates a new array with the objects sorted based on a specific property.
 *
 * @template T - The type of elements in the array of objects.
 * @param {T[]} array - The array of objects to sort.
 * @param {string} property - The property to sort the objects by.
 * @returns {T[]} - A new array of objects sorted by the specified property.
 */
function sortBy<T>(array: T[], property: string): T[] {
  return array.slice().sort((a, b) => {
    let key = property as keyof typeof a;

    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

export default sortBy;
