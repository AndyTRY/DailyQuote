import { Request, Response } from 'express';
import  Quotes from '@db/quotes';
import { tryGetThrowA } from '@serverUtils/tryCatch'

const getById = async (req: Request, res: Response) => {
  try {
    const quoteId = Number(req.params.id);
    const quote = await tryGetThrowA(() => Quotes.getById(quoteId), "Internal Error", 500);
    if (!quote) throw {status: 404, message: "Quote not found"}
      
    return res.json({ data: quote });

  } catch (error: any) {
    console.error(error.originalError || error.message);
    return res.status(error.status).json({ error: error.message });
  }
};

const getRandom = async (req: Request, res: Response) => {
  try {
    const quoteId = Number(req.params.id);
    const quote = await tryGetThrowA(() => Quotes.getById(quoteId), "Internal Error", 500);
    if (!quote) throw {status: 404, message: "Quote not found"}
      
    return res.json({ data: quote });

  } catch (error: any) {
    console.error(error.originalError || error.message);
    return res.status(error.status).json({ error: error.message });
  }
};

const QuoteController = {
  getById,
};

export default QuoteController;