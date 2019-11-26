import React from "react";
import axios from "axios";
import video2 from "./assets/video2.mp4";

import Profile from "./Profile/Profile";
import PostsContainer from "../PostsContainer/PostsContainer";

class ProfileContainer extends React.Component {
  state = {
    loaded: false,
    profile: {}
  };

  componentDidMount() {
    // grabs session user from local storage
    const userId = localStorage.getItem("uid");
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/${userId}`, {
        withCredentials: true
      })
      .then(res => {
        this.setState({
          profile: res.data.data,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  // Method to Update Profile
  // After API Call, you will get updated profile in response
  // SetState with updated profile, which will rerender the profile component

  handleUpdate = (event, updatedState) => {
    event.preventDefault();
    const userId = localStorage.getItem("uid");
    const data = new FormData();
    data.append("file", this.state.profilePhoto);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/auth/update/${userId}`,
        updatedState,
        {
          withCredentials: true
        }
      )
      .then(res => {
        console.log(res);
        console.log(this.state.profile);
        this.setState({
          profile: res.data.data
        });
        // const userId = localStorage.getItem('uid')
        document.getElementById("exampleModalPro").style.display = "none";
        document.getElementsByClassName("modal-backdrop")[0].remove();
        // window.location.reload()
        // this.props.history.push('/profile')
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <video
          className="video-background"
          autoPlay={true}
          loop={true}
          src={video2}
        ></video>
        {/* <img className="profile-img-background" src={img1} /> */}
        <div className="profile-container">
          {this.state.loaded && (
            <Profile
              profile={this.state.profile}
              handleUpdate={this.handleUpdate}
            />
          )}
          <div>
            {this.state.loaded && (
              <PostsContainer posts={this.state.profile.posts} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ProfileContainer;
