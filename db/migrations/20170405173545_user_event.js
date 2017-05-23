exports.up = function(knex, Promise) {
  let d = new Date()
  return Promise.all([
    knex.schema.createTable('user_event', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('event_id')
        .references('events.id')
        .notNullable()
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_event')
  ])
};
