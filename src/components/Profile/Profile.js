import React from 'react';

class Profile extends React.Component {
  state = {
    profilePosts: [],
  };

  render() {
    return (
      <div className="container">
        <h2>A SAHHH, {this.props.profile.name}</h2>
        <p></p>
      </div>
    )
  }
};

export default Profile;