import React from 'react';
import { Header } from "./layout/Header";
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

class App extends React.Component {
  state = {
    };
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
