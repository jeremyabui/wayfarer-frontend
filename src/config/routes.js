import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Navbar/Modal/Auth/Register';
import Login from '../components/Navbar/Modal/Auth/Login';

export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route    path='/register' component={Register} />
    <Route  path='/Login' render={ () => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
  </Switch>
);