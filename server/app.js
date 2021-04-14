const express = require('express')
const app = express()
const cors = require('cors')
const { errorhandler } = require('./middlewares')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(errorhandler)

module.exports = app