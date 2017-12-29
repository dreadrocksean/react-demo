import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './headers/Header';
import Header1 from './headers/Header1';
import Header2 from './headers/Header2';
import Header3 from './headers/Header3';

const HeaderContainer = () => {
  return (
    <Switch>
      <Route exact path='/' component={Header}/>
      <Route path='/render1' component={Header1}/>
      <Route path='/render2' component={Header1}/>
      <Route path='/render3' component={Header2}/>
    </Switch>
  );
};

export default HeaderContainer;
