const knex = require('knex');
const config = require('./knexfile');

// Initialize the database connection
const db = knex(config.development);
const Quotes = () => db('quotes');


module.exports = {
    Quotes,

};