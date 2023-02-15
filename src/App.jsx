import React from 'react';
import { Header } from "./layout/Header";
import { Footer } from './layout/Footer';
import { MainContainer } from './layout/MainContainer';

class App extends React.Component {
  state = {
    };
  render() {
    return(
      <>
        <Header />
        <MainContainer />
        <Footer />
      </>
    )
  }
}

export default App;
