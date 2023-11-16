/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  if (typeof obj !== 'object' || Object.keys(obj).length < 1) {
    throw new Error('INVALID_OBJECT')
  }

  const not_listed = {}

  for (const [key, value] of Object.entries(obj)) {
    if (fields.includes(key)) continue

    not_listed[key] = obj[key]
  }

  return not_listed
};

