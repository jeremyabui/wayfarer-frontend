import React from 'react';
import axios from 'axios';

import Profile from '../components/Profile/Profile';

class ProfileContainer extends React.Component {
  state = {
    profile: {},
  };

  componentDidMount() {
    console.log(localStorage.getItem('uid'));
    // grabs session user from local storage
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
  };

  render() {
    return (
      <>
        {this.state.profile && <Profile profile={this.state.profile} />}
      </>
    )
  }
}

export default ProfileContainer;