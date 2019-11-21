import React from 'react';
import axios from 'axios';

import Post from '../components/Post/Post';

class PostsContainer extends React.Component {
  state = {
    posts: ['bruh', 'are you serious'],
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        console.log(res)
        this.setState({
          posts: res.data.data
        })
        console.log(this.state.posts)
      })
      .catch((err) => console.log(err));
  }

  displayPosts = (posts) => {
    return posts.map((index) => {
      return (
        <Post key={index.id} postData={index} />
      )
    })
  };
  
  // displayPosts = posts => {
  //   const userId = localStorage.getItem('uid')
  //   if (this.props.profile) {
  //     posts = posts.filter(post => {
  //       return console.log(this.props.profile._id)
  //     })
  //   }
  //   return posts.map(index => {
  //     return (
  //     <Post key={index._id} postData={index} />
  //     )
  //   })
  // }

  render() {
    return (
      <>
      </>
    )
  }
}

export default PostsContainer;