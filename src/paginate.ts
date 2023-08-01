/**
 * Splits an array into smaller arrays to implement pagination in a UI.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to paginate.
 * @param {number} itemsPerPage - The number of items per page.
 * @returns {T[][]} - An array of arrays containing paginated data.
 */
function paginate<T>(array: T[], itemsPerPage: number): T[][] {
  const paginatedArray: T[][] = [];
  const totalPages = Math.ceil(array.length / itemsPerPage);

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    paginatedArray.push(array.slice(startIndex, endIndex));
  }

  return paginatedArray;
}

export default paginate;
