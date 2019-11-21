import React from 'react';


class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  }

  render() {
    return (
      <>
        <h4 className="mb-3">Register</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
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
          <button className="btn btn-primary float-right" type="submit">Register</button>
        </form>
      </>
    )
  }
};

export default Register;