import { tryGetThrowA, tryThrowA } from 'utils/tryCatch';
import { Quotes as QuotesModel, QuoteOfTheDay as QuoteOfTheDayModel } from './db';
import { Quote, QuoteOfTheDay } from './schemas';


const Quotes: {
  // All fuctions can throw => Internal Error with DB
  add: (quote: string, author: string) => Promise<number>;
  getById: (quoteId: number) => Promise<Quote | undefined>;
  getRandomQuote() : Promise<Quote | undefined>;
  getQuoteOfTheDay(): Promise<Quote | string>;
  setQuoteOfTheDay(quoteId: number, date: Date): Promise<Date>;

} = {
  async add(quote: string, author: string): Promise<number> {
    const [quoteId] = await tryGetThrowA(() => QuotesModel().insert({ quote, author }));
    return quoteId;
  },

  async getById(quoteId: number): Promise<Quote | undefined> {
    return await tryGetThrowA(() => QuotesModel().where('id', quoteId).first());
  },

  async getRandomQuote() : Promise<Quote | undefined> {
    return await tryGetThrowA(() => QuotesModel().select('id').orderByRaw('RANDOM()').limit(1).first());
  },



  async setQuoteOfTheDay(quoteId: number, date: Date): Promise<Date> {
    const formattedDate = date.toISOString().split('T')[0];
    const existingRecord = await tryGetThrowA(() => QuoteOfTheDayModel().where('date', formattedDate).first());

    if (existingRecord) await tryThrowA(() => QuoteOfTheDayModel().where('date', formattedDate).update({ quoteId }));
    else                await tryThrowA(() => QuoteOfTheDayModel().insert({ date: formattedDate, quoteId }));
    
    return date;
  },


  async getQuoteOfTheDay(): Promise<Quote | string> {
    const today = new Date().toISOString().split('T')[0];
    const quoteOfTheDayIdRecord = await tryGetThrowA(() => QuoteOfTheDayModel().where('date', today).first());

    if (!quoteOfTheDayIdRecord) return "No quote of the day or not yet determined";

    return await tryGetThrowA(() => QuotesModel().where('id', quoteOfTheDayIdRecord.quoteId).first())
  }


};



export default Quotes;