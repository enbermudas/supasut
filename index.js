'use strict';

/**
 * Creates a new array by omitting specified values from the original array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The original array.
 * @param {...T[]} valuesToOmit - The values to omit from the original array.
 * @returns {T[]} - A new array with elements from the original array, excluding the specified values.
 */
function omit(array, ...valuesToOmit) {
    return array.filter((item) => !valuesToOmit.includes(item));
}

/**
 * Extracts a specific attribute or nested attribute from each object in an array.
 *
 * @template T - The type of objects in the array, which extends object.
 * @param {T[]} array - The array of objects.
 * @param {string} key - The attribute key or nested attribute path to extract from each object.
 * @returns {Array<any>} - An array containing the extracted attribute or nested attribute values.
 * @throws {Error} - If the attribute key or nested attribute path is not valid for any object in the array.
 */
function pluck(array, key) {
    const keys = key.split(".");
    return array.map((item) => {
        let value = item;
        for (const k of keys) {
            if (!(k in value)) {
                throw new Error(`Invalid attribute key or path: "${key}"`);
            }
            value = value[k];
        }
        return value;
    });
}

var index = {
    omit,
    pluck,
};

module.exports = index;
