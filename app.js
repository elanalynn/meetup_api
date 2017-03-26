var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var routes = require('./routes/index')
var speakers = require('./routes/speakers')

var app = express()

app.use(logger('dev'))
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
