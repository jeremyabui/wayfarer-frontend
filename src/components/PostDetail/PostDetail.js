import React from 'react';

const PostDetail = (props) => {
  console.log(props.title);
  return(
    <>
    <h3 className="post-detail-title">{props.postDetail.title}</h3>
    <h4 className="post-detail-author">{props.postDetail.author.username}</h4>
    <p>{props.postDetail.body}</p>
    </>
  )
}

export default PostDetail;