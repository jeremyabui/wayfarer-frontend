import React from 'react';

const Post = (props) => {
  console.log(props)
  return (
    <>
      <a href="#">{props.postData.title}</a>
    </>
  )
};

export default Post;
