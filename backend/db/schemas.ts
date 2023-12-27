export interface Quote {
    id: number;
    quote: string;
    author: string;
}

export interface QuoteOfTheDay {
    date: Date;
    quoteId: number;
}