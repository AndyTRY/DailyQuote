import { Quotes as QuotesModel, QuoteOfTheDay as QuoteOfTheDayModel } from './db';
import { Quote } from './schemas';


const Quotes: {
  // All fuctions can throw => Internal Error with DB
  add: (quote: string, author: string) => Promise<number>;
  getById: (quoteId: number) => Promise<Quote | undefined>;
  getRandomQuote() : Promise<Quote | undefined>;
  getQuoteOfTheDay(): Promise<Quote | string>;
  setQuoteOfTheDay(quoteId: number, date: Date): Promise<Date>;

} = {
  async add(quote: string, author: string): Promise<number> {
    const [quoteId] = await QuotesModel().insert({ quote, author });
    return quoteId;
  },

  async getById(quoteId: number): Promise<Quote | undefined> {
    return await QuotesModel().where('id', quoteId).first();
  },

  async getRandomQuote() : Promise<Quote | undefined> {
    return await QuotesModel().select('id').orderByRaw('RANDOM()').limit(1).first();
  },



  async setQuoteOfTheDay(quoteId: number, date: Date): Promise<Date> {
    const formattedDate = date.toISOString().split('T')[0];
    const existingRecord = await QuoteOfTheDayModel().where('date', formattedDate).first();

    if (existingRecord)  await QuoteOfTheDayModel().where('date', formattedDate).update({ quoteId });
    else                 await QuoteOfTheDayModel().insert({ date: formattedDate, quoteId });
    
    return date;
  },


  async getQuoteOfTheDay(): Promise<Quote | string> {
    const today = new Date().toISOString().split('T')[0];
    const quoteOfTheDayIdRecord = await QuoteOfTheDayModel().where('date', today).first();

    if (!quoteOfTheDayIdRecord) return "No quote of the day or not yet determined";

    return await QuotesModel().where('id', quoteOfTheDayIdRecord.quoteId).first()
  }


};



export default Quotes;