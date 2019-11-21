import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import ProfileContainer from '../containers/ProfileContainer';

export default (props) => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={ProfileContainer} />
    </Switch>
  )
};