import groupBy from "../src/groupBy";

describe("groupBy", () => {
  it("should group objects by the specified key", () => {
    const people = [
      { name: "Kike", age: 27 },
      { name: "Carlos", age: 22 },
      { name: "Pedro", age: 23 },
      { id: 1, name: "Kike", age: 20 },
      { name: "Carlos", age: 36, foo: "bar" },
      { name: "Maria", age: 18 },
    ];

    const expected = {
      Kike: [
        { name: "Kike", age: 27 },
        { id: 1, name: "Kike", age: 20 },
      ],
      Carlos: [
        { name: "Carlos", age: 22 },
        { name: "Carlos", age: 36, foo: "bar" },
      ],
      Pedro: [{ name: "Pedro", age: 23 }],
      Maria: [{ name: "Maria", age: 18 }],
    };

    const grouped = groupBy(people, "name");

    expect(grouped).toEqual(expected);
  });

  it("should handle an empty array as input", () => {
    const emptyArray: any[] = [];
    const grouped = groupBy(emptyArray, "key");

    expect(grouped).toEqual({});
  });

  it("should group objects by the specified key with number values", () => {
    const data = [
      { category: 1, value: 10 },
      { category: 2, value: 15 },
      { category: 1, value: 12 },
      { category: 3, value: 23 },
    ];

    const grouped = groupBy(data, "category");

    const expected = {
      1: [
        { category: 1, value: 10 },
        { category: 1, value: 12 },
      ],
      2: [{ category: 2, value: 15 }],
      3: [{ category: 3, value: 23 }],
    };

    expect(grouped).toEqual(expected);
  });

  it("should handle object with missing key properties", () => {
    const people = [
      { name: "Kike", age: 27 },
      { name: "Carlos", age: 22 },
      { name: "Pedro", age: 23 },
      { id: 1, name: "Kike", age: 20 },
      { name: "Carlos", age: 36, foo: "bar" },
      { name: "Maria", age: 18 },
      { age: 21 },
    ];

    const expected = {
      Kike: [
        { name: "Kike", age: 27 },
        { id: 1, name: "Kike", age: 20 },
      ],
      Carlos: [
        { name: "Carlos", age: 22 },
        { name: "Carlos", age: 36, foo: "bar" },
      ],
      Pedro: [{ name: "Pedro", age: 23 }],
      Maria: [{ name: "Maria", age: 18 }],
      undefined: [{ age: 21 }],
    };

    const grouped = groupBy(people, "name");

    expect(grouped).toEqual(expected);
  });
});
