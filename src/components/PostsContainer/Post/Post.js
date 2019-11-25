import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  let link = `posts/${props.postData._id}`;
  return (
    <div className="profile-your-posts">
      <Link to={link}>{props.postData.title}</Link>
    </div>
  );
};

export default Post;
