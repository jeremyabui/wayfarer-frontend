import React from "react";
import { Link } from "react-router-dom";
import "../Profile/Profile.css";

const Post = props => {
  let link = `posts/${props.postData._id}`;
  return (
    <div className="profile-posts-container">
      <hr />
      <Link className="profile-posts-content" to={link}>
        {props.postData.title}
      </Link>
      <hr />
    </div>
  );
};

export default Post;
