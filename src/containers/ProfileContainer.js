import React from 'react';
import axios from 'axios';

import Profile from '../components/Profile/Profile';
import PostsContainer from './PostsContainer';

class ProfileContainer extends React.Component {
  state = {
    loaded: false,
    profile: {},
  };

  componentDidMount() {
    // console.log(localStorage.getItem('uid'));
    // grabs session user from local storage
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/auth/${userId}`, {
      withCredentials: true,
    })
      .then((res) => {
        this.setState({
          profile: res.data.data,
          loaded: true,
        })
      })
      .catch((err) => console.log(err))
  };

  render() {
    return (
      <div className="container">
        {this.state.loaded && <Profile profile={this.state.profile} />}
        {this.state.loaded && <PostsContainer profile={this.state.profile} posts={this.state.profile.posts} /> }
      </div>
    )
  }
}

export default ProfileContainer;