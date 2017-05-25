exports.up = function(knex, Promise) {
  let d = new Date()
  return Promise.all([
    knex.schema.createTable('user_subscription', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('venue_id')
        .references('venues.id')
        .notNullable()
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_subscription')
  ])
};
