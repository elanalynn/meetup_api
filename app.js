const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/index')
const speakers = require('./routes/speakers')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/speakers', speakers)

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404;
  next(err);
})

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.send('error')
  })
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
