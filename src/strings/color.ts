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

  switch (format) {
    case ColorFormat.RGB:
      return `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`;

    case ColorFormat.HEX:
      return `#${randomChannel().toString(16).padStart(2, "0")}${randomChannel()
        .toString(16)
        .padStart(2, "0")}${randomChannel().toString(16).padStart(2, "0")}`;

    case ColorFormat.HSL:
      return `hsl(${Math.random() * 360}, ${randomPercentage()}%, ${randomPercentage()}%)`;

    default:
      throw new Error(`Unsupported color format: ${format}`);
  }
}

export default color;
