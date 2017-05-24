exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function() {
      return Promise.all([
        knex('categories').insert([
          { name: 'FOOD_TASTING' },
          { name: 'THEATER_EVENT' },
          { name: 'HEALTH_WELLNESS' },
          { name: 'ART_EVENT' },
          { name: 'PARTIES_NIGHTLIFE' },
          { name: 'SHOPPING' },
          { name: 'COMEDY' },
          { name: 'THEATER_DANCE' },
          { name: 'MUSIC' },
          { name: 'FESTIVAL_EVENT' },
          { name: 'COMMUNITY' },
          { name: 'FOOD_DRINK' },
          { name: 'RELIGION' },
          { name: 'WORKSHOP' },
          { name: 'CLASS_EVENT' },
          { name: 'ART_FILM' },
          { name: 'GAMES' },
          { name: 'SPORTS_RECREATION' },
          { name: 'FAMILY_EVENT' },
          { name: 'NETWORKING' },
          { name: 'CAUSES' },
          { name: 'NEIGHBORHOOD' },
          { name: 'MUSIC_EVENT' },
          { name: 'OTHER' },
          { name: 'BOOKS_LITERATURE' },
          { name: 'FITNESS' },
          { name: 'MEETUP' }
])

      ])
    }).then(() => {
      return knex.raw("SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))")
    })
};
