var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
    getEvents()
        .then(events => {
            // console.log(events);
            res.json(events)
        })
});

router.get('/binbin', function(req, res, next) {
    let userId = req.cookies.userId
    getEventsBin()
        .then(events => {
            getUserCats(userId)
                .then(data => {
                    let cats = []
                    data.map((el) => {
                        cats.push(el.name);
                    })
                    let filterArr = []
                    for (var i = 0; i < events.length; i++) {
                        let event = events[i]
                        if (cats.includes(event.category)) {
                            filterArr.push(event)
                        }
                    }
                    res.json(filterArr)
                })
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

const getUserCats = (userId) => {
    return knex('user_category')
        .join('categories', 'categories.id', 'user_category.category_id')
        .where('user_category.user_id', userId)
}

const getEventsBin = (id) => id ? knex('events').where('id', id).first() : knex('events').join('venues', 'events.venue_fb_id', 'venues.fb_id').select(knex.raw('events.id as event_id, events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude')).orderBy('events.start_time', 'asc')

const getEvents = (id) => id ? knex('events').where('id', id).first() : knex('events').join('venues', 'events.venue_fb_id', 'venues.fb_id').select(knex.raw('events.id as event_id, events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.id as venue_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude')).orderBy('events.start_time', 'asc')

// .select(knex.raw('events.name as event_name, events.category, events.description, events.start_time, events.end_time,  events.cover_picture as event_cover_picture, events.fb_id, events.venue_fb_id, venues.name as venue_name, venues.city, venues.state, venues.street, venues.zip, venues.longitude, venues.latitude, venues.cover_picure as venue_cover_picture')

module.exports = router;
