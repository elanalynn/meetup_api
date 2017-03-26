const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/', function(req, res, next) {
  knex('speakers').then(speakers => res.send(speakers))
})

router.post('/', function(req, res, next) {
  knex('speakers').insert(req.body).then(() => res.redirect('/speakers'))
})

module.exports = router
