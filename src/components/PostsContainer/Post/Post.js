import React from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost/EditPost";
import "../../ProfileContainer/Profile.css";

import ConfirmDelete from './ConfirmDelete/ConfirmDelete'

import './Post.css'

const Post = props => {
  // console.log(props)
  let link = `posts/${props.postData._id}`;
  let postId = `${props.postData._id}`
  let postTitle = `${props.postData.title}`
  return (
    <div className="col col-md-12 profile-posts-container" id={props.postData._id} onClick={props.setSelectedPost}>
      <div className="row  align-items-center">
        <div className="col col-md-9  align-items-center">
          <Link className="profile-posts-content" to={link}>
            {props.postData.title}
          </Link>
        </div>
        <div className="col col-md-3  align-items-center">
          <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button"
            className="btn btn-success btn-sm"
            data-toggle="modal"
            data-target="#exampleModalPost"
          >
            Edit
          </button>
          {/* Delete */}
          <button 
            type="button"
            className="btn btn-success btn-sm"
            data-toggle="modal"
            data-target="#deletePostModal">
              Delete
            </button>
          </div>
        </div>
      </div>

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
              Are you sure you want to delete "{postTitle}"?
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
