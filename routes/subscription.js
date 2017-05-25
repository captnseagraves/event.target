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
  let userId = req.cookies.userId
  getSubscriptions(userId)
    .then(subscriptions => {
      console.log(subscriptions);
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
const getSubscriptions = (userId) => {
  return knex('user_subscription')
    .where('user_id', userId)
    .join('venues', 'venues.id', 'user_subscription.venue_id')
    .join('events', 'events.venue_fb_id', 'venues.fb_id')
    .select(knex.raw('events.id as event_id, events.name as title, events.category, events.description, events.start_time as start, events.end_time as end, events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude'))
}

const insertSubscription = (body) => knex('user_subscription').returning('*').insert(body)

module.exports = router;
