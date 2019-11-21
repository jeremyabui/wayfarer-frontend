import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h2>What's up, {props.profile.name}</h2>
    </div>
  )
};

export default Profile;