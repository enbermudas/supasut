/**
 * Turns the string to PascalCase.
 *
 * @param {string} str - The input string to convert to PascalCase.
 * @returns {string} - A new string converted to PascalCase.
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/\s+|_+/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
      return index === 0 ? match.toUpperCase() : match.toUpperCase().trim();
    })
    .replace(/\s/g, "");
}

export default toPascalCase;
