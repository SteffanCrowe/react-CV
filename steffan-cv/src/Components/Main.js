import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import AutoConsult from '../Pages/AutoConsult';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/autoconsult' component={AutoConsult}></Route>
    </Switch>
  );
}

export default Main;