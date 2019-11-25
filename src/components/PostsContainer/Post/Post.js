import React from "react";
import { Link } from "react-router-dom";
import "../../Profile/Profile.css";

import ConfirmDelete from './ConfirmDelete/ConfirmDelete'

const Post = props => {
  let link = `posts/${props.postData._id}`;
  return (
    <div className="profile-posts-container" id={props.postData._id} onClick={props.setSelectedPost}>
      <hr/>
      <Link className="profile-posts-content" to={link}>
        {props.postData.title}
      </Link>

      {/* <Link data-toggle="modal" data-target="#exampleModal" to='/deletePost'>Delete Post?</Link> */}
       {/* <ConfirmDelete /> */}
      
      <button onClick={props.deletePost} id={props.postData._id}>Delete Post</button>

      <hr />
    </div>
  );
};

export default Post;
