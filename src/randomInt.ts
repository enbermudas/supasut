/**
 * Generates a random integer within a specified range.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {number} - A random integer between `min` and `max`.
 */
function randomInt(min: number, max: number): number {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Both `min` and `max` must be integers.");
  }

  if (min > max) {
    throw new Error("`min` must be less than or equal to `max`.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomInt;
