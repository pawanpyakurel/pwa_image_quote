import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//custom components
import Home from './containers/Home';
import { Spinner } from './components/Spinner';
import { getRandomImage } from './redux/actions/getRandomImageAction';

//styles
import GlobalStyle from './App.styles';

const App = (props) => {
  //hooks
  const [isLoading, setisLoading] = useState(true);
  const [isLoadQuote, setisLoadQuote] = useState(false);

  //getting Random Image and Quote
  useEffect(() => {
    let intervalTime = setInterval(() => calculateQuoteChangeTime(), 1000); //calculating interval in every 1 miniut
    const lastVisitStatus =
      Date.now() - props.imageQuote?.lastVisit >= 1000 * 60 * 60; //checking whether last visit is >= 1hr or nit

    function getRandomImageQuote() {
      if (!!!props.imageQuote || !!isLoadQuote || !!lastVisitStatus) {
        props.getRandomImage();
      }
    }
    getRandomImageQuote();
    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setisLoading(false); //After 2 second, set loding false
    }, 2000);
  }, [isLoading]);

  const calculateQuoteChangeTime = () => {
    if (Date.now() % (1000 * 60 * 60) <= 1000) {
      setisLoadQuote(true);
    } else {
      setisLoadQuote(false);
    }
  };
  console.log(props.imageQuote, 'imageQuote');

  return (
    <>
      <GlobalStyle />
      {!!(props.fetching || isLoading) ? <Spinner /> : <Home />}
    </>
  );
};

const mapStateToProps = (state) => ({
  imageQuote: state.randomImages.imageQuote,
  fetching: state.randomImages.fetching,
});

export default connect(mapStateToProps, {
  getRandomImage,
})(App);
