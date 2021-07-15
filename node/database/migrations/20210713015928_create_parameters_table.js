exports.up = function (knex, Promise) {
    return knex.schema.createTable('parameters', (table) => {
      table.increments('id').primary();
      table.string('hardware', 100)
        .notNullable()
        .comment('Name do Hardware');
      table.integer('limitMin', 5)
        .notNullable()
        .comment('Limite Porcetagem Minima');
      table.integer('limitMax', 5)
        .notNullable()
        .comment('Limite Porcetagem Maxima');
      table.string('firstAction', 100)
        .notNullable()
        .comment('Primeira Ação');
      table.string('secondAction', 100)
        .notNullable()
        .comment('Segunda Ação');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      // table.timestamp('updated_at').defaultTo(knex.raw('ON UPDATE CURRENT_TIMESTAMP'));
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('parameters');
};
