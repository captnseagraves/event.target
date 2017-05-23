exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_event').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('user_event').insert([{
          id: 1,
          user_id: 5,
          event_id: 1

        }, {
          id: 2,
          user_id: 3,
          event_id: 1

        }, {
          id: 3,
          user_id: 4,
          event_id: 1

        }, {
          id: 4,
          user_id: 2,
          event_id: 1

        }, {
          id: 5,
          user_id: 1,
          event_id: 1

        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('user_event_id_seq', (SELECT MAX(id) FROM user_event))")
    })
};
