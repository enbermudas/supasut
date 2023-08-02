/**
 * Counts the number of occurrences of a substring in the string.
 *
 * @param {string} str - The input string to search in.
 * @param {string} substring - The substring to count occurrences of.
 * @returns {number} - The number of occurrences of the substring in the string.
 */
export function occurrences(str: string, substring: string): number {
  return [...str.matchAll(new RegExp(substring, "gi"))].length;
}

export default occurrences;
