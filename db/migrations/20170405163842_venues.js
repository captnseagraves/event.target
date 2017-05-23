exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('venues', table => {
      table.increments('id')
      table.string('name')
        .notNullable()
      table.string('city')
      table.string('state')
      table.string('street')
      table.string('zip')
      table.string('longitude')
        .notNullable();
      table.string('latitude')
        .notNullable();
      table.string('fb_id')
        .notNullable()
        .unique()
      table.text('cover_picture')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('venues')
  ])
};
