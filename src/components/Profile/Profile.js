import React from 'react';

class Profile extends React.Component {
  state = {
    profilePosts: [],
  };

  render() {
    return (
      <div className="container">
        <h2>A SAHHH, {this.props.profile.name}</h2>
        <h3>YOUR POSTS</h3>
        {/* <p>{this.props.profile.posts[0].title}</p> */}
      </div>
    )
  }
};

export default Profile;