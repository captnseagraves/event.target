var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
var EventSearch = require("facebook-events-by-location-core");

/* GET users listing. */
router.get('/:id', (req, res, next) => {
  knex('users').where('id', req.params.id).then((user) => {
    res.json(user[0])
  })
})

router.get('/', (req, res, next) => {

  var es = new EventSearch({
    "lat": 40.0150000,
    "lng": -105.2705000,
    "accessToken": "EAABbEQehLZBoBAAFrBmuUaiY2ipfCF5SzepY7WsVAB8ejBjz3KXgVJG4xK3NWqHr8mZBjxh3wd4ck6VfeyZAfRGFfygppG9dclekt0umVCXyzplZAhsUZCBXcDctZB9HuNGThYpsdJk67Oa7vgxWHpyDV4FoZBrc4NmQhmR75ZCXKWyEKo29hwTW",
    "distance":2500
  });

  es.search().then((events) => {
    let venueArr = []

    for (let i = 0; i < events.events.length; i++) {
      let event = events.events[i]
      let venue = event.venue

      let venueObj = {
        name: venue.name,
        city: venue.location.city,
        state: venue.location.state,
        street: venue.location.street,
        zip: venue.location.zip,
        longitude: venue.location.longitude,
        latitude: venue.location.latitude,
        fb_id: venue.id,
        cover_picture: venue.coverPicture
      }

      let eventObj = {
        name: event.name,
        category: event.category,
        description: event.description,
        start_time: event.startTime,
        end_time: event.endTime,
        cover_picture: event.coverPicture,
        fb_id: event.id,
        venue_fb_id: venue.id
      }

          if(venueArr.includes(venue.id) === false){
            venueArr.push(venue.id)
            // console.log('DATA DOESNT EXIST YET');

            postVenue(venueObj)
              .then(venue => {
                return venue[0].fb_id
              })


            } else {

            }
          }
          // ------------------------------------------------------------------
          // ------------------------------------------------------------------
          // ------------------------------EVENTS------------------------------
          // ------------------------------------------------------------------
          // ------------------------------------------------------------------
          for (let i = 0; i < events.events.length; i++) {
            let event = events.events[i]
            let venue = event.venue

            let venueObj = {
              name: venue.name,
              city: venue.location.city,
              state: venue.location.state,
              street: venue.location.street,
              zip: venue.location.zip,
              longitude: venue.location.longitude,
              latitude: venue.location.latitude,
              fb_id: venue.id,
              cover_picture: venue.coverPicture
            }

            let eventObj = {
              name: event.name,
              category: event.category,
              description: event.description,
              start_time: event.startTime,
              end_time: event.endTime,
              cover_picture: event.coverPicture,
              fb_id: event.id,
              venue_fb_id: venue.id
            }

            postEvent(eventObj)
              .then(event => {
              })
          }

  }).catch(function(error) {
    console.error(JSON.stringify(error));
  });

});

router.post('/', checkUser, function(req, res, next) {
    postUser(req.body)
        .then(insertedUser => {
          // res.cookie(insertedUser.id, { httpOnly: false })

            insertedUser[0].firstTime = true
            console.log(insertedUser[0]);
            res.json(insertedUser[0])
        })
});

function checkUser(req, res, next) {
  console.log(req.body);
    getUser(req.body.user_id)
        .then(user => {
            if (user) {
              // res.cookie(user.id, { httpOnly: false })
                user.firstTime = false
                res.json(user)
            } else {
                next()
            }
        })
}

const postVenue = (venueObj) => {
return knex('venues').returning('*').insert(venueObj);
}


const postEvent = (eventObj) =>
{
  console.log('INSIDE POST EVENTEVENTEVENT');
  return knex('events').returning('*').insert(eventObj)
}

const postUser = (data) => knex('users').returning('*').insert(data)
const getUser = (user_id) => knex('users').where('user_id', user_id).first()

module.exports = router;
