import { knex } from 'knex';
import config from './knexfile';

// Initialize the database connection
const db = knex(config.development);
const Quotes = () => db('quotes');
const QuoteOfTheDay = () => db('quoteOfTheDay')

export { Quotes, QuoteOfTheDay };