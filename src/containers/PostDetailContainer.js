import React from 'react';
import axios from 'axios';

import PostDetail from '../components/PostDetail/PostDetail.js';

class PostDetailContainer extends React.Component {
  state = {
    postDetail: '',
    loaded: false,
  };

  componentDidMount() {
    const postId = document.location.href.split('/')[4];
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        this.setState({
          postDetail: res.data.data,
          loaded: true,
        })
        console.log(this.state.postDetail);
      })
      .catch((err) => console.log(err));
  };

  render() {
    
    return (
      <div className="container">
        <h2>POST DETAIL</h2>
        {/* Profile  */}
        {/* {this.state.loaded && <PostDetail posts={this.state.postDetail} /> } */}
        {this.state.loaded && <PostDetail postDetail={this.state.postDetail} /> }
      </div>
    ) 
  }
}

export default PostDetailContainer;