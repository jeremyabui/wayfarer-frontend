// External Modules
import React from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

// CSS
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default withRouter(App);
