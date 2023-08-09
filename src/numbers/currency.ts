/**
 * Formats a number as a currency string.
 *
 * @param {number} value - The number to format.
 * @param {string} [thousandsSeparator="."] - The thousands separator symbol.
 * @param {string} [decimalSeparator=","] - The decimal separator symbol.
 * @returns {string} - The formatted currency string.
 */
function currency(value: number, thousandsSeparator: string = ".", decimalSeparator: string = ","): string {
  const parts = value.toFixed(2).split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
  const decimalPart = parts[1];

  return `${integerPart}${decimalSeparator}${decimalPart}`;
}

export default currency;
