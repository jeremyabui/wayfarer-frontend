import React from 'react';

class Profile extends React.Component {
  state = {
    profilePosts: [],
  };

  // componentDidMount = () => {
  //   let profilePosts = [];
  //   this.props.profile.posts.forEach((post) => {
  //     profilePosts.push(post);
  //   })
  //   this.setState({
  //     profilePosts: profilePosts,
  //   });
  // };

  // getProfilePosts = () => {

  //   })
  // }

  render() {
    console.log(this.props.profile.posts)
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