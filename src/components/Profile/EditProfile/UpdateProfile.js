import React from 'react';
import axios from 'axios';



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

  handleSubmit = (event) => {
    event.preventDefault()
    const userId = localStorage.getItem('uid')
    // const data = new FormData() 
    // data.append('file', this.state.profilePhoto)
    axios.put(`${process.env.REACT_APP_API_URL}/auth/update/${userId}`, this.state, {
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
      this.setState({
        name: '',
        username: '',
        currentCity: '',
      })
    })
    .catch((err) => console.log(err))
}


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
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

export default UpdateProfile;