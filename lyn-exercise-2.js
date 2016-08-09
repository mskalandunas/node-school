'use strict'

let len = process.argv.length
let sum = 0

for (let i = 2; i < len; i++) {
  let sum = sum + +process.argv[i]
}

console.log(sum)
