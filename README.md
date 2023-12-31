# Supasut

> A utility library made with love.

[![npm version](https://badge.fury.io/js/supasut.svg)](https://badge.fury.io/js/supasut) [![enbermudas](https://circleci.com/gh/enbermudas/supasut.svg?style=shield)](https://app.circleci.com/pipelines/github/enbermudas/supasut) ![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label) [![license](https://img.shields.io/npm/l/supasut.svg)](https://github.com/enbermudas/supasut/blob/main/LICENSE)

Supasut is a lightweight utility library designed to streamline your code and make it more elegant. It provides a collection of carefully crafted utility functions to handle common tasks efficiently, reducing boilerplate code and making your codebase more readable.

It fully embraces TypeScript, offering comprehensive type definitions for seamless integration with TypeScript projects.

## Table of Contents

- [Installation](#installation)
- [Functions](#functions)
  - [Arrays](#arrays)
    - [`average`](#average)
    - [`difference`](#difference)
    - [`groupBy`](#groupby)
    - [`intersection`](#intersection)
    - [`isEmpty`](#isempty)
    - [`omit`](#omit)
    - [`paginate`](#paginate)
    - [`pluck`](#pluck)
    - [`sample`](#sample)
    - [`shuffle`](#shuffle)
    - [`sortBy`](#sortby)
    - [`union`](#union)
    - [`unique`](#unique)
    - [`zip`](#zip)
  - [Numbers](#numbers)
    - [`clamp`](#clamp)
    - [`currency`](#currency)
    - [`int`](#int)
  - [Objects](#objects)
    - [`merge`](#merge)
  - [Strings](#strings)
    - [`color`](#color)
    - [`occurrences`](#occurrences)
    - [`uuid`](#uuid)
- [Contribution](#contribution)
- [License](#license)

## Installation

```bash
npm install supasut
# yarn add supasut
# pnpm add supasut
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

#### `zip`

Combines multiple arrays element-wise into an array of tuples.

```js
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

const result = supasut.zip(array1, array2, array3);

console.log(result);
// [[1, "a", true], [2, "b", false], [3, "c", true]]
```

### Number

#### `clamp`

Clamps a number within a specified range.

```js
const min = 1;
const max = 100;

const randomNumber = supasut.clamp(50, min, max);

console.log(randomNumber); // 50 (as 50 is within the range 1 to 100)
```

#### `currency`

Formats a number as a currency string.

```js
const price = 1234567.89;

const formattedPrice = supasut.currency(price, ".", ",");

console.log(formattedPrice); // "1.234.567,89"
```

#### `int`

Generates a random integer within a specified range.

```js
const min = 1;
const max = 100;

const randomNumber = supasut.int(min, max);

console.log(randomNumber); // A random integer between 1 and 100 (inclusive)
```

### Objects

#### `merge`

Merges two or more objects into a new object.

```js
const obj1 = { name: "John", age: 30 };
const obj2 = { country: "USA", occupation: "Engineer" };

const mergedObject = supasut.merge(obj1, obj2);

console.log(mergedObject);
// { name: "John", age: 30, country: "USA", occupation: "Engineer" }
```

### Strings

#### `color`

Generates a random color in the specified format.

```js
const hslColor = supasut.color("hsl");

console.log(hslColor); // e.g., "hsl(123.45, 67%, 89%)" (random color in HSL format)
```

#### `occurrences`

Counts the number of occurrences of a substring in the string.

```js
const str = "Lorem ipsum dolor sit amet.";
const substring = "lorem";

const occurrences = supasut.occurrences(str, substring);

console.log(occurrences); // 1
```

#### `uuid`

Generates a universally unique identifier (UUID) that complies with RFC 4122.

```js
const uuid = supasut.uuid();

console.log(uuid); // e.g., "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```

## Contribution

Contributions are welcome! If you have any suggestions, bug fixes, or additional features to add, feel free to submit a pull request or create an issue.

## License

This project is licensed under the [MIT License](https://github.com/enbermudas/supasut/blob/main/LICENSE).
