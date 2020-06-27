import React from 'react';
import PropTypes from 'prop-types';

//styles
import { QuoteWrapper } from './Quote.styles';
const Quote = ({ author, quote }) => {
  return (
    <QuoteWrapper>
      <h1>{quote}</h1>
      <h4>&mdash; {author}</h4>
    </QuoteWrapper>
  );
};

Quote.propQuoteTypes = {
  author: PropTypes.string,
  quote: PropTypes.string,
};

export default Quote;
