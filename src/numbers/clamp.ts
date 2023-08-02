/**
 * Clamps a number within a specified range.
 *
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The clamped number within the specified range.
 */
function clamp(value: number, min: number, max: number): number {
  if (min > max) return NaN;
  else if (value < min) return min;
  else if (value > max) return max;
  return value;
}

export default clamp;
