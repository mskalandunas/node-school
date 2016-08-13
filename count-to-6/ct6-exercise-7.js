'use strict'

let args = process.argv.slice(2)

module.exports = function midpoint(lower = 0, upper = 1) {
  return (lower + upper) / args.length
}
