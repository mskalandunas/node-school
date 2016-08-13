const http = require('http')
const bl = require('bl')
let url = process.argv[2]

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
