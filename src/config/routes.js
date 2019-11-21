import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Navbar/Modal/Auth/Register';
import Login from '../components/Navbar/Modal/Auth/Login';
import ProfileContainer from '../containers/ProfileContainer';

export default ({currentUser, setCurrentUser}) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route    path='/register' component={Register} />
    <Route  path='/login' render={ () => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
    <Route path='/register' component={Register} />
    <Route path='/login' render={() => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
    <Route path='/profile' component={ProfileContainer} />
  </Switch>
);
