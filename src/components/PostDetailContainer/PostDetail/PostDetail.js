import React from "react";

const PostDetail = props => {
  console.log(props);
  return (
    <>
<<<<<<< HEAD:src/components/PostDetail/PostDetail.js
    {/* <h4>TEST TExT</h4> */}
      {/* <h3 className="post-detail-title">{props.postDetail.title}</h3>
      <h4 className="post-detail-author">{props.postDetail.author}</h4>
      <p>{props.postDetail.body}</p> */}
      <h3 className="post-detail-title">{props.body}</h3>
=======
      <h3 className="post-detail-title">{props.postDetail.title}</h3>
      <h4 className="post-detail-author">{props.postDetail.author.username}</h4>
      <p>{props.postDetail.body}</p>
>>>>>>> submaster:src/components/PostDetailContainer/PostDetail/PostDetail.js
    </>
  );
};

export default PostDetail;
