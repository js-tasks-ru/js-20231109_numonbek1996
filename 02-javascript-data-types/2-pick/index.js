/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
const pick = (obj, ...fields) => {
  if (typeof obj !== 'object' || Object.keys(obj).length < 1) {
    throw new Error('INVALID_OBJECT')
  }

  const basket = {}
  // for of faster than other Array methods
  for (let filed of fields) {
    if (!obj.hasOwnProperty(filed)) continue

    Object.assign(basket, {[filed]: obj[filed]})
  }
  return basket
};
