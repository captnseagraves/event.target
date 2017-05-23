exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('venues').insert([{
          fb_id: '12297447052',
          name: "The Fox Theatre",
          cover_picture: "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/15826055_10154914906922053_5551818651179269965_n.jpg?oh=32f18c8d8692f9fa3d6b4b81e1db81ab&oe=59AFB3E0",
          city: "Boulder",
          latitude: '40.008017440908',
          longitude: '-105.27655101188',
          state: "CO",
          street: "1135 13th St",
          zip: 80302
        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('venues_id_seq', (SELECT MAX(id) FROM venues))")
    })
};
