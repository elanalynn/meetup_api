exports.up = function(knex) {
  return knex.schema.createTable('speakers', table => {
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('speakers')
}
