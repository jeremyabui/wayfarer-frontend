import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from './Modal/Auth/Register';

const Navbar = () => {
  return (
    <section>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Expand at md</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" data-toggle="modal" data-target="#exampleModal" to='/register'>Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Register */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            < Register />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
};

export default Navbar;