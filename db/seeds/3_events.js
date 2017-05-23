exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert([{
          fb_id: '128591301036232',
          name: "Spectacle with kLL sMTH, Nobide at Fox Theatre",
          cover_picture: "https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/18556796_10155345412802053_742137421500356030_o.jpg?oh=dad437b9cd8a7c6ff2b5d878e4619872&oe=59AFC583",
          description: "Euphonic Conceptions Presents\nSpectacle with kLL sMTH, Nobide at Fox Theatre\n\nDoors - 8:30 PM\nShow - 9:00 PM\nAll Ages\nhttp://www.foxtheatre.com/event/1473073-spectacle-boulder/\n\nIn the winter of 2015, a striking new voice formed in the heart of Denver’s electronic music scene. Spectacle’s orchestral instrumentation (violin, percussion, guitar) quickly made the outfit stand out amongst the crowd; each show being an experience, that is refreshingly original. Hard hitting drops, alongside afro-cuban percussion make for an irresistible groove and a heady tropical soundscape. Beautiful soaring violin melodies, and deep rhythmic bass synth lines drive each musical passage through every member of the audience. Band members Michael Mahan, Jessica Borth, and Rob Brandon work in unity gripping the crowd for a show that is both mesmerizing and captivating from start to finish. Spectacle brings their audience through an innovative and dynamic journey show after show after show...\n\nhttp://www.spectaclemusicusa.com/",
          start_time: "2017-07-29T21:00:00-0600",
          end_time: "2017-07-30T00:00:00-0600",
          category: "MUSIC_EVENT",
          venue_fb_id: '12297447052'
        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))")
    })
};
