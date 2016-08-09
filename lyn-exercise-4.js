'use strict'

const fs = require('fs')

function callback(err, data) {
  if (err) throw err

  console.log(data.split('\n').length - 1)
}

fs.readFile(process.argv[2], 'utf8', callback)
