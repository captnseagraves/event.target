exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('events', table => {
      table.increments();
      table.string('name')
        .notNullable()
      table.string('category')
        .defaultTo('OTHER')
      table.text('description')
      table.date('start_time')
      table.date('end_time')
      table.text('cover_picture')
      table.string('fb_id')
        .notNullable();
      table.string('venue_fb_id')
        .references('venues.fb_id')
        .notNullable();
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('events')
  ])
};
