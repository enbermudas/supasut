/**
 * Turns the string to snake casing.
 *
 * @param {string} str - The input string to convert to snake case.
 * @returns {string} - A new string converted to snake case.
 */
export function toSnakeCase(str: string): string {
  return str.replace(/\s/g, "_").replace(/[A-Z]/g, (match, offset) => (offset === 0 ? "" : "_") + match.toLowerCase());
}

export default toSnakeCase;
