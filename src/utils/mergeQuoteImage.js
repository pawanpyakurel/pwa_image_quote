const mergeQuoteImage = (randomQuote) => {
  randomQuote.image = 'https://source.unsplash.com/random/1000x600';
  randomQuote.lastVisit = Date.now(); //storing last visit
  return randomQuote;
};

export default mergeQuoteImage;
