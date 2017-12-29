import React, { Component } from 'react';

import '../styles/App.css';
import HeaderContainer from './HeaderContainer';
import Nav from './Nav';
import MainContainer from './MainContainer';
import AdContainer from './AdContainer';
import FooterContainer from './FooterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <MainContainer />
        <AdContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
