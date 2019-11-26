import React from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost/EditPost";
import "../../ProfileContainer/Profile.css";

import ConfirmDelete from './ConfirmDelete/ConfirmDelete'

const Post = props => {
  // console.log(props)
  let link = `posts/${props.postData._id}`;
  let postId = `${props.postData._id}`
  let postTitle = `${props.postData.title}`
  return (
    <div className="profile-posts-container" id={props.postData._id} onClick={props.setSelectedPost}>
      <hr/>
      <Link className="profile-posts-content" to={link}>
        {props.postData.title}
      </Link>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-toggle="modal"
        data-target={`#exampleModalPost${props.postData._id}`}
      >
        Edit
      </button>

      {/* Delete */}
      <button 
        type="button"
        className="btn btn-success btn-sm"
        data-toggle="modal"
        data-target={`#deletePostModal${props.postData._id}`}>
          Delete
      </button>

      {/* <!-- Edit Post Modal --> */}
      <div
        className="modal fade"
        id={`exampleModalPost${props.postData._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Post
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.postData && (
                <EditPost
                  handlePostEdit={props.handlePostEdit}
                  postData={props.postData}
                />
              )}
            </div>
          </div>
        </div>
        </div>

      {/* <!-- Delete Post Modal --> */}
      <div
        className="modal fade"
        id={`deletePostModal${props.postData._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="deletePostModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deletePostModalLabel">
              Delete "{postTitle}"?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.postData && (
                <ConfirmDelete
                  deletePost={props.deletePost}
                  postData={props.postData}
                />
              )}
            </div>
          </div>
        </div>
        </div>


      <hr />
    </div>
  );
};

export default Post;