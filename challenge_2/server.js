
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('client'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


 app.post('/upload', (req, res) => {

  console.log('request body' + JSON.stringify(req.body))
  res.send()

 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

