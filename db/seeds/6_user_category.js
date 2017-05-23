exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_category').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('user_category').insert([{
          id: 1,
          user_id: 1,
          category_id: 5,
        }, {
          id: 2,
          user_id: 1,
          category_id: 3,
        }, {
          id: 3,
          user_id: 1,
          category_id: 5,
        }, {
          id: 4,
          user_id: 1,
          category_id: 5,
        }, {
          id: 5,
          user_id: 1,
          category_id: 1,
        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('user_category_id_seq', (SELECT MAX(id) FROM user_category))")
    })
};
