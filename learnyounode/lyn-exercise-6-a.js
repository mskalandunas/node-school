'use strict'

let _listFilter = require('./lyn-exercise-6-b')
let dir = process.argv[2]
let ext = process.argv[3]

_listFilter(dir, ext, (err, list) => {
  if (err) return err

  for (var i = 0; i < list.length; i++) {
    console.log(list[i])
  }
})
