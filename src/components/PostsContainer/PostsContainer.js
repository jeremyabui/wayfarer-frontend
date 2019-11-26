import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';
import axios from 'axios';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [...this.props.posts],
    selectedPost: '',
  };

  handlePostEdit = (event, updatedPost) => {
    console.log('calling edit')
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
        // document.getElementById(`exampleModalPost${postId}`).style.display = 'none';
        // document.getElementsByClassName('modal-backdrop')[0].remove()
        // document.getElementById(`deletePostModal${postId}`).setAttribute('data-dismiss','modal');
      })
      .catch((err) => console.log(err));
  };

  deletePost = (event, deletedPost) => {
    let postId =`${deletedPost.id}`
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/deletePost/${postId}`, { withCredentials: true })
    .then((res) => {
      console.log(res)
      const filtered = this.state.posts.filter(post => {
        if(post._id !== res.data.data._id) {
          return post
        }
      })
      this.setState({
        posts: [...filtered]
      })
      // document.getElementsByClassName('modal-backdrop')[0].remove();
      // document.getElementById(`deletePostModal${postId}`).setAttribute('data-dismiss','modal');
    })
    .catch((err) => console.log(err));
  }

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post._id} postData={post} handlePostEdit={this.handlePostEdit} deletePost={this.deletePost}/>
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