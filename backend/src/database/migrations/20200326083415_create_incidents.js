exports.up = function(knex) {
  return knex.schema.createTable('tb_incidents', function(table) {
    table.increments();

    table.string('title').notNullable();
    table.text('description').notNullable();
    table.decimal('value').notNullable();
    table.string('ong_id');

    table.foreign('ong_id')
         .references('id')
         .inTable('tb_ongs')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tb_incidents');
};
