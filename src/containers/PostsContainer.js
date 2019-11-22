import React from 'react';
import axios from 'axios';

import Post from '../components/Post/Post';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [],
  };

  displayPosts = (posts) => {
    return posts.map((index) => {
      return (
        <Post key={index.id} postData={index} />
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