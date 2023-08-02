import paginate from "../../src/arrays/paginate";

describe("paginate", () => {
  it("should return an array with the correct number of pages", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage = 3;
    const paginatedData = paginate(data, itemsPerPage);

    expect(paginatedData).toHaveLength(4); // 4 pages for 10 items with 3 items per page
  });

  it("should return paginated arrays with the correct number of items", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const itemsPerPage = 3;
    const paginatedData = paginate(data, itemsPerPage);

    expect(paginatedData[0]).toEqual([1, 2, 3]);
    expect(paginatedData[1]).toEqual([4, 5, 6]);
    expect(paginatedData[2]).toEqual([7, 8, 9]);
    expect(paginatedData[3]).toEqual([10]);
  });

  it("should return an empty array for an empty input array", () => {
    const data: number[] = [];
    const itemsPerPage = 5;
    const paginatedData = paginate(data, itemsPerPage);

    expect(paginatedData).toEqual([]);
  });
});
