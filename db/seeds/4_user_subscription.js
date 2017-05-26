exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_subscription').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('user_subscription').insert([{
          id: 1,
          user_id: 3,
          venue_id: 1

        }, {
          id: 2,
          user_id: 3,
          venue_id: 2

        }, {
          id: 3,
          user_id: 2,
          venue_id: 2

        }, {
          id: 4,
          user_id: 1,
          venue_id: 1

        }, {
          id: 5,
          user_id: 3,
          venue_id: 2

        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('user_subscription_id_seq', (SELECT MAX(id) FROM user_subscription))")
    })
};
