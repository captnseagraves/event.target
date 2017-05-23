exports.up = function(knex, Promise) {
  let d = new Date()
  return Promise.all([
    knex.schema.createTable('user_subscription', table => {
      table.increments();
      table.integer('subscriber_id')
        .references('users.id')
        .notNullable();
      table.integer('subbed_id')
        .references('users.id')
        .notNullable()
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_subscription')
  ])
};
