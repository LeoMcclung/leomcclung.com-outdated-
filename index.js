const express = require('express')
const app = express()
const query = require('./db/queries')
const bodyParser = require('body-parser')
const port = process.env.PORT || 9000
const homeRoutes = require('./routes/home')
const gameRoutes = require('./routes/games')
const gamerRoutes = require('./routes/gamers')
const methodOverride = require('method-override')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.listen(process.env.PORT || 9000, () => {
  console.log(`ITS OVER ${port}`)
})

// ${port}