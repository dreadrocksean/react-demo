import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './mains/Main';
import Main1 from './mains/Main1';
import Main2 from './mains/Main2';
import Main3 from './mains/Main3';

class MainContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={null}/>
        <Route path='/render1' component={Main1}/>
        <Route path='/render2' component={Main1}/>
        <Route path='/render3' component={Main3}/>
      </Switch>
    );
  }
}

export default MainContainer;