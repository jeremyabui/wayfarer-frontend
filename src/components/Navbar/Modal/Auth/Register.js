import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'



class Register extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res)
      this.setState({
        name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
      });
      document.getElementById('exampleModal').style.display = 'none';
      document.getElementsByClassName('modal-backdrop')[0].remove()
      this.props.history.push('/login');
    })
    .catch((err) => console.log(err))
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="Username" name="username" value={this.state.username} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
          </div>
          <button className="btn btn-primary float-right" type="submit" >Register</button>
        </form>
      </>
    )
  }
};

export default withRouter(Register);