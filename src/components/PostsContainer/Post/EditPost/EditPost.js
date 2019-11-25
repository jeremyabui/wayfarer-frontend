import React from 'react';

class EditPost extends React.Component {
  state = {
    title: '',
    body: '',
    id: this.props.postData._id,
    author: this.props.postData.author
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={(event) => this.props.handlePostEdit(event, this.state)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="post-title" placeholder="tacky title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea onChange={this.handleChange} className="form-control" id="post-body" rows="3" name="body"></textarea>
          </div>
          <button type="submit" className="btn btn-primary m-l">Save</button>
        </form>
      </div>
    )
  }
}

export default EditPost;