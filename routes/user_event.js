var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

// {
//   id: 2,
//   user_id: 3,
//   event_id: 3
//
// }

router.post('/', function(req, res, next) {
  console.log(req.body, 'THIS IS THE BODY');
  insertSubscription(req.body)
    .then(subscription => {
      res.json(subscription)
    })
});

router.get('/', function(req, res, next) {
  getSubscriptions()
    .then(subscriptions => {
      res.json(subscriptions)
    })
});

router.get('/:id', function(req, res, next) {
  getSubscriptions(req.params.id)
    .then(subscription => {
      if (subscription) {
        res.json(subscription)
      } else {
        res.sendStatus(404)
      }
    })

});
const getSubscriptions = (id) => id ? knex('user_subscription').where('id', id).first() : knex('user_subscription')

const insertSubscription = (body) => knex('user_subscription').returning('*').insert(body)

module.exports = router;
