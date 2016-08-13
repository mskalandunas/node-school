'use strict'

const fs = require('fs')
const path = require('path')

let _list = fs.readdir(process.argv[2], (err, files) => {
  let ext = process.argv[3]

  for (let i in files) {
    if (path.extname(files[i]) == '.' + ext) {
      console.log(files[i])
    }
  }
})
