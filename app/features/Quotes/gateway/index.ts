export type quoteResponse = {
  [key: string]: {
    id: number;
    last: string;
    lowestAsk: string;
    highestBid: string;
    percentChange: string;
    baseVolume: string;
    quoteVolume: string;
    isFrozen: string;
    postOnly: string;
    high24hr: string;
    low24hr: string;
  };
};

export const fetchQuoteListRequest = async (): Promise<quoteResponse> => {
  const quoteList = await fetch(
    "https://poloniex.com/public?command=returnTicker"
  );
  return await quoteList.json();
};
