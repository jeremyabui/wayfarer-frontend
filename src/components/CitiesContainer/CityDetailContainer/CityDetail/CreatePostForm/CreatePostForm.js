import React from "react";
import axios from "axios";

class CreatePostForm extends React.Component {
  state = {
    author: localStorage.getItem("uid"),
    city: "",
    title: "",
    body: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts/newpost`, this.state, {
        withCredentials: true
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.setState({
      city: this.props.cityDetails._id
    });
  }

  componentDidUpdate = prevProps => {
    if (prevProps.cityDetails !== this.props.cityDetails) {
      this.setState({
        city: this.props.cityDetails._id
      });
    }
  };

  render() {
    console.log(this.props.cityDetails);
    return (
      <>
        <button
          type="button"
          id="register"
          className="btn btn-info"
          data-toggle="modal"
          data-target="#createPostForm"
        >
          Create Post
        </button>
        <div
          className="modal fade"
          id="createPostForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Post
                </h5>
                <button
                  type="button"
                  className="close btn btn-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body"></div>
              <form onSubmit={event => this.handleSubmit(event, this.state)}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control form-control-lg"
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <textarea
                    className="form-control"
                    id="body"
                    name="body"
                    rows="3"
                    onChange={this.handleChange}
                    value={this.state.body}
                  ></textarea>
                </div>
                <button className="btn btn-primary float-right" type="submit">
                  Create Post
                </button>
                </div>
                <div className="modal-body"></div>
                  <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        onChange={this.handleChange}
                        className="form-control form-control-lg"
                        type="text"
                        id="title"
                        name="title"
                        value={this.state.title}
                      />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleChange} value={this.state.body}></textarea>
                      </div>
                    <button className="btn btn-primary float-right" type="submit">
                    Create Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePostForm;
