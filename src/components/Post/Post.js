import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <>
      <h3>YOUR POSTS</h3>
      {props.postData.title}
    </>
  )
};

export default Post;
