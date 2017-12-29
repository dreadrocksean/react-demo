import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Advertisement from './Advertisement';

class MainContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path='/render3' component={Advertisement}/>
      </Switch>
    );
  }
}

export default MainContainer;