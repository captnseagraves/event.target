var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  getVenues()
    .then(venues => {
      res.json(venues)
    })
});

router.get('/:id', function(req, res, next) {
  getVenues(req.params.id)
    .then(venue => {
      if (venue) {
        res.json(venue)
      } else {
        res.sendStatus(404)
      }
    })
});

const getVenues = (id) => id ? knex('venues').where('id', id).first() : knex('venues')

module.exports = router;
