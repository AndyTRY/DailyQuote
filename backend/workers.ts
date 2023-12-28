import cron from 'node-cron';
import updateQuoteOfTheDay from 'workers/quoteUpdate';
import {runJob} from '@utils/workers'













console.log("Worker service started")

// Update QuoteOfTheDay every day at 11pm
cron.schedule('0 23 * * *', () => runJob('updateQuoteOfTheDay', updateQuoteOfTheDay));

// Print Hello Every 5 Seconds
cron.schedule('*/5 * * * * *', () => runJob('print Hello task', () => console.log("HELLO")));








