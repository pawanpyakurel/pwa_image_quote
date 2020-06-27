import React from 'react';

//custom components
import Home from './containers/Home';
//styles
import GlobalStyle from './App.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
