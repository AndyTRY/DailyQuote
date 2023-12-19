import { Quotes as QuotesModel } from './db';
import { Quote } from './schemas';

const Quotes: {
  add: (quote: string, author: string) => Promise<number>;
  getById: (quoteId: number) => Promise<Quote | undefined>;
  getTotalQuoteCount: () => Promise<number>;
} = {
  async add(quote: string, author: string): Promise<number> {
    const [quoteId] = await QuotesModel().insert({ quote, author });
    return quoteId;
  },

  async getById(quoteId: number): Promise<Quote | undefined> {
    return await QuotesModel().where('id', quoteId).first();
  },

  async getTotalQuoteCount(): Promise<number> {
    const countResult = await QuotesModel().count('* as totalCount').first();
    const totalCount: number = parseInt(countResult?.totalCount as string, 10) || 0;
    return totalCount;
  },
};

export default Quotes;