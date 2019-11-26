import React from 'react';
// import axios from 'axios';

import Post from './Post/Post';
import axios from 'axios';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [],
    selectedPost: '',
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
        document.getElementById('exampleModalPost').style.display = 'none';
        document.getElementsByClassName('modal-backdrop')[0].remove()
        this.props.history.push('/cities');
      })
      .catch((err) => console.log(err));
  };

  deletePost = (event, deletedPost) => {
    let postId =`${deletedPost.id}`
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/deletePost/${postId}`, deletedPost, { withCredentials: true })
    .then((res) => {
      console.log(res)
      document.getElementById('deletePostModal').style.display = 'none';
      document.getElementsByClassName('modal-backdrop')[0].remove()
      this.props.history.push('/cities');
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

    return (
      <>
      <div className="row">
         {/* For the profile posts */}
        {this.displayPosts(this.props.posts)}
        {/* {this.state.loaded && this.displayPosts(cityPosts)} */}
      </div>
      </>
    )
  }
}

export default PostsContainer;