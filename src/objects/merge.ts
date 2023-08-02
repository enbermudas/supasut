/**
 * Merges two or more objects into a new object.
 *
 * @param {...Object} objects - Two or more objects to merge.
 * @returns {Object} - A new object containing properties from all input objects.
 */
function merge<T extends object>(...objects: any[]): T {
  const isObject = (obj: any) => obj !== null && typeof obj === "object";

  const mergeObjects = (target: any, source: any) => {
    for (const key in source) {
      if (isObject(target[key]) && isObject(source[key])) {
        target[key] = mergeObjects(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  };

  return objects.reduce((mergedObj, obj) => mergeObjects(mergedObj, obj), {});
}

export default merge;
