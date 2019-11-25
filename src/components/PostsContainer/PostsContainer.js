import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [],
  };

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post._id} postData={post} />
      )
    })
  };

  render() {
    return (
      <>
        {this.displayPosts(this.props.posts)}
      </>
    )
  }
}

export default PostsContainer;