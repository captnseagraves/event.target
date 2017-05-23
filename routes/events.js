var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  getEvents()
    .then(events => {
      res.json(events)
    })
});

router.get('/:id', function(req, res, next) {
  getEvents(req.params.id)
    .then(event => {
      if (event) {
        res.json(event)
      } else {
        res.sendStatus(404)
      }
    })
});

const getEvents = (id) => id ? knex('events').where('id', id).first() : knex('events')

module.exports = router;
