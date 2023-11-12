/**
 * Generates an empty array of a specified length.
 *
 * @param {number} items The number of items to include in the array.
 * @returns {Array<number>} The generated empty numbers array.
 */
const generateEmptyArray = (items = 1) => {
  const itemsArr = [];
  for (let i = 1; i <= items; i++) {
    itemsArr.push(i);
  }
  return itemsArr;
};
export default generateEmptyArray;
