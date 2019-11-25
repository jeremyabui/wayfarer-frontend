import React from 'react';
import {withRouter} from 'react-router-dom'

class UpdateProfile extends React.Component {
  state = {
    name: '',
    username: '',
    currentCity: '',
    // profilePhoto: null,
  }

  handleChange = (event) => {
    // console.log(event.target.files[0])
    this.setState({
      [event.target.name]: event.target.value,
      // profilePhoto: event.target.files[0],
      // loaded: 0,
    })
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={(event) => this.props.handleUpdate(event, this.state)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
          </div>
          <div className="form-group">
            <label htmlFor="currentCity">Current City</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
          </div>
          {/* <div className="form-group">
            <label htmlFor="profilePhoto">Profile Photo</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="file" id="profilePhoto" name="profilePhoto"/>
          </div> */}
          <button type="submit" className="btn btn-success m-l">save</button> 
        </form>
      </div>
    )
  }
};

export default withRouter(UpdateProfile);