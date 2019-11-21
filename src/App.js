// External Modules
import React from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';

// CSS
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <h1>IT'S TIME TO SIN</h1>
    </>
  );
}

export default withRouter(App);
