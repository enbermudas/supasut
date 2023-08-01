import { randomBytes } from "crypto";

/**
 * Generates a universally unique identifier (UUID) that complies with RFC 4122.
 *
 * @returns {string} - A universally unique identifier (UUID).
 */
function uuid(): string {
  const buffer = randomBytes(16);

  // Apply RFC 4122 variant (set the variant bits to 10)
  buffer[8] = (buffer[8] & 0x3f) | 0x80;

  // Apply RFC 4122 version (set the version bits to 0100)
  buffer[6] = (buffer[6] & 0x0f) | 0x40;

  // Convert to a valid UUID string
  const hexDigits = "0123456789abcdef";
  let uuidString = "";
  for (let i = 0; i < 16; i++) {
    uuidString += hexDigits[buffer[i] >> 4] + hexDigits[buffer[i] & 0x0f];
    if (i === 3 || i === 5 || i === 7 || i === 9) {
      uuidString += "-";
    }
  }

  return uuidString;
}

export default uuid;
