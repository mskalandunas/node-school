'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, (err, data) => {
    if (err) throw err

    for (let i in data) {
      if (path.extname(data[i]) == '.' + ext) {
        console.log(data[i])
      }
    }
  })
}
