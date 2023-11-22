/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(str, n) {
  if (isNaN(n)) return str;
  if (n <= 0) return ''
  const op = {
    txt: "",
    current: str[0],
    count: 0,
    reset: function (str) {
      this.current = str
      this.txt += str
      this.count = 1
    },
    add: function (str) {
      this.txt += str
      this.count += 1
    }
  }

  for (let w of str) {
    if (op.current === w && op.count < n) {
      op.add(w)
    }
    if (op.current !== w) {
      op.reset(w)
    }
  }

  return op.txt
}
