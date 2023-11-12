/**
 * Sum of two numbers
 *
 * @param {number} m first number
 * @param {number} n second number
 * @returns {number}
 */
const sum = (...args) => {
  for (let num of args) {
    if (!Number(num)) {
      throw Error('INVALID_ARGUMENT_TYPE')
    }
  }
  const initialValue = 0;
  return args.reduce((acc, cur) => acc + cur, initialValue);
};
