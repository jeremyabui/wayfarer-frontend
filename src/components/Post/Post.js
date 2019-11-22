import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Post = (props) => {
  let link = `posts/${props.postData._id}`;
  return (
    <>
      <h3>YOUR POSTS</h3>
      <Link to={link}>{props.postData.title}</Link>
    </>
  )
};

export default Post;
