/**
 * Groups an array of objects based on a specific key or property.
 *
 * @param {T[]} arr - The array of objects to be grouped.
 * @param {string} key - The key or property name to group the objects by.
 * @returns {Record<string, T[]>} - An object where keys are unique values from the specified key,
 *                                  and values are arrays of objects grouped by that key.
 */
function groupBy<T extends Record<string, any>>(arr: T[], key: string): Record<string, T[]> {
  return arr.reduce((groups: Record<string, T[]>, obj: T) => {
    const keyValue = obj[key];
    if (!groups[keyValue]) {
      groups[keyValue] = [];
    }
    groups[keyValue].push(obj);
    return groups;
  }, {});
}

export default groupBy;
