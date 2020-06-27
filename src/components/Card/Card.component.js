import React from 'react';

//custom components
import { Quote } from '../Quote';

//styles
import { CardWrapper } from './Card.styles';

const Card = () => {
  return (
    <CardWrapper
      bg={
        'https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400'
      }
    >
      <div className="CardImage">
        <Quote />
      </div>
    </CardWrapper>
  );
};

export default Card;
