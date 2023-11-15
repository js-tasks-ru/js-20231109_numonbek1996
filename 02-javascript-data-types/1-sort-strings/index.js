/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortBy = {
      asc: -1,
      desc: 1
    },
    locale = ['ru', 'en'],
    options = {caseFirst: 'upper'}

  return arr.sort((a, b) =>
    (sortBy[param] || 1) * a.localeCompare(b, locale, options)
  )
}
