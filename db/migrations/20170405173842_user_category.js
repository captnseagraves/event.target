exports.up = function(knex, Promise) {
  let d = new Date()
  return Promise.all([
    knex.schema.createTable('user_category', table => {
      table.increments();
      table.integer('user_id')
        .references('users.id')
        .notNullable();
      table.integer('category_id')
        .references('categories.id')
        .notNullable();
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_category')
  ])
};
