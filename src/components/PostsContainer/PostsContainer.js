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

  setSelectedPost = (event) => {
    this.setState({
      selectedPost: event.target.id
    })
  }

  componentDidMount() {
    this.setState({
      posts: this.props.postDetails,
      loaded: true,
    })
  }

  deletePost = () => {
    // this.setState({
    //   selectedPost: event.target.id
    // })
    // .then(
      axios.delete(`${process.env.REACT_APP_API_URL}/posts/deletepost/${this.state.selectedPost}`)
      .then(res => {
        console.log(res);
        this.props.history.push('/profile')
        .catch(err => console.log(err))
      })
    // )
    // .catch(err => console.log(err))
  }

  displayPosts = (posts) => {
    // console.log(posts)
    return posts.map((post) => {
      return (
        // Profile Posts
        <Post key={post._id} postData={post} deletePost={this.deletePost} setSelectedPost={this.setSelectedPost}/>
        // <Post key={post._id} postData={post} deletePost={this.deletePost}/>
        // <Post key={this.props.postDetails._id} postData={post} />
      )
    })
  };



  render() {
    // console.log(this.props.postDetails)
    // console.log(process.env.REACT_APP_BASE_API)
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