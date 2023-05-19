/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// criação da tabela no banco de dados -> tabela de usuários -> exportados a partir do comando up
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.string('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// drop da tabela -> exportado a partir do comando down
exports.down = function(knex) {
    return knex.schema
    .dropTable("users");
};
