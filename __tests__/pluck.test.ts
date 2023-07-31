import pluck from "../src/pluck";

interface Person {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

const people: Person[] = [
  { name: "Alice", age: 30, address: { city: "New York", country: "USA" } },
  { name: "Bob", age: 25, address: { city: "London", country: "UK" } },
  { name: "Charlie", age: 40, address: { city: "Sydney", country: "Australia" } },
];

describe("pluck", () => {
  it("should extract a specific attribute from objects in the array", () => {
    const names: string[] = pluck(people, "name");
    expect(names).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("should extract nested attribute from objects in the array", () => {
    const cities: string[] = pluck(people, "address.city");
    expect(cities).toEqual(["New York", "London", "Sydney"]);
  });

  it("should throw an error if an invalid key is provided", () => {
    try {
      pluck(people, "invalidKey");
    } catch (error: any) {
      expect(error.message).toBe('Invalid attribute key or path: "invalidKey"');
    }
  });

  it("should throw an error if an invalid nested key is provided", () => {
    try {
      pluck(people, "address.invalidKey");
    } catch (error: any) {
      expect(error.message).toBe('Invalid attribute key or path: "address.invalidKey"');
    }
  });
});
