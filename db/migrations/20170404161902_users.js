exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments();
      table.string('name')
        .notNullable()
      table.string('email')
      table.string('user_id')
        .notNullable()
        .unique();
      })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
