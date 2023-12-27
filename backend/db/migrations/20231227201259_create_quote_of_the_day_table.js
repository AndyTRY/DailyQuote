exports.up = function (knex) {
    return knex.schema.createTable('quoteOfTheDay', (table) => {
        // Primary key as date without hours and seconds
        table.date('date').primary();

        // Foreign key reference to the id column in the Quotes table
        table.integer('quoteId').unsigned().notNullable();
        table.foreign('quoteId').references('id').inTable('quotes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('quoteOfTheDay');
};