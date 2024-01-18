/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = async function(knex) {
    return knex.schema
        .withSchema('todont')
        .createTable('todo', (table) => {
            table.increments('id', { primaryKey: true });
            table.string('description', 128);
            table.boolean('done');
        });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
const down = async function(knex) {
    return knex.schema
        .withSchema('todont')
        .dropTable('todo');
};

export { up, down };
