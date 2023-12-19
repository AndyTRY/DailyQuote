const {Quotes} = require('./db');

async function add(quote, author) {
    const [quoteId] = await Quotes().insert({ quote, author });
    return quoteId;
  }

async function getById(quoteId) {
  return Quotes().where('id', quoteId).first();
}

module.exports = {
    add,
    getById
  };