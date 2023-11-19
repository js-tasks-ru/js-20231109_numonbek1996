/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let props = path.split('.')

  return (obj) => {
    for (let prop of props) {
      if (!obj || !obj.hasOwnProperty(prop)) return undefined

      obj = obj[prop]
    }
    // clean memory
    props = null
    return obj
  }
}
