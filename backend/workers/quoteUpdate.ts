import  Quotes from '@db/quotes';

function calculateNextDay() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
  
    return nextDay
}


async function sampleRandomQuoteId() {
    const randomQuote = await Quotes.getRandomQuote()
    return randomQuote ? randomQuote.id : -1;
}

async function updateQuoteOfTheDay() {
    const tomorrow = calculateNextDay()
    const randomQuoteId = await sampleRandomQuoteId()

    if (randomQuoteId == -1) return

    Quotes.setQuoteOfTheDay(randomQuoteId, tomorrow)
}


export default updateQuoteOfTheDay

