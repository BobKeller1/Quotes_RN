import { Quote } from "../entities/Quote";
import { quoteResponse } from "../gateway";

export const convertQuotesToQuotesList = (quotes: quoteResponse): Quote[] =>
  Object.entries(quotes).map(
    ([name, { id, highestBid, last, percentChange }]) => ({
      id,
      name,
      highestBid,
      last,
      percentChange,
    })
  );
