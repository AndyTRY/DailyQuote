import { Request, Response } from 'express';
import  Quotes from '../db/quotes';

const getById = async (req: Request, res: Response) => {
  try {
    const quoteId = Number(req.params.id);
    const quote = await Quotes.getById(quoteId);
    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }
    return res.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const QuoteController = {
  getById,
};

export default QuoteController;