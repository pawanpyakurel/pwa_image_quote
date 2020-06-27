import React from 'react';
import { connect } from 'react-redux';

//custom components
import { Card } from '../components/Card';
//styles
import { HomeWrapper } from './Home.styles';

const Home = ({ imageQuote }) => {
  return (
    <HomeWrapper>
      <Card imageQuote={imageQuote} />
    </HomeWrapper>
  );
};
const mapStateToProps = (state) => ({
  imageQuote: state.randomImages.imageQuote,
});

export default connect(mapStateToProps)(Home);
