
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('client'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


 app.post('/upload', (req, res) => {
  output = []
  for(var key in req.body.name) {
    output.push(key)
  }
  console.log(JSON.parse(req.body.name))
  res.send(Object.keys(req.body.name))

 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
