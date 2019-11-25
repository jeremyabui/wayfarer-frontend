import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';
import axios from 'axios';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [],
  };

  handlePostEdit = (event, updatedPost) => {
    let postId = `${updatedPost.id}`
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}`, updatedPost, { withCredentials: true }
    )
      .then((res) => {
        console.log(res)
        this.setState({
          posts: this.props.posts
        })
      })
      .catch((err) => console.log(err));
  };

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post._id} postData={post} handlePostEdit={this.handlePostEdit} />
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