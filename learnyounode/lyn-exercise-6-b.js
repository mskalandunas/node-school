'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, cb) {
  const filtered = []

  fs.readdir(dir, (err, files) => {
    if (err) return cb(err)

    for (let i in files) {
      if (path.extname(files[i]) == '.' + ext) {
        filtered.push(files[i])
      }
    }

    cb(err, filtered)
  })
}
