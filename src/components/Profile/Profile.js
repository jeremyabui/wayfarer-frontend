import React from 'react';
import UpdateProfile from '../Profile/EditProfile/UpdateProfile';

const Profile = (props) => {
    console.log(props.profile);
    const dateJoined = props.profile.createdAt;

    return (
      <div className="container">
        <h2>A SAHHH, {props.profile.name}</h2>
        <h5>Current City: {props.profile.currentCity}</h5>
        <h6>Date Joined: {dateJoined}</h6>

        {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalPro">
        Update Profile
      </button>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModalPro" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              < UpdateProfile />
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  };

export default Profile;