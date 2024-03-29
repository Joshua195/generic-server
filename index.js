require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./config/database')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(cookieParser())
app.set('port', (process.env.PORT || 5000))
app.use(cors())

const routes = require('./routes/index')
routes(app)

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
