import React from 'react';

const Profile = (props) => {
    console.log(props.profile);
    const dateJoined = props.profile.createdAt;

    return (
      <div className="container">
        <h2>A SAHHH, {props.profile.name}</h2>
        <h5>Current City: {props.profile.currentCity}</h5>
        <h6>Date Joined: {dateJoined}</h6>
      </div>
    )
  };

export default Profile;