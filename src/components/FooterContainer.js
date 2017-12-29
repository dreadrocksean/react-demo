import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './footers/Footer';
import Footer1 from './footers/Footer1';
import Footer2 from './footers/Footer2';
import Footer3 from './footers/Footer3';

import '../styles/Footer.css';


class FooterContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Footer}/>
        <Route path='/render1' component={Footer1}/>
        <Route path='/render2' component={Footer2}/>
        <Route path='/render3' component={Footer1}/>
      </Switch>
    );
  }
}

export default FooterContainer;