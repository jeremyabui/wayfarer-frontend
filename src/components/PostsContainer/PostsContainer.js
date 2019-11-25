import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';
import axios from 'axios';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [...this.props.posts],
  };

  handlePostEdit = (event, updatedPost) => {
    let postId = `${updatedPost.id}`
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}`, updatedPost, { withCredentials: true }
    )
      .then((res) => {
        console.log(res)
        const filtered = this.state.posts.filter(post => {
          if(post._id !== res.data.data._id) {
            return post
          }
        })
        this.setState({
          posts: [res.data.data,...filtered]
        })
      })
      .catch((err) => console.log(err));
  };

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.posts)
  //   if (prevProps.posts !== this.state.posts) {
  //     this.setState({
  //       posts: this.state.posts
  //     })
  //   }
  // }

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post._id} postData={post} handlePostEdit={this.handlePostEdit} />
      )
    })
  };

  render() {
    console.log(this.props.posts)
    return (
      <>
        {this.displayPosts(this.state.posts)}
      </>
    )
  }
}

export default PostsContainer;