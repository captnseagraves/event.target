var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  getEvents()
    .then(events => {
      console.log(events);
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

const getEvents = (id) => id ? knex('events').where('id', id).first() : knex('events').join('venues', 'events.venue_fb_id', 'venues.fb_id').select(knex.raw('events.id as event_id, events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude'))

// .select(knex.raw('events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude, venues.cover_picure as venue_cover_picture')

module.exports = router;
