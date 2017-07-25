const express = require("express")
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.static('public'))

app.engine("mustache", mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/hello/:name', (req, resp) => {
  resp.render('hello', { name: req.params.name })
})

app.get('/goodbye/:name', (req, resp) => {
    resp.render('goodbye', { name: req.params.name })
})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})
