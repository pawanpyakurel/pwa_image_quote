const mergeQuoteImage = (randomQuote) => {
  randomQuote.image = 'https://source.unsplash.com/random/1000x600';
  randomQuote.lastVisit = Date.now(); //storing last visit
  console.log(Date.now(), 'Random image Data');
  return randomQuote;
};

// console.log(mergeQuoteImage, 'Random image Data');
export default mergeQuoteImage;
