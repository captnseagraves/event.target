var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
var EventSearch = require("facebook-events-by-location-core");

/* GET users listing. */

router.post('/', checkUser, function(req, res, next) {
    postUser(req.body)
        .then(insertedUser => {
          res.cookie(insertedUser.id, { httpOnly: false })

            console.log(insertedUser);
            insertedUser.firstTime = true
            res.json(insertedUser)
        })
});

router.get('/', function(req, res, next) {


  var es = new EventSearch({
    "lat": 40.0150000,
    "lng": -105.2705000,
    "accessToken": "EAABbEQehLZBoBAAFrBmuUaiY2ipfCF5SzepY7WsVAB8ejBjz3KXgVJG4xK3NWqHr8mZBjxh3wd4ck6VfeyZAfRGFfygppG9dclekt0umVCXyzplZAhsUZCBXcDctZB9HuNGThYpsdJk67Oa7vgxWHpyDV4FoZBrc4NmQhmR75ZCXKWyEKo29hwTW",
    "distance":2500
  });



  es.search().then(function(events) {
    let venueArr = []

    for (let i = 0; i < events.events.length; i++) {
      let event = events.events[i]
      // console.log('-------------------------------------------------');
      // console.log('THIS IS Ii',i);
      // console.log('event', event);
      let venue = event.venue
      // console.log('venue', venue);

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

      // console.log("Event Venue ID",events.events[i].venue.id);
// console.log('VENUE ARRAY', venueArr);
          if(venueArr.includes(venue.id) === false){
            venueArr.push(venue.id)
            // console.log('DATA DOESNT EXIST YET');

            postVenue(venueObj)
              .then(venue => {

                // console.log('0');
                // console.log('0');
                // console.log('this is the venue',venue);
                // console.log('0');
                // console.log('0');
                return venue[0].fb_id
              })
            //   .then(venue_fb_id => {
            //     console.log('venue fb id ',venue_fb_id);
            //     postEvent(eventObj)
            //       .then(event => {
            //         console.log('NEW VENUE NEW EVENT',event[0]);
            //       })
            //   })


            } else {
              // console.log("DATA EXISTS");
              // postEvent(eventObj)
              //   .then(event => {
              //     console.log('H');
              //     console.log('H');
              //     console.log('VENUE ALREADY EXISTS ADDING EVENT RIGHT AWAY',event[0]);
              //     console.log('H');
              //     console.log('H');
              //   })
            }
            // console.log('-------------------------------------------------');

          }
          // ------------------------------------------------------------------
          // ------------------------------------------------------------------
          // ------------------------------EVENTS------------------------------
          // ------------------------------------------------------------------
          // ------------------------------------------------------------------
          for (let i = 0; i < events.events.length; i++) {
            console.log('INSINED EVENT HANDLER LOOP');
            let event = events.events[i]
            console.log('-------------------------------------------------');
            console.log('THIS IS Ii',i);
            console.log('event', event.name);
            let venue = event.venue
            // console.log('venue', venue);

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

            // console.log("Event Venue ID",events.events[i].venue.id);
            // console.log('VENUE ARRAY', venueArr);

            postEvent(eventObj)
              .then(event => {
                console.log(event);
              })

            console.log('-------------------------------------------------');
          }

  }).catch(function(error) {
    console.error(JSON.stringify(error));
  });

});

function checkUser(req, res, next) {
    getUser(req.body.user_id)
        .then(user => {
            if (user) {
              res.cookie(user.id, { httpOnly: false })
                user.firstTime = false
                res.json(user)
            } else {
                next()
            }
        })
}

const postVenue = (venueObj) => {
  console.log("INSIDE POSTVENUE");
return knex('venues').returning('*').insert(venueObj);
}
// const getVenue = (id) => {
//   console.log("GETVENUE VENUE ID",id);
//   let theVenue = knex('venues').where('fb_id', id).first()
//   console.log('GETVENUE Response', theVenue);
//   return theVenue
// }

const postEvent = (eventObj) =>
{
  console.log('INSIDE POST EVENTEVENTEVENT');
  return knex('events').returning('*').insert(eventObj)
}
// const getEvent = (fb_id) => knex('venues').where('fb_id', fb_id).first()

const postUser = (data) => knex('users').returning('*').insert(data)
const getUser = (user_id) => knex('users').where('user_id', user_id).first()

module.exports = router;
