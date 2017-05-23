exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_subscription').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('user_subscription').insert([{
          id: 1,
          subscriber_id: 3,
          subbed_id: 1

        }, {
          id: 2,
          subscriber_id: 3,
          subbed_id: 2

        }, {
          id: 3,
          subscriber_id: 2,
          subbed_id: 2

        }, {
          id: 4,
          subscriber_id: 1,
          subbed_id: 1

        }, {
          id: 5,
          subscriber_id: 3,
          subbed_id: 2

        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('user_subscription_id_seq', (SELECT MAX(id) FROM user_subscription))")
    })
};
