import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: this.props.postDetails,
      loaded: true,
    })
  }

  displayPosts = (posts) => {
    console.log(posts)
    return posts.map((post) => {
      return (
        // Profile Posts
        <Post key={post._id} postData={post} />
        // <Post key={this.props.postDetails._id} postData={post} />
      )
    })
  };

  render() {
    console.log(this.props.postDetails)
    // let cityPosts = this.props.postDetails.slice()
    return (
      <>
        {/* For the profile posts */}
        {this.displayPosts(this.props.posts)}
        {/* {this.state.loaded && this.displayPosts(cityPosts)} */}
      </>
    )
  }
}

export default PostsContainer;