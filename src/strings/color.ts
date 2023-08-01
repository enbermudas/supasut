export enum ColorFormat {
  RGB = "rgb",
  HEX = "hex",
  HSL = "hsl",
}

/**
 * Generates a random color in the specified format.
 *
 * @param {ColorFormat} format - The format of the generated color. Possible values: "rgb", "hex", "hsl".
 * @returns {string} - A random color in the specified format.
 */
function color(format: ColorFormat): string {
  const randomChannel = () => Math.floor(Math.random() * 256);
  const randomPercentage = () => Math.floor(Math.random() * 101);

  if (format === ColorFormat.RGB) {
    return `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`;
  } else if (format === ColorFormat.HEX) {
    return `#${randomChannel().toString(16).padStart(2, "0")}${randomChannel()
      .toString(16)
      .padStart(2, "0")}${randomChannel().toString(16).padStart(2, "0")}`;
  } else if (format === ColorFormat.HSL) {
    return `hsl(${Math.random() * 360}, ${randomPercentage()}%, ${randomPercentage()}%)`;
  } else {
    throw new Error(`Unsupported color format: ${format}`);
  }
}

export default color;
