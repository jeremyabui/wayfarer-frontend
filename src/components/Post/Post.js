import React from 'react';

const Post = (props) => {
  return (
    <>
      <a href="/">{props.postData.title}</a>
    </>
  )
};

export default Post;
