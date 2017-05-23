exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([{
          name: 'Matthew Albrecht',
          user_id: '123456780123',
          email: 'matthew@admin.com'
        },
        {
          name: 'Joshua Lerner',
          user_id: '123567890123',
          email: 'joshua@admin.com'
        },
        {
          name: 'Kevin Seagraves',
          user_id: '123456789123',
          email: 'kevin@admin.com'
        },
        {
          name: 'Nico Roldos',
          user_id: '123456789013',
          email: 'nico@admin.com'
        },
        {
          name: 'Jesus Christ',
          user_id: '123456789012',
          email: 'jesus@admin.com'
        },
        {
          name: 'Oprah Winfrey',
          user_id: '234567890123',
          email: 'oprah@admin.com'
        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
};
