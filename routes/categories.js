var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */


router.get('/', function(req, res, next) {
  getCategories()
    .then(categories => {
      res.json(categories)
    })
});

router.get('/:id', function(req, res, next) {
  getCategories(req.params.id)
    .then(category => {
      if (category) {
        res.json(category)
      } else {
        res.sendStatus(404)
      }
    })
});

const getCategories = (id) => id ? knex('categories').where('id', id).first() : knex('categories')

module.exports = router;
