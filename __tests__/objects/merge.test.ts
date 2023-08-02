import merge from "../../src/objects/merge";

describe("merge function", () => {
  it("should merge two objects correctly", () => {
    const obj1 = { name: "John", age: 30 };
    const obj2 = { country: "USA", occupation: "Engineer" };

    const mergedObject = merge(obj1, obj2);

    expect(mergedObject).toEqual({ name: "John", age: 30, country: "USA", occupation: "Engineer" });
  });

  it("should merge three objects correctly", () => {
    const obj1 = { name: "John" };
    const obj2 = { age: 30 };
    const obj3 = { country: "USA", occupation: "Engineer" };

    const mergedObject = merge(obj1, obj2, obj3);

    expect(mergedObject).toEqual({ name: "John", age: 30, country: "USA", occupation: "Engineer" });
  });

  it("should merge objects with nested properties correctly", () => {
    const obj1 = { person: { name: "John", age: 30 } };
    const obj2 = { person: { country: "USA", occupation: "Engineer" } };

    const mergedObject = merge(obj1, obj2);

    expect(mergedObject).toEqual({ person: { name: "John", age: 30, country: "USA", occupation: "Engineer" } });
  });

  it("should handle empty objects", () => {
    const emptyObject = {};

    const mergedObject = merge(emptyObject);

    expect(mergedObject).toEqual({});
  });

  it("should not modify the original objects", () => {
    const obj1 = { name: "John" };
    const obj2 = { age: 30 };

    merge(obj1, obj2);

    expect(obj1).toEqual({ name: "John" });
    expect(obj2).toEqual({ age: 30 });
  });
});
