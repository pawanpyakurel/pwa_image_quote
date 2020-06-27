import React from 'react';
import { connect } from 'react-redux';

//custom components
import { Quote } from '../Quote';

//styles
import { CardWrapper } from './Card.styles';

const Card = (props) => {
  console.log(props.imageQuote, 'image quote in the card');

  return (
    <CardWrapper bg={props.imageQuote?.image}>
      <div className="CardImage">
        <Quote
          author={props.imageQuote?.author}
          quote={props.imageQuote?.quote}
        />
      </div>
      {/* <img src={props.imageQuote} alt={'hello'} /> */}
    </CardWrapper>
  );
};

const mapStateToProps = (state) => ({
  imageQuote: state.randomImages.imageQuote,
});

export default connect(mapStateToProps)(Card);
