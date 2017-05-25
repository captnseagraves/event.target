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
  console.log('in user_event', req.body);
  console.log(req.cookies.userId);
  let body = {
    user_id: req.cookies.userId,
      event_id: req.body.event_id
  }
  insertEvent(body)
    .then(user_event => {
    console.log('success');
    res.end()
    })
});

router.get('/', function(req, res, next) {
  getEvents(req.cookies.userId)
    .then(events => {
      console.log(events);
      res.json(events)
    })
});

router.get('/:id', function(req, res, next) {
  getEvents(req.params.id)
    .then(events => {
      if (events) {
        res.json(events)
      } else {
        res.sendStatus(404)
      }
    })

});

const getEvents = (userId) => {
return knex('user_event')
  .where('user_id', userId)
  .join('events', 'events.id', 'user_event.event_id')
  .join('venues', 'venues.fb_id', 'events.venue_fb_id')
  .select(knex.raw('user_event.event_id as user_event_id, events.id as event_id, events.name as title, events.category, events.description, events.start_time as start, events.end_time as end, events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude'))
}

// .select(knex.raw('user_event.event_id as user_event_id, events.id as event_id, events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude'))

const insertEvent = (body) => knex('user_event').returning('*').insert(body)

module.exports = router;
