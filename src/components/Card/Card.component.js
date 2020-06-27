import React from 'react';

//custom components
import { Quote } from '../Quote';

//styles
import { CardWrapper } from './Card.styles';

const Card = ({ imageQuote }) => {
  return (
    <CardWrapper bg={imageQuote?.image}>
      <div className="CardImage">
        <Quote author={imageQuote?.author} quote={imageQuote?.quote} />
      </div>
      {/* <img src={imageQuote} alt={'hello'} /> */}
    </CardWrapper>
  );
};

export default Card;
