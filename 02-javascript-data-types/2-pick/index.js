/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  if (typeof obj !== 'object' || Object.keys(obj).length < 1) {
    throw new Error('INVALID_OBJECT')
  }

  const basket = {}

  for (const [key, value] of Object.entries(obj)) {
    if (!fields.includes(key)) continue

    basket[key] = value
  }

  return basket
};
