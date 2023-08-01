# Supasut

> A utility library made with Love.

[![npm version](https://badge.fury.io/js/supasut.svg)](https://badge.fury.io/js/supasut) [![license](https://img.shields.io/npm/l/supasut.svg)](https://github.com/enbermudas/supasut/blob/main/LICENSE)

Supasut is a lightweight utility library for JavaScript/TypeScript, designed to provide useful functions for common tasks. It aims to simplify your code and improve your development productivity.

## Installation

```bash
npm install supasut # yarn add supasut
```

## Functions

### Arrays

#### `average`

Calculates the average value of a provided array with objects based on a specified key.

```js
const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const avgAge = supasut.average(data, "age");

console.log(avgAge); // 32.5
```

#### `difference`

Retrieves elements that are present in one array but not in another.

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const diff = supasut.difference(arr1, arr2);

console.log(diff); // [1, 2, 6, 7]
```

#### `groupBy`

Groups an array of objects based on a specific key or property.

```js
const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "A", value: 15 },
  { category: "C", value: 5 },
];

const grouped = supasut.groupBy(data, "category");

console.log(grouped);
// {
//   'A': [{ category: 'A', value: 10 }, { category: 'A', value: 15 }],
//   'B': [{ category: 'B', value: 20 }],
//   'C': [{ category: 'C', value: 5 }],
// }
```

#### `intersection`

Finds the common elements between two arrays.

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersection = supasut.intersection(arr1, arr2);

console.log(intersection); // [3, 4, 5]
```

#### `isEmpty`

Checks if an array is empty.

```js
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(supasut.isEmpty(emptyArray)); // true
console.log(supasut.isEmpty(nonEmptyArray)); // false
```

#### `omit`

Creates a new array by omitting specified values from the original array.

```js
const originalArray = [1, 2, 3, 4, 5];
const valuesToOmit = [2, 4];

const omitted = supasut.omit(originalArray, ...valuesToOmit);

console.log(omitted); // [1, 3, 5]
```

#### `paginate`

Splits an array into smaller arrays to implement pagination in a UI.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paginated = supasut.paginate(array, 3);

console.log(paginated); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

#### `pluck`

Extracts a specific attribute or nested attribute from each object in an array.

```js
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const names = supasut.pluck(users, "name");

console.log(names); // ['Alice', 'Bob', 'Charlie']
```

#### `sample`

Gets a random sample of elements from an array.

```js
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sample = supasut.sample(data, 3);

console.log(sample); // e.g., [2, 7, 4]
```

#### `shuffle`

Shuffles the elements of an array randomly.

```js
const arr = [1, 2, 3, 4, 5];

const shuffled = supasut.shuffle(arr);

console.log(shuffled); // e.g., [3, 2, 5, 1, 4]
```

#### `sortBy`

Creates a new array with the objects sorted based on a specific property.

```js
const data = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 35 },
];

const sortedByAge = supasut.sortBy(data, "age");

console.log(sortedByAge);
// [
//   { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'David', age: 35 },
//   { name: 'Charlie', age: 40 },
// ]
```

#### `union`

Creates a new array with unique elements from two or more arrays.

```js
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const union = supasut.union(arr1, arr2);
console.log(union); // [1, 2, 3, 4, 5]
```

#### `unique`

Retrieves unique elements from an array by eliminating duplicates.

```js
const arr = [1, 2, 2, 3, 3, 4, 5, 5];

const unique = supasut.unique(arr);

console.log(unique); // [1, 2, 3, 4, 5]
```

#### Strings

#### `occurrences`

Counts the number of occurrences of a substring in the string.

```js
const str = "Lorem ipsum dolor sit amet.";
const substring = "lorem";

const occurrences = supasut.occurrences(str, substring);

console.log(occurrences); // 1
```

## Contribution

Contributions are welcome! If you have any suggestions, bug fixes, or additional features to add, feel free to submit a pull request or create an issue.

## License

This project is licensed under the [MIT License](https://github.com/enbermudas/supasut/blob/main/LICENSE).
