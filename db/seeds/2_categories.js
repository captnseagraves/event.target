exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function() {
      return Promise.all([
        knex('categories').insert([{
          name: 'art/film'
        }, {
          name: 'books/literature'
        }, {
          name: 'causes'
        }, {
          name: 'community'
        }, {
          name: 'food/drink'
        },   {
          name: 'games'
        }, {
          name: 'religion/spirituality'
        }, {
          name: 'shopping'
        }, {
          name: 'health/wellnes'
        }, {
          name: 'home/garden'
        }, {
          name: 'music'
        }, {
          name: 'network'
        }, {
          name: 'parties/nightlife'
        }, {
          name: 'sports'
        }, {
          name: 'theatre/dance'
        }])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))")
    })
};
