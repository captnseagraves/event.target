var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

// {
//   id: 2,
//   subscriber_id: 3,
//   subbed_id: 2
//
// }

router.post('/', function(req, res, next) {
  console.log(req.body, 'THIS IS THE BODY');
  console.log(req.cookies.userId);
  let body = {
    user_id: req.cookies.userId,
      venue_id: req.body.venue_id
  }
  insertSubscription(body)
    .then(subscription => {
  console.log('success');
  res.end()
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
